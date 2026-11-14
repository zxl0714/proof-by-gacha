# Design notes

This document describes the initial Proof by Gacha CLI and the design behind it.

The [README](../README.md) introduces the project to users. This document holds the details needed to discuss and implement it.

## Scope and principles

Proof by Gacha manages repeated attempts at research problems using existing agent CLIs.

The agent chooses its research approach, literature, experiments, tools, and proof strategy. The surrounding tool manages research items, execution, time budgets, saved artifacts, and recovery.

Confirmed product choices:

- Maintain a list of research items through a CLI.
- Support multiple independent workspaces, initialized explicitly and selected by the current directory.
- Offer guided interactive creation and fully non-interactive creation.
- Give each item its own directory for research materials and run records.
- Configure the agent, model, effort, and time budget per item, with overrides for each invocation of `run`.
- Continue existing research by default; also support fresh attempts.
- Allow time to wrap up rather than enforcing a deadline to the exact second.
- Maintain a current research plan, evidence summary, and artifact index for the user and the next agent.
- Support batch execution with a default concurrency of two items.
- Use working-directory instructions rather than building filesystem isolation.
- Target Linux, with WSL 2 + Ubuntu for local development and verification.
- Use Codex CLI's app-server as the first agent integration.

The tool should preserve usable research records and accurately describe outcomes. It should leave choices such as role count, review frequency, proof decomposition, and when to change direction to the agent or the user's task-specific instructions.

## Workspaces

A workspace is a user-chosen directory containing one research collection and its settings. It is separate from the tool's source checkout or installation. Users can keep several workspaces without switching a global active-workspace setting.

```bash
gacha init ~/research/math
cd ~/research/math
gacha add hydra
gacha run --all

gacha init ~/research/algorithms
cd ~/research/algorithms
gacha add sorting-bound
```

`gacha init [path]` initializes the specified directory, or the current directory when no path is supplied. It creates the workspace marker and default settings in `.gacha/config.json`. Each problem gets its own directory directly under the workspace root when added. It preserves existing files. Repeating initialization reports that the workspace already exists without resetting its settings or research.

Item commands search upward from the current directory for the nearest valid workspace marker. They operate only on that workspace, even when invoked from an item's subdirectory. `run --all`, `list`, and `status` never implicitly combine research from other workspaces.

If no workspace is found, report that clearly and suggest `gacha init` or changing into an existing workspace. Do not silently create a workspace or fall back to a global research directory. An invalid or unreadable marker should produce a specific error rather than redirecting the command to a parent workspace.

An item ID is the name of a direct child directory with a valid `item.json`. Workspace-wide commands discover items at that level. Other directories are available for the user's own files. Reject an ID that cannot be used as a single directory name, is reserved for workspace metadata, or already exists at the destination. Concurrency settings and item locks are scoped to their workspace. Two running batches in separate workspaces still share the machine's resources and any agent-account limits; workspace separation is organizational, not a resource sandbox.

There is no required global `~/.gacha` research directory. Users can choose that location as a workspace if they prefer, but the application does not require the workspace to be its own source repository. Users may independently version-control research workspaces.

## Research items and storage

Each problem has a directory for its statement, execution settings, research files, and run history.

```text
workspace/
├── .gacha/
│   └── config.json              # Workspace marker and defaults
└── problem-name/
    ├── item.json               # Created by add. Title and optional run settings
    ├── PROBLEM.md              # Created by add. User's problem and acceptance criteria
    ├── AGENTS.md               # Created by add. Working and continuation instructions
    ├── state.json              # Created by add. Current research phase and checkpoint
    ├── PLAN.md                 # First research run. Gap, main route, alternatives, next step
    ├── STATUS.md               # Once there is evidence. Findings, failed routes, gaps
    ├── INDEX.md                # Once artifacts are reusable. Location, purpose, verification
    ├── notes/                  # As needed. Derivations, references, proofs, and reviews
    ├── experiments/            # As needed. Scripts, inputs, results, reproduction steps
    └── runs/
        └── <run-id>/           # One Codex Goal run, including its continuation turns
            ├── run.json       # Settings, problem revision, thread, timing, end reason, phase checkpoints
            ├── prompt.md      # Exact initial turn prompt sent to Codex
            ├── events.jsonl   # Execution events appended in recorded order
            └── SUMMARY.md     # Run findings, evidence links, and remaining gaps
```

The agent starts with its item's directory as the working directory. Problem statements, proofs, downloaded research sources, experimental scripts, and temporary research artifacts should stay inside it. Workspace-wide scheduling metadata stays in `.gacha/`.

At creation, copy the [research instructions template](agents-template.md) to the item's `AGENTS.md`. The launch prompt supplies the run ID, mode, and deadline. Adapters handle any additional instruction mechanism required by a particular agent. This is a working agreement, not an operating-system sandbox. Credentials, caches, and internal session data belonging to the agent CLI still follow that tool's storage behavior.

Configuration and run records have stable locations. The agent may organize the research files as appropriate. Archiving an item preserves its directory and history.

## Proposed command surface

```bash
gacha init ./research
cd ./research

gacha add hydra

gacha config hydra --model '<MODEL_ID>' --effort '<EFFORT>'

gacha list
gacha status
gacha status hydra
gacha runs hydra

gacha run hydra
gacha run hydra --fresh
gacha run --all
gacha run --all --parallel 3
```

Model IDs and effort values must be supported by the selected agent. Adapters should check their capabilities and report unsupported options rather than silently substituting another model or reducing effort.

Use `gacha config <id> --title <text>` to edit the title, `gacha archive <id>` to archive a problem, and `gacha archive <id> --restore` to restore it. `gacha list --all` includes archived items.

### Run options

```bash
gacha run --all --fresh \
  --agent codex \
  --model gpt-6.1-sol \
  --effort ultra \
  --quota 3h \
  --parallel 2

gacha run bb6-hydra-variant \
  --agent codex \
  --model gpt-6.1-sol \
  --effort ultra \
  --quota 3h
```

Select exactly one item ID or use `--all`. `--parallel` applies only to `--all` and takes a positive integer. `--fresh` applies to every selected item. The single-item example continues research by default.

Resolve settings for each selected item using command-line flags first, followed by the item's saved settings, workspace defaults, and the agent's defaults for model and effort. When the effective agent changes, inherit model and effort only from settings for that agent. Validate the effective pair together and report unsupported explicit values without substituting. Run overrides apply only to the current invocation. Save the resolved settings in each `run.json`.

`--quota 3h` gives each selected item its own three-hour target. `--parallel 2` limits that batch to two active runs at a time.

### Add an item

An item needs an ID, a brief title, and a problem statement. Use either `--problem-text` for inline Markdown or `--problem-file` to import a Markdown file.

```bash
gacha add problem-name --title="Maybe some math problem, a brief title" --problem-text="The description of problem. blablabla"
```

```bash
gacha add problem-name --title="Maybe some math problem, a brief title" --problem-file=somefile.md
```

Each command creates `<workspace>/problem-name/` with `item.json`, `PROBLEM.md`, generated `AGENTS.md`, and `state.json` initialized to `PLAN`. Save the title in `item.json` and copy the supplied statement and any acceptance criteria into `PROBLEM.md`, preserving the original Markdown and line breaks. Resolve relative file paths from the directory where the command was invoked, even if the workspace was discovered in a parent directory. Subsequent runs read the workspace copy, which the user can edit.

A complete title and statement are enough to create the item without prompts or a Codex session. Agent, model, effort, and quota flags are optional. Save the settings provided by the user and resolve omitted settings from the defaults at run time. `--non-interactive` also works with either form.

Reject conflicting problem flags, blank titles or statements, unreadable files, and duplicate item IDs. Validate inputs before creating the item, and publish the completed item directory as one operation. Errors exit nonzero and leave existing research intact.

#### Guided creation

In an interactive terminal, `gacha add problem-name` opens guided setup. Ask for the title and let the user write the problem in an editor or import a Markdown file. Offer optional agent, model, effort, and time budget settings in the guided flow.

Use provided flags to prefill the setup. If the user supplied some required fields, prompt only for the missing ones. Cancelling the setup leaves no item directory. With `--non-interactive` or non-TTY input, report missing required fields and exit nonzero.

## Research modes

### Continue: the default

Read `PROBLEM.md` and `state.json`, then consult any available `PLAN.md`, `STATUS.md`, and `INDEX.md`. Resume from the saved phase for the current problem revision. If the checkpoint is already `DONE` for that revision, report the saved result. An explicit `--fresh` can start another attempt.

The research directory is the durable basis for continuation. Reuse a previously recorded Gacha-managed thread when its model, provider, and problem revision match and it is available for a new run. A new invocation gets a new run record and Goal even when it reuses a thread. If the thread is missing, busy, or incompatible, record the reason and start a new thread from the research files. When the problem has changed, check earlier claims against the new statement before reusing them. Report other resume failures, such as authentication or transport errors.

### Fresh attempt

Start a new Codex thread from the original problem and shared background supplied by the user, without automatically including earlier conclusions and approaches in the initial context. Published literature remains available to inform the new route. Explore independently, then compare with existing work and save the new findings. Follow-up turns in that run use its new thread. Start with the launch version of `PROBLEM.md` and the working instructions. Ask the agent to form its own route before reading the existing plan, evidence, artifact index, or prior run summaries. Merge the resulting research into the current files after comparison.

A fresh attempt starts at `PLAN` in `state.json`. Previous run checkpoints and evidence remain available in the run records and research files. When incorporating new findings into `STATUS.md`, explain their relationship to previous results and retain unresolved disagreements.

Independence here concerns the starting context and approach. Existing files remain accessible; this mode does not provide a strict blind evaluation or filesystem isolation.

## Research workflow

`state.json` is the current research checkpoint for one problem. At creation it contains `{"phase": "PLAN"}`. Once a run starts, record the problem revision as `problemSha256` along with `runId` and `updatedAt` for the last checkpoint update. Capture the starting and ending checkpoints in `run.json` so each run remains traceable.

| Phase | Codex work | Next phase |
| --- | --- | --- |
| `PLAN` | Read the original statement, known results, and counterexamples. Write the main route and alternatives in `PLAN.md`. Identify the lemma that advances the problem, show how it connects to the original claim, and give the next concrete step. | Once there is an actionable step, save the plan, move to `RESEARCH`, and begin the first check immediately. |
| `RESEARCH` | Do substantive work on the current gap. Prove a lemma, construct a counterexample, check a cited theorem, or run an exact computation. Save the evidence before deciding what to do next. | Stay in `RESEARCH` while there is a concrete check or repair to try on the current route. Return to `PLAN` when a key lemma fails or the route stalls, choose a viable alternative, and start its first check. Move to `VERIFY` when a candidate proof or counterexample addresses the full original statement. |
| `VERIFY` | Check the recorded candidate revision against the original quantifiers and assumptions. Review the critical deductions, cited hypotheses, and whether computations cover the cases claimed. Save the verification findings. | Return to `RESEARCH` for a repair on the same route. Return to `PLAN` when a key premise fails and a new route is needed. Move to `DONE` when the verified candidate meets the acceptance criteria in `PROBLEM.md`. |
| `DONE` | Save the final conclusion, verification results, and evidence links, then finish the Codex Goal. | Terminal for this attempt. |

Review intermediate claims at their stated scope within `RESEARCH`. A candidate enters `VERIFY` only if its correctness would resolve the original problem. Keep `PLAN.md` focused on the current route and next action; retain useful superseded work in research notes and `STATUS.md`.

Before entering `VERIFY`, save the candidate to its own file and record its item-relative path in `state.json`. Keep that file available for later review. Save a substantive revision under a new path, update the checkpoint, and verify the new version. If the proof or counterexample depends on other files, identify the versions used in the verification report. Save the final evidence and link the verification report and conclusion before committing `DONE`. The final checkpoint refers to the revision actually verified.

Gacha initializes or resets the checkpoint while it holds the item lock and before starting Codex. Codex owns checkpoint updates during the run and follows these transition rules through `AGENTS.md`. For each phase change, save evidence and the required research files, update `STATUS.md` with the reason and next step, and refresh `INDEX.md` when relevant artifacts change. Follow the [research instructions template](agents-template.md) for the files required by each transition. Replace `state.json` atomically after those writes. Gacha validates the checkpoint when resuming or finalizing a run. A changed `PROBLEM.md` digest starts a new `PLAN` for that revision. Budget expiry, interruption, and Goal status belong to the run record. They leave the last saved research phase available for the next run.

## Time budgets and wrap-up

Each item has a per-run elapsed-time budget, such as `3h`. Start a monotonic timer when the scheduler starts the item after it leaves the queue and acquires its lock. Record wall-clock timestamps for display. Startup, research, and wrap-up within the target window share the same budget across turns.

The intended lifecycle is:

1. **Research:** allow autonomous work, with useful intermediate progress saved to files.
2. **Wrap up:** near the deadline, ask the agent to stop opening new directions, organize results, and update the summary.
3. **Grace period:** allow a short extension to finish saving and exit.
4. **Forced stop:** if it still cannot finish, stop the run and its managed child processes, and record the reason.

For example, a three-hour run might enter wrap-up around `2h50m`, with a small grace period after the target deadline. Reserve 15% of the quota for wrap-up, capped at ten minutes. The grace period is 5% of the quota, bounded between one second and one minute.

The initial prompt includes both the wrap-up start and the target finish time, and asks the agent to save checkpoints during research. When wrap-up starts, stop Goal continuation and send `turn/steer` with the active turn ID in `expectedTurnId`. If the turn has already ended and the run still needs a summary, start a dedicated wrap-up turn on the same thread while time remains. Acknowledging a steer only confirms receipt of the instruction. Use the final turn event and saved artifacts to determine whether wrap-up completed. The wrap-up message repeats the same finish deadline. Save the checkpoint and a compact summary from existing evidence first, then make only essential plan, status, and index updates for continuation. Record unfinished checks or cleanup in the summary. An unresolved run does not need new verification or conclusion reports to end. Do not start or replay computations or wait for additional reviews during wrap-up.

At the end of the grace period, request `turn/interrupt` for the active turn. Give the server a bounded interval to report the final status and flush logs, then stop the app-server process group if it is still running. Record timeouts and cancellations separately from a normal turn completion.

A forced stop can preserve only files and logs already written. It cannot guarantee a complete final summary. Keep the last valid summary and research checkpoint. Record the end reason in `run.json` so the next run can resume the saved phase.

Quota means elapsed time. It is separate from token limits, spending limits, and the agent account's own usage allowance.

## Research records and outcomes

`PROBLEM.md` is the user-owned statement, including any acceptance criteria the user supplies. Codex records proposed changes to the problem or extra assumptions in research notes for review. The launch prompt carries the exact statement used for the run, and `run.json` records the SHA-256 digest of that same statement. Later edits to `PROBLEM.md` apply to the next run.

- `PLAN.md` guides the next research step. Start it during the first research run and revise it when a route changes. Capture the current gap, the main route, viable alternatives, and the next concrete action. Explain how proving the key lemma would advance or resolve the original problem.
- `STATUS.md` captures the current evidence. Create it once there is evidence to record, including reproducible failures. Link supported results, failed routes and why they failed, and gaps awaiting verification.
- `INDEX.md` points to reusable artifacts. Create it when the first such artifact exists. Each entry records a relative path, purpose, and verification status. Use links relative to the containing Markdown file; a run summary links to item artifacts via ../../notes/ or ../../experiments/. Paths stored in state.json are item-relative. Link a manifest for grouped results. At wrap-up, check that new research notes and experiments are reachable from the index, and refresh their verification statuses.
- `runs/<run-id>/SUMMARY.md` records the outcome of one Goal run. Summarize the approaches tried, what the run established, evidence locations, and remaining gaps. Link to the underlying notes or experiments so the evidence can be maintained in one place.

Gacha owns `run.json`, `prompt.md`, and `events.jsonl`. Codex writes the research files and per-run summary under the working conventions in `AGENTS.md`. Append observed research checkpoints, Goal and turn transitions, continuations, wrap-up events, and relevant diagnostics to `events.jsonl` with timestamps and thread or turn IDs where available.

Record the execution outcome separately from the mathematical claims. A run can end with a candidate proof, a reproducible counterexample, a conditional result, or useful partial progress. State the evidence and its scope. If the run ends without a summary, retain the latest saved research records and report the missing summary.

## Batch scheduling

`gacha run --all` takes the active items in the current workspace at the start of the batch and schedules one run for each. Default concurrency is two, with an override through `--parallel`.

- Start the next queued item when a slot becomes available.
- Resolve each item's agent, model, effort, and time budget using the batch flags and saved settings.
- Allow only one writing run per item at a time, including across separate scheduler invocations.
- Keep an item's error and saved progress if it fails, while continuing the other items.
- Exclude archived items from the default batch.

At the end, report each item's execution outcome, elapsed time, summary location, and any exceptions requiring attention.

The initial scope centers on a local process started by the user. Research cannot continue while the host is shut down or asleep. Built-in background execution remains an open design choice.

## Agent adapters

The first adapter targets Codex CLI. Claude Code CLI and other integrations can follow. Each CLI must already be installed and authenticated in the execution environment.

Per-item settings:

| Setting | Purpose |
| --- | --- |
| Agent | Select an adapter, such as `codex` |
| Executable | Identify the actual program, allowing different command names and installation paths |
| Model | Select a model ID accepted by that agent; otherwise use the tool's configuration |
| Effort | Select a supported reasoning effort; otherwise use the tool's configuration |
| Quota | Set the target duration of the run |
| Mode | Continue by default, with an option for a fresh attempt |

Adapters translate these settings into a launch command and handle output, session capabilities, and shutdown. Adapter IDs are configuration names; an adapter can map them to the appropriate executable or a user-specified path.

Run records should capture the effective configuration. Switching models does not move or discard an item's existing research history. Model availability, valid parameters, and account allowance depend on the actual agent. Failures should identify the concrete reason.

### Codex app-server

The proposed process model is one `codex app-server --listen stdio://` child per active item run. Start it in the item directory and set `cwd` on the thread and turns. This gives the scheduler an independent process lifecycle for each item in a batch. Use the WSL user's existing Codex configuration, authentication, and MCP registrations, including Jacobian when configured. Use Codex's configured sandbox and approval policy. If no sandbox is configured, use workspace-write with the problem directory as the working directory. In an unattended run, report requests that need a person and handle them with the protocol's decline or cancellation response.

1. Open the stdio connection, read newline-delimited JSON, send `initialize`, and follow with `initialized`. Match responses to request IDs and handle notifications and server requests while a turn is active. Capture stderr separately.
2. Use `model/list` to check the requested model and its supported reasoning efforts. Read all required pages and respect the current Codex account and provider. If only effort is specified, check it against the model that will run after applying Codex defaults. Treat model or effort rejection as a setup error for the item.
3. Use `thread/start` or `thread/resume` according to the research mode. Persist the thread ID, model, and provider. Create a paused Goal with `thread/goal/set`. Refer to the problem and its acceptance criteria and keep the objective within the protocol's length limit. Store the objective in `run.json`.
4. Launch the research prompt with `turn/start` and the resolved `model` and `effort`. Resolve Codex defaults for the current run before reusing a thread. Record the exact initial prompt in `prompt.md`. Activate the Goal after `turn/start` acknowledges the initial turn. This lets the first turn receive the launch prompt before native continuation begins.
5. Consume Goal updates and turn events. Codex owns automatic continuation while the Goal is active. All turns use the same run ID, deadline, and item lock. A `turn/completed` event closes its turn. Finalize the run when the Goal ends and pending work settles, Gacha reaches its stopping deadline, or an execution failure prevents further work. A mathematical dead end sends Codex back to planning or research within the same run. Use `thread/goal/get` to confirm Goal state when needed. Read the research checkpoint separately. If Codex reports Goal completion without a valid `DONE` checkpoint, report the run as ending with research still open.
6. If app-server disconnects before finalization, record the interruption and keep the saved thread ID and artifacts. Store the ending Goal state and Gacha's end reason separately.

Gacha owns timing, queue slots, and run records. The adapter reads JSONL from stdout and captures relevant stderr diagnostics as execution events. Generate the protocol schema from the supported CLI version when implementing the adapter. See the [Codex app-server reference](https://learn.chatgpt.com/docs/app-server#manage-a-thread-goal) and [Codex Goals guide](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex).

#### Goal text and launch prompt

Create one Codex Goal per run. Use this objective for both continue and fresh runs:

```text
Resolve the problem in PROBLEM.md under its stated assumptions and acceptance criteria. Follow AGENTS.md and continue from state.json. Save evidence and checkpoints as you work. Check the saved candidate against the original statement and record the conclusion, verification report, and evidence links before setting DONE and completing the Goal. If a route stalls, test a repair or start a different route. At wrap-up, save the checkpoint, remaining gap, and next concrete step.
```

In the interactive Codex CLI, prepend `/goal ` to the objective. In Gacha, send the objective as `thread/goal/set.params.objective`. The initial turn carries the details for this run:

```text
Run ID: {{runId}}
Mode: {{mode}}
Wrap-up begins: {{wrapUpAt}}
Finish by: {{finishAt}}
Run summary: runs/{{runId}}/SUMMARY.md

Follow the research instructions in AGENTS.md. Start work now from state.json.
For DONE, set state.json candidate, verification, and conclusion to item-relative paths of the saved files. Keep problemSha256 and runId on every checkpoint, and refresh updatedAt. Save the run summary before ending the Goal, including on successful completion.

Use the following launch copy of PROBLEM.md as the statement and acceptance criteria for this run.

{{problemText}}
```

Save the rendered initial turn in `prompt.md` and the objective in `run.json`. Gacha enforces the elapsed-time quota and sends the wrap-up instruction. Codex uses the same Goal for subsequent turns.

## Proposed implementation

The CLI uses **TypeScript + Node.js 22 or later**, targeting Linux and using WSL 2 + Ubuntu for local development and verification.

| Component | Proposal |
| --- | --- |
| Language and runtime | TypeScript and Node.js 22 or later |
| CLI | [Commander](https://github.com/tj/commander.js) |
| Process management | Node.js [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options), output streams, and Linux process control |
| Scheduling | An in-process queue with configurable concurrency |
| Configuration and run metadata | JSON files |
| Research content | Markdown and files organized by the agent |
| Event records | Append-only JSONL with selected lifecycle, turn, and diagnostic events |

Keep scheduling, item management, and agent adapters separate. The scheduler maintains execution metadata; the agent prepares research summaries. Preserve the previous valid summary during updates so an interruption does not destroy the last usable state.

Research tools such as Python, Sage, or Lean are chosen for the task. They do not need to use the scheduler's implementation language.

## Initial implementation scope

- [x] Create workspaces, add items interactively or from inline text or a Markdown file, and inspect, configure, and archive items.
- [x] Discover the nearest workspace from the current directory and keep separate workspaces' settings and item operations independent.
- [x] Generate each item's directory, problem statement, and brief working instructions.
- [x] Add the Codex CLI app-server adapter with per-item model and effort settings and run-time overrides.
- [x] Run one item, continuing by default and supporting fresh attempts.
- [x] Handle time budgets, wrap-up grace periods, interruption records, and recovery.
- [x] Persist the research phase in `state.json` and maintain the plan, evidence summary, artifact index, and per-Goal run records.
- [x] Schedule batches with default concurrency two and exclusive access per item.
- [x] Verify the CLI with a simulated app-server and run a smoke test through `gacha run` with Codex on WSL.

## Open decisions

- **Long-running sessions.** Users could initially run the CLI in a persistent terminal session. Whether to add built-in background execution and stop commands is still open.
