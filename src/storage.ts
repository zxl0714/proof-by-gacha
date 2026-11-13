import { spawnSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import {
  closeSync, existsSync, linkSync, lstatSync, mkdirSync, mkdtempSync, openSync,
  readFileSync, readdirSync, realpathSync, renameSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

export interface Settings {
  agent?: string;
  executable?: string;
  model?: string;
  effort?: string;
  quota?: string;
}
export interface Workspace {
  root: string;
  config: Settings & { parallel?: number };
}
export interface Item {
  id: string;
  dir: string;
  config: Settings & { title: string; archived?: boolean };
}
export interface Checkpoint {
  phase: 'PLAN' | 'RESEARCH' | 'VERIFY' | 'DONE';
  problemSha256?: string;
  runId?: string;
  updatedAt?: string;
  candidate?: string;
  verification?: string;
  conclusion?: string;
}
export const summaryName = 'SUMMARY.md';

export function message(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function missing(error: unknown): boolean {
  return (error as NodeJS.ErrnoException).code === 'ENOENT';
}

function object<T extends object>(path: string): T | undefined {
  let text: string;
  try {
    text = readFileSync(path, 'utf8');
  } catch (error) {
    if (missing(error)) return undefined;
    throw error;
  }
  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object') throw new Error();
    return parsed as T;
  } catch {
    throw new Error(`Invalid JSON object in ${path}`);
  }
}

export function readJson<T extends object>(path: string): T {
  const value = object<T>(path);
  if (!value) throw new Error(`Missing ${path}`);
  return value;
}

export function atomicJson(path: string, value: object, exclusive = false): void {
  const tmp = join(dirname(path), `.gacha-${randomUUID()}.tmp`);
  try {
    writeFileSync(tmp, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
    if (exclusive) linkSync(tmp, path);
    else renameSync(tmp, path);
  } finally {
    rmSync(tmp, { force: true });
  }
}

export function duration(text: string): number {
  const match = /^(\d+(?:\.\d+)?)(s|m|h|d)$/.exec(text);
  if (match) {
    const factor = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 }[match[2]]!;
    const ms = Math.round(Number(match[1]) * factor);
    if (Number.isSafeInteger(ms) && ms >= 1000 && ms <= 2_147_000_000) return ms;
  }
  throw new Error(`Invalid quota "${text}". Use a duration such as 30s, 15m, or 3h.`);
}

export function validateSettings(settings: Settings): void {
  for (const key of ['agent', 'executable', 'model', 'effort', 'quota'] as const) {
    const value = settings[key];
    if (value !== undefined && (typeof value !== 'string' || !value.trim())) {
      throw new Error(`Invalid ${key}`);
    }
  }
  if (settings.agent && settings.agent !== 'codex') {
    throw new Error(`Unsupported agent "${settings.agent}". Available agent: codex.`);
  }
  if (settings.quota) duration(settings.quota);
}

export function initialize(path: string): { root: string; created: boolean } {
  const root = resolve(path);
  mkdirSync(join(root, '.gacha'), { recursive: true });
  try {
    atomicJson(join(root, '.gacha', 'config.json'), { agent: 'codex', quota: '3h', parallel: 2 }, true);
    return { root, created: true };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
    workspace(root);
    return { root, created: false };
  }
}

export function workspace(start = process.cwd()): Workspace {
  let root = realpathSync(start);
  for (;;) {
    const config = object<Workspace['config']>(join(root, '.gacha', 'config.json'));
    if (config) {
      validateSettings(config);
      if (config.parallel !== undefined && (!Number.isSafeInteger(config.parallel) || config.parallel < 1)) {
        throw new Error(`Invalid parallel default in ${join(root, '.gacha', 'config.json')}`);
      }
      return { root, config };
    }
    const parent = dirname(root);
    if (root === parent) throw new Error('No Gacha workspace found. Run gacha init or enter an existing workspace.');
    root = parent;
  }
}

function validId(id: string): void {
  if (!id || id === '..' || id.startsWith('.') || /[\/\\\x00-\x1f\x7f]/.test(id)) {
    throw new Error(`Invalid problem ID "${id}". Use one visible directory name.`);
  }
}

export function item(ws: Workspace, id: string): Item {
  validId(id);
  const dir = join(ws.root, id);
  if (!existsSync(dir) || !lstatSync(dir).isDirectory()) throw new Error(`Unknown problem "${id}".`);
  const config = object<Item['config']>(join(dir, 'item.json'));
  if (!config) throw new Error(`Unknown problem "${id}".`);
  if (typeof config.title !== 'string' || !config.title.trim() ||
      (config.archived !== undefined && typeof config.archived !== 'boolean')) {
    throw new Error(`Invalid problem metadata in ${dir}`);
  }
  validateSettings(config);
  return { id, dir, config };
}

export function items(ws: Workspace): Item[] {
  return readdirSync(ws.root, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.') &&
      existsSync(join(ws.root, entry.name, 'item.json')))
    .map(entry => item(ws, entry.name))
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function lock(ws: Workspace, id: string): () => void {
  validId(id);
  const locks = join(ws.root, '.gacha', 'locks');
  mkdirSync(locks, { recursive: true });
  const fd = openSync(join(locks, `${id}.lock`), 'a', 0o600);
  const result = spawnSync('flock', ['-n', '-E', '75', '3'], { stdio: ['ignore', 'ignore', 'pipe', fd] });
  if (result.status === 0) return () => closeSync(fd);
  closeSync(fd);
  if (result.status === 75) throw new Error(`Problem "${id}" is busy in another Gacha invocation.`);
  throw new Error(`Could not lock "${id}": ${result.error?.message ?? result.stderr?.toString().trim()}`);
}

export function add(ws: Workspace, id: string, title: string, problem: string, settings: Settings): Item {
  validId(id);
  validateSettings(settings);
  if (!title.trim() || !problem.trim()) throw new Error('Title and problem statement must be nonblank.');
  const instructions = readFileSync(new URL('../docs/agents-template.md', import.meta.url), 'utf8');
  const unlock = lock(ws, id);
  let staging: string | undefined;
  try {
    const target = join(ws.root, id);
    staging = mkdtempSync(join(ws.root, '.gacha-add-'));
    atomicJson(join(staging, 'item.json'), { title, ...settings });
    atomicJson(join(staging, 'state.json'), { phase: 'PLAN' });
    writeFileSync(join(staging, 'PROBLEM.md'), problem);
    writeFileSync(join(staging, 'AGENTS.md'), instructions);
    const move = spawnSync('mv', ['-T', '--no-clobber', '--', staging, target], { encoding: 'utf8' });
    if (move.error) throw move.error;
    if (existsSync(staging) && existsSync(target)) throw new Error(`Destination already exists: ${target}`);
    if (move.status !== 0) throw new Error(move.stderr.trim());
    return item(ws, id);
  } finally {
    try {
      if (staging) rmSync(staging, { recursive: true, force: true });
    } finally {
      unlock();
    }
  }
}

export function digest(problem: string): string {
  return createHash('sha256').update(problem, 'utf8').digest('hex');
}

export function evidence(dir: string, path: unknown): path is string {
  if (typeof path !== 'string' || !path || isAbsolute(path)) return false;
  try {
    const root = realpathSync(dir);
    const target = realpathSync(resolve(dir, path));
    const inside = relative(root, target);
    return inside !== '..' && !inside.startsWith('..' + sep) && !isAbsolute(inside) &&
      statSync(target).isFile() && statSync(target).size > 0;
  } catch {
    return false;
  }
}

export function checkpoint(problem: Item): Checkpoint {
  const path = join(problem.dir, 'state.json');
  const state = readJson<Checkpoint>(path);
  if (!['PLAN', 'RESEARCH', 'VERIFY', 'DONE'].includes(state.phase)) {
    throw new Error(`Invalid research phase in ${path}`);
  }
  return state;
}

export function savedPhase(problem: Item, state: Checkpoint): Checkpoint['phase'] {
  if ((state.phase === 'VERIFY' || state.phase === 'DONE') && !evidence(problem.dir, state.candidate)) return 'RESEARCH';
  if (state.phase === 'DONE' && (!evidence(problem.dir, state.verification) ||
      !evidence(problem.dir, state.conclusion))) return 'VERIFY';
  return state.phase;
}
