#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stripVTControlCharacters, styleText } from 'node:util';
import { Command, InvalidArgumentError } from 'commander';
import { batch, runs, settingsFor } from './run.js';
import {
  add, atomicJson, checkpoint, initialize, item, items, lock, message,
  validateSettings, workspace, type Settings,
} from './storage.js';

const program = new Command();
program.name('gacha').description('Run Codex Goals on math research problems').version('0.1.0');

function settingsOptions(command: Command): Command {
  return command.option('--agent <agent>', 'agent adapter')
    .option('--executable <path>', 'agent executable')
    .option('--model <model>', 'model ID')
    .option('--effort <effort>', 'reasoning effort')
    .option('--quota <duration>', 'elapsed-time budget per item');
}

function settingsFrom(flags: Settings): Settings {
  const settings: Settings = {};
  for (const key of ['agent', 'executable', 'model', 'effort', 'quota'] as const) {
    if (flags[key] !== undefined) settings[key] = flags[key];
  }
  validateSettings(settings);
  return settings;
}

function positiveInteger(value: string): number {
  const number = Number(value);
  if (!/^\d+$/.test(value) || !Number.isSafeInteger(number) || number < 1) {
    throw new InvalidArgumentError('Use a positive integer.');
  }
  return number;
}

function editProblem(): string {
  const temporary = mkdtempSync(join(tmpdir(), 'gacha-problem-'));
  const path = join(temporary, 'PROBLEM.md');
  try {
    writeFileSync(path, '');
    const editor = process.env.VISUAL || process.env.EDITOR || 'nano';
    // Interpret the user's editor command as in a shell, while passing the filename as data.
    const result = spawnSync('/bin/sh', ['-c', `exec ${editor} "$1"`, 'gacha-editor', path], { stdio: 'inherit' });
    if (result.error || result.status !== 0) throw new Error(result.error?.message ?? 'Editor did not complete.');
    return readFileSync(path, 'utf8');
  } finally {
    rmSync(temporary, { recursive: true, force: true });
  }
}

program.command('init [path]').description('Initialize a workspace').action((path = '.') => {
  const result = initialize(path);
  console.log(`${result.created ? 'Initialized' : 'Existing workspace'}: ${result.root}`);
});

type AddFlags = Settings & {
  title?: string; problemText?: string; problemFile?: string; nonInteractive?: boolean;
};
settingsOptions(program.command('add <id>').description('Add a research problem'))
  .option('--title <text>', 'problem title')
  .option('--problem-text <markdown>', 'problem statement as text')
  .option('--problem-file <path>', 'read the statement from a Markdown file')
  .option('--non-interactive', 'require title and statement flags')
  .action(async (id: string, flags: AddFlags) => {
    const ws = workspace();
    if (flags.problemText !== undefined && flags.problemFile !== undefined) {
      throw new Error('Choose one of --problem-text and --problem-file.');
    }
    const settings = settingsFrom(flags);
    let title = flags.title;
    let problem = flags.problemFile === undefined ? flags.problemText : readFileSync(flags.problemFile, 'utf8');
    if (title !== undefined && !title.trim()) throw new Error('Title must be nonblank.');
    if (problem !== undefined && !problem.trim()) throw new Error('Problem statement must be nonblank.');
    if (title === undefined || problem === undefined) {
      if (flags.nonInteractive || !process.stdin.isTTY || !process.stdout.isTTY) {
        throw new Error('Provide --title and one of --problem-text or --problem-file.');
      }
      const ui = createInterface({ input: process.stdin, output: process.stdout });
      const abort = new AbortController();
      ui.on('SIGINT', () => abort.abort());
      ui.on('close', () => abort.abort());
      const ask = (question: string) => ui.question(question, { signal: abort.signal });
      try {
        title ??= await ask('Title: ');
        if (problem === undefined) {
          const filename = (await ask('Problem file (leave blank to open an editor): ')).trim();
          if (filename) problem = readFileSync(filename, 'utf8');
          else {
            ui.pause();
            problem = editProblem();
            ui.resume();
          }
        }
        for (const key of ['agent', 'model', 'effort', 'quota'] as const) {
          if (settings[key] === undefined) {
            const answer = (await ask(`${key} (leave blank for default): `)).trim();
            if (answer) settings[key] = answer;
          }
        }
      } finally {
        ui.close();
      }
    }
    const created = add(ws, id, title, problem, settings);
    console.log(`Added ${created.id}: ${created.dir}`);
  });

settingsOptions(program.command('config <id>').description('Show or update a problem’s settings'))
  .option('--title <text>', 'new title')
  .action((id: string, flags: Settings & { title?: string }) => {
    const ws = workspace();
    const settings = settingsFrom(flags);
    if (flags.title !== undefined && !flags.title.trim()) throw new Error('Title must be nonblank.');
    if (flags.title === undefined && !Object.keys(settings).length) {
      const problem = item(ws, id);
      console.log(JSON.stringify({ saved: problem.config, effective: settingsFor(ws, problem, {}) }, null, 2));
      return;
    }
    const unlock = lock(ws, id);
    try {
      const problem = item(ws, id);
      atomicJson(join(problem.dir, 'item.json'), {
        ...problem.config, ...settings, title: flags.title ?? problem.config.title,
      });
      console.log(`Updated ${id}`);
    } finally {
      unlock();
    }
  });

program.command('archive <id>').description('Archive a problem and retain its files')
  .option('--restore', 'restore an archived problem')
  .action((id: string, flags: { restore?: boolean }) => {
    const ws = workspace();
    const unlock = lock(ws, id);
    try {
      const problem = item(ws, id);
      atomicJson(join(problem.dir, 'item.json'), { ...problem.config, archived: !flags.restore });
      console.log(`${flags.restore ? 'Restored' : 'Archived'} ${id}`);
    } finally {
      unlock();
    }
  });

program.command('list').description('List problems in the current workspace')
  .option('--all', 'include archived problems')
  .action((flags: { all?: boolean }) => {
    const entries = items(workspace()).filter(entry => flags.all || !entry.config.archived);
    for (const entry of entries) console.log(`${entry.id}\t${entry.config.title}${entry.config.archived ? ' [archived]' : ''}`);
    if (!entries.length) console.log('No problems.');
  });

function statusDuration(ms: number): string {
  const seconds = Math.round(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  return [hours && `${hours}h`, minutes && `${minutes}m`, `${seconds % 60}s`].filter(Boolean).join(' ');
}

program.command('status [id]').description('Show research phase and latest run').action((id?: string) => {
  const ws = workspace();
  const entries = id ? [item(ws, id)] : items(ws).filter(entry => !entry.config.archived);
  const phaseColors = { PLAN: 'magenta', RESEARCH: 'cyan', VERIFY: 'yellow', DONE: 'green' } as const;
  for (const entry of entries) {
    const state = checkpoint(entry);
    const recent = runs(entry)[0];
    const conclusion = id && state.conclusion ? join(entry.dir, state.conclusion) : undefined;
    const summary = id && recent?.summary ? join(entry.dir, recent.summary) : undefined;
    if (!process.stdout.isTTY) {
      console.log(`${entry.id}\t${state.phase}\t${entry.config.title}${recent ? `\t${recent.endReason ?? 'unfinished'}` : ''}`);
      if (conclusion) console.log(conclusion);
      if (summary) console.log(summary);
      continue;
    }

    const title = stripVTControlCharacters(entry.config.title).replace(/\s+/g, ' ').trim();
    const phase = styleText(phaseColors[state.phase], `[${state.phase}]`);
    const details = [entry.id];
    if (recent) {
      const outcome = recent.endReason ?? 'unfinished';
      if (state.phase !== 'DONE' || outcome !== 'done') {
        details.push(`Last run: ${outcome === 'quota' ? 'time budget reached' : outcome}`);
      }
      if (recent.elapsedMs !== undefined) details.push(statusDuration(recent.elapsedMs));
    }

    console.log(`${phase}  ${styleText('bold', title)}  ·  ${details.join(' · ')}`);
    if (conclusion) console.log(`  ${styleText('bold', 'Conclusion')}  ${conclusion}`);
    if (summary) console.log(`  ${styleText('bold', 'Run summary')} ${summary}`);
  }
  if (!entries.length) console.log('No problems.');
});

program.command('runs <id>').description('List saved runs for a problem').action((id: string) => {
  const problem = item(workspace(), id);
  const records = runs(problem);
  for (const record of records) {
    console.log(`${record.id}\t${record.mode}\t${record.endReason ?? 'unfinished'}${record.summary ? `\t${join(problem.dir, record.summary)}` : ''}`);
  }
  if (!records.length) console.log('No runs.');
});

settingsOptions(program.command('run [id]').description('Run a Codex Goal for a problem or a batch'))
  .option('--all', 'run all active problems in the workspace')
  .option('--fresh', 'start a new research attempt')
  .option('--parallel <count>', 'maximum active runs in this batch', positiveInteger)
  .action(async (id: string | undefined, flags: Settings & { all?: boolean; fresh?: boolean; parallel?: number }) => {
    if (Boolean(id) === Boolean(flags.all)) throw new Error('Select exactly one problem ID or --all.');
    if (!flags.all && flags.parallel !== undefined) throw new Error('--parallel requires --all.');
    const ws = workspace();
    const overrides = settingsFrom(flags);
    const ids = id ? [item(ws, id).id] : items(ws).filter(entry => !entry.config.archived).map(entry => entry.id);
    if (!ids.length) {
      console.log('No active problems.');
      return;
    }
    const stop = new AbortController();
    const cancel = () => stop.abort();
    process.on('SIGINT', cancel);
    process.on('SIGTERM', cancel);
    try {
      const outcomes = await batch(ws, ids, flags.all ? flags.parallel ?? ws.config.parallel ?? 2 : 1, overrides, !!flags.fresh, stop.signal);
      for (const outcome of outcomes) {
        console.log(`[${outcome.id}] ${outcome.status} in ${(outcome.elapsedMs / 1000).toFixed(1)}s${outcome.summary ? `\n  ${join(ws.root, outcome.id, outcome.summary)}` : ''}`);
        if (outcome.detail) console.log(`  ${outcome.detail}`);
      }
      if (stop.signal.aborted) process.exitCode = 130;
      else if (outcomes.some(outcome => outcome.failed)) process.exitCode = 1;
    } finally {
      process.off('SIGINT', cancel);
      process.off('SIGTERM', cancel);
    }
  });

try {
  await program.parseAsync();
} catch (error) {
  console.error(`gacha: ${message(error)}`);
  process.exitCode = 1;
}
