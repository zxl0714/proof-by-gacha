# Research workflow evaluation

This evaluation covers fifteen workflow/runtime revisions and sixty-two
recorded runs, from the initial baseline through r50. The task was to
improve Gacha through repeated changes, real research trials and inspection
of the resulting decisions. The [iteration log](research-iterations.md)
records the hypotheses, regressions, run IDs, evidence and follow-up choices.
The count includes failed, interrupted and control runs; it is not a count
of successful resolutions. All sixty-two referenced run records were found.
One historical host-disconnection record lacks final metadata, as recorded
in r45; its process disappeared and subsequent ordinary runs recovered the
saved work. The historical record was preserved rather than rewritten.

## Current workflow

Gacha manages the workspace, Codex app-server Goal, time budget, exclusive
item access and run records. Codex chooses the mathematical route and tools.
The [research instructions](agents-template.md) implement this loop:

1. Locate the question in current literature, including equivalent
   formulations, known open problems and methods from related fields.
   Revisit the search when the subproblem or bottleneck changes.
2. Choose a concrete check whose possible outcomes affect the route.
   Small experiments and literature work can proceed together.
3. Use suitable established tools and trust their documented guarantees.
   Preserve reproducible inputs/results, check a new data export on a
   small case, and keep resource exhaustion distinct from a mathematical
   answer. Change the method when a trial exposes a bottleneck.
4. Save substantive findings and revise the current gap and next action.
   Evidence can return research to PLAN. Only a complete candidate for
   the original statement enters VERIFY; a successful version-specific
   review and saved conclusion permit DONE.
5. At the deadline, save a compact handoff using existing evidence.
   Continue from the files and thread by default. Gacha preserves the
   pre-run handoff so damage or interruptions can be reconciled.

The problem statement belongs to the user. Research plans and artifacts
belong to the researcher. The evaluation did not insert observer-selected
mathematical hints into ongoing trials. Guidance changes stay generic;
there is no built-in finite-geometry strategy or mandatory solver stack.

## Evidence for the requested improvements

| Requested work | Evidence inspected | Practical conclusion |
| --- | --- | --- |
| Adjust the workflow in response to observed problems | Fifteen logged revisions, current template and runtime changes: research-value decisions, source discovery, phase timing, compact wrap-up, saved references, permissions and handoff recovery | The changes address observed failures and retain agent choice of mathematical approach. |
| Run real Erdős #1159 trials after changes | Run table and authoritative local run records; fresh, continuation, paired and interruption trials, mostly 10-minute quotas with stated exceptions | Evaluation uses actual `gacha run` through Codex app-server, not simulated mathematical progress. |
| Inspect behavior and decide what to improve next | Public calls/results, saved evidence, phase events, before/after snapshots and per-revision findings | Useful observations include both regressions and successful decisions; unchanged guidance is retained when no further rule is justified. |
| Improve research beyond repeated small searches | Literature changed route choices; a known conjectural formulation was discovered; bounded failures led to algorithm/encoding changes and general structural questions | The loop can use external knowledge and change direction. These observations do not establish the novelty of its mathematical claims. |
| Preserve continuation and distinguish unresolved work from completion | r48 ordinary SIGINT/continue recovered 31 newer artifacts without replay; r46–r50 saved-reference audits; r50 matrix run followed PLAN/RESEARCH/VERIFY/DONE with the saved candidate reviewed after entering VERIFY | Practical continuity and correct completion behavior are observed. The controlled interruption result retains the same parent thread. |
| Exercise the flow outside the main open problem | Historical stick, graph-product and matrix controls; current-guide matrix regression r50 completes in 364.2 recorded seconds with a correct self-contained classification | There is evidence beyond finite geometry. The controls are known-result problems, not a frontier-research benchmark. |
| Keep the implementation checked | Build and all seven CLI integration tests passed at ccded3b; source, tests, package configuration and current guide are unchanged since that tested version | Existing runtime checks remain applicable; observation-only and documentation-only work does not require repeated tests. |

The latest Erdős trial, r50, is deliberately unresolved. A full pair-model
trial remains UNKNOWN after bounded nonlinear pricing. The agent saves the
restricted evidence, succeeds on a distinct local integer subproblem, and
selects a different bounded-product pricing formulation for continuation.
It does not mislabel local feasibility or a restricted separator as a
solution. The selected new formulation has not yet been run.

The current-guide matrix control is complete: trace subadditivity holds
exactly for 0 < r <= 1, while the stronger matrix-order inequality holds only
for r = 1. Its saved proof covers every finite dimension and singular inputs;
a fixed projection pair supplies the entire remaining counterexample
range. The candidate, independent review, final verification, conclusion
and run summary are preserved. This reproduces known mathematics.

## Limits of this evaluation

Erdős #1159 remains open in the evaluated workspace. No improved public bound,
new construction, publication-ready novelty claim or reliable ability to
solve frontier conjectures is established. A working research process is
not evidence that any particular conjecture will yield to it.

Trials are stochastic and sometimes overlap in service load. Most trials
concern one main problem. Comparisons are not statistically controlled
performance estimates. Current-source retrieval can still fail; the
researcher records inaccessible full texts without importing their theorems.

Central checkpoints sometimes refresh only near wrap-up, although individual
results are saved earlier. Sampled reference checks and one controlled
same-thread recovery do not prove correctness at every interruption instant
or after arbitrary context loss. A full-night endurance benchmark and broad
cross-domain research evaluation are outside the evidence collected here.

The requested multi-round implementation/evaluation work is complete through
r50. The current generic workflow, reproducible run history and explicit
limitations provide a concrete basis for future changes. Mathematical
research may continue from the saved unresolved checkpoint without changing
the product or rewriting its research plan.
