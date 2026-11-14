import { randomUUID } from 'node:crypto';
import { appendFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { AppServer, RpcError, type Notice } from './app-server.js';
import {
  atomicJson, checkpoint, digest, duration, evidence, item, lock, message, readJson,
  savedPhase, summaryName, validateSettings, type Checkpoint, type Item, type Settings, type Workspace,
} from './storage.js';

interface Model {
  model: string;
  id: string;
  isDefault: boolean;
  defaultReasoningEffort: string;
  supportedReasoningEfforts: { reasoningEffort: string }[];
}
interface Thread {
  id: string;
  status?: { type: string };
}
interface ThreadResult {
  thread: Thread;
  model: string;
  modelProvider: string;
  sandbox?: { type: string };
}
interface Goal {
  objective: string;
  status: string;
}
interface Turn {
  id: string;
  status?: string;
  error?: { message?: string } | null;
}
export interface RunRecord {
  id: string;
  mode: 'fresh' | 'continue';
  startedAt: string;
  endedAt?: string;
  elapsedMs?: number;
  endReason?: string;
  error?: string;
  settings: Settings;
  problemSha256: string;
  objective: string;
  startingCheckpoint: Checkpoint;
  endingCheckpoint?: Checkpoint;
  threadId?: string;
  modelProvider?: string;
  goalStatus?: string;
  summary?: string;
}
export interface Outcome {
  id: string;
  status: string;
  elapsedMs: number;
  runId?: string;
  summary?: string;
  detail?: string;
  failed?: boolean;
}

const objective = 'Resolve the problem in PROBLEM.md under its stated assumptions and acceptance criteria. Follow AGENTS.md and continue from state.json. Save evidence and checkpoints as you work. Check the saved candidate against the original statement and record the conclusion, verification report, and evidence links before setting DONE and completing the Goal. If a route stalls, test a repair or start a different route. At wrap-up, save the checkpoint, remaining gap, and next concrete step.';
const endOfGoal = new Set(['complete', 'paused', 'blocked', 'usageLimited', 'budgetLimited']);

export function settingsFor(ws: Workspace, problem: Item, overrides: Settings): Settings {
  const agent = overrides.agent ?? problem.config.agent ?? ws.config.agent ?? 'codex';
  const perItem: Settings = (problem.config.agent ?? ws.config.agent ?? 'codex') === agent ? problem.config : {};
  const defaults: Settings = (ws.config.agent ?? 'codex') === agent ? ws.config : {};
  const settings = {
    agent,
    executable: overrides.executable ?? perItem.executable ?? defaults.executable ?? 'codex',
    model: overrides.model ?? perItem.model ?? defaults.model,
    effort: overrides.effort ?? perItem.effort ?? defaults.effort,
    quota: overrides.quota ?? problem.config.quota ?? ws.config.quota ?? '3h',
  };
  validateSettings(settings);
  return settings;
}

export function runs(problem: Item): RunRecord[] {
  const root = join(problem.dir, 'runs');
  let ids;
  try {
    ids = readdirSync(root, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
  return ids.filter(entry => entry.isDirectory())
    .map(entry => readJson<RunRecord>(join(root, entry.name, 'run.json')))
    .sort((a, b) => b.startedAt.localeCompare(a.startedAt) || b.id.localeCompare(a.id));
}

function missingThread(error: unknown): boolean {
  return error instanceof RpcError &&
    (/thread not found|no rollout found|unknown thread|no thread found|modelProviderMismatch/i.test(error.message) ||
      (error.data as { type?: string } | undefined)?.type === 'modelProviderMismatch');
}

export async function runItem(
  ws: Workspace, id: string, overrides: Settings, fresh: boolean, signal: AbortSignal,
): Promise<Outcome> {
  const unlock = lock(ws, id);
  const started = performance.now();
  const startTime = Date.now();
  const elapsed = () => Math.round(performance.now() - started);
  try {
    const problem = item(ws, id);
    if (problem.config.archived) throw new Error(`Problem "${id}" is archived.`);
    const settings = settingsFor(ws, problem, overrides);
    const problemText = readFileSync(join(problem.dir, 'PROBLEM.md'), 'utf8');
    if (!problemText.trim()) throw new Error('PROBLEM.md is blank.');
    const problemSha256 = digest(problemText);
    const previous = checkpoint(problem);
    const phase = fresh || previous.problemSha256 !== problemSha256 ? 'PLAN' : savedPhase(problem, previous);
    if (phase === 'DONE') return { id, status: 'already done', elapsedMs: elapsed(), detail: previous.conclusion };
    if (signal.aborted) return { id, status: 'cancelled', elapsedMs: elapsed(), failed: true };

    const pastRuns = fresh ? [] : runs(problem);
    const runId = `${new Date(startTime).toISOString().replace(/[:.]/g, '-')}-${randomUUID().slice(0, 8)}`;
    const relativeRun = `runs/${runId}`;
    const runDir = join(problem.dir, relativeRun);
    const summary = `${relativeRun}/${summaryName}`;
    const runPath = join(runDir, 'run.json');
    const statePath = join(problem.dir, 'state.json');
    const eventPath = join(runDir, 'events.jsonl');
    const checkpointStart: Checkpoint = {
      ...(phase === previous.phase && !fresh && previous.problemSha256 === problemSha256 ? previous : {}),
      phase, problemSha256, runId, updatedAt: new Date(startTime).toISOString(),
      ...(phase === 'VERIFY' && previous.candidate ? { candidate: previous.candidate } : {}),
    };
    const record: RunRecord = {
      id: runId, mode: fresh ? 'fresh' : 'continue', startedAt: new Date(startTime).toISOString(),
      settings, problemSha256, objective, startingCheckpoint: checkpointStart,
    };
    mkdirSync(runDir, { recursive: true });
    atomicJson(runPath, record);
    const log = (type: string, data: object = {}) => {
      appendFileSync(eventPath, JSON.stringify({ at: new Date().toISOString(), type, ...data }) + '\n');
    };
    log('run.started', { id: runId, mode: record.mode, phase });

    const quota = duration(settings.quota!);
    const wrapAt = quota - Math.min(600_000, Math.round(quota * 0.15));
    const hardStop = quota + Math.min(60_000, Math.max(1000, Math.round(quota * 0.05)));
    const at = (offset: number) => new Date(startTime + offset).toISOString();
    const wrapPrompt = `Gacha is wrapping up run ${runId}. Save evidence, refresh INDEX.md for the artifacts saved in this run, and save the current state.json checkpoint. Write ${summary} with findings, remaining gaps, and the next concrete step. Stop substantive research now. Use DONE only for a result already verified against PROBLEM.md.`;
    const prompt = [
      `Run ID: ${runId}`, `Mode: ${record.mode}`, `Wrap-up begins: ${at(wrapAt)}`,
      `Run summary: ${summary}`, '',
      'Follow the research instructions in AGENTS.md. Start work now from state.json.',
      'For DONE, set state.json candidate, verification, and conclusion to item-relative paths of the saved files. Keep problemSha256 and runId on every checkpoint, and refresh updatedAt. Save the run summary before ending the Goal, including on successful completion.',
      '', 'Use the following launch copy of PROBLEM.md as the statement and acceptance criteria for this run.',
      '', problemText,
    ].join('\n');
    writeFileSync(join(runDir, 'prompt.md'), prompt);
    console.log(`[${id}] ${record.mode} run ${runId} (quota ${settings.quota})`);

    let server: AppServer | undefined;
    let threadId: string | undefined;
    let turnId: string | undefined;
    let lastTurn: Turn | undefined;
    const completedTurns = new Set<string>();
    let goalStatus: string | undefined;
    let idleSince = performance.now();
    let finishing = false;
    let finalTurnStarted = false;
    let settledAt: number | undefined;
    let declinedRequest: string | undefined;
    let lastCheckpoint: string | undefined;
    let checkpointProblem: string | undefined;
    let outcome = 'failed';
    let errorText: string | undefined;
    let ending: Checkpoint | undefined;

    function observe(): Checkpoint | undefined {
      try {
        const state = checkpoint(problem);
        if (state.runId !== runId || state.problemSha256 !== problemSha256) {
          throw new Error('state.json does not match this run and problem revision.');
        }
        const value = JSON.stringify(state);
        if (value !== lastCheckpoint) {
          log('research.checkpoint', { checkpoint: state });
          lastCheckpoint = value;
        }
        checkpointProblem = undefined;
        return state;
      } catch (error) {
        const detail = message(error);
        if (checkpointProblem !== detail) log('research.checkpoint_error', { detail });
        checkpointProblem = detail;
        return undefined;
      }
    }

    try {
      server = new AppServer(settings.executable!, problem.dir);
      const rpc = server;
      rpc.on('diagnostic', (text: string) => log('codex.stderr', { text }));
      rpc.on('serverRequest', (method: string) => {
        log('codex.request_declined', { method });
        declinedRequest = method;
      });
      rpc.on('notice', ({ method, params }: Notice) => {
        if (params?.threadId && params.threadId !== threadId) return;
        if (method === 'turn/started') {
          turnId = (params?.turn as Turn).id;
          declinedRequest = undefined;
          settledAt = undefined;
        } else if (method === 'turn/completed') {
          const turn = params?.turn as Turn;
          completedTurns.add(turn.id);
          if (turnId === turn.id) turnId = undefined;
          lastTurn = turn;
          idleSince = performance.now();
          observe();
        } else if (method === 'thread/goal/updated') {
          goalStatus = (params?.goal as Goal).status;
        } else if (method === 'thread/goal/cleared') {
          goalStatus = 'cleared';
        }
        if (method.startsWith('turn/') || method.startsWith('thread/goal/') ||
            method === 'item/completed' || method === 'error') {
          const value = params?.item as { type?: string; status?: string; id?: string } | undefined;
          log(method, value ? { threadId, turnId, item: { type: value.type, status: value.status, id: value.id } }
            : { params });
        }
      });

      async function request<T>(method: string, params: object, limit = 15_000): Promise<T> {
        if (signal.aborted && !finishing) throw new Error('Cancelled.');
        const remaining = Math.round(hardStop - elapsed());
        return rpc.request<T>(method, params, Math.max(1, Math.min(limit, remaining)));
      }
      await rpc.initialize(Math.max(1, Math.min(10_000, hardStop - elapsed())));
      const { config } = await request<{ config: {
        model?: string; model_provider?: string; model_reasoning_effort?: string; sandbox_mode?: string;
        default_permissions?: string; permissions?: unknown;
      } }>('config/read', { cwd: problem.dir });
      const models: Model[] = [];
      let cursor: string | null = null;
      do {
        const page: { data: Model[]; nextCursor: string | null } = await request('model/list', {
          limit: 100, cursor, includeHidden: Boolean(settings.model ?? config.model),
        });
        models.push(...page.data);
        if (page.nextCursor === cursor && cursor !== null) throw new Error('Codex returned a repeated model cursor.');
        cursor = page.nextCursor;
      } while (cursor);
      const requestedModel = settings.model ?? config.model;
      const model = requestedModel ? models.find(entry => entry.model === requestedModel || entry.id === requestedModel)
        : models.find(entry => entry.isDefault);
      if (!model) throw new Error(`Codex does not list the requested model: ${requestedModel ?? '(default)'}.`);
      const allowedEfforts = model.supportedReasoningEfforts.map(entry => entry.reasoningEffort);
      const configuredEffort = config.model_reasoning_effort;
      const effort = settings.effort ?? (configuredEffort && allowedEfforts.includes(configuredEffort)
        ? configuredEffort : model.defaultReasoningEffort);
      if (effort && !allowedEfforts.includes(effort)) {
        throw new Error(`Model "${model.model}" does not support effort "${effort}". Available: ${allowedEfforts.join(', ')}.`);
      }
      settings.model = model.model;
      settings.effort = effort;
      const provider = config.model_provider ?? 'openai';
      const old = pastRuns.find(entry => entry.threadId && entry.modelProvider === provider &&
        entry.settings?.model === model.model && entry.problemSha256 === problemSha256);
      const threadParams = {
        cwd: problem.dir, model: model.model,
        ...(!config.sandbox_mode && !config.default_permissions && !config.permissions ? { sandbox: 'workspace-write' } : {}),
      };
      let thread: ThreadResult | undefined;
      if (old?.threadId) {
        try {
          const { thread: saved } = await request<{ thread: Thread }>('thread/read', { threadId: old.threadId });
          if (saved.status?.type === 'active') {
            log('thread.resume_skipped', { reason: 'thread busy' });
          } else {
            const { goal } = await request<{ goal: Goal | null }>('thread/goal/get', { threadId: old.threadId });
            if (goal && (goal.status === 'active' || goal.objective !== old.objective)) {
              log('thread.resume_skipped', { reason: 'existing active or unrelated Goal' });
            } else {
              thread = await request('thread/resume', { ...threadParams, threadId: old.threadId, excludeTurns: true }, 60_000);
              threadId = thread!.thread.id;
              if (goal) await request('thread/goal/clear', { threadId });
            }
          }
        } catch (error) {
          if (!missingThread(error)) throw error;
          log('thread.resume_skipped', { reason: message(error) });
        }
      }
      thread ??= await request<ThreadResult>('thread/start', threadParams, 60_000);
      threadId = thread.thread.id;
      record.threadId = threadId;
      record.modelProvider = thread.modelProvider;
      atomicJson(runPath, record);

      // Create a paused Goal so native continuation cannot race the first turn.
      const goalParams = { threadId, origin: 'user' };
      await request('thread/goal/set', { ...goalParams, objective, status: 'paused' });
      goalStatus = 'paused';
      const getGoalStatus = () => goalStatus;
      atomicJson(statePath, checkpointStart);
      observe();
      const startTurn = async (text: string) => {
        const { turn } = await request<{ turn: Turn }>('turn/start', {
          threadId, cwd: problem.dir, model: settings.model, effort: settings.effort,
          input: [{ type: 'text', text }],
        });
        if (!completedTurns.has(turn.id)) turnId = turn.id;
        return turn;
      };
      await startTurn(prompt);
      // A very short first turn can already have completed the Goal.
      if (getGoalStatus() !== 'complete') {
        const { goal } = await request<{ goal: Goal }>('thread/goal/set', { ...goalParams, status: 'active' });
        goalStatus = goal.status;
      }

      for (;;) {
        if (rpc.failure) throw rpc.failure;
        const current = observe();
        if (signal.aborted) {
          outcome = 'cancelled';
          break;
        }
        if (elapsed() >= hardStop) {
          outcome = 'timeout';
          break;
        }
        if (!turnId && current && savedPhase(problem, current) === 'DONE') {
          outcome = 'done';
          break;
        }
        if (elapsed() >= wrapAt && !finishing && goalStatus !== 'complete') {
          finishing = true;
          console.log(`[${id}] Wrapping up`);
          log('run.wrap_up');
          if (goalStatus === 'active') {
            const { goal } = await request<{ goal: Goal }>('thread/goal/set', { threadId, status: 'paused', origin: 'automatic' });
            goalStatus = goal.status;
          }
          if (turnId) {
            try {
              await request('turn/steer', { threadId, expectedTurnId: turnId, input: [{ type: 'text', text: wrapPrompt }] });
              finalTurnStarted = true;
            } catch (error) {
              if (turnId && !(error instanceof RpcError && /no active|mismatch|turn id/i.test(error.message))) throw error;
              log('wrap_up.steer_missed', { detail: message(error) });
            }
          }
        }
        if (!turnId && finishing) {
          if (finalTurnStarted || evidence(problem.dir, summary)) {
            outcome = 'quota';
            break;
          }
          finalTurnStarted = true;
          await startTurn(wrapPrompt);
        }
        if (!turnId && !finishing && lastTurn) {
          if (goalStatus && endOfGoal.has(goalStatus)) {
            settledAt ??= performance.now();
            if (performance.now() - settledAt >= 1000) {
              outcome = goalStatus === 'complete' ? 'research open' : goalStatus;
              break;
            }
          } else if (performance.now() - idleSince >= 12_000) {
            const { goal } = await request<{ goal: Goal | null }>('thread/goal/get', { threadId });
            goalStatus = goal?.status;
            if (!turnId && (!goalStatus || goalStatus === 'active')) {
              if (declinedRequest && lastTurn.status !== 'completed') {
                outcome = 'needs input';
                errorText = `Codex requested an action that could not be answered unattended: ${declinedRequest}.`;
              } else {
                outcome = lastTurn.status === 'failed' ? 'failed' :
                  lastTurn.status === 'interrupted' ? 'interrupted' : 'goal stalled';
                errorText = lastTurn.error?.message;
              }
              break;
            }
          }
        }
        await delay(250);
      }
      if (lastTurn?.status === 'failed' && lastTurn.error?.message) errorText ??= lastTurn.error.message;
    } catch (error) {
      errorText = message(error);
      outcome = signal.aborted ? 'cancelled' : elapsed() >= hardStop ? 'timeout' : 'failed';
      log('run.error', { detail: errorText });
    } finally {
      if (server && threadId && goalStatus === 'active' && !server.failure) {
        try {
          const result = await server.request<{ goal: Goal }>('thread/goal/set', {
            threadId, status: 'paused', origin: 'automatic',
          }, 2000);
          goalStatus = result.goal.status;
        } catch (error) {
          log('run.pause_error', { detail: message(error) });
        }
      }
      if (server && threadId && turnId && !server.failure) {
        try {
          await server.request('turn/interrupt', { threadId, turnId }, 2000);
          for (let i = 0; i < 8 && turnId; i++) await delay(125);
        } catch (error) {
          log('run.interrupt_error', { detail: message(error) });
        }
      }
      try {
        await server?.close();
      } catch (error) {
        errorText ??= message(error);
        outcome = 'failed';
      }
      ending = lastCheckpoint ? observe() : undefined;
      if (ending && savedPhase(problem, ending) !== ending.phase) {
        errorText ??= `Incomplete evidence for ${ending.phase} checkpoint.`;
      }
      if (ending && savedPhase(problem, ending) === 'DONE' && outcome !== 'failed' && outcome !== 'cancelled') outcome = 'done';
      record.endedAt = new Date().toISOString();
      record.elapsedMs = elapsed();
      record.endReason = outcome;
      record.error = errorText ?? checkpointProblem;
      record.endingCheckpoint = ending;
      record.goalStatus = goalStatus;
      record.summary = evidence(problem.dir, summary) ? summary : undefined;
      atomicJson(runPath, record);
      log('run.ended', { outcome, elapsedMs: record.elapsedMs, summary: record.summary });
    }
    return {
      id, status: outcome, elapsedMs: record.elapsedMs!, runId, summary: record.summary,
      detail: [record.error, record.summary ? undefined : 'No run summary was saved.'].filter(Boolean).join(' ') || undefined,
      failed: !['done', 'research open', 'quota'].includes(outcome),
    };
  } finally {
    unlock();
  }
}

export async function batch(
  ws: Workspace, ids: string[], parallel: number, overrides: Settings, fresh: boolean, signal: AbortSignal,
): Promise<Outcome[]> {
  let next = 0;
  const outcomes: Outcome[] = [];
  async function worker() {
    while (next < ids.length && !signal.aborted) {
      const index = next++;
      const id = ids[index];
      try {
        outcomes[index] = await runItem(ws, id, overrides, fresh, signal);
      } catch (error) {
        outcomes[index] = { id, status: 'failed', elapsedMs: 0, detail: message(error), failed: true };
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(parallel, ids.length) }, worker));
  return outcomes.concat(ids.slice(next).map(id => ({ id, status: 'cancelled before start', elapsedMs: 0, failed: true })));
}
