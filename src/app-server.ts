import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process';
import { EventEmitter } from 'node:events';
import { createInterface } from 'node:readline';
import { setTimeout as delay } from 'node:timers/promises';

type RpcId = number | string;
export type Notice = { method: string; params?: Record<string, unknown> };

export class RpcError extends Error {
  constructor(readonly method: string, readonly code: number, message: string, readonly data?: unknown) {
    super(`${method}: ${message}`);
  }
}

export class AppServer extends EventEmitter {
  private readonly child: ChildProcessWithoutNullStreams;
  private sequence = 0;
  private readonly pending = new Map<number, {
    method: string;
    resolve: (value: unknown) => void;
    reject: (error: Error) => void;
    timer: NodeJS.Timeout;
  }>();
  private exited = false;
  private closing = false;
  failure?: Error;

  constructor(executable: string, cwd: string) {
    super();
    this.child = spawn(executable, ['app-server', '--listen', 'stdio://'], { cwd, detached: true });
    const lines = createInterface({ input: this.child.stdout });
    lines.on('line', line => this.receive(line));
    this.child.stderr.setEncoding('utf8').on('data', (text: string) => this.emit('diagnostic', text));
    this.child.once('error', error => this.fail(error));
    this.child.stdin.on('error', error => this.fail(error));
    this.child.once('close', (code, signal) => {
      this.exited = true;
      lines.close();
      this.fail(new Error(`Codex app-server closed (${signal ?? code})`));
    });
  }

  private fail(error: Error): void {
    for (const request of this.pending.values()) {
      clearTimeout(request.timer);
      request.reject(error);
    }
    this.pending.clear();
    if (this.failure || this.closing) return;
    this.failure = error;
    this.emit('failure', error);
  }

  private send(value: object): void {
    if (!this.child.stdin.writable) throw this.failure ?? new Error('Codex stdin is closed.');
    this.child.stdin.write(JSON.stringify(value) + '\n');
  }

  notify(method: string, params?: object): void {
    this.send({ method, params });
  }

  request<T>(method: string, params?: object, timeoutMs = 15_000): Promise<T> {
    if (this.failure) return Promise.reject(this.failure);
    const id = ++this.sequence;
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Codex ${method} timed out.`));
      }, timeoutMs);
      this.pending.set(id, { method, resolve: value => resolve(value as T), reject, timer });
      try {
        this.send({ id, method, params });
      } catch (error) {
        clearTimeout(timer);
        this.pending.delete(id);
        reject(error);
      }
    });
  }

  private receive(line: string): void {
    if (!line.trim()) return;
    let message: {
      id?: RpcId; method?: string; params?: Record<string, unknown>; result?: unknown;
      error?: { code: number; message: string; data?: unknown };
    };
    try {
      message = JSON.parse(line) as typeof message;
      if (!message || typeof message !== 'object' || Array.isArray(message)) throw new Error();
    } catch {
      this.fail(new Error('Codex app-server sent invalid JSON protocol output.'));
      return;
    }
    if (typeof message.method === 'string') {
      if (message.id !== undefined) {
        this.emit('serverRequest', message.method);
        try {
          this.answer(message.id, message.method, message.params);
        } catch (error) {
          this.fail(error as Error);
        }
      } else {
        this.emit('notice', { method: message.method, params: message.params } satisfies Notice);
      }
      return;
    }
    if (typeof message.id !== 'number') return;
    const request = this.pending.get(message.id);
    if (!request) return;
    clearTimeout(request.timer);
    this.pending.delete(message.id);
    if (message.error) {
      request.reject(new RpcError(request.method, message.error.code, message.error.message, message.error.data));
    } else {
      request.resolve(message.result);
    }
  }

  private answer(id: RpcId, method: string, params?: Record<string, unknown>): void {
    if (method === 'item/commandExecution/requestApproval' || method === 'item/fileChange/requestApproval') {
      const decisions = params?.availableDecisions;
      const decision = Array.isArray(decisions) && !decisions.includes('decline') ? 'cancel' : 'decline';
      this.send({ id, result: { decision } });
    } else if (method === 'applyPatchApproval' || method === 'execCommandApproval') {
      this.send({ id, result: { decision: 'denied' } });
    } else if (method === 'item/permissions/requestApproval') {
      this.send({ id, result: { permissions: {}, scope: 'turn' } });
    } else if (method === 'mcpServer/elicitation/request') {
      this.send({ id, result: { action: 'decline', content: null } });
    } else if (method === 'item/tool/requestUserInput') {
      this.send({ id, result: { answers: {} } });
    } else {
      this.send({ id, error: { code: -32601, message: `Unavailable in unattended mode: ${method}` } });
    }
  }

  async initialize(timeoutMs?: number): Promise<void> {
    await this.request('initialize', { clientInfo: { name: 'gacha', title: 'Proof by Gacha', version: '0.1.0' } }, timeoutMs);
    this.notify('initialized');
  }

  private signalGroup(signal: NodeJS.Signals): void {
    if (!this.child.pid) return;
    try {
      process.kill(-this.child.pid, signal);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ESRCH') throw error;
    }
  }

  async close(): Promise<void> {
    this.closing = true;
    this.child.stdin.end();
    for (const signal of ['SIGTERM', 'SIGKILL'] as const) {
      if (!this.exited) await delay(350);
      this.signalGroup(signal);
    }
    if (!this.exited) await delay(150);
    this.child.stdout.destroy();
    this.child.stderr.destroy();
    this.child.unref();
  }
}
