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
    ├── checkpoint-before/   # Gacha's copies of the pre-run handoff files
    └── SUMMARY.md            # This run's findings, evidence, and gaps
```

Read `PROBLEM.md` and `state.json` first. On continue, consult existing
`PLAN.md`, `STATUS.md`, and `INDEX.md` as needed. On a fresh run, form your
own route from the problem and published literature before consulting earlier
attempts in this directory. Leave the problem statement and Gacha's settings,
metadata, and logs to their owners.

Keep `PLAN.md` and `state.json` focused on the current route, gap, and next
action. Remove completed or superseded next steps and pending checks when
saving a checkpoint; retain useful history in `STATUS.md` or `notes/`.

Use the literature to locate an unresolved gap worth pursuing. Read the
results you rely on, check their scope, and explain how they affect the route.
Before substantial work on a new subproblem, look for known results and
algorithms, equivalent formulations, and suitable tools in related fields.
Expand thin searches using terminology and references from relevant papers.
Revisit this search when new evidence or a bottleneck changes the question.
Distinguish known results, purposeful reproductions, and potentially new
contributions. Literature search and small trials can proceed together.

Before substantial work, identify the mathematical uncertainty it addresses
and how the possible outcomes would change the route. Choose a useful
discriminating check or reusable argument. Reproduce a known result when it
supports a specific next step. If progress stalls, reconsider the formulation,
available tools, and the route's value before increasing the effort.

When Jacobian is available, use `math.find` to discover relevant operations.
Prefer `math.run` when the operation fits the problem, guarantees, and scale.

If a tool hits a resource limit, repeatedly returns `UNKNOWN`, or lacks a
needed capability, look for an alternative and test it on a small case.

By default, trust results from established tools within their documented
guarantees. Check a result independently when there is a concrete reason
to doubt it or when `PROBLEM.md` requires it.

Save the inputs, tool version, commands, and results needed to reproduce
computations. Record timeouts and exhausted budgets as `UNKNOWN`.

Run a short trial before committing to a long computation. If a search is
worth pursuing, run it in the background with its own time limit, which may
be two or three hours, and continue exploring other routes.

## Phase changes

Review intermediate claims at their stated scope while staying in `RESEARCH`.

Before every phase change, save the evidence, update `STATUS.md` with the
reason for the change and the next step, and update `INDEX.md` if an artifact
or its verification status changed. Then atomically replace `state.json`
with the new phase, relevant paths, and `updatedAt`. Keep `runId` and
`problemSha256`.

Save each phase change in its own tool call before starting work in the new phase.

- **PLAN → RESEARCH.** Once you choose a concrete check, save `PLAN.md`
  with the key lemma and how it advances the original claim. Record
  `RESEARCH` in `state.json` before running or delegating that check,
  then start it immediately.
- **RESEARCH → VERIFY.** Enter only for a complete candidate that would
  resolve `PROBLEM.md` if correct. Save the proof or counterexample as a
  separate file, record its relative path as `candidate`, and mark it pending
  verification in `STATUS.md`.
- **VERIFY → RESEARCH.** Save the verification findings, record the gap
  in `STATUS.md`, and update `PLAN.md` with the next repair. Save substantive
  revisions to a new file and verify that version.
- **RESEARCH or VERIFY → PLAN.** When evidence rules out the main route,
  enter `PLAN` to choose another. Save the reason, then replace `PLAN.md`
  with the new route and its first check when ready to resume `RESEARCH`.
- **VERIFY → DONE.** Check the saved candidate against the original
  quantifiers, assumptions, and acceptance criteria. Check key deductions,
  cited hypotheses, and whether computational inputs cover the cases
  claimed. Save the conclusion, verification report, and
  `runs/<run-id>/SUMMARY.md` before setting `DONE`. Include the `candidate`,
  `verification`, and `conclusion` paths in `state.json`, then finish the Goal.

While staying in `RESEARCH`, save each substantive result or failed check.
Refresh `STATUS.md` when evidence changes. In `INDEX.md`, link each reusable
note, review, script, input, or result, with its purpose and verification status.
For a batch, link its manifest and describe what it covers. Markdown links
are relative to their containing file: a run summary uses `../../notes/...`
or `../../experiments/...`. Paths in `state.json` are item-relative.
Skip scratch files and Gacha logs.

At wrap-up, first save the checkpoint and a brief `runs/<run-id>/SUMMARY.md`
using existing evidence: findings, evidence links, remaining gaps, and the
next concrete step. Make only essential plan, status, and index updates for
continuation; record unfinished checks or cleanup in the summary. For
unresolved work, keep this handoff compact instead of producing new
verification or conclusion reports. Do not start or replay computations or
wait for additional reviews. Finish the turn by the launch deadline.
