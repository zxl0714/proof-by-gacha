# Design notes

This document records the proposed behavior of Proof by Gacha. The project is in the design stage; no CLI has been implemented or released. Commands and file layouts are proposed interfaces.

The [README](../README.md) introduces the project to users. This document holds the details needed to discuss and implement it.

## Scope and principles

Proof by Gacha manages repeated attempts at research problems using existing agent CLIs.

The agent chooses its research approach, literature, experiments, tools, and proof strategy. The surrounding tool manages research items, execution, time budgets, saved artifacts, and recovery.

Confirmed product choices:

- Maintain a list of research items through a CLI.
- Support multiple independent workspaces, initialized explicitly and selected by the current directory.
- Offer guided interactive creation and fully non-interactive creation.
- Give each item its own directory for research materials and run records.
- Configure the agent, model, effort, and time budget per item.
- Continue existing research by default; also support fresh attempts.
- Allow time to wrap up rather than enforcing a deadline to the exact second.
- Maintain a current research summary for both the user and the next agent.
- Support batch execution with a default concurrency of two items.
- Use working-directory instructions rather than building filesystem isolation.
- Target Linux, with WSL 2 + Ubuntu for local development and verification.

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

`gacha init [path]` initializes the specified directory, or the current directory when no path is supplied. It creates the workspace marker and default settings in `.gacha/config.json`, plus an `items/` directory. It preserves existing files. Repeating initialization reports that the workspace already exists without resetting its settings or research.

Item commands search upward from the current directory for the nearest valid workspace marker. They operate only on that workspace, even when invoked from an item's subdirectory. `run --all`, `list`, and `status` never implicitly combine research from other workspaces.

If no workspace is found, report that clearly and suggest `gacha init` or changing into an existing workspace. Do not silently create a workspace or fall back to a global research directory. An invalid or unreadable marker should produce a specific error rather than redirecting the command to a parent workspace.

Item IDs are unique within a workspace; different workspaces can each have an item named `hydra`. Concurrency settings and item locks are scoped to their workspace. Two running batches in separate workspaces still share the machine's resources and any agent-account limits; workspace separation is organizational, not a resource sandbox.

There is no required global `~/.gacha` research directory. Users can choose that location as a workspace if they prefer, but the application does not require the workspace to be its own source repository. Users may independently version-control research workspaces.

## Research items and storage

A research item contains a problem statement, execution settings, current research state, and previous attempts.

Proposed workspace layout:

```text
research/
├── .gacha/
│   └── config.json              # Workspace marker and shared settings
└── items/
    ├── hydra/
    │   ├── item.json             # Title, agent, model, time budget, etc.
    │   ├── PROBLEM.md            # Definitions, assumptions, and research goal
    │   ├── AGENTS.md             # Working-directory and saving instructions
    │   ├── STATUS.md             # Current research summary
    │   ├── notes/                # Agent-organized research notes
    │   ├── experiments/          # Programs, experiments, and their results
    │   └── runs/
    │       └── <run-id>/
    │           ├── run.json      # Effective settings, timing, state, exit reason
    │           ├── prompt.md     # Task supplied to the agent for this run
    │           ├── events.jsonl  # Scheduler events and available structured output
    │           ├── stdout.log
    │           ├── stderr.log
    │           ├── SUMMARY.md    # What this run attempted and produced
    │           └── STATUS.md     # Research-state snapshot at the end of this run
    └── series/
        └── ...
```

The agent starts with its item's directory as the working directory. Problem statements, proofs, downloaded research sources, experimental scripts, and temporary research artifacts should stay inside it. Workspace-wide scheduling metadata stays in `.gacha/`.

These conventions are communicated through `AGENTS.md` and the launch prompt. Adapters handle any additional instruction mechanism required by a particular agent. This is a working agreement, not an operating-system sandbox. Credentials, caches, and internal session data belonging to the agent CLI still follow that tool's storage behavior.

Configuration and run records have stable locations. The agent may organize the research files as appropriate. Archiving an item preserves its directory and history.

## Proposed command surface

```bash
gacha init ./research
cd ./research

gacha add hydra
gacha add hydra --title "Does this Hydra variant terminate?" --problem-file ./hydra.md --agent claude --model '<MODEL_ID>' --effort '<EFFORT>' --quota 3h --non-interactive

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

The two `add` examples are alternative ways to create the same item. Creating an item with an existing ID must fail rather than overwrite its research.

Users provide the exact question, definitions, assumptions, and relevant background through the creation wizard or a problem file. The resulting statement is saved in the item's `PROBLEM.md`, which remains editable afterward. For example, `gacha add hydra` creates `<workspace>/items/hydra/` after successful validation.

Model IDs and effort values must be supported by the selected agent. Adapters should check their capabilities and report unsupported options rather than silently substituting another model or reducing effort.

Commands for editing metadata and archiving items are in scope; their exact syntax is still to be designed.

### Interactive creation

In an interactive terminal, `gacha add hydra` opens a guided setup. Ask for a title and problem statement, then offer selections for agent, model, effort, and time budget. The user can write the problem in an editor or import an existing file.

Command-line options can prefill the setup. Ask only for unresolved fields, and show meaningful defaults. Once the required values are supplied or resolved from saved defaults, create the item without further questions.

Agent choices come from configured adapters. Model and effort choices should use the selected agent's capabilities when discoverable, including an option to keep the agent's own defaults. Where a CLI cannot expose its model list or supported effort values, allow manual entry rather than inventing a fixed catalog. Changing the agent or model must recheck dependent choices.

Validate the input before creating the item. Cancelling setup should not leave a partially registered research item.

### Non-interactive creation

`--non-interactive` guarantees that creation never opens a prompt, editor, or confirmation dialog. A complete command can provide title, problem file, agent, model, effort, and quota in one invocation. Omitted optional settings may use documented defaults, including the agent's own model and effort defaults.

Non-TTY input must also behave non-interactively. Missing required values or invalid settings should produce a clear error and a nonzero exit status, without creating a partial item. A fully specified command should work without prompting even when `--non-interactive` is omitted.

`--problem-file` imports the supplied statement into the item's `PROBLEM.md`; subsequent runs use that saved copy. Referencing a source file outside the workspace does not move future research artifacts outside the item directory.

## Research modes

### Continue: the default

Start from the original problem, the current summary, and relevant existing materials. Work on what remains unresolved.

The research directory is the durable basis for continuation, including when switching agents or models. Whether an adapter also resumes a native agent session depends on its capabilities and remains an implementation decision.

### Fresh attempt

Start from the original problem and shared background supplied by the user, without automatically including earlier conclusions and approaches in the initial context. Explore independently, then compare with existing work and save the new findings.

A fresh attempt does not delete notes or reset the current state. New findings first belong in the current run's records. When incorporating them into `STATUS.md`, explain their relationship to previous results and retain unresolved disagreements.

Independence here concerns the starting context and approach. Existing files remain accessible; this mode does not provide a strict blind evaluation or filesystem isolation.

## Time budgets and wrap-up

Each item has a per-run elapsed-time budget, such as `3h`. Timing starts when the item actually begins running. Time spent waiting in the queue does not consume its research budget.

The intended lifecycle is:

1. **Research:** allow autonomous work, with useful intermediate progress saved to files.
2. **Wrap up:** near the deadline, ask the agent to stop opening new directions, organize results, and update the summary.
3. **Grace period:** allow a short extension to finish saving and exit.
4. **Forced stop:** if it still cannot finish, stop the run and its managed child processes, and record the reason.

For example, a three-hour run might enter wrap-up around `2h50m`, with a small grace period after the target deadline. Exact defaults are open. The aim is a predictable ending with usable state, not second-perfect timing.

Wrap-up requests need an adapter-specific implementation. Not every CLI accepts new messages while running. Where that is unavailable or unreliable, the adapter needs a fallback using the initial deadline instructions, saved checkpoints, and whatever session-continuation features the tool supports.

A forced stop can preserve only files and logs already written. It cannot guarantee a complete final summary. Keep the last valid summary and mark the run as having ended without a normal wrap-up.

Quota means elapsed time. It is separate from token limits, spending limits, and the agent account's own usage allowance.

## Summaries and research outcomes

`STATUS.md` serves two readers: the person returning to the project and the agent taking the next turn.

It should concisely answer:

- What is the exact current goal? Have definitions or assumptions changed?
- What results exist, and where is their supporting evidence?
- Which statements are conjectures, finite experiments, or conditional results?
- What specific gap remains?
- Which approaches failed, and why?
- What might be worth trying next?

Detailed arguments and computations live in their own files, referenced from the summary. Each run retains a snapshot so readers can follow how the research changed.

Execution status and mathematical status are separate. The scheduler can record a clean exit, a wrap-up timeout, or an execution failure. Research claims—including candidate proofs and counterexamples—need their supporting evidence and verification status described separately.

Material changes to the original question must also be recorded. A weaker statement or a result requiring additional assumptions should be presented with its actual scope.

## Batch scheduling

`gacha run --all` takes the active items in the current workspace at the start of the batch and schedules one run for each. Default concurrency is two, with an override through `--parallel`.

- Start the next queued item when a slot becomes available.
- Apply each item's own agent, model, effort, and time budget.
- Allow only one writing run per item at a time, including across separate scheduler invocations.
- Keep an item's error and saved progress if it fails, while continuing the other items.
- Exclude archived items from the default batch.

At the end, report each item's execution outcome, elapsed time, summary location, and any exceptions requiring attention.

The initial scope centers on a local process started by the user. Research cannot continue while the host is shut down or asleep. Built-in background execution remains an open design choice.

## Agent adapters

Planned integrations include Claude Code CLI and other agent CLIs. Each must already be installed and authenticated in the execution environment.

Per-item settings:

| Setting | Purpose |
| --- | --- |
| Agent | Select an adapter, such as `claude` |
| Executable | Identify the actual program, allowing different command names and installation paths |
| Model | Select a model ID accepted by that agent; otherwise use the tool's configuration |
| Effort | Select a supported reasoning effort; otherwise use the tool's configuration |
| Quota | Set the target duration of the run |
| Mode | Continue by default, with an option for a fresh attempt |

Adapters translate these settings into a launch command and handle output, session capabilities, and shutdown. Adapter IDs are configuration names; an adapter can map them to the appropriate executable or a user-specified path.

Run records should capture the effective configuration. Switching models does not move or discard an item's existing research history. Model availability, valid parameters, and account allowance depend on the actual agent. Failures should identify the concrete reason.

## Proposed implementation

The current preference is **TypeScript + Node.js**, targeting Linux and using WSL 2 + Ubuntu for local development and verification.

| Component | Proposal |
| --- | --- |
| Language and runtime | TypeScript and a supported Node.js LTS; pin the minimum version during implementation |
| CLI | [Commander](https://github.com/tj/commander.js) |
| Process management | Node.js [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options), output streams, and Linux process control |
| Scheduling | An in-process queue with configurable concurrency |
| Configuration and run metadata | JSON files |
| Research content | Markdown and files organized by the agent |
| Event records | Append-only JSONL and raw output logs |

Keep scheduling, item management, and agent adapters separate. The scheduler maintains execution metadata; the agent prepares research summaries. Preserve the previous valid summary during updates so an interruption does not destroy the last usable state.

Research tools such as Python, Sage, or Lean are chosen for the task. They do not need to use the scheduler's implementation language.

## Initial implementation scope

- [ ] Create workspaces; add items interactively or with flags; inspect, configure, and archive items.
- [ ] Discover the nearest workspace from the current directory and keep separate workspaces' settings and item operations independent.
- [ ] Generate each item's directory, problem statement, and brief working instructions.
- [ ] Add initial agent adapters, including Claude Code CLI, with per-item model and effort settings.
- [ ] Run one item, continuing by default and supporting fresh attempts.
- [ ] Handle time budgets, wrap-up grace periods, interruption records, and recovery.
- [ ] Save current summaries, per-run records, and state snapshots.
- [ ] Schedule batches with default concurrency two and exclusive access per item.
- [ ] Verify scheduling and failure handling with simulated agents, then test against real CLIs.

## Open decisions

- **Automatic continuation after an early exit.** Proposal: if an agent finishes a call normally while the research goal remains open and sufficient time remains, start another call to continue. Calls share the same run's remaining budget. Authentication errors, requests for user input, and repeated failures must not create an unlimited restart loop. This default has not been confirmed.
- **Wrap-up parameters.** Choose the reserved wrap-up time and grace period, and establish which interruption and saving strategies each CLI can reliably support.
- **Long-running sessions.** Users could initially run the CLI in a persistent terminal session. Whether to add built-in background execution and stop commands is still open.
