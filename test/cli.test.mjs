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
let starts = 0;
function complete(status) {
  notice('turn/completed', { turn: { ...turn, status } });
}
rl.on('line', line => {
  const { id, method, params } = JSON.parse(line);
  if (id === undefined) return;
  const reply = result => console.log(JSON.stringify({ id, result }));
  if (method === 'initialize') reply({});
  else if (method === 'config/read') reply({ config: { model: 'mock' } });
  else if (method === 'model/list') reply({ nextCursor: null, data: [{
    model: 'mock', id: 'mock', isDefault: true, defaultReasoningEffort: 'high',
    supportedReasoningEfforts: [{ reasoningEffort: 'high' }],
  }] });
  else if (method === 'thread/start') reply({ thread: { id: threadId }, model: 'mock', modelProvider: 'openai' });
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
    fs.writeFileSync('runs/' + state().runId + '/SUMMARY.md', 'Saved progress');
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
