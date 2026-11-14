import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const documents = ['PLAN.md', 'STATUS.md', 'INDEX.md'];

function readOptional(path: string): Buffer | undefined {
  try {
    return readFileSync(path);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
    throw error;
  }
}

function containsCheckpoint(bytes: Buffer): boolean {
  let value;
  try {
    value = JSON.parse(bytes.toString('utf8'));
  } catch {
    return false;
  }
  return value !== null && typeof value === 'object' && !Array.isArray(value) &&
    ['PLAN', 'RESEARCH', 'VERIFY', 'DONE'].includes(value.phase) &&
    (typeof value.runId === 'string' || typeof value.problemSha256 === 'string');
}

export function snapshotHandoff(itemDir: string, runDir: string): string[] {
  const destination = join(runDir, 'checkpoint-before');
  mkdirSync(destination);
  const saved: string[] = [];
  for (const file of ['state.json', ...documents]) {
    const bytes = readOptional(join(itemDir, file));
    if (bytes !== undefined) {
      writeFileSync(join(destination, file), bytes, { flag: 'wx' });
      saved.push(file);
    }
  }
  return saved;
}

export interface HandoffWarning {
  file: string;
  snapshot?: string;
}

// This catches a specific accidental overwrite, not mathematical validity.
// Search newest-first, skipping copies with the same corruption.
export function inspectHandoff(itemDir: string, relativeRuns: string[]): HandoffWarning[] {
  const warnings: HandoffWarning[] = [];
  for (const file of documents) {
    const bytes = readOptional(join(itemDir, file));
    if (bytes === undefined || !containsCheckpoint(bytes)) continue;
    const snapshot = relativeRuns.map(run => `${run}/checkpoint-before/${file}`).find(path => {
      const saved = readOptional(join(itemDir, path));
      return saved !== undefined && saved.toString('utf8').trim() !== '' && !containsCheckpoint(saved);
    });
    warnings.push({ file, snapshot });
  }
  return warnings;
}

export function describeHandoff(warnings: HandoffWarning[]): string {
  return warnings.map(({ file, snapshot }) =>
    `${file} contains checkpoint JSON instead of its Markdown document.` +
    (snapshot ? ` Earlier copy: ${snapshot}.` : ' No earlier usable snapshot was found.'),
  ).join('\n');
}

export function repairAdvice(warnings: HandoffWarning[]): string {
  if (!warnings.length) return '';
  return [
    'Handoff repair needed:',
    describeHandoff(warnings),
    'Recover the affected document using the earlier copy and saved research artifacts, preserving later findings. Leave snapshots and PROBLEM.md unchanged. If repair remains unfinished at the deadline, record it in the summary.',
  ].join('\n');
}
