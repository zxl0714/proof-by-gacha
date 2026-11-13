# Research instructions

Work in this problem directory. The launch prompt gives the run ID, mode, and deadline.

```text
./
├── item.json                 # Gacha settings
├── PROBLEM.md                # User's statement and acceptance criteria
├── AGENTS.md                 # These instructions
├── state.json                # Current research checkpoint
├── PLAN.md                   # Route and next concrete check
├── STATUS.md                 # Findings, failed routes, and gaps
├── INDEX.md                  # Reusable artifacts and verification status
├── notes/                    # Derivations, references, candidates, and reviews
├── experiments/              # Scripts, inputs, results, and reproduction steps
└── runs/<run-id>/
    ├── run.json              # Gacha metadata
    ├── prompt.md             # Gacha's saved launch prompt
    ├── events.jsonl           # Gacha's event log
    └── SUMMARY.md            # This run's findings, evidence, and gaps
```

Read `PROBLEM.md` and `state.json` first. On continue, consult existing
`PLAN.md`, `STATUS.md`, and `INDEX.md` as needed. At the start of a fresh run,
record your own route before reading prior research. Leave the problem
statement and Gacha's settings, metadata, and logs to their owners.

When Jacobian is available, use `math.find` to discover relevant operations.
Prefer `math.run` when the operation fits the problem, guarantees, and scale.

If a tool hits a fixed resource limit, repeatedly returns `UNKNOWN`, or
lacks a required capability, record the obstacle and look for a better tool. Check what is
installed and consult official documentation or research papers. For a long
exact search, consider a local solver that can save proof certificates. Test
the alternative on a small known case before scaling. Use custom code for
unsupported methods or independent checks.

Save the tool version, inputs, commands, results, and witness or certificate
when available. Explain what the evidence establishes and how to verify it
independently. Record timeouts and exhausted budgets as `UNKNOWN`.

## Phase changes

Before every phase change, save the evidence, update `STATUS.md` with the
reason for the change and the next step, and update `INDEX.md` if an artifact
or its verification status changed. Then atomically replace `state.json`
with the new phase, relevant paths, and `updatedAt`. Keep `runId` and
`problemSha256`.

- **PLAN → RESEARCH.** Save `PLAN.md` with the key lemma, how it advances
  the original claim, and the next concrete check. Start that check immediately.
- **RESEARCH → VERIFY.** Save the complete candidate proof or counterexample
  as a separate file. Record its relative path as `candidate` and mark it
  pending verification in `STATUS.md`.
- **VERIFY → RESEARCH.** Save the verification findings, record the gap
  in `STATUS.md`, and update `PLAN.md` with the next repair. Save substantive
  revisions to a new file and verify that version.
- **RESEARCH or VERIFY → PLAN.** Save what ruled out the current route.
  Update `PLAN.md` with the alternative and its first check as soon as
  you choose it.
- **VERIFY → DONE.** Check the saved candidate independently against the
  original quantifiers, assumptions, and acceptance criteria. Check key
  deductions, cited hypotheses, and computational certificates. Save the
  conclusion, verification report, and `runs/<run-id>/SUMMARY.md` before
  setting `DONE`. Include the `candidate`, `verification`, and `conclusion`
  paths in `state.json`, then finish the Goal.

While staying in `RESEARCH`, save each substantive result or failed check.
Refresh `STATUS.md` when evidence changes. In `INDEX.md`, link each reusable
note, review, script, input, or result, with its purpose and verification status.
For a batch, link its manifest and describe what it covers. Use relative links.
Skip scratch files and Gacha logs.

At wrap-up, compare `INDEX.md` with the artifacts saved under `notes/` and
`experiments/` in this run. Add missing evidence links and refresh verification
statuses before saving the checkpoint and writing `runs/<run-id>/SUMMARY.md`
with findings, evidence links, remaining gaps, and the next concrete step.
