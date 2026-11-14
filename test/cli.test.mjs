import assert from 'node:assert/strict';
import { execFile, spawn } from 'node:child_process';
import { chmod, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';

const exec = promisify(execFile);
const cli = fileURLToPath(new URL('../dist/cli.js', import.meta.url));
const gacha = (cwd, ...args) => exec(process.execPath, [cli, ...args], { cwd });
const json = async path => JSON.parse(await readFile(path, 'utf8'));

async function workspace(t) {
  const dir = await mkdtemp(join(tmpdir(), 'gacha-cli-test-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  await gacha(dir, 'init');
  return dir;
}

async function add(dir, id) {
  await gacha(dir, 'add', id, '--title', id, '--problem-text', 'Prove a simple fact.');
}

test('add imports files relative to invocation and rejects collisions', async t => {
  const dir = await workspace(t);
  const nested = join(dir, 'references');
  await mkdir(nested);
  const problem = '## 题面\n\n证明命题。\n';
  await writeFile(join(nested, 'problem.md'), problem);
  await gacha(nested, 'add', 'hydra', '--title=Hydra', '--problem-file=problem.md');
  assert.equal(await readFile(join(dir, 'hydra/PROBLEM.md'), 'utf8'), problem);
  assert.deepEqual(await json(join(dir, 'hydra/state.json')), { phase: 'PLAN' });
  assert.match(await readFile(join(dir, 'hydra/AGENTS.md'), 'utf8'), /experiments\//);
  await assert.rejects(gacha(dir, 'add', 'hydra', '--title', 'Duplicate', '--problem-text', 'x'), /Destination already exists/);
  await assert.rejects(gacha(dir, 'add', 'invalid', '--title', 'Conflict', '--problem-text', 'x', '--problem-file', 'x'), /Choose one/);
  assert.equal(await readFile(join(dir, 'hydra/PROBLEM.md'), 'utf8'), problem);
});

const fake = `#!/usr/bin/env node
const fs = require('node:fs');
const rl = require('node:readline').createInterface({ input: process.stdin });
const threadId = 'test-thread';
const notice = (method, params) => console.log(JSON.stringify({ method, params: { threadId, ...params } }));
const state = () => JSON.parse(fs.readFileSync('state.json', 'utf8'));
const checkpoint = (patch) => {
  fs.writeFileSync('state.tmp', JSON.stringify({ ...state(), ...patch }));
  fs.renameSync('state.tmp', 'state.json');
};
let turn = { id: 'test-turn', status: 'inProgress' };
let goal;
let resumed = false;
let starts = 0;
function complete(status) {
  notice('turn/completed', { turn: { ...turn, status } });
}
rl.on('line', line => {
  const { id, method, params } = JSON.parse(line);
  if (id === undefined) return;
  if (method === 'turn/start' || method === 'turn/steer') {
    fs.appendFileSync('test-inputs.jsonl', JSON.stringify({ method, text: params.input[0].text }) + '\\n');
  }
  const reply = result => console.log(JSON.stringify({ id, result }));
  if (method === 'initialize') reply({});
  else if (method === 'config/read') reply({ config: fs.existsSync('test-codex-config.json')
    ? JSON.parse(fs.readFileSync('test-codex-config.json', 'utf8')) : { model: 'mock' } });
  else if (method === 'model/list') reply({ nextCursor: null, data: [{
    model: 'mock', id: 'mock', isDefault: true, defaultReasoningEffort: 'high',
    supportedReasoningEfforts: [{ reasoningEffort: 'high' }],
  }] });
  else if (method === 'thread/start' || method === 'thread/resume') {
    resumed = method === 'thread/resume';
    const policy = fs.existsSync('test-resolved-policy.json')
      ? JSON.parse(fs.readFileSync('test-resolved-policy.json', 'utf8')) : {};
    fs.writeFileSync('test-thread-params.json', JSON.stringify(params));
    reply({ thread: { id: threadId }, model: 'mock', modelProvider: 'openai', ...policy });
  } else if (method === 'thread/read') reply({ thread: { id: threadId } });
  else if (method === 'thread/goal/get') reply({ goal: goal ?? { status: 'paused', objective: 'Previous objective' } });
  else if (method === 'thread/goal/clear') reply({});
  else if (method === 'thread/goal/set') {
    goal = { ...goal, objective: params.objective ?? goal?.objective, status: params.status };
    if (goal.status === 'active' && starts !== 1) throw new Error('Goal activated before the first turn');
    reply({ goal });
    notice('thread/goal/updated', { goal });
  } else if (method === 'turn/start') {
    starts++;
    reply({ turn });
    notice('turn/started', { turn });
    fs.writeFileSync('PLAN.md', 'Plan');
    checkpoint({ phase: 'RESEARCH' });
    if (process.cwd().endsWith('/slow')) return;
    setTimeout(() => {
      if (goal.status !== 'active') throw new Error('Goal inactive before continuation');
      complete('completed');
      turn = { id: 'continuation-turn', status: 'inProgress' };
      notice('turn/started', { turn });
    }, 200);
    setTimeout(() => {
      fs.writeFileSync('candidate.md', 'Candidate');
      checkpoint({ phase: 'VERIFY', candidate: 'candidate.md' });
    }, 400);
    setTimeout(() => {
      const summary = 'runs/' + state().runId + '/SUMMARY.md';
      for (const path of ['verify.md', 'result.md', summary]) fs.writeFileSync(path, 'Evidence');
      checkpoint({ phase: 'DONE', verification: 'verify.md', conclusion: 'result.md' });
      goal.status = 'complete';
      notice('thread/goal/updated', { goal });
      complete('completed');
    }, 800);
  } else if (method === 'turn/steer') {
    if (goal.status !== 'paused') throw new Error('Continuation was not paused');
    reply({ turnId: turn.id });
    fs.writeFileSync('runs/' + state().runId + '/SUMMARY.md', resumed ? 'Resumed and saved progress' : 'Saved progress');
    complete('completed');
  } else if (method === 'turn/interrupt') {
    reply({});
    complete('interrupted');
  } else {
    console.log(JSON.stringify({ id, error: { code: -32601, message: method } }));
  }
});
`;

async function mock(t, dir) {
  const path = join(dir, 'fake-codex.cjs');
  await writeFile(path, fake);
  await chmod(path, 0o755);
  t.after(() => rm(path, { force: true }));
  return path;
}

async function onlyRun(dir, id) {
  const root = join(dir, id, 'runs');
  const [run] = await readdir(root);
  const record = await json(join(root, run, 'run.json'));
  const events = (await readFile(join(root, run, 'events.jsonl'), 'utf8')).trim().split('\n').map(JSON.parse);
  return { record, events };
}

test('run drives a Goal, saves evidence and avoids re-running a finished revision', async t => {
  const dir = await workspace(t);
  const executable = await mock(t, dir);
  await add(dir, 'solved');
  const result = await gacha(dir, 'run', 'solved', '--executable', executable, '--quota', '10s');
  assert.match(result.stdout, /done in/);
  const { record, events } = await onlyRun(dir, 'solved');
  assert.equal(record.endReason, 'done');
  assert.equal(record.goalStatus, 'complete');
  assert.equal(record.startingCheckpoint.phase, 'PLAN');
  assert.equal(record.endingCheckpoint.phase, 'DONE');
  assert.deepEqual(events.filter(event => event.type === 'turn/started').map(event => event.params.turn.id),
    ['test-turn', 'continuation-turn']);
  assert.deepEqual(events.filter(event => event.type === 'research.checkpoint').map(event => event.checkpoint.phase),
    ['PLAN', 'RESEARCH', 'VERIFY', 'DONE']);
  assert.match((await gacha(dir, 'run', 'solved')).stdout, /already done/);
  assert.equal((await readdir(join(dir, 'solved/runs'))).length, 1);
});

test('wrap-up saves a resumable checkpoint and excludes concurrent writers', async t => {
  const dir = await workspace(t);
  const executable = await mock(t, dir);
  await add(dir, 'slow');
  const child = spawn(process.execPath, [cli, 'run', 'slow', '--executable', executable, '--quota', '2s'], { cwd: dir });
  const exited = new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('close', resolve);
  });
  t.after(() => child.kill());
  await new Promise((resolve, reject) => {
    child.stdout.once('data', resolve);
    child.once('error', reject);
    child.once('close', () => reject(new Error('Run exited before start')));
  });
  await assert.rejects(gacha(dir, 'run', 'slow', '--executable', executable), error => /busy/.test(error.stdout));
  assert.equal(await exited, 0);
  const { record, events } = await onlyRun(dir, 'slow');
  assert.equal(record.endReason, 'quota');
  assert.equal(record.endingCheckpoint.phase, 'RESEARCH');
  assert.equal(record.goalStatus, 'paused');
  assert.ok(record.summary && events.some(event => event.type === 'run.wrap_up'));
  const inputs = (await readFile(join(dir, 'slow/test-inputs.jsonl'), 'utf8')).trim().split('\n').map(JSON.parse);
  assert.deepEqual(inputs.map(input => input.method), ['turn/start', 'turn/steer']);
  assert.equal(inputs[0].text, await readFile(join(dir, 'slow/runs', record.id, 'prompt.md'), 'utf8'));
  const finishAt = new Date(Date.parse(record.startedAt) + 2000).toISOString();
  for (const input of inputs) {
    assert.equal(input.text.match(/^Finish by: (.+)$/m)?.[1], finishAt);
  }

  const runs = join(dir, 'slow/runs');
  await writeFile(join(runs, record.id, 'run.json'), JSON.stringify({ ...record, objective: 'Previous objective' }));
  const updatedPolicy = { approvalPolicy: 'never', sandbox: { type: 'readOnly' } };
  await writeFile(join(dir, 'slow/test-codex-config.json'), JSON.stringify({
    model: 'mock', sandbox_mode: 'read-only', approval_policy: 'never',
  }));
  await writeFile(join(dir, 'slow/test-resolved-policy.json'), JSON.stringify(updatedPolicy));
  await gacha(dir, 'run', 'slow', '--executable', executable, '--quota', '2s');
  const [continuedId] = (await readdir(runs)).filter(id => id !== record.id);
  const continued = await json(join(runs, continuedId, 'run.json'));
  assert.notEqual(continued.objective, 'Previous objective');
  assert.equal(continued.startingCheckpoint.phase, 'RESEARCH');
  assert.deepEqual(continued.executionPolicy, updatedPolicy);
  const resumeParams = await json(join(dir, 'slow/test-thread-params.json'));
  assert.equal(resumeParams.threadId, 'test-thread');
  assert.equal(resumeParams.sandbox, 'read-only');
  assert.equal(resumeParams.approvalPolicy, 'never');
  assert.equal(await readFile(join(dir, 'slow', continued.summary), 'utf8'), 'Resumed and saved progress');
});

test('preserves configured permissions and records the server-resolved policy', async t => {
  const dir = await workspace(t);
  const executable = await mock(t, dir);
  await add(dir, 'configured');
  const configured = {
    model: 'mock', sandbox_mode: 'workspace-write', approval_policy: 'never',
    sandbox_workspace_write: { network_access: true },
  };
  // The resolved policy may differ from config because the server applies
  // requirements and session settings. Record its response, not an inference.
  const resolved = {
    approvalPolicy: 'on-request',
    sandbox: { type: 'workspaceWrite', networkAccess: false, writableRoots: [] },
  };
  await writeFile(join(dir, 'configured/test-codex-config.json'), JSON.stringify(configured));
  await writeFile(join(dir, 'configured/test-resolved-policy.json'), JSON.stringify(resolved));
  await gacha(dir, 'run', 'configured', '--executable', executable, '--quota', '10s');
  const params = await json(join(dir, 'configured/test-thread-params.json'));
  assert.equal(params.sandbox, configured.sandbox_mode);
  assert.equal(params.approvalPolicy, configured.approval_policy);
  const { record, events } = await onlyRun(dir, 'configured');
  assert.deepEqual(record.executionPolicy, resolved);
  const event = events.find(e => e.type === 'codex.execution_policy');
  assert.deepEqual(event.sandbox, resolved.sandbox);
  assert.equal(event.approvalPolicy, resolved.approvalPolicy);
});

test('batch isolates a failed item and skips archived items', async t => {
  const dir = await workspace(t);
  const executable = await mock(t, dir);
  for (const id of ['archived', 'failed', 'solved']) await add(dir, id);
  await gacha(dir, 'archive', 'archived');
  await gacha(dir, 'config', 'failed', '--effort', 'unsupported');
  await assert.rejects(gacha(dir, 'run', '--all', '--fresh', '--parallel', '2',
    '--executable', executable, '--quota', '10s'), error => {
    assert.match(error.stdout, /\[failed\] failed/);
    assert.match(error.stdout, /does not support effort "unsupported"/);
    assert.match(error.stdout, /\[solved\] done/);
    assert.doesNotMatch(error.stdout, /\[archived\]/);
    return true;
  });
  assert.equal((await onlyRun(dir, 'solved')).record.mode, 'fresh');
  assert.equal((await onlyRun(dir, 'failed')).record.endReason, 'failed');
});
