# Research workflow iterations

This development log records changes motivated by observed Gacha research runs.
The objective is autonomous mathematical progress with useful continuity,
literature use, and tool selection. A short run is evidence about behavior;
it is not a benchmark of a model's ability to solve an open conjecture.

## Evaluation setup

- Problem: the unchanged Erdős #1159 statement from erdos-1159-v2, including
  arbitrary finite projective planes and the quantifiers for both resolutions.
- Workspace: /home/xiaolu/research/gacha-iterations.
- Fresh runs use separate items with the same statement, model gpt-6.1-sol,
  effort ultra, and a 10-minute quota, unless a row states otherwise.
- Gacha begins wrap-up at 8m30s for this quota. Compare actual research and
  total elapsed time, not just the nominal quota.
- The baseline and first revision overlap in wall time. Model sampling,
  internal delegation, and shared service load remain uncontrolled.
- Research is not steered during a trial. The observer reads run records,
  phase events, saved artifacts, and parent/descendant Codex tool traces.
- Forked rollouts contain inherited history. Exclude that prefix when
  attributing actions to a child.
- The original research items and their agent-authored research files are
  outside the experiment.

## Questions used in each review

1. Did retrieved knowledge change a research decision? Record the source,
   applicable claim, and the action it enabled or avoided.
2. Was the selected subproblem connected to the original quantifiers?
   Did a trial distinguish routes or merely reproduce a known case?
3. Were existing tools or equivalent formulations sought when useful?
   Was a resource limit interpreted correctly and followed by a justified action?
4. Did evidence change the plan? Were mathematical findings distinguished
   from known results, calibration, and unresolved guesses?
5. Did state changes and saved artifacts agree? Can a subsequent run resume
   from the actual gap without repeating failed work?
6. How much intervention was needed? A substantive negative result can be
   useful even when the original problem remains open.

Reviews use concrete examples, including regressions. Tool-call counts,
document length, self-rated novelty, and a single stochastic run do not
establish an improvement.

## Runs

| Item | Guidance | Run | Outcome |
| --- | --- | --- | --- |
| erdos-1159-r00 | eab4faf baseline | 2026-11-14T03-02-16-365Z-8c494933 | quota; RESEARCH; 567.4s; summary saved |
| erdos-1159-r01 | Literature-informed route selection | 2026-11-14T03-03-17-670Z-4b8730c7 | quota; RESEARCH; 554.7s; summary saved |
| erdos-1159-r01 (continue) | Revision 1; same thread and saved work | 2026-11-14T03-14-27-587Z-c3517413 | quota; RESEARCH; 566.8s; summary saved |
| erdos-1159-r02 | Revision 2; decision-driven work | 2026-11-14T03-15-02-238Z-4db2b5bd | quota; RESEARCH; 598.3s; summary saved |
| erdos-1159-r03-control | Revision 2; copied checkpoint, new thread | 2026-11-14T03-28-05-001Z-f6a04176 | quota; RESEARCH; 553.3s; summary saved |
| erdos-1159-r03 | Revision 3; same copied checkpoint, new thread | 2026-11-14T03-28-53-768Z-f1d51e24 | quota; RESEARCH; 529.8s; summary saved |
| erdos-1159-r04 | Revision 3; fresh replication | 2026-11-14T03-39-45-185Z-19568ebd | timeout; RESEARCH; 630.7s; summary saved |
| stick-allocation-regression-r03 | Revision 3; original stick problem | 2026-11-14T03-39-45-183Z-0f9fc349 | done; DONE; 540.1s; summary saved |
| erdos-1159-r05 | Revision 4; r04 checkpoint, new thread | 2026-11-14T03-59-01-318Z-5f970137 | timeout; RESEARCH; 630.7s; summary saved early |
| erdos-1159-r06 | Revision 5; r05 checkpoint, new thread | 2026-11-14T04-12-04-223Z-28b27351 | quota; RESEARCH; 552.3s; summary saved |
| erdos-1159-r07 | Revision 5; fresh trial | 2026-11-14T04-12-04-212Z-e2062565 | quota; RESEARCH; 591.9s; summary saved |
| erdos-1159-r08 | Revision 6; r06 checkpoint, new thread; 20m | 2026-11-14T04-24-06-554Z-99611d52 | quota; RESEARCH; 1036.1s; summary/index links valid |
| erdos-1159-r09-control | Revision 6; r07 checkpoint, new thread | 2026-11-14T04-49-41-725Z-20f6abc5 | quota; RESEARCH; 526.8s; summary/index links valid |
| erdos-1159-r09 | Revision 7; same r07 checkpoint, new thread | 2026-11-14T04-49-41-737Z-436ee096 | needs input; 93.3s; no current-run summary |
| erdos-1159-r10-control | Revision 6 guidance; repaired environment; r07 checkpoint | 2026-11-14T05-21-19-807Z-a4749fba | quota; RESEARCH; 527.5s; no approval requests |
| erdos-1159-r10 | Revision 7 guidance; repaired environment; r07 checkpoint | 2026-11-14T05-21-19-821Z-01dec749 | quota; RESEARCH; 530.4s; no approval requests |
| erdos-1159-r10 (continue) | Revision 7 guidance; runtime revision 8; same thread; 20m | 2026-11-14T05-33-34-014Z-0539fc66 | quota; 1061.0s; autonomous SAT backend change, scoped route barriers and non-Desarguesian controls; unresolved |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; same thread; nearfield checkpoint; 10m | 2026-11-14T05-57-17-566Z-b4899381 | quota; 561.6s; scoped infinite-family construction and failed direct extension; unresolved |
| graph-product-control-r11 | Unchanged guidance/runtime; new problem; 10m | 2026-11-14T05-57-17-541Z-a3a78a12 | done; 325.6s; published counterexample applied; full phase sequence |
| erdos-1159-r10 (fresh) | Unchanged guidance/runtime; existing research directory; new thread; 10m | 2026-11-14T06-11-24-306Z-39604a78 | quota; 521.0s; prior work consulted, new conditional route, earlier artifacts and index entries retained |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; inverse-route checkpoint; same thread; 20m | 2026-11-14T06-27-23-686Z-fec9a44b | quota; 1055.4s; free-arrangement reformulation, scoped local restrictions and Dickson construction barriers; unresolved |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; local-restriction checkpoint; same thread; 10m | 2026-11-14T06-50-55-338Z-34e4662f | quota; 526.2s; scoped analytic generalizations, global-test limitations and revised next step; unresolved |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; translated-graph checkpoint; same thread; 10m | 2026-11-14T07-04-03-272Z-3e1a9c07 | quota; 569.0s; translated-pair obstruction, marked compatibility condition, RESEARCH -> PLAN |
| matrix-power-control-r16 | Unchanged guidance/runtime; new matrix-analysis problem; 10m | 2026-11-14T07-04-03-275Z-9e30af09 | done; 573.3s; correct complete ranges, analytic proof, exact counterexample, full phase sequence |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; PLAN marked-gluing checkpoint; same thread; 10m | 2026-11-14T07-22-08-974Z-451ea5b8 | quota; 526.8s; PLAN -> RESEARCH; scoped three-pencil compatibility, no original resolution |
| erdos-81-r17 | Unchanged guidance/runtime; user's quoted graph problem; new item; 10m | 2026-11-14T07-22-08-974Z-33d997d1 | done; 550.1s; complete phase sequence; attributed reconstruction of an existing proposed proof |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; critical global-system control; same thread; 10m | 2026-11-14T07-39-45-207Z-3912e047 | quota; 560.6s; known-witness control, scoped algebraic reformulation and construction-class barrier; RESEARCH |
| erdos-1159-r10 (continue) | Unchanged guidance/runtime; marked-value lifting gap; same thread; 20m | 2026-11-14T07-53-20-201Z-b15e27e8 | quota; 1040.9s; literature-based counterfamily to auxiliary sufficiency; mixed-jet repair; INDEX accidentally overwritten |
| erdos-1159-r10 (continue) | Revision 9; handoff recovery and current pending checks; same thread; 10m | 2026-11-14T08-22-50-434Z-00c0447b | quota; 542.5s; index recovered with earlier entries retained; all-pair refinement, finite controls and a literature-dependent next gap; RESEARCH |
| erdos-1159-r10 (continue) | Unchanged revision9; product-span applicability gap; same thread; 20m | 2026-11-14T08-37-11-154Z-0c15b146 | quota; 1061.6s; applicable literature closes critical criterion, published larger minimal blocker refutes deletion reduction; RESEARCH |
| erdos-1159-r10 (continue) | Unchanged revision9; value after intermediate success; same thread; 10m | 2026-11-14T08-57-41-235Z-5ab5ac77 | quota; 525.9s; known-example extraction refutes a gauge shortcut; value reassessment records RESEARCH -> PLAN |
| erdos-1159-r10 (continue) | Unchanged revision9; structural PLAN checkpoint; same thread; 10m | 2026-11-14T09-09-26-247Z-702d9c22 | quota; 562.8s; intrinsic invariant and scoped countermodels; PLAN -> RESEARCH recorded after experiments |
| erdos-1159-r24-phase | Revision10; new item and thread; original statement; 10m | 2026-11-14T09-20-31-870Z-d43e0764 | quota; 524.9s; research recorded before delegation/computation; scoped all-order relaxation barrier; PLAN -> RESEARCH -> PLAN |
| erdos-1159-r24-phase (continue) | Revision10 unchanged; natural PLAN checkpoint; same thread; 10m | 2026-11-14T09-31-05-437Z-afd73765 | quota; 563.2s; research recorded before delegated continuation; scoped residue identity and route barriers; PLAN -> RESEARCH -> PLAN |
| erdos-1159-r24-phase (continue) | Revision10 unchanged; encoding-value checkpoint; same thread; 10m | 2026-11-14T09-45-17-032Z-632ba054 | quota; 529.8s; failed encoding not escalated; literature-informed route barriers and neutral-move repair; PLAN -> RESEARCH -> PLAN |
| erdos-1159-r24-phase (continue) | Revision10 unchanged; neutral-repair checkpoint; same thread; 20m | 2026-11-14T09-57-17-614Z-2c84f803 | quota; 1070.5s; literature-derived repair trap, checked escape and all-plane sampler barrier; transient PLAN absent from sampled events |
| erdos-1159-r24-phase (continue) | Revision11; separate phase operations; same thread and mathematical checkpoint; 20m | 2026-11-14T10-28-07-221Z-16b2d54d | quota; conditional repair and cover-objective limits; PLAN/RESEARCH/PLAN observed |
| erdos-1159-r24-phase (continue) | Revision11 unchanged; near-minimum external-conic covers; 25m | 2026-11-14T10-52-38-254Z-114aa506 | quota; literature changes the route; finite exclusions; incomplete SMT exports detected by observer |
| erdos-1159-r30-fresh | Revision12; fresh statement-only control; 10m | 2026-11-14T11-19-55-524Z-3d69fc9d | quota; 553.8s; RESEARCH; saved JSON readbacks pass, formal profiles remain feasible, fixed q13 diagnostic UNKNOWN |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; finite-diagnostic checkpoint; 15m | 2026-11-14T11-37-07-679Z-0fa6eda4 | quota; 792.3s; autonomous export repair, bounded solver campaign stopped, all-order formal coding barrier; RESEARCH/PLAN/RESEARCH |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; geometric-compatibility checkpoint; 20m | 2026-11-14T11-54-10-198Z-f7540afc | quota; 1079.7s; scoped structural results and finite repair traps; RESEARCH to PLAN, no full candidate |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; return to a general route; 15m | 2026-11-14T12-17-26-391Z-f45b1ae0 | quota; 826.7s; finite traps generalized to every fixed even cap and deletion budget; PLAN/RESEARCH/PLAN, original problem open |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; value of the next route; 15m | 2026-11-14T12-36-28-867Z-d45106c9 | quota; 785.7s; odd-cap obstruction closed, coexistence with known blockers motivates route change; PLAN/RESEARCH/PLAN, original problem open |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; source-proof transfer checkpoint; 15m | 2026-11-14T12-56-39-331Z-290fea0b | quota; 781.3s; source mechanism checked, quadratic-code repair excluded uniformly, narrow-weight code route retained as unproved; PLAN/RESEARCH/PLAN |
| erdos-1159-r30-fresh (continue) | Revision12 unchanged; sharpen narrow-weight code route; 15m | 2026-11-14T13-15-43-251Z-0462dc35 | quota; 780.9s; conditional pencil obstruction and full coefficient-tail barrier; specific second-order calibration next; current-source coverage gap noted |
| erdos-1159-r30-fresh (continue) | Revision13; current-source checks and second-order calibration; 10m | 2026-11-14T13-34-40-068Z-d6478f78 | quota; 526.4s; current source checked, calibrated pair transform, 174 direction orbits; uniform choice nonintegral, general profile still open |
| erdos-1159-r30-fresh (continue) | Revision13 unchanged; nonuniform orbit diagnostic and route value; 10m | 2026-11-14T13-48-07-021Z-73061a45 | quota; 534.5s; exact integer orbit model feasible; low-four output dimension at most two; stops cutoff expansion and returns to all-plane proof audit |

## Revision 1 — literature-informed decisions

The baseline instructions allowed a fresh run to mean choosing a route
before any research. Clarify that fresh attempts can use published literature,
while forming their own approach before reading earlier local attempts.

Add a short instruction to locate unresolved gaps, read relied-on results
with their scope, search for known subproblem results and tools across related
fields, and revisit that search when evidence changes the question.

Hypothesis: this will make source findings influence both initial planning
and later decisions, with less unintentional rediscovery.

Validation: the existing CLI integration suite passes (4 tests). Both live
runs ended normally at quota with RESEARCH checkpoints, summaries, and
unchanged statements. Neither claimed to solve the original problem.

Observed comparison:

- The baseline used keyword searches and primary sources too. After two
  q=11 SMT attempts exhausted the work cap, it changed to a Singer-orbit
  construction and saved a checked finite witness. Literature also suggested
  a conditional approximate-algebraic-structure route. These are baseline
  strengths, not effects of the new wording.
- Revision 1's initial plan named a concrete incidence inequality and its
  connection to the target. Its structural worker searched the scattered-space
  literature when the moment route stalled (03:06:12 UTC), cited the
  Blokhuis-Lavrauw work and Lavrauw thesis, and isolated a missing pair-existence
  condition. The run then investigated a scoped translation-plane construction,
  with Hall9 and explicit Andre-family trials. It explicitly left novelty open.
- Both runs reproduced the known C>=4 obstruction and small q=5,7 cases.
  Revision 1 still tried q=11,13 with several formulations. The run called
  these purposeful reproductions, but the decision that each larger trial
  would settle was not clear in advance. This is a remaining target for
  improvement, not evidence that all finite experiments were wasted.
- Both saved useful work and specific gaps. Neither event log records a
  return to PLAN while the main emphasis changed. Later plan updates describe
  the new direction. Inspect this further in continuation; phase records do
  not yet fully expose route changes.
- The short paired trial supports keeping the clarified literature guidance,
  but does not establish a causal performance gain or mathematical novelty.

Next hypothesis: requiring an intended decision before substantial work can
make experiments and derivations more selective without imposing a fixed
number of routes or an arbitrary time limit.


## Revision 2 — give substantial work a decision purpose

Add a short instruction to identify the mathematical uncertainty and how
possible outcomes would change the route. A reproduction should support a
specific next step; stalled work should trigger consideration of the
formulation, tools, and value of the route before increasing effort.

Hypothesis: this encourages useful discrimination and reuse without prescribing
a fixed research strategy, number of alternatives, or per-step timeout.

Also continue revision 1 for another ten minutes, with its existing instructions
unchanged. This separately tests whether the saved gap and evidence support
new work rather than repeated startup research.

Observed results:

- The revision-1 continuation resumed the same thread and pursued the saved
  spread-pair gap. It enumerated a different order-27 spread, compared a
  restricted scalar family with general linearized graphs, saved a finite
  witness and a restricted-method obstruction, and searched design/covering
  literature. It did not repeat the initial q=5,7 calibration. This is useful
  continuity, with novelty still explicitly unestablished.
- Revision 2 stated an intended moment-versus-incidence distinction, but again
  performed small solved cases and a bounded q=13 trial. The q=13 trace contains
  both interface errors and genuine work exhaustion; repairing unsupported
  bit-vector syntax is not the same as blindly repeating a long solver run.
  The wording has not yet demonstrated better research selection.
- A concrete phase error appeared in revision 2 at 03:21:11 UTC. STATUS.md said
  both VERIFY and that no complete candidate for the original problem existed.
  The saved candidate was explicitly a partial package. The agent returned
  to RESEARCH at 03:22:43, and never claimed DONE. Intermediate claims deserve
  review, but this VERIFY interval misrepresented progress on the original goal.
- Plans accumulate superseded instructions above the latest checkpoint.
  The warm continuation followed the latest gap, but file-only recovery
  still needs a live test. Both revisions also retain RESEARCH while
  describing material changes of main route.

Next change: distinguish intermediate review from original-problem VERIFY,
make the main-route transition explicit, and maintain one current plan.
Test new-context continuation from copied research files, without injecting
a research answer or editing the agent's mathematical notes.


## Revision 3 — current plans and the scope of VERIFY

Clarify that intermediate-claim review stays in RESEARCH. VERIFY requires a
complete candidate that would resolve PROBLEM.md if correct. Make the
return to PLAN explicit when evidence rules out the main route, and keep
PLAN.md focused on the current next action instead of accumulating
superseded instructions.

The paired trial starts both items from revision 1's completed continuation
checkpoint (2026-11-14T03-14-27-587Z-c3517413), with 81 copied research/run files.
Mathematical notes, results, plans, status, index, and checkpoint are copied
byte-for-byte. Historical summaries retain working relative links. In copied
run metadata only, threadId becomes sourceThreadId and importedFrom records
the source path, preventing reuse of the source conversation. New items retain
their own AGENTS.md and settings from gacha add. The source remains untouched.

This tests file-based recovery with new conversations, including selection of
the actual next gap, treatment of partial claims, and replacement of stale
plan entries. The model, effort, quota, and starting research files are the same;
sampling and shared service load remain uncontrolled.


Cold-continuation observations:

- Both new conversations used the saved current gap, investigated thin/shallow
  hitting sets and incidence rounding, and preserved the distinction between
  a reformulation and a proof of existence. File-based recovery worked.
- The control used a known Klein construction to resolve the finite q=11
  feasibility question left UNKNOWN by earlier solver calls. This is a
  concrete instance of literature enabling reuse rather than another search.
- The revised run replaced the accumulated plan during research with a current
  route and a discriminating fixed-spectrum trial. It reported an order-three
  infeasible spectrum and bounded order-five UNKNOWNs, without escalating a
  large search. The control also replaced its plan by the end (29 lines versus
  21 in the revised run), so this is not a categorical capability difference.
- Both remained in RESEARCH while checking partial claims, and neither
  declared DONE. The imported plan already contained a complete-candidate
  guard, so this pair alone does not isolate the new VERIFY wording.
- The 4 existing CLI tests pass again. A fresh #1159 replication checks
  the phase guard without inherited research instructions. A separate original
  stick-allocation problem checks that a complete candidate can still reach
  VERIFY and DONE. The stick run received only the user's original statement,
  with no old proof, answer, or added acceptance checklist.

Fresh-replication observations:

- The #1159 run stayed in RESEARCH while reviewing moment relaxations and
  finite greedy/exchange obstructions. It saved a specific two-insertion-trade
  next step, without claiming a resolution or established novelty.
- The stick run followed PLAN -> RESEARCH -> VERIFY -> DONE. Its complete
  proof gives c_n = 2^n / (2^(n+1)-1). Review of the saved proof covers arbitrary
  n, distinct interior marks, and at most n cuts; finite solver checks are
  supplementary. The observer also read and checked the complete argument.
- #1159 exceeded the grace period. The wrap-up steer was delivered at
  03:48:16 UTC and acknowledged in the agent's commentary at 03:48:23.
  At 03:48:38 it nevertheless launched replays of two experimental scripts.
  Its next tool call, saving the final notes, checkpoint, and summary, arrived
  at 03:50:06. The hard stop interrupted the turn at 03:50:15. The checkpoint
  and summary survived; the run correctly records timeout, not normal quota
  completion.
- This is evidence of a wrap-up ordering problem, not a missing steer.
  Existing instructions put index/status refresh ahead of the durable
  checkpoint and gave only the wrap-up start time. Next test: state the
  finish deadline, save the checkpoint and summary first, and leave unfinished
  checks explicitly pending instead of starting or replaying work at wrap-up.

The fresh runs support the phase distinction for these cases. They do not
establish a research-performance improvement or guarantee future compliance.


## Revision 4 — finish with a durable checkpoint

The fresh revision-3 run received the wrap-up steer but started expensive
replays before saving its final checkpoint. Add the target finish timestamp
to both launch and wrap-up input. At wrap-up, save the checkpoint and summary
from existing evidence first, then refresh the index. Unfinished checks remain
pending; do not start/replay computation or wait for additional reviews.
The research quota, grace period, tool trust, and mathematical verification
requirements are unchanged.

The integration test now checks that the actual app-server launch input equals
the saved prompt and that launch and steer receive the same finish deadline,
derived from the run's start and quota.

A new-context continuation from r04's saved files will test whether the partial
research remains usable and whether the revised wrap-up saves and finishes in
time. It receives copied mathematical files without observer modifications.
This is a recovery and wrap-up test, not a controlled research-quality comparison.


Observed results:

- The run resumed the saved two-insertion question, generalized the tangent
  reduction into a sound propagation rule, and ruled out bounded preserving
  trades on the saved seeds. It then relaxed preservation and found a
  net-coverage-improving swap. One-for-one descent still reached a local trap.
  This is method-level progress, not a solution of the original conjecture.
- A primary-source secant theorem ruled out a tempting direct polynomial
  argument before the agent attempted it. Tool discovery exposed carrier and
  request-size limits, and the agent chose reduced instances or exact
  enumeration instead of submitting oversized work.
- The early-save change worked: wrap-up began at 04:07:31 UTC, and both the
  summary and checkpoint were saved at 04:08:02. No new computation or replay
  was launched after the steer.
- The run nevertheless timed out. At 04:09:25 the agent submitted a large
  documentation patch, including fresh partial-verification and conclusion
  reports and a PLAN.md replacement. The patch used delete/add operations
  for the same file, which apply_patch rejected. It did not recover before
  the 04:09:31 hard stop. PLAN.md remained stale, while state.json and the
  summary preserved the new findings and actual next step. The checkpoint
  also referenced three planned files that the rejected patch never created
  (verification, conclusion, and an artifact manifest). These are incomplete
  references in RESEARCH, not evidence of a completed result.
- The 4 integration tests pass, but they establish protocol delivery and
  lifecycle behavior, not reliable model compliance. This live trial is
  explicitly a timeout, not a successful wrap-up.

Next change: make unresolved-run wrap-up a compact handoff rather than a
second report-writing phase. Keep the summary as the central handoff, make
only essential continuation updates, and leave unfinished checks or cleanup
pending. Do not add tool-specific patch instructions to the research guide.


## Revision 5 — keep unresolved-run handoffs compact

Revision 4 preserved the important checkpoint but the agent still generated
a large, redundant final documentation batch. Limit wrap-up to a compact
summary and essential continuation updates. Unfinished checks and cleanup
remain explicit pending work. Full original-problem VERIFY and DONE still
require the saved candidate, verification, and conclusion.

Test two new items: a cold continuation from r05's interrupted checkpoint
(including its stale plan, copied without edits) and a fresh #1159 run.
Both use the same ten-minute quota and run concurrently. This checks recovery
from imperfect documentation as well as a fresh handoff, without injecting
an observer-written plan or a mathematical answer.


Additional observer finding, not injected into either live trial:

The directly relevant [Illes-Pisinger technical report, 1997, pp. 6-9](
https://di.ku.dk/forskning/Publikationer/tekniske_rapporter/tekniske-rapporter-1997/97-13.pdf)
already models this covering problem with integer programming and a simulated
annealing heuristic. It permits infeasible intermediate states, penalizes
empty/overfull lines, and incrementally updates the objective in O(q) per
point change. Its finite upper-bound table does not prove a constant bound
over all planes.

The observer read the original method and result-table pages. The r04-r06
notes inspected so far do not cite this algorithmic baseline. This does not
make their bounded-trade obstructions invalid or redundant: the mathematical
claims and the old heuristic are different. It is a concrete literature
coverage question before further search engineering. Future evaluation should
check whether citation/terminology expansion finds relevant algorithms and
whether those findings actually change a decision, without adding this
problem-specific paper to the generic instructions.


Revision-5 outcomes:

- Both live trials ended normally before the ten-minute target, without
  new computations/replays or new final verification/conclusion reports at
  wrap-up. Checkpoints and summaries were saved about 33 seconds after the
  steer; essential plan/index updates followed. Neither entered VERIFY/DONE.
  The four integration tests also pass.
- Cold recovery selected the newer net-coverage question from state.json,
  despite the stale plan. It did not repeat the old preserving-trade test.
  It removed the inherited nonexistent report/manifest pointers rather than
  inventing completed reports. Saved scripts and a flow reduction supplied
  stronger finite neighborhood obstructions and a few improving trades.
  The all-plane problem remains unresolved.
- The fresh run recovered known moment bounds, produced abstract profile
  families, and tried two finite q13 encodings under the fixed work limit.
  Both returned UNKNOWN; scope was kept explicit. It still chose familiar
  small-case work, so reliable wrap-up does not imply improved research
  selection or novelty.
- A separate relative-link audit found 10/10 broken evidence links in r06's
  new SUMMARY.md: each used ../../../ from runs/<run-id>/, one level too high.
  Its INDEX.md links were valid. The fresh run's 15 summary links were valid.
  The inherited r05 summary has the same error (16/16 links). No observer
  repaired these research files. This is a handoff usability failure even
  though the files and mathematical findings remain present.

Next change: state the reference bases explicitly. Checkpoint paths are
item-relative; Markdown links are relative to their containing document.
A run summary reaches notes/ and experiments/ using ../../, not ../../../.
Test this in another genuine continuation and inspect the saved links.


## Revision 6 — make evidence links usable

Clarify the distinct bases for Markdown links and checkpoint paths in the
template and live wrap-up prompt. This is a file convention, not another
mathematical verification requirement.

Start a cold continuation from r06's completed checkpoint, including the
unmodified historical summaries. Use twenty minutes this time to observe
whether the next bounded-trade question remains productive over a longer
research interval. Only the new summary's links are the direct test of this
wording; the longer quota and evolving research preclude a causal performance
comparison with earlier ten-minute trials. Original items remain untouched.


Observed results:

- The twenty-minute run ended normally at 17m16s, shortly after its scheduled
  wrap-up at 17m. The four integration tests pass. All 11 local Markdown links
  in the new summary and all 49 in INDEX.md resolve to files. The checkpoint's
  saved artifact paths exist. Historical summaries were not repaired by the
  observer. This single trial supports the clarified convention, not a
  guarantee of future link correctness.
- The three-insertion pilot found a checked finite escape. Instead of simply
  extending the descent, the agent derived and reviewed a conditional bound
  on exchange candidate pools for near-blockers. A small scaling diagnostic
  then exposed the remaining need for suitably sparse-error seeds. No
  asymptotic failure was inferred from the finite samples.
- Literature had a concrete effect. The agent used
  [Szonyi-Weiner, Theorem 1.1](https://arxiv.org/html/1901.09649v1)
  to rule out the saved q=3u profiles in Galois planes of order 3^h, h>=3,
  despite their satisfying stronger aggregate and per-line numerical models.
  The observer checked the cited theorem's hypotheses and the deduction.
  The run explicitly kept its finite-field scope separate from arbitrary
  planes. The next question concerns that missing general-plane step.
- The run stayed in RESEARCH while reviewing intermediate claims and made no
  claim of a full candidate, established mathematical novelty, or DONE.
  Main-route PLAN transitions and continuously replacing stale plan prose
  are still less clearly exercised than the complete-candidate phase guard.
- No truly long computation was needed. These observations do not validate
  two-hour background computation or overnight research performance.

The six revisions now have twelve real runs behind them (eleven #1159 runs
and one original stick problem). Two earlier #1159 trials timed out; those
failures remain recorded. The latest three finished normally. The stick
problem validates the successful candidate/VERIFY/DONE path. These tests
show more usable execution and handoffs, and examples of evidence changing
research decisions; they do not establish frontier-mathematics performance.

Remaining research-selection questions include algorithmic literature
coverage, when a sharper working target is worth its cost, and whether
longer continuation keeps producing useful general statements. Keep changes
small and evaluate those decisions directly rather than adding a fixed
role hierarchy, route count, or mandatory certificate pipeline.


## Revision 7 — search for algorithms and follow the literature

The preceding runs show useful theorem retrieval, but the observer also
located a directly relevant older computational baseline absent from the
inspected search-engineering notes. Make the generic literature instruction
explicit about algorithms and expanding thin searches through terminology
and references. No named paper, algorithm, solver, or mathematical answer is
added to the agent's instructions.

Use a paired cold continuation from r07's completed checkpoint
(2026-11-14T04-12-04-212Z-e2062565). Its next step is a finite q13 size-27
feasibility question whose two encodings exhausted the available tool budget.
This makes search-method discovery directly relevant. Both items receive the
same unedited mathematical files and historical summaries; only imported
thread metadata is changed to require a new conversation. The control uses
revision 6 (8b63f23); the other item uses revision 7. Both run for ten minutes
with the same model and effort, concurrently.

Review whether the agent expands terminology/citation search, finds relevant
results or algorithms, checks their scope, and changes an actual research
decision. Finding one observer-known paper is not the success criterion.
Also check whether tool changes distinguish a better formulation from simply
increasing effort, and whether the finite target remains tied to the original
problem. Sampling and shared service load remain uncontrolled.

Only guidance and this development record change. The generated instructions
are compared with the template when creating the items; live Gacha runs
exercise the change. The unchanged runtime integration suite is not rerun
solely to test wording.


The revised trial did not reach its research deadline. At 04:51:02 UTC it
requested approval to install Z3 after a read-only uv cache error and a
network/DNS failure. Gacha declined the unattended command approval and
recorded `needs input` at 93.3 seconds. No current-run summary was saved.
The local WSL Codex config had no explicit sandbox, network, or approval
settings, so Gacha's fallback workspace-write policy applied. This is an
execution-environment failure, not a mathematical negative result.

The revised agent did attempt tool adaptation and its literature worker
expanded into shallow-hitting-set terminology. The run ended before those
actions could be assessed as an integrated research decision. The paired
comparison is therefore incomplete; it cannot support a claim that revision
7 improved research selection. Keep this failure visible rather than silently
replacing it with a successful rerun. Check the already-authorized unattended
environment before the next method comparison.


The control finished normally at 526.8 seconds. It stayed in RESEARCH,
saved a current plan and checkpoint, and produced a compact summary with
9 valid local links; the index's 30 local links also resolve. The observer
found no post-wrap research computation. Both trials retained the original
problem digest.

Its existing literature guidance already supported meaningful route checks:
Alon's partial-design result led to a scoped near-plane obstruction, while
an independent uniform-pencil sampling argument was extended to unequal
and random bounded branch counts. The agent kept those method limitations
separate from nonexistence in actual planes. It also completed a restricted
symmetry exclusion and replaced the arbitrary size-27 target with a lossless
frame-normalized all-size input. That unrestricted finite test still exhausted
Jacobian's work allowance. No original resolution or established novelty
resulted, and the next finite step still depends on a usable alternative
solver.

Revision 7 remains a small, plausible clarification, not a demonstrated
performance gain. The generated control instructions match revision 6,
the revised instructions match the new template, and the diff is clean.
No runtime code changed. The next iteration should resolve the unattended
environment/recovery failure before drawing conclusions from a new paired
research test.


## Revision 8 — make the authorized execution environment effective

The revision-7 trial ended when a tool-installation approval could not be
answered unattended. The WSL user's prior authorization allows networking
and tool installation inside the research sandbox. Its config nevertheless
had no explicit sandbox or approval settings. Back up that local config, set
workspace-write with network access and approval policy never, and allow the
specific package-cache directory. This is a local environment configuration,
not a new unconditional Gacha permission grant.

A real app-server probe confirmed workspace/cache writes and public PyPI
network access, and rejected writes outside the allowed roots. Downloading
the 36.8 MiB Z3 wheel then exceeded bounded 45-, 60-, and 180-second probes.
This is a separate transfer-time issue; do not classify it as a permission
failure or a mathematical result. Complete dependency preparation outside
the mathematical trial quota and record it as observer intervention.

The live resume probe exposed another issue: a stored thread retained its
old on-request approval policy after the user config had changed to never.
The sandbox networking setting did refresh, but approval did not. Gacha now
passes the configured approval policy and legacy sandbox mode on both start
and resume, while retaining the permission-profile guard. It records the
actual approval policy and sandbox returned by the server in run.json and
the event log. No credentials or full configuration are logged.

Validation before the research trials:

- Five integration tests pass. The continuation test changes the config
  between runs and checks the parameters sent on resume. A separate case
  checks that recorded policy comes from the server response rather than
  being inferred from config.
- Resuming the previously interrupted real thread with the revised
  parameters returned approval policy never and sandbox networking enabled.
- Existing research statements and mathematical notes are unchanged.
  Documentation explains unattended sandbox networking and writable caches.

Repeat the literature-guidance comparison using two new cold copies of r07:
erdos-1159-r10-control has revision-6 instructions, and erdos-1159-r10 has
revision-7 instructions. Both use the same repaired runtime, local environment,
model, effort, and ten-minute quota. This tests whether the operational
barrier is removed and permits a new comparison; it is not a clean
cross-environment estimate of the previous failed trial's prompt effect.


Dependency preparation completed before both runs. The observer downloaded
the Linux Z3 5.4.1 wheel from PyPI, verified its published package digest,
installed it inside the app-server sandbox, and also installed it in the
WSL user's Python site so both agents can discover the same ready solver.
The Windows transfer took approximately twelve minutes; it did not consume
either mathematical quota. This preinstalled solver is an explicit observer
intervention, not an autonomous tool-discovery result.

The final app-server probe passed workspace writes, cache writes, PyPI access,
offline package installation, and a native Z3 invocation. An out-of-scope
write was rejected. Both actual run records show approval policy never and
workspace-write with network access enabled.


Observed outcomes:

- Both runs ended normally, at 527.5 and 530.4 seconds, with no approval
  request and no VERIFY/DONE transition. They saved current plans,
  checkpoints, and compact summaries. The control's summary/index have
  8/32 valid local links; the revised run's have 6/28. No matching solver
  process remains. The original problem digest is unchanged.
- Both found and used the preinstalled native Z3. The fixed Jacobian work
  allowance was no longer the immediate limit, but q13 trials still timed
  out under explicit 20-120 second limits. They remained UNKNOWN. The agents
  diagnosed missing assertions in tactic-solver SMT export and repaired the
  saved inputs; this was a reproducibility issue, not evidence that native
  solver answers were false.
- The revised run independently found and read the Illes-Pisinger primary
  report. It treated the old incidence model and max-five examples as known
  baselines. Following further literature located the 2003
  Blokhuis-Brouwer-Wilbrink paper. Its prime-plane theorem and equality tangent
  count exclude max-four sets of sizes 20 and 21 in PG(2,13), leaving 22-37
  in this branch's current search. The observer checked Theorem 2.1 and the
  short moment deduction. This is recovered prior knowledge, not a newly
  established public bound.
- Literature use went beyond a bibliography: the revised run reproduced the
  published 21-point max-five construction as a positive control, checked
  the scope of a forbidden-secant theorem, and incorporated the known size
  restrictions in its next planned search. It also produced a complete
  three-branch symmetry reduction with valid inclusion-minimality constraints.
  The finite q13 trials nevertheless remained UNKNOWN.
- The control also made useful decisions under the older guidance. It
  derived an exact all-plane incidence/congruence equivalence, used coding
  literature to check its scope, and derived a tangent normalization. Its
  next action is a primary-catalogue lookup before more finite search.
  These strengths cannot be attributed to revision 7.
- Neither run resolved the original problem or established mathematical
  novelty. The paired observations support effective execution and provide
  an example of improved literature coverage under revision 7; they do not
  establish a causal speed or research-quality gain.

The revised checkpoint proposes a different SAT backend and cardinality-CNF
encoding, validated first against known q7 controls, then tried on the saved
q13 minimal branches with the proved size restrictions. It explicitly says
not to replay the Z3 timeouts, and to reassess the finite target's value if
the alternative gives no structural progress. Next, continue that item
without adding a new instruction: test whether the agent actually carries
out its own tool-change plan. A longer continuation can also check whether
useful research continues after the initial setup and calibration.


## Revision-8 continuation — test an agent-proposed tool change

Continue erdos-1159-r10 in its existing Codex thread for twenty minutes,
using the same instructions, runtime, and installed baseline tools. The
checkpoint itself proposes a distinct SAT backend/cardinality-CNF encoding
and a small known-instance check before more q13 search. No observer supplies
a package name, an encoding, or a mathematical repair.

Observe whether that plan is executed, whether setup failures can be
recovered from without human intervention, and how the agent compares the
alternative against its previous Z3 trials. Then assess whether the longer
run changes route when evidence warrants it, rather than only increasing
search time. The longer quota and evolving checkpoint are observational;
this is not a paired causal test of a new instruction.

The live run reuses the expected thread and records the current never
approval policy and network-enabled workspace sandbox. No source or guide
changed, so the already-passing integration suite is not rerun for this
continuation alone.


Observed continuation outcome:

- The run ended normally after 1061.0 seconds, within its twenty-minute
  target, and remained in RESEARCH. The summary has 10 valid local links,
  the index has 43, and the plan has one. Every checkpoint artifact path
  exists, the original problem digest is unchanged, and no matching solver
  process remains. After the wrap signal, the public trace contains only
  checkpoint/handoff updates and the final response.
- The agent independently discovered PySAT, read its official cardinality
  and solver documentation, and installed python-sat 1.9.dev22 into its
  writable cache. This installation was autonomous, unlike the observer's
  earlier Z3 preparation. It implemented a separate cardinality-CNF model
  with CaDiCaL 1.9.5. A malformed DIMACS-comment serializer was rejected
  before solving; the agent repaired it and reran the controls.
- Both known q7 controls returned SAT in about 0.04 seconds and passed
  checks against the incidence data. All three q13 branches returned
  UNKNOWN after 20-second trials and again after individually bounded
  180-second background trials. The runner terminated the child processes
  at their deadlines and saved the outcomes. This establishes execution
  of the proposed alternative, not a speed advantage on the hard instance.
- While the bounded searches ran, the agent continued mathematical and
  literature work. It used shallow-hitting-set terminology and primary
  sources to distinguish the available regular-hypergraph results from
  projective planes. An auxiliary random-configuration argument excludes
  a constant bound based only on regularity, equal degree/edge size, and
  linearity. The note and its review explicitly retain the missing plane
  saturation condition; no counterexample to the original problem is claimed.
- Additional scoped work rules out a bounded-exchange shortcut and overly
  balanced orthogonal-array constructions. A pencil-count argument removes
  sizes 36 and 37 from this branch's q13 search, leaving 22-35. This is a
  necessary-condition refinement within the branch, not an established
  improvement over the literature or the earlier research directories.
- The agent constructed and checked an order-nine non-Desarguesian plane,
  found finite maximum-four examples, and compared a cubic-graph rule
  between field and nearfield planes. The same rule has maximum secant
  four in one and nine in the other. These are known-type finite controls
  and a concrete failure of a proposed transfer, not an all-plane theorem.
- The final plan deprioritizes repeating q13 timeouts. Its next check is
  an algebraic description and possible extension of the nearfield
  example, tested against every slope and the saved transfer obstruction.
  It explicitly says that success in that subclass would still leave the
  arbitrary-plane requirement unresolved.

This unchanged-guidance continuation demonstrates an autonomous tool change,
bounded background work, source-informed scope checks, and a subsequent route
decision without an observer supplying the package, encoding, or mathematical
repair. It does not establish statistical improvement, mathematical novelty,
or a resolution of Erdős #1159. No new global research rule is justified by
this run alone. Evaluation of generality should also use other problem types,
so the workflow does not become a collection of instructions tailored to this
one finite-geometry case. Only this development record changed; the passing
runtime tests are not repeated for a documentation-only update.


## Cross-problem evaluation — continuation and a known literature resolution

The previous twenty-minute run supports autonomous tool adaptation, but does
not by itself establish a general research workflow. Keep its instructions
and runtime unchanged for a ten-minute warm continuation of erdos-1159-r10.
Observe whether the proposed nearfield-extension check uses existing sources
and yields a concrete decision about the larger all-plane route. An observer
scope search did not establish that this exact subclass target is already
settled; do not pre-label it as redundant or inject a mathematical repair.

In parallel, create graph-product-control-r11 from
[the categorical-product statement](research-cases/graph-product.md), with the
same guide, model, effort and ten-minute quota. The statement contains only
the mathematical question; no answer, named conjecture, or added acceptance
condition is supplied. This is a known-answer process control, not a test of
novel theorem discovery.

Observer reference: Shitov,
[Counterexamples to Hedetniemi's conjecture, arXiv:1905.02167v2](https://arxiv.org/abs/1905.02167v2).
Its abstract explicitly establishes strict inequality for finite simple
graphs, so the universal equality is false. Assess whether the agent locates
and correctly applies an established result, records a candidate at the
original scope, and completes the existing verification/state workflow
without trying to rediscover the large counterexample by brute force.
Accepted mathematical literature is a legitimate input to a proof; the
original question does not require a fresh proof of every cited theorem.

The two runs address different evaluation questions and are not a causal
comparison. They share machine/service load. Do not treat solving this
known question as evidence of new mathematics or infer broad reliability
from one control.


Observed results:

- The graph-product control finished DONE after 325.6 seconds. The agent
  recognized the conjecture, retrieved the publisher PDF and author HTML,
  checked that the graph/product definitions match, and saved a theorem-based
  counterexample argument. It explicitly relied on Shitov's established
  existence result and checked the evaluation-colouring deduction. It did
  not attempt to enumerate the large counterexample or claim a new theorem.
- The observer read the candidate against the primary paper. Its finite,
  simple and undirected hypotheses, two-orientation adjacency condition,
  and strict inequality match. Events record PLAN, RESEARCH, VERIFY and DONE
  in order. The candidate existed before VERIFY; the final checkpoint's
  candidate, verification, conclusion and summary paths all exist.
- The control's summary/index/plan have 13/17/2 valid local links. The
  original statement digest is unchanged. Jacobian discovery found a
  bounded exact colouring operation, but no mathematical solver was run:
  the published theorem and direct deductions already resolve the question.
  Failed python/pdftotext availability checks were handled with Python 3
  and readable primary-source HTML/PDF extraction.
- Erdős #1159 finished at quota after 561.6 seconds, remaining in RESEARCH.
  The proposed nineteen-point pattern was classified as two affine Baer
  subplanes with an ideal point. Its direct extension has a maximum secant
  growing with the base order, so that specific constant-bound route fails.
  The agent did not repeat the previous q13 SAT searches.
- A repaired cubic construction gives maximum ten for specified quadratic
  André planes in characteristic three, and maximum four for the even
  exponent subfamily. Every line was counted at nearfield orders 9, 81 and
  729 as finite controls; the infinite assertion has a separate algebraic
  proof and scoped review. The more general semilinear criterion makes the
  dependence on characteristic and extension degree explicit and leaves a
  higher-degree symbolic obstruction check pending. It is not an all-plane
  resolution or a family of counterexample planes.
- Crucially, the core quadratic Dickson construction and its ten/four bounds
  already appear in the earlier independent r01 branch's
  notes/andre-candidate-v1.md. The current branch had not been given that
  separate item's work. This is repeat discovery within the evaluation,
  not a new project-wide mathematical advance, and is not evidence that
  continuation ignored records available in its own item. The broader
  conditional formulation and profile checks also carry no novelty claim.
- The #1159 summary/index/plan have 8/53/1 valid local links; all checkpoint
  paths exist and its problem digest is unchanged. After wrap-up the
  public trace contains only handoff updates and the final response.
  No matching computation process remains for either run.

These observations support correct use of established mathematical literature,
appropriate separation of partial research from original-problem completion,
and reliable continuation records in these two cases. They do not warrant
another guide change or prove broad research ability. Runtime and guide were
unchanged; only the reusable control statement and development record were
added, and git diff --check passes. No runtime tests are repeated solely for
these documentation changes.

Next, test fresh exploration in the same populated #1159 item. Its existing
instructions ask the agent to form an independent route before comparing with
prior local work. That can directly assess whether diversity and accumulated
knowledge are reconciled without an observer editing the research notes or
supplying a preferred mathematical direction.


## Same-item fresh evaluation — diversity with existing research memory

The previous independent items repeated the core quadratic nearfield result
without sharing their mathematical records. That observation cannot diagnose
failure to use available memory. Test fresh mode in the already-populated
erdos-1159-r10 item instead, with its current guide/runtime and a ten-minute
quota. The new native thread should form a route from the problem and
published literature before consulting earlier local attempts, then compare
and integrate useful previous evidence.

Before launch the observer saved a manifest of all problem, guide, checkpoint,
plan/status/index, note and experiment files, plus byte-identical copies of
the current handoff documents in the external review directory. No mathematical
artifact is edited, no prior result is highlighted, and no route is supplied
to the research agent.

Review the public trace for the ordering of independent exploration and prior
work consultation. Check whether available findings prevent a substantial
repeat or change the next action, whether new work remains tied to the original
quantifiers, and whether earlier reusable artifacts and their index entries
remain discoverable after the fresh run. A different sampled thread is not
a causal comparison of guidance quality.


Observed fresh-run outcome:

- A new native thread started with only a fresh PLAN checkpoint, the same
  problem digest and the recorded authorized execution policy. The previous
  thread and mathematical next-step fields were not reused.
- The public trace first shows statement reading, primary-source searches,
  incidence questions and tool discovery. At 75 seconds the root reads the
  old PLAN/STATUS/INDEX, then specific previous notes. A complete new plan
  is saved later. Thus the observable ordering supports initial independent
  investigation followed by comparison; it does not establish that a fully
  developed mathematical route existed before all prior-record consultation.
- The new plan moves from the preceding nearfield construction to a
  conditional negative route in prime planes. Saved q13 timeout evidence
  is used to avoid replaying that search. The prior aggregate-moment
  relaxation is read and explicitly treated as already feasible, so the
  next proposed condition must concern individual incidences.
- One PG(2,5) control and a symbolic secant-moment calculation were repeated
  and labelled known reproductions. They do not establish mathematical
  novelty. The control completed quickly; no q13 trial was replayed.
- New work makes the dependence on an unproved algebraic approximation
  conjecture explicit. Using AGY's uniform skew-line count, the agent
  derives a scoped robustness bound and checks line components, geometric
  irreducibility, prime-field scope and the negative quantifiers. The
  observer checked the quoted AGY formulas and Green's stated conjectural
  approximation premise. This remains a conditional route, not a solution.
- Source searches and reviews change possible next steps: real-field
  inverse theorems are not transferred to finite fields, and a grid theorem's
  parameter-dependent guarantee is not asserted to be order-independent.
  A review corrects the stronger claim that such a uniform guarantee is
  impossible when the source merely does not supply it. The approximation
  diagnostic also distinguishes a fixed degree from degree growing with
  the requested accuracy.
- The run ends at quota after 521.0 seconds, remaining in RESEARCH. Its
  summary/index/plan have 11/65/3 valid local links, and all saved research
  and review paths exist. All pre-run research notes and experimental
  files are byte-identical; only PLAN.md, STATUS.md, INDEX.md and state.json
  changed among the 131 snapshotted files. No prior index target was removed.
  The problem and guidance are unchanged. After the wrap signal the public
  trace has only the final response; no matching research process remains.

The snapshot was also archived byte-for-byte outside the agent's directory,
with every archived file checked against its pre-run digest. No observer
edited the mathematical artifacts or supplied a preferred route during the
trial. The README now explains that fresh mode creates a new thread while
retaining accessible research files, and that comparison follows the initial
investigation; this clarifies existing behavior rather than adding a new
research rule. Documentation diff checks pass; runtime tests are not repeated
for this documentation-only update.

This run supports useful comparison and preservation in one populated item.
It does not prove that fresh mode generally improves diversity or avoids
rediscovery, nor that the conditional route can solve #1159. The next
substantive check is a longer continuation of the new route: can the agent
advance or reject its concrete inverse-incidence subproblem, rather than
repeatedly restating an unproved conjectural dependency?


## Inverse-route continuation — move beyond identifying an open dependency

Continue the current same-item fresh thread for twenty minutes, without
changing its guide, runtime, problem or mathematical checkpoint. The previous
run made a valid conditional reduction and named an unproved structural
premise. Its next step is to inspect prime-field arc/envelope results and
line-section polynomial identities for the near-extremal four-secant spectrum.

Observe whether the agent uses the saved scope restrictions, advances a
specific individual-incidence question or rules out a proposed approach,
and changes the plan accordingly. Repeating the conditional statement or
listing nearby theorems alone is not evidence of further progress. The
observer supplies no mathematical lemma, source or preferred repair. The
longer budget tests follow-through after initial route selection, not a
causal effect of a new prompt.

Observed continuation outcome:

- The native thread and its existing research memory were reused. The
  problem and guidance are byte-identical to the external pre-run snapshot;
  the observer supplied no mathematical direction during the trial.
- Literature checks reject direct use of one-value secant stability and
  characteristic-modulus results for the two-value spectrum under study.
  A slice-polynomial test also defeats an attempted lifting inference.
  The countermodel is explicitly not a point-set blocker: retaining the
  actual point-product and individual pencil conditions still matters.
- The agent finds Yoshinaga's finite-field free-arrangement theorem and
  derives a rank-two multirestriction formulation retaining actual
  directions. The observer read Theorem 10(1), the arbitrary-field
  rank-two/Saito preliminaries cited in the note, and the saved restriction
  and primitive-Frobenius arguments. The relevant forward theorem has no
  cardinality threshold. The resulting local exponent test is automatic
  for blocker sizes s>=2p; the agent records this as a limitation rather
  than claiming stronger pruning in that range.
- At s=2p-1, complete pure-three direction tests leave 42 of 70 models at
  p=7 and 1274 of 3003 at p=13. A later mixed-multiplicity p=7 pilot and
  complete batch leave 1148 of 8092 models. These are exact local models,
  not classifications of blockers or evidence resolving the all-k claim.
  The batches have saved equations, inputs, versions and results; the
  p=13 pure-three calculation took about 0.62 seconds. Jacobian confirms
  representative ranks. No full-incidence search is replayed.
- On the alternative route, the agent resolves the saved degree-five
  Dickson check: the former cubic pair really has a 244-secant. A repair
  yields depth q+1 for the stated Dickson pairs, still dependent on q.
  A separate analytic obstruction covers every scalar Frobenius graph
  in a growing family; a density corollary also limits bounded unions of
  arbitrarily trimmed or translated graphs. Reviews preserve the graph-
  covering hypothesis. These construction-class results do not exclude
  arbitrary blocking sets or settle the original problem.
- The observer inspected the scoped arguments and source hypotheses; no
  novelty claim is established. An initial Jacobian polynomial request
  used the wrong coefficients, which the agent noticed and corrected.
  The corrected input/output is retained as evidence, and the discarded
  request is documented.
- The run ends normally at quota after 1055.4 seconds. All four recorded
  checkpoints remain in RESEARCH. The wrap signal arrives at 17 minutes;
  the subsequent public trace contains only handoff updates and the
  final response, with no new computation or review. No matching research
  process remains.
- SUMMARY/INDEX/PLAN have 17/80/2 valid local links. All ten checkpoint
  artifact paths exist; recursively following the index and summary
  reaches 144 local artifacts with no missing link targets. No prior
  index target is removed.

This continuation advances beyond merely restating the earlier conditional
premise: it finds a relevant published reformulation, derives its useful range
and its limitation, and closes an old construction check. It still leaves
the crucial global compatibility and all-k gaps open. The short local tests
support a concrete next experiment, not indefinite investment or a prediction
of a solution.

The guide and runtime remain unchanged. This observation does not justify
adding another mandatory research stage or claim that a new instruction
caused improvement. The next evaluation should follow whether these local
restrictions support a usable global argument or a deliberate route change,
rather than treating additional excluded local models as sufficient progress
toward the original quantifiers. Record this outcome without modifying the
agent-owned mathematical plan or notes.

## Local-to-global follow-through — usefulness beyond more local exclusions

Continue the existing thread for ten minutes with the same guidance and
runtime. The previous run proved that its restriction-exponent test is
automatic for s>=2p and left surviving local models below that threshold.
The saved plan proposes one bounded mixed-multiplicity p=13 trial and
projective orbit compression before any new full-incidence search.

Observe whether the agent converts those local findings into a reusable
global constraint, a justified experiment, or a deliberate route change.
Additional excluded local assignments alone do not establish movement on
the original all-k/all-plane quantifiers. A short diagnostic can still be
worthwhile if its outcome changes the next action. Preserve the observer
boundary: save the starting checkpoint externally, but do not edit the
research plan, provide a preferred lemma, or steer the running thread.

Observed follow-through outcome:

- The agent reads the current checkpoint and previous limitations before
  investigating both the mixed-direction trial and global incidence
  compatibility. It does not replay the earlier full-plane SAT searches.
- Projective symmetry compresses three complete p=13 mixed-profile tests
  into 66, 83 and 610 orbits, with 9, 4 and 61 passing orbits respectively.
  Every tested profile retains survivors. The saved orbit representatives,
  stabilizer weights and normalization explain coverage of 144144, 168168
  and 1261260 assignments. The three computations each finish in under
  0.2 seconds; these are local pencil assignments, not complete blockers.
- Rather than merely extending the earlier p=7 enumeration, the agent
  proves a characteristic-checked constant-double lemma for 2<=r<=p.
  It excludes an entire pencil profile at size 2p-1 for prime p>=5. The
  observer read the polynomial/interpolation argument and its scoped
  review; the nonvanishing coefficient 1-r and the available rational
  chart are retained. A related tangent-bound calculation is explicitly
  labelled a known reproduction. No novelty is established.
- The global literature audit proves that Abe's root-gap conditions add
  nothing for C4 blockers at s>=2p, including non-rational test lines.
  Extension-field complement positivity is also automatic in this range.
  Real/complex low-multiplicity classifications are not transferred to
  finite characteristic. The observer read Abe's arbitrary-characteristic
  statement and the saved rational/non-rational line-count argument.
- The alternative route leaves the previous monomial class and enumerates
  all 59535 genuine additive binomials in the specified order-64 Dickson
  plane. A short pilot precedes the complete run. With no compiler
  available, the agent uses Python successfully; the full enumeration
  takes about 0.39 seconds. The found pair gives a 128-point blocker of
  depth five, checked on all 4161 projective lines with separate custom
  field arithmetic and a representative Jacobian rank control. This
  reproduces the previously attained depth, not an improved bound.
- The same route produces an analytic lower bound of five for two full
  additive graphs through the origin plus vertical infinity, in binary
  translation planes of order at least eight. Its proof uses the union
  of two proper linear images and the partition of nonzero graph points
  by spread directions. Independent graph translations are explicitly
  excluded; their affine images can cover when neither map is bijective.
  The observer inspected that scoped argument. It does not concern
  arbitrary blockers or rule out any universal bound larger than four.
- These findings change the next step: investigate one translation offset
  compatible with every shared singular direction. The prime-plane route
  now requires a concrete cross-pencil gluing constraint before any
  full-incidence restart; further isolated local exclusions are not
  proposed as sufficient evidence. The original all-k/all-plane gaps
  remain stated in the plan and checkpoint.
- The run ends normally at quota after 526.2 seconds, with all four
  checkpoint events in RESEARCH. Post-wrap public actions only refresh
  the saved handoff and give the final response. There are no remaining
  research processes or pending reviews. The problem and guide are
  byte-identical to the pre-run copies.
- SUMMARY/INDEX have 7/88 valid local links, all seven checkpoint artifact
  paths exist, and recursive index/summary traversal reaches 160 local
  artifacts without missing targets. No prior index target is removed.
  PLAN is concise prose with no Markdown links and points readers to the
  indexed scoped notes.

This trial supplies two examples of extending a finite observation into a
general scoped argument, together with a decision not to rely on global
criteria that add no information. It also shows that a successful richer
construction can reproduce an existing bound without improving it. Those
distinctions matter more than raw enumeration counts. The original problem
is unresolved and the positive observations do not prove broad frontier
research capability or a causal benefit of a prompt revision.

No guide or runtime change is warranted by this trial. Preserve the current
short research guidance rather than add a rule already demonstrated in the
trace. Further evaluation should test whether the revised translation or
gluing question yields useful evidence, and whether the same behavior holds
on a materially different problem rather than only on this accumulated
finite-geometry context.

## Cross-domain scope evaluation — trace versus operator order

Run the existing #1159 continuation and a new matrix-analysis control with
the same guide, model, effort and ten-minute quotas. The #1159 checkpoint
proposes independently translated additive graphs, where the previous
through-origin obstruction no longer directly applies. Observe whether the
agent checks compatibility across every shared singular direction rather
than silently reusing the failed linear-image argument.

The new fixture, docs/research-cases/matrix-power.md, asks for the complete
positive-exponent ranges of two universal inequalities for arbitrary
Hermitian positive semidefinite matrices: trace subadditivity and Loewner
subadditivity. It contains only the mathematical statement and definitions,
with no answer, named theorem, reference, or route supplied to the agent.

This is a known-result control in a different area, not a frontier-research
benchmark. Check whether the agent distinguishes the two orders, covers all
parameters and singular inputs, uses exact examples or applicable literature,
and only enters DONE after a complete candidate and scoped review. Numerical
samples cannot by themselves prove a universal exponent interval. The
observer independently establishes the expected result outside the research
item and supplies no mathematical hint during either trial.

Observed #1159 outcome:

- The previously untested independent-translation repair is resolved at
  construction-class scope. Two full independently translated binary
  additive graphs plus vertical infinity cannot give depth four in a
  translation plane of order at least eight. The proof checks affine
  images, graph intersections, scattered subspaces and the count of
  shared-image hyperplanes. The observer read the saved proof and its
  independent version; translations are genuinely included.
- An exact offset criterion is expressed as a binary affine linear system.
  All 192 finite controls agree with direct projective line counts.
  Saved inputs, commands and results include an inconsistent
  three-equation example checked with Jacobian. These support the
  criterion, while the infinite-family claim rests on the analytic proof.
- The literature check retains the distinction between scattered subspaces,
  translation hyperovals, particular spreads and arbitrary finite planes.
  Neither a dimension-dependent kernel bound nor a known translation-plane
  example supplies a universal blocking construction.
- On the prime-plane route, ordinary two-pencil row/column matching is
  shown to be automatic: bounded-three integer marginals of common total
  at least nine satisfy Gale's criterion. All relevant totals for the
  p13,size25 trial exceed that threshold. This prevents treating a plain
  two-pencil matching test as an additional obstruction.
- A different condition retains the common global free basis. Where the
  lower local generator is unique, marked zero/nonzero evaluations must
  agree at all selected points on a shared 3/4-secant. Both types occur
  among locally passing templates, so this supplies actual compatibility
  cuts. The saved checker evaluates 596 marked cases from 74 passing
  orbit representatives. The argument explicitly excludes the
  equal-degree ambiguity at s=2p+1. The observer inspected the coordinate
  proof, especially the multiplicity>=2 step forcing the two Euler
  corrections to agree on the shared axis.
- No set of these cuts eliminates all blockers, and even a size25 C4
  result would leave the original all-k quantifier. The agent records the
  failure of the current translated-pair branch, updates STATUS/PLAN and
  transitions RESEARCH -> PLAN. The next unexecuted check concerns
  compatibility across three actual pencils, not another translated-pair
  enumeration.
- The run ends at quota after 569.0 seconds. After wrap-up, public actions
  only save the handoff and final response. No research process or review
  remains pending. SUMMARY/INDEX have 7/96 valid local links; all eight
  checkpoint paths exist. Their recursive links reach 173 local artifacts
  with no missing targets, and no prior index target is removed.

Observed matrix-analysis control outcome:

- Before reading the research output, the observer recorded expected
  ranges and an exact proof/counterexample outside the research item.
  The trace range is (0,1], while the Loewner range is {1}. For trace
  sufficiency, the observer checked Bourin-Uchiyama Theorem 1.1
  (https://arxiv.org/html/math/0702475v1) with the trace norm; scalar inputs
  exclude r>1. Two nonorthogonal rank-one projections give an exact
  counterexample to Loewner subadditivity for every 0<r<1.
- The agent independently obtains both ranges. It reads Bourin-Lee's
  primary matrix-subadditivity result
  (https://arxiv.org/html/1109.2384), retaining the unitary conjugations
  that permit a trace conclusion but not the stronger un-conjugated
  operator inequality. The observer checked that cited scope as well.
- It writes a self-contained proof by integrating an inverse-order
  resolvent inequality against a positive weight. The argument covers
  singular inputs, complex Hermitian matrices, noncommutativity,
  arbitrary finite dimension and the complete exponent range. The
  observer read the full candidate and found the integral, trace-pairing
  and necessity arguments valid.
- A fixed rational projection pair has sum spectrum {2/5,8/5}, confirmed
  by Jacobian. The exact 2/5 eigenvector excludes the whole interval
  0<r<1 analytically; it is not a floating-point sample or numerical
  extrapolation. The endpoint and upper range are handled separately.
- The complete candidate is saved before VERIFY. A later independent
  review identifies and checks that saved version; its digest still
  matches the final candidate. The final report, conclusion and summary
  exist before DONE. Recorded transitions are PLAN -> RESEARCH -> VERIFY
  -> DONE.
- During wrap-up, the agent removes references to an optional artifact
  audit it had not performed, without claiming it ran. The final
  mathematical verification is already complete; no new computation or
  review is started. It then completes the native Goal and the run ends
  as done after 573.3 seconds, exercising successful completion during
  wrap-up. The agent's final elapsed figure is the native Goal's active
  time; comparisons here use Gacha's full elapsed run time.
- SUMMARY/INDEX/PLAN have 7/10/3 valid local links, all four final checkpoint
  paths exist, and recursive traversal reaches 15 local artifacts with
  no missing targets. No research process remains.

Both problem statements and both copies of the guide are unchanged; the
guide also matches the repository template byte-for-byte. The matrix result
is a correct known-result reproduction, not evidence of mathematical novelty.
Together the trials exercise replanning after a scoped route obstruction and
completion after a fully checked proof in a different area. They do not
establish broad autonomous frontier capability or a causal effect of a new
prompt.

The only repository additions are the reusable matrix statement and this
evaluation record. Documentation diff checks pass; runtime tests are not
repeated for this fixture-only change. Preserve the existing guide. Further
evaluation should include another substantive open problem, since solving a
known analysis exercise and continuing one long geometry context do not by
themselves establish general research performance.

## Recent-claim evaluation — a second research problem

Continue #1159 from its saved PLAN checkpoint while starting a separate
#81 item with the same guide, model, effort and ten-minute quota. For #1159,
observe whether the proposed marked-derivation compatibility test really
starts, respects its uniqueness and coordinate conditions, and changes the
route without replaying the excluded translated-pair construction.

The new fixture, docs/research-cases/erdos-81.md, reproduces the user's quoted
mathematical statement, quantifiers and reference list, with normalized
Markdown links. The older saved #81 problem also contains extensive route
instructions after those references; those are not part of the user's quoted
statement and are not imported. The original item is not edited and its
research notes are not seeded into the new item.

The observer's current search finds recent full-resolution claims as well
as an older catalog OPEN label, so this is not assumed to be an uncontested
open-problem benchmark. The new research thread receives only the user's
statement and existing references. Observe whether it discovers current
sources, distinguishes a sharp leading coefficient from a linear error,
and reads the concrete arguments behind any purported resolution rather
than treating a source title, status label, or formal-package description
as sufficient evidence. No extra mathematical acceptance condition or
preferred proof route is supplied.

Observed #1159 continuation outcome:

- PLAN is updated and the first marked-compatibility check starts. The
  checkpoint then changes to RESEARCH. There is no replay of the excluded
  two-additive-graph search.
- Below the equal-degree case, the agent derives a three-pencil scalar
  compatibility condition in actual common coordinates. The p13,size25
  trial excludes combinations which pass pair tests, but every one of the
  eight tested edge-weight patterns still has survivors. These local
  module combinations are not actual projective point sets.
- At size2p+1, it replaces the inapplicable unique-generator argument with
  a distinguished Frobenius generator and complementary radial values.
  Complement changes act affinely on each pencil. The resulting necessary
  condition forbids a triangle with exactly one unequal marked pair and
  two equal pairs, assuming every shared line is a 3/4-secant. The observer
  read the proof, including the nonzero complementary coefficients and
  common-axis normal-killing identity. No claim of historical novelty is
  made.
- The saved critical trial covers 462 stated normalized p13 templates:
  21 equal and 441 unequal types. Jacobian checks only the abstract scalar
  linear implication, not complete projective-plane coverage. The agent
  explicitly defers a known-witness control on the saved order-seven
  blocker; it does not claim that control ran.
- An auxiliary trial covers 602112 normalized parameter cases in one
  restricted three-additive-graph family over order eight, corresponding
  to 243936 distinct affine sets. The complete finite negative result is
  distinguished from its earlier case-limited pilot and from arbitrary
  triple constructions. Other auxiliary arguments have a deferred review
  recorded in the handoff and are not premises of an original resolution.
- The original all-plane/all-k problem remains unresolved. The next
  concrete step is a global marked-value system on a known witness, then
  tests of hypothetical configurations. The agent stays in RESEARCH.
- Gacha ends at quota after 526.8 seconds. After wrap-up, public actions
  only save the handoff and final response. No research process remains.
  SUMMARY/INDEX have 11/108 valid local links; all eight checkpoint paths
  exist. Recursive Markdown traversal reaches 196 existing paths, with
  no missing targets and no prior index target removed.

Observed #81 outcome:

- The agent autonomously finds recent full-resolution claims and reads
  their actual arguments. It distinguishes an old catalog status from
  newer sources, split graphs from all chordal graphs, and asymptotic
  quadratic error from the requested linear error. The observer supplied
  none of these discoveries to the research thread.
- The final candidate reconstructs the existing Morluto/Anonymous
  manuscript from [N0zoM1z0/erdos-81](https://github.com/N0zoM1z0/erdos-81),
  source commit cbde8a0a0563372b23b1b39a44180d2c0fb02f44. It attributes that
  argument explicitly. A second recent preprint is corroborating
  literature, not a missing premise in the saved proof.
- The observer reads the full saved candidate. The near-extremal case uses
  an integral construction. In the remaining case fixed quadratic slack
  absorbs uniform weighted-packing error. A first-entry argument connects
  the two regimes. A single finite graph-independent threshold, together
  with a single-edge partition at smaller orders, supplies one absolute C.
  No gap was found in this reading; this is not a claim of specialist
  consensus or a new result produced by Gacha.
- The exact list-edge-colouring bound is checked against the original
  [Haggkvist-Janssen publisher abstract](https://www.cambridge.org/core/journals/combinatorics-probability-and-computing/article/abs/new-bounds-on-the-listchromatic-index-of-the-complete-graph-and-other-simple-graphs/18498E8F4291D12FA5D03FF011F3D2E2).
  The observer also reads the weighted theorem and its uniform use in
  [Rohatgi-Urschel-Wellens](https://math.mit.edu/~urschel/publications/p2021d.pdf),
  Theorem 3.4 and the proof of Theorem 3.6. Finite Jacobian examples and
  exact rational margin checks remain evidence only at their stated scope.
- The complete candidate exists before VERIFY. A bibliographic title
  correction is followed by two saved full-candidate reviews and a final
  verification report, all identifying the final version. Reports,
  conclusion and summary exist before DONE. Recorded transitions are
  PLAN -> RESEARCH -> VERIFY -> DONE.
- Gacha ends as done after 550.1 seconds. After wrap-up the agent records
  the already-completed verification, sets DONE and completes its native
  Goal; no new computation or review starts. No research process remains.
- SUMMARY/INDEX/PLAN have 11/19/3 valid direct local links, and all seven
  checkpoint paths exist. Recursive traversal reaches 28 existing paths
  and five missing figure assets referenced inside imported third-party
  manuscripts. These are incomplete local source mirrors, not missing
  candidate/review files; the source URLs are retained. Other archived
  third-party README links likewise require their source repository.
  No claim of a self-contained offline archive is made.

Both inputs and guide copies remain byte-identical to their before-run
snapshots, and both guides match the repository template. The original #81
statement also retains its recorded digest. The observer makes no changes
to agent-owned research artifacts.

These trials support two useful behaviors: a continuation can repair the
scope of its proposed next step, and a new problem can be resolved through
attributed use and examination of existing work. They do not establish
novel mathematical discovery, general frontier performance, or a causal
improvement from a new prompt. Preserve the guide and runtime; this
iteration adds the reusable user-provided #81 statement and evaluation
record only. Documentation diff checks suffice for these changes.

The next evaluation should observe whether the saved global-system control
actually changes the #1159 route. In choosing further benchmarks, establish
the current literature position first: an old OPEN label alone does not
make a problem an appropriate novelty test. Keep this as an evaluation
decision, not an extra mathematical acceptance criterion in PROBLEM.md.

## Global-system continuation — testing whether a scoped condition is usable

Continue the saved #1159 thread with unchanged guidance and runtime for ten
minutes. Its agent-authored next step is a known-witness check of the
critical-size marked-value system. No research note, preferred construction,
or observer-derived equation is supplied to the research thread.

The previous turn made progress by completing and auditing two real trials,
adding the user's #81 fixture, and recording their different result types.
This continuation asks whether the new compatibility condition survives an
actual blocker control, and whether that result changes the next research
decision. Local feasibility alone is not an all-k obstruction. Compare the
chosen next step to the original scope and to the stated unresolved gap.

Before-run copies of the six checkpoint/input files and their provenance
are outside the research item in _review/erdos-1159-r10/global-marked-r18.
The guide has not changed, so this is an evaluation of continuity and
research decisions, not a causal test of a new instruction.

Observed outcome:

- The deferred control starts immediately. It reuses the saved actual
  PG(2,7),size15 witness without rerunning a blocking-set search. All
  fifteen local charts and Frobenius complements are retained, along with
  a 76x52 marked-value matrix of rank50 and nullity2 and an explicit
  solution with every required scaling coefficient nonzero. Jacobian
  computes the same finite-field nullspace.
- A separate global logarithmic matrix is 120x108, of rank78 and nullity30.
  The agent constructs a complementary derivation, checks the symbolic
  Saito determinant, and matches its normal-killed restrictions to every
  saved local chart and all22 marked secants. These are purposeful
  formulation controls on one known witness, not new blockers.
- A short pilot precedes all630 single-point swaps of that witness.
  Of260 swaps retaining maximum line intersection four, all256
  nonblockers are rejected by a forced-zero scaling coefficient and all
  four blockers pass with explicit assignments. The full sweep takes
  about1.06 seconds. These are actual point sets in this finite
  neighborhood; they establish neither general sufficiency nor coverage
  of every set of that size.
- The observer reads the mutation encoding. Its results are calibration,
  not evidence of faster search: the same nonblockers already fail a
  direct line-incidence check. Whether this algebraic condition usefully
  prunes an abstract search remains a separate question.
- The agent derives a precise full-module criterion at critical size:
  for2p+1 rational hyperplanes, an additional degree-p logarithmic
  derivation beyond Euler multiples and Frobenius exists exactly when
  the hyperplanes cover the finite vector space. Its proof uses a
  saturation argument, Saito's criterion and the finite-field complement
  count. The observer reads the complete deduction and finds no gap.
  The inherited [Yoshinaga theorem](https://arxiv.org/html/math/0606005),
  Theorem10, and the arbitrary-characteristic restriction statements in
  [Abe-Kawanoue](https://arxiv.org/html/2406.00305v2), Theorems2.1 and2.4,
  have the required scope. This is an attributed reformulation, not a
  claim of a previously unknown theorem.
- The distinction between the full polynomial module and the weaker
  marked-value equations survives into PLAN, STATUS and the summary.
  The agent does not infer an equivalence from the perfect finite
  neighborhood test. Its next check asks whether marked solutions lift
  to actual derivations, retaining the nonzero-scaling requirement.
- On the auxiliary route, a rank-budget argument replaces larger
  enumeration of low-rank additive-graph perturbations. It gives analytic
  obstructions in growing binary dimension, and a later extension allows
  several ideal points while preserving a fixed-depth obstruction for
  that construction class. The observer reads the functional-counting
  argument. The research checkpoint correctly records the late extension
  as not independently reviewed within the run. It is not a statement
  about arbitrary blockers, trimmed graphs or every projective plane.
- The agent remains in RESEARCH and ends at quota after560.6 seconds.
  The current route and next action change to the lifting gap. There is
  no original-problem candidate or VERIFY/DONE transition. The only
  post-wrap public actions save the handoff and finish the turn.
- SUMMARY/INDEX have8/117 valid direct local links. All nine checkpoint
  paths exist. Recursive Markdown traversal reaches215 existing paths
  with no missing targets and no prior index target removed. Inputs and
  guide remain byte-identical to their before-run snapshots; the guide
  matches the repository template. No research process remains.

The run turns an untested condition into a checked formulation and exposes
a specific next mathematical question. It also replaces a restricted finite
enumeration with a parameterized class obstruction. These are useful
research behaviors, but no new bound for the original problem is established,
and no novelty claim is supported by this evaluation.

Keep the current guide and runtime. There is no observed failure here that
justifies another instruction. A subsequent longer continuation should test
whether the lifting question produces a decision about the formulation's
value, rather than merely accumulating more controls. Twenty minutes is a
reasonable next quota: it permits a longer argument while retaining a bounded
handoff, without prescribing the agent's mathematics. This iteration changes
the evaluation record only; documentation diff checks pass.

## Longer lifting evaluation — deciding the value of a reformulation

The preceding goal turn made progress by completing the known-witness and
mutation checks, inspecting the exact full-module criterion and recording the
next unresolved lifting question. Continue that saved thread for twenty
minutes with the same guide, runtime, model and effort. The longer quota
allows an argument or counterexample to develop without another ten-minute
handoff. No mathematical hint or observer-derived object is injected.

Observe whether the agent distinguishes arbitrary marked solutions from
solutions with every required scaling coefficient nonzero, whether a concrete
lifting failure changes its formulation, and whether any positive conclusion
has the stated generality. The finite mutation test does not establish
sufficiency or a faster algorithm. A useful outcome can be a precisely scoped
barrier or a decision to abandon or strengthen the formulation.

Before-run input and checkpoint snapshots are stored outside the research
item at _review/erdos-1159-r10/lifting-r19. The original problem and agent-owned
research artifacts are not changed by the observer. This is a duration and
continuity evaluation, not an isolated test of a new prompt.

Observed outcome:

- The agent compares the marked system with the full module on the saved
  mutation data. Nonblockers with extra marked solutions do not by themselves
  refute the nonzero-scaling version of its lifting conjecture. It preserves
  this distinction and records a bounded 2000-sample trial as inconclusive.
  The mutation comparison and random trial together take about11 seconds.
- Primary literature changes the decision. The agent finds
  [Dover's tangent-free conic construction](https://arxiv.org/html/2505.08551v1),
  Theorem3.3, and shows that it passes the nonzero marked conditions at
  critical size while missing lines. This gives an analytic counterfamily to
  the auxiliary sufficiency claim. The PG(2,7) instance has15 points,
  maximum intersection3 and12 missed lines. Jacobian confirms the marked and
  full-module ranks. The original problem is not refuted.
- The observer independently finds the same finite incidence parameters in
  published arc literature without sending them to the research thread.
  Its held-out record is outside the item. The research agent had already
  computed its Dover instance before that observer record was written.
- The agent changes RESEARCH to PLAN, then back to RESEARCH for a repair.
  Leading normal jets turn out to admit an automatic Saito-normalized
  solution; the agent records that failure instead of presenting the repair
  as an obstruction. A mixed tangential first-jet identity then rejects the
  Dover construction analytically. A chart-adapted finite control preserves
  a known blocker and rejects Dover. The observer reads the identity and
  coefficient extraction. Neither a global lifting theorem nor useful
  abstract-search pruning has been established.
- An auxiliary affine-subspace argument extends the earlier low-rank
  construction barrier to trimming and repair by outside points. It proves
  that fixed-depth constructions near an affine subspace of growing
  codimension require approximately a full plane-order's worth of outside
  points. This remains conditional on that approximation hypothesis, which
  is not proved for arbitrary blockers. The agent records that limitation.
- At an intermediate checkpoint, route and nextStep reflect the failed
  lifting conjecture, but pendingChecks still say the lifting comparison
  and a completed review have not started. Final wrap-up removes the stale
  entries. An interruption before that cleanup would have left conflicting
  continuation instructions.
- A more serious storage regression survives wrap-up. At08:09:55 UTC, a
  Python checkpoint script reuses its path variable for INDEX.md, then
  renames a state JSON temporary file onto that path. The public tool trace
  confirms the overwrite. INDEX.md becomes1360 bytes of checkpoint JSON;
  all earlier index entries disappear from that entry point. The research
  artifacts themselves remain present, and the pre-run observer snapshot
  preserves the complete earlier index.
- The run ends at quota after1040.9 seconds, in RESEARCH. Its summary
  distinguishes the auxiliary counterexample, the promising repair and
  the original unresolved scope. Post-wrap actions only save the handoff
  and finish. There is no VERIFY/DONE claim or remaining research process.

This run supplies good evidence of literature-driven falsification and
route repair, but fails the durable-handoff criterion. More mathematical
instructions would not address the accidental overwrite. The next revision
should preserve pre-run handoff files, identify this structural damage,
and let the research agent reconcile recovery with later findings.

## Revision 9 — recover handoff files and keep pending work current

Gacha now saves byte-for-byte copies of existing state.json, PLAN.md,
STATUS.md and INDEX.md under each run's checkpoint-before directory before
the agent starts. Launch and wrap-up inspect those Markdown handoff files
for accidental replacement by checkpoint JSON. If found, the prompt names
an earlier copy without that symptom, skipping newer corrupted snapshots.
The controller does not rewrite research documents. Remaining damage is
reported in the final run record and command output.

This is a narrow structural check, not a proof validator or a claim to detect
all document loss. Snapshots support other manual or agent recovery, but
are not a replacement for version control. No route, mathematical claim or
verification standard is added by the controller.

The guide's existing current-plan paragraph now also covers state.json and
removing completed or superseded pending checks at checkpoints. It replaces
the paragraph rather than adding a new research stage. The mathematical
workflow and tool-trust guidance are otherwise unchanged.

Validation: TypeScript builds and all seven integration tests pass. New
regressions exercise byte preservation despite subsequent writes, optional
missing documents, corruption discovered at wrap-up and on continuation,
selection of an older intact copy over a damaged new snapshot, agent-driven
repair clearing the warning, and Markdown containing a JSON example not
being flagged.

For the live ten-minute trial, import the existing pre-r19 observer copies
into r19's checkpoint-before directory with explicit provenance: these are
recovery copies imported after the run, not snapshots made by its old
runtime. Leave the current damaged index for the agent to repair. Only the
experimental item's AGENTS.md is updated; the statement and mathematical
research files are not rewritten by the observer.

Before-run copies and provenance are outside the item at
_review/erdos-1159-r10/recovery-r20. The guide hash is
c1a126418fd7e0cf7658bad689c37024c35c27ce8d9e98e5b260532edbdb770d.
Observe whether the launch repair actually preserves the earlier index and
later r19 evidence, whether pending work remains current, and whether useful
research continues after the recovery. This jointly tests the runtime change
and the concise guide edit; it is not an isolated causal comparison.

Observed outcome:

- The launch detects checkpoint JSON in INDEX.md and identifies the imported
  pre-r19 Markdown copy. At08:23:50 UTC the agent restores that copy and
  appends r19 findings, manifests and review status. The entire earlier
  index remains a byte-identical prefix at run end, with no prior target
  removed. Both the imported recovery copies and this run's automatic
  snapshots remain byte-identical. The wrap-up check clears the warning;
  no handoff error remains in run.json.
- The agent clears stale pending checks during the repair checkpoint and
  continues its saved research question. It does not restart a blocking-set
  search or replay exhausted searches. The observer supplies no mathematical
  hint; the operational recovery prompt and copied guide are the only
  interventions.
- A chart-consistent global mixed-jet system preserves the known blocker
  and rejects Dover. After a short pilot, all260 saved maximum-four mutations
  complete in about2.05 seconds under a30-second limit. Exactly52 nonblockers
  retain an extra nonliftable direction, localized at a pencil with five
  bisecants, three quadruple secants and no triple secant. The agent explains
  this omission in the tested equations instead of enlarging the search.
  Those directions do not have all complementary scalars nonzero.
- A corrected all-pair radial/normal relation includes the missing bisecant
  data. The observer reads its derivation and encoding. Its full saved batch
  takes about1.45 seconds and matches the full-module image dimensions on
  all260 inputs and both controls. Jacobian confirms the two control ranks.
  The agent calls this finite evidence for a necessary condition, not a
  general sufficiency theorem or a search-speed result.
- Literature supplies an applicable full graded restriction-cokernel
  formula in [Abe-Kawanoue, Theorem2.5](https://arxiv.org/html/2406.00305v2).
  The agent distinguishes it from the degree-p piece and from its truncated
  equations. Its separate descent proposal uses the
  [Stacks Project cohomology calculation](https://stacks.math.columbia.edu/tag/01XS),
  but identifies a missing normal-quotient condition: ordinary component
  gluing can admit a trivial lift of the known nonlifting example. It does
  not promote that attractive incomplete argument to a theorem.
- Algebraic deductions give an explicit local pencil basis and an analytic
  bisecant-cycle rejection of Dover. Weighted skew-line moments lead to
  coding theory and product ideals. The agent locates a projective
  Reed-Muller duality result, then notices that the product-ideal theorem
  it read assumes characteristic zero. Its checkpoint asks for the relevant
  characteristic-p statement and treatment of triples within four-fold
  flats, instead of silently transferring the theorem.
- This is an unresolved applicability question, not evidence that the
  finite-characteristic result is unknown in the literature. The observer's
  subsequent source check finds newer related work and an author's warning
  that older arXiv versions may be outdated. Whether those sources resolve
  this particular gap remains to be checked. Preserve this distinction in
  the next evaluation rather than supplying a proof route to the agent.
- The run remains in RESEARCH and ends at quota after542.5 seconds.
  Checkpoints retain the run and problem revision, and final pending checks
  name the current mathematical gaps. Post-wrap actions save the checkpoint,
  summary and latest lead; no new computation or review is launched.
- Final INDEX/SUMMARY contain137/6 local link occurrences. All nine
  checkpoint paths exist; the original index's116 distinct destinations
  are retained. Recursive traversal reaches251 existing paths and reports
  one nonexistent target, notes/v, caused by an unquoted inline mathematical
  expression being parsed as a Markdown link. This is a formatting defect,
  not missing research evidence; no research file is changed by the observer
  to hide it. PLAN uses plain file paths. Inputs and guide are unchanged,
  and no research process remains.

The recovery worked in the actual failure case and normal research continued.
The small guide edit also coincides with current checkpoints, but one run
does not isolate its causal effect. Do not add more instructions for the
isolated formula-formatting defect. Keep revision9 and evaluate the next
literature-dependent step for twenty minutes: does it locate an applicable
result or expose a precise remaining obstruction, and does that change the
value of the proposed formulation? No original-problem improvement or public
novelty claim is established by this run.

## Product-span continuation — search beyond the first theorem's scope

The preceding goal turn made progress by implementing and testing handoff
snapshots, recovering an actual index overwrite through Gacha, completing a
research continuation and pushing revision9. Its mathematical checkpoint
now depends on a characteristic-p product-span question and incomplete
fourfold-flat moment coverage. The original conjecture remains open.

Continue the same research thread for twenty minutes with unchanged guide,
runtime, model and effort. Observe whether the agent checks published
versions, later work and equivalent formulations before attempting a theorem
whose exact applicability is uncertain. A limitation of one source does not
establish that the needed result is absent from the literature. Also inspect
whether any derived criterion genuinely advances the chosen route, or only
restates the original finite-instance check with more machinery.

The observer's subsequent bibliography leads from r20 remain outside the
item and are not supplied to the research thread. No preferred proof route,
paper, equation or object is injected. Before-run copies of the six inputs
and handoff files are at _review/erdos-1159-r10/product-span-r21. The
PROBLEM and AGENTS hashes remain be1ab2f64347f22bd30aa220ebce8fe748355be25b69ffe228c911e37a0639a1
and c1a126418fd7e0cf7658bad689c37024c35c27ce8d9e98e5b260532edbdb770d.

This is a longer continuity and research-decision evaluation, not a causal
test of another instruction. No new instruction is justified merely by the
existence of a mathematical gap.

Observed research:

- The agent checks versions and related literature rather than treating an
  older paper's characteristic-zero hypothesis as evidence that the needed
  result is unknown. It attempts the published source, encounters an access
  challenge, and finds [Berget's product-space theorem](https://arxiv.org/html/0906.4774v2),
  whose field characteristic is explicitly unrestricted. Its direct-sum and
  Hilbert-series statements give the specific product span needed here.
  The agent also saves an elementary, scoped adaptation of a deletion/colon
  argument; this is not presented as a new general product-ideal theorem.
- Eight saved PG(2,7) configurations distinguish the full omit-three product
  space from the smaller space omitting independent triples and exact triple
  flats. The latter imposes double vanishing at quadruple points. Equal
  rational evaluation ranks in the controls are not promoted to a universal
  interpolation theorem. The latest complete batch takes about2.82 seconds.
- The agent subsequently removes that interpolation detour: the mixed first
  tangential identity extends to selected triples inside quadruple flats and
  supplies the missing moments. It records the common ambient-volume factor,
  checks all dependent triples on the eight saved configurations in about
  0.09 seconds, and reviews the analytic derivation and encoding. These are
  bounded identity controls, not larger blocking-set searches.
- An assembled proof and review establish the agent's intermediate criterion
  for specified size-(2p+1), maximum-four configurations in PG(2,p), p>=5.
  All-pair radial/normal compatibility and all dependent mixed rows force
  the uncovered-point moments to vanish. The characteristic-free span and
  an explicit two-point separator imply that no point is uncovered. The
  observer reads the derivation, scope, normalization and primary span
  source; no original-problem candidate or novelty claim follows.
- Crucially, the agent revisits the missing cardinality reduction. A primary
  [Singer-orbit construction](https://www.mdpi.com/2073-8994/17/2/179)
  gives a minimal maximum-four blocker with19 points in PG(2,7), larger
  than the critical15. Its nineteen tangent lines make each selected point
  essential. This rules out shrinking every such blocker to the critical
  size. It does not rule out a different existential replacement theorem,
  nor settle any original all-plane or all-constant quantifier.
- A purposeful reproduction of that published example takes about0.06
  seconds under a45-second limit. Its global degree11 module has dimension82
  and its19 local targets each have dimension6; Jacobian confirms the global
  rank152. Polynomial Frobenius corrections replace the critical scalar
  corrections. This prepares a concrete next input and checks the claimed
  change in degrees; it is not a new construction or a general extension.

The favorable behavior is the sequence of research decisions: look beyond
one source's scope, use an applicable theorem, replace an unnecessary
interpolation problem, and find a known counterexample to an overbroad
reduction. The unresolved concern is the value of continuing the algebraic
reformulation. Direct incidence checks already decide whether a specified
finite set is blocking. No speed advantage, new existence theorem, stronger
bound, or obstruction covering all cardinalities is established here.

The agent's current plan acknowledges this distinction and proposes testing
whether the abovecritical formulation yields an all-cardinality obstruction,
then returning to structural reductions or constructions if it does not.
That is a useful decision to observe next, rather than preselecting a
mathematical route for it. Keep revision9: this run gives no evidence that
another instruction or a more elaborate scheduler would improve the choice.

Final operational audit:

- The run ends normally at quota after1061.6 seconds. All four recorded
  checkpoints remain RESEARCH, appropriate for an intermediate result;
  no full candidate, VERIFY or DONE claim appears.
- The final plan and checkpoint remove the completed product-span, moment
  and Singer-control checks. They retain the actual next coefficient
  comparison and original quantifier gaps. Post-wrap activity only saves
  this handoff and summary; it starts no computation or review.
- PROBLEM.md and AGENTS.md are unchanged and the guide still matches the
  template. All four automatic pre-run handoff copies equal the independently
  saved before-run bytes. All nine checkpoint paths exist, all prior index
  destinations remain, and no research process remains.
- INDEX and SUMMARY contain150 and6 local link occurrences. Recursive
  traversal reaches275 existing paths plus the already-recorded notes/v
  formatting defect in an older mathematical note; no new missing
  destination appears. The observer leaves agent-authored research intact.

Only this evaluation log changes in the repository. The documentation diff
passes git diff --check; runtime and guidance retain the previously tested
revision9 implementation.

## After an intermediate success — reassess the route's value

The preceding goal turn completed the product-span continuation, inspected
its primary sources and artifacts, and pushed the evaluation as70e0eec.
That was progress: the characteristic and fourfold-moment gaps closed at
the stated critical scope, while a published larger minimal blocker refuted
a proposed cardinality reduction. Original-problem progress is still unproven.

Continue the saved thread for ten minutes with revision9 unchanged. The
agent's own checkpoint asks for a complementary derivation of the known
Singer19 example and its local polynomial corrections. Observe whether it
uses that bounded check to decide if the formulation offers an existence
or obstruction argument, or merely continues extending a finite decision
test. A completed intermediate theorem is a useful point to reassess value
even when the local work has not stalled.

No mathematical route, paper, or preferred outcome is supplied to the agent.
The original problem and research artifacts are untouched. Before-run copies
of the six handoff/input files are saved outside the item under
_review/erdos-1159-r10/value-r22. Retain the same run settings and thread;
this is a continuity observation, not evidence for a new guide revision.

Observed research and decision:

- The agent explicitly separates the coefficient extraction from a parallel
  assessment of whether polynomial corrections add an existence obstruction.
  It searches logarithmic-module restrictions, scalar descent and recent
  extendability work. These are agent-chosen tasks; the observer supplies
  no mathematical hint or request to abandon the route.
- The saved Singer19 input yields an actual normalized degree11 complement
  with determinant equal to the defining product. All19 local expressions
  have the predicted quartic Frobenius coefficients. The complete extraction
  takes about0.18 seconds, with internal60-second and external65-second
  limits; a two-pencil pilot precedes the remaining17 checks. Jacobian
  supplies exact nullity and rank operations on the saved inputs.
- The proposed simplification fails for these fixed local bases: the
  95-by15 ambient quartic restriction matrix has rank15, but adjoining the
  actual local coefficient family raises the rank to16. Two local values
  at the same rational vector are0 and5. One global quartic therefore cannot
  remove all raw local corrections. The agent correctly distinguishes this
  basis-dependent failure from a geometric obstruction: its input is an
  actual blocker and the extracted global complement already exists.
- The corrected analytic statement describes genuine normalized coefficient
  families as an affine translate of global polynomial restrictions. Scalar
  descent tests their differences, not the existence of an initial lift.
  The agent reviews the distinction, retains derivative terms in the
  abovecritical mixed rows, and gives the exact scope of the finite control.
  It launches no larger search to compensate for the failed simplification.
- Literature is used to check possible consequences, not just cited.
  [Yoshinaga's finite-field theorem](https://arxiv.org/html/math/0606005v1)
  already provides a fixed-arrangement freeness/covering equivalence.
  The recent [B2 extendability result](https://link.springer.com/article/10.1007/s00026-026-00869-z)
  assumes characteristic zero and a different multiplicity regime.
  [Asgarli-Ghioca-Yip's curve obstruction](https://arxiv.org/html/2510.15332v2)
  requires bounded curve degrees; a complementary derivation whose degree
  grows with p does not supply that hypothesis. The observer checks these
  primary scopes independently without sending the findings into the run.
- At09:04:37 UTC the agent explicitly rejects further expansion of a
  decision system as the present next step: the corrected formulation has
  produced no bound or construction for arbitrary blockers. At09:05:12 it
  records RESEARCH -> PLAN, with the failure reason in STATUS, new artifact
  links in INDEX, and a current checkpoint. It proposes comparing
  basis-independent data with the saved conditional structural route,
  looking for a degree bound depending on the intersection cap rather than
  p. No such structural lemma is claimed.

This addresses the particular concern left by r21: the agent reassesses
value after completing an intermediate result and actually changes the
recorded phase and next work. The known-example control prevented a false
shortcut, and the corrected theorem was not treated as an original existence
advance. The new planning question is still ambitious and has no established
answer; whether it yields a useful next experiment or proof step is the next
continuity test. One successful reassessment does not establish that route
selection is generally reliable, nor that this behavior was caused by a
particular guide sentence. Keep revision9 unchanged.

Final operational audit:

- Normal quota exit after525.9 seconds. The phase sequence is RESEARCH,
  PLAN, PLAN. STATUS explains the transition and the saved plan names the
  missing structural hypothesis and the existing notes to compare. No
  original candidate, VERIFY or DONE claim appears.
- The agent spends the last minute before wrap checking its handoff,
  including one16-second wait. It does not yet execute the new structural
  planning check. Post-wrap actions only refresh the checkpoint and summary;
  no new computation or review starts. This run establishes reassessment
  and persistence, not successful execution of the replacement route.
- PROBLEM.md and AGENTS.md remain byte-identical, and the guide still
  matches the template. All four automatic snapshots match the observer's
  pre-run copies. All eight checkpoint paths exist; all old INDEX targets
  are retained; no research process remains.
- INDEX/SUMMARY have156/5 local link occurrences. Recursive traversal
  reaches284 existing paths plus the previously identified notes/v formula
  formatting defect; no new missing target appears. The observer makes no
  repair to agent-authored research files.

The repository change is this evaluation log only. Documentation whitespace
checks pass; the runtime and guide are unchanged from the previously tested
implementation. Next observe whether the PLAN checkpoint produces a
discriminating structural question and starts useful work without reopening
completed finite controls or merely restating the original conjecture.

## From reassessment to an executable structural question

The preceding goal turn completed a ten-minute continuation, audited its
RESEARCH -> PLAN transition and artifacts, and pushed9a50c5c. That was
progress: the agent rejected a demonstrated gauge shortcut and declined to
extend an equivalent decision test without a link to existence. The
replacement structural question has not yet been made into a proved lemma
or an executed discriminating check.

Continue the same item and thread for ten minutes with revision9 unchanged.
Observe how the agent turns its own PLAN checkpoint into work: does it name
a specific invariant, structural assertion or alternative route, check known
results and saved counterexamples, record the appropriate phase transition,
and act on the findings? An unexplained request for a bounded-degree inverse
theorem could be as hard as the original problem, so merely repeating that
request would not establish progress.

The observer supplies no candidate invariant, literature lead or preferred
outcome. Before-run copies of all six input/handoff files are saved outside
the item at _review/erdos-1159-r10/plan-bridge-r23. PROBLEM, AGENTS, runtime,
model and effort remain unchanged. Revalidate the terminal preceding run
before starting this independent quota; this is not a restart of a live job.

Observed outcome:

- The agent selects a specific gauge-independent expression,
  I=F(Q)/Q=sum alpha_H^(p-1), and relates it to the complementary bracket
  coefficient. It evaluates to size minus line load modulo p and is defined
  even without blocking. Three saved PG7 inputs check the expression;
  Singer19 gives a special cubic-norm-square identity that does not extend
  to the critical control. A separate bracket computation checks the exact
  coefficient identity. These are short scoped controls, not an original
  existence result.
- It seeks projective-plane code and projection-function classifications.
  The [small-weight codeword theorem](https://arxiv.org/abs/2411.19201)
  requires small support, not merely a bounded alphabet; the
  [few-special-direction result](https://arxiv.org/abs/2609.21779)
  controls nonconstant projection directions, not the number of values.
  It records why those hypotheses have not been obtained here.
- Countermodels distinguish the full geometric problem from weaker
  few-value or pure-power assertions. An elementary counting family refutes
  bounded factor descriptions from few values alone; a two-point source
  refutes a pure-power shortcut but is not blocking. Neither is presented
  as a counterexample to the original structural conjecture.
- The agent proves and reviews injectivity of this invariant for source
  sets with line cap k when p>2k. Integer lifting of line-load differences
  and rational incidence inversion recover the source. It distinguishes
  this faithful encoding from the missing bounded-degree inverse theorem.
  The final next step retains the actual binary, bounded-secant source
  condition rather than treating arbitrary few-valued words as equivalent.
- State timing is incorrect. A completed new experiment is saved at
  09:12:40 UTC, while the only checkpoint is still PLAN. An external
  phase-observation.json records the same mismatch at09:14:29. The first
  RESEARCH checkpoint appears at09:16:12, about212 seconds after that
  completed experiment, following substantive delegated mathematical work.
  The final phase is reasonable, but its event time does not describe when
  research actually began.
- Normal quota exit after562.8 seconds; no original candidate or DONE claim.
  Post-wrap work saves the handoff, with no new computation or review.
  Inputs and guide are unchanged, all four automatic snapshots match the
  before-run copies, all eight checkpoint paths exist, and all earlier
  index targets remain. INDEX/SUMMARY contain164/6 local links. Recursive
  traversal reaches296 existing paths and the same older notes/v formatting
  defect; no new missing target or remaining process appears.

## Revision 10 — record research before executing the chosen check

Replace the PLAN-to-RESEARCH instruction with an explicit ordering: once a
concrete check is chosen, save its plan and record RESEARCH before running
or delegating it. Keep the same four states and the existing evidence/status/
index update procedure. Update the matching design-table row. The failure
does not justify inferring mathematical phases from shell commands, a new
scheduler, or a requirement to approve every delegated task.

Do not rewrite the delayed historical transition or the agent's mathematical
files. Test the revised guidance on a fresh isolated Erdős1159 item for ten
minutes, using the exact same problem text, model and effort. Observe the
state update relative to the first selected mathematical check, including
delegated execution. This is a fresh-path regression, not a controlled replay
of the continued thread; a pass cannot prove that every continuation will
follow the ordering.

The existing seven CLI integration tests and TypeScript build pass. The new
item's guide hash is4ea09278362bddb0864a567ed9c1441e9bf98c4a0cf1be8f2c6a972a36dc0eef;
its problem hash remains be1ab2f64347f22bd30aa220ebce8fe748355be25b69ffe228c911e37a0639a1.
Before-run files are saved at _review/erdos-1159-r24-phase/phase-r24.
The mode is continue because this is the first ordinary run after gacha add;
there is no earlier thread or imported mathematical checkpoint in this item.

Initial timing evidence:

- The new agent reads the actual AGENTS.md at09:20:43 UTC, then checks
  sources and tool capabilities while in PLAN.
- It saves PLAN, STATUS, INDEX and the RESEARCH checkpoint at09:21:41.
  The first delegated task follows at09:21:46, the first exact Jacobian
  operation at09:22:14, and its saved result at09:22:34. The selected
  mathematical work therefore follows the phase change, unlike r23.
- The external phase-observation.json records these public task/operation
  blocks, checkpoint events and artifact times. A failed invocation of
  python is corrected to python3 before the successful checkpoint; this
  does not produce premature mathematical results.
- Subsequent work remains ordinary autonomous research: primary-source
  scope checks, a bounded-coloring encoding, bounded exact searches, and
  aggregate pencil constraints. The q7/q11 search produces cap-four
  examples, with the q11 size21 case taking about43 seconds under60 seconds.
  These are known finite controls, not evidence of a new original result.

Final fresh-path evaluation:

- The aggregate-pencil work yields explicit feasible data for every integer
  q>=3, with polynomial-identity and nonnegativity arguments. This rules out
  that relaxation as an obstruction, not cap-four blocking sets. The agent
  records the route limitation and returns to PLAN at09:28:27.
- Three q13 searches, unrestricted, size26 and four-secant normalized,
  each return UNKNOWN at60 seconds. None is converted to an infeasibility
  claim. The saved continuation proposes a complete cross-ratio split and
  a known-witness normalization check before further search.
- The run ends normally after524.9 seconds. After the wrap instruction, an
  automatic continuation only reads the handoff and refreshes it; no new
  computation or review begins. PROBLEM/AGENTS are unchanged, the sole
  initial checkpoint snapshot is exact, all nine checkpoint/evidence paths
  exist, and no research process remains.
- INDEX/PLAN/SUMMARY contain12/2/10 local link occurrences. All35 recursively
  reached paths exist. The observer audit now includes the observed
  evidence-array checkpoint field, rather than silently omitting its paths.

The initial ordering is correct in this trial, but the original failure
occurred on continuation. Since this item naturally ends in PLAN, continue
the same thread for another ten minutes with the guide unchanged. Observe
whether it records RESEARCH before implementing or delegating its own saved
cross-ratio check. This closes a coverage gap in the regression, without
editing its plan or inserting a preferred mathematical step.

The long-running experimental item erdos-1159-r10 also receives revision10
in AGENTS.md after its r23 run has ended and been audited. An external
guide-revision10.json records the timestamp and old/new hashes; its problem,
plan, status, index and mathematical artifacts are not edited by the observer.

Continuation timing evidence:

- The second trial resumes the identical thread
  01a1d95b-c39d-7ca2-be33-2b156751db00 from its naturally saved PLAN.
  At09:31:50 UTC it saves the updated plan/status and RESEARCH checkpoint;
  the first delegated check follows at09:31:56. Implementation, normalization
  checks and solver calls occur afterward. Thus both the first-run and
  continuation observations satisfy the revised ordering.
- Known q7 instances pass the normalized t=2,3 branch controls. The q13
  representatives2,3,4 cover its cross-ratio orbits. Three-second standard
  and finite-domain trials, and ten-second trials with minimality constraints,
  remain UNKNOWN at q13. They are not reported as exclusion proofs.
  Structural and related-literature work proceeds alongside the trials.
- The observer does not inject a phase command, edit the mathematical plan,
  or supply the branch decomposition. These are executions of the agent's
  own checkpoint. The two successful observations support keeping the
  clarification but do not establish a deterministic guarantee or isolate
  its effect from sampling and context differences.

Final continuation evaluation:

- The run ends normally after563.2 seconds, with a PLAN checkpoint and no
  original candidate or DONE claim. The agent implements the normalized
  branches, checks their coverage on saved witnesses, and stops the q13
  search after the bounded variants remain UNKNOWN. It does not inflate
  the same budgets merely because the smaller controls are easy.
- The structural note derives an exact weighted-residue identity for every
  cap from the incidence moments. It distinguishes an equivalent encoding
  from an existence theorem: the sparse-residue feature is specific to
  cap four, while larger fixed caps permit quadratic cost. An alternative
  integer encoding times out even on a known q7 example; pinning its saved
  witness establishes consistency, not a performance improvement. The next
  saved trial is a Boolean encoding on that small control before any larger
  allocation.
- The related-field search reads Alon's partial-design construction and
  the original Erdős–Silverman–Stein paper. It explains why independently
  thinned incidences do not transfer a blocking obstruction to complete
  plane lines. Its elementary sampling argument excludes high-probability
  independent sampling at a fixed cap, without excluding rare sets or
  correlated constructions. These scoped barriers influence the route;
  no novelty or original-problem resolution is claimed.
- One Jacobian q13 request loses its decision envelope during persistence.
  The agent records the failure and excludes the result from mathematical
  evidence. Its operational UNKNOWN is explicitly distinguished from a
  documented solver timeout. This is a result-retention defect, not evidence
  against the solver or a reason to require independent certificates for
  all mature-tool results.
- After the wrap instruction, the remaining public action saves the handoff;
  no new computation or review begins. All four automatic before-run copies
  match the external snapshots. PROBLEM/AGENTS remain unchanged; all eight
  checkpoint paths and59 recursively reached artifact paths exist, with
  no missing link, removed earlier index target or remaining research process.
  INDEX/PLAN/SUMMARY contain17/3/10 local link occurrences.

The phase-ordering regression now has both fresh and continued observations.
Further testing should return to research value: whether the next small
encoding trial changes a useful decision, and whether the agent pursues a
route relevant to arbitrary caps and planes instead of indefinitely optimizing
one finite cap-four instance. The observer has not changed the mathematical
plan or supplied a preferred route.

## Continued evaluation — value after inconclusive finite searches

The r25 checkpoint proposes a small Boolean residue-encoding comparison,
after the integer encoding failed to solve a known q7 instance within its
short budget. It also records that cap-four sparsity does not address the
original all-cap quantifier. Continue the same thread for ten minutes with
revision10 unchanged. This tests whether the agent uses its comparison to
make a research decision and reconnects its work to the original problem,
rather than repeatedly optimizing one finite instance without new evidence.

Observe what a positive or negative comparison changes, whether retrieved
knowledge affects a subsequent step, and whether the agent distinguishes
an equivalent formulation or a finite control from a stronger mathematical
conclusion. A longer computation can be justified by prospective value and
measured cost; elapsed time alone is not a reason to reject it.

The previous run is authoritatively terminal before launching this quota.
External copies of the six input/handoff files are saved under
_review/erdos-1159-r24-phase/route-value-r26. The statement, guide, runtime,
model and effort are unchanged. The observer supplies no mathematical hint,
preferred tool or route, and does not edit the research artifacts.

Observed outcome:

- RESEARCH is recorded at09:45:54 UTC before the first delegated check at
  09:46:01. After the substantive checks, the agent records PLAN at09:52:53
  with a different concrete next step. No original-scope candidate or DONE
  claim appears.
- Both unpinned Boolean-residue q7 trials, default Z3 and QF_FD, return
  UNKNOWN at three seconds. Pinning the existing witness gives SAT in18ms
  and checks the custom encoding. The agent explicitly declines a q13
  escalation or longer repetition. The earlier direct line-bound witness
  is a useful control, but this is not a controlled performance study across
  encodings and cardinality settings; no general speed ratio is inferred.
- It identifies the all-cap residue defect as an exact sum of convex hinge
  penalties and connects it to the primary
  [soft global cardinality literature](https://www.andrew.cmu.edu/user/vanhoeve/papers/softglob.pdf).
  The flow assignment model does not preserve the coupled contribution of
  one selected point to all its incident lines. The uniform fractional
  solution has zero penalty, so an additional integrality or rounding result
  is needed. The agent does not sell the re-expression as a new existence
  theorem or use the unrelated flow algorithm without its hypotheses.
- A strict-greedy failure is tested against a repair. In the fully enumerated
  PG(2,3), cap-three case,260 positive-energy configurations have no improving
  one- or two-point toggle. Yet the whole4940-state energy-at-most-one graph
  is connected by nonincreasing single toggles to its468 zero-energy states,
  with maximum distance four. The agent distinguishes this finite repair
  from a universal exchange theorem. It saves a bounded order-five trial as
  the next check and identifies the initial known repair as calibration.
- A separate primary-source check of BSS/MSS explains why the raw incidence
  frame does not provide sparse two-sided spectral approximation: its full
  and centered selected spectra depend only on cardinality, and the full
  lower PSD bound requires all columns. The report explicitly leaves
  diagonal-only, group-preserving selection open. It does not rule out all
  spectral methods or infer a blocking-set obstruction from a rank argument.
- The parent checks a proposed transfer from Alon's half-thinned partial
  designs. Completing every disjoint block pair by a new point creates a
  matching-based transversal with maximum load two under a sufficient graph
  degree condition, proved to hold with high probability in that model.
  A q7 diagnostic uses an exact Jacobian maximum matching; its degree is
  below the asymptotic sufficient threshold, which is explicitly noted.
  The enlarged family is not a projective plane. This blocks the naive
  transfer, not the original negative resolution or every possible embedding.
- The run exits normally at quota, reporting529.8 seconds. Its automatic
  continuation reads the handoff and proposes a short calibration, but the
  wrap instruction arrives before execution. It records the work as still
  pending and only saves files after wrap; no computation or review begins.
  All four automatic snapshots match the external copies. PROBLEM/AGENTS
  remain unchanged; all eight checkpoint paths and86 recursively reached
  artifact paths exist. Earlier index targets are retained, with no missing
  link or remaining research process. INDEX/PLAN/SUMMARY contain22/4/8 local
  link occurrences.

Keep revision10 unchanged after this trial. The observed agent stops a weak
encoding, uses related algorithms with scope checks, and tests a repair
before discarding a broader idea. More mandatory roles, counters or guidance
are not justified by this evidence. This is behavioral evidence from one
continuation, not proof of general research capability or a causal comparison.
The next research-value question is whether neutral exploration reveals a
useful structural statement or remains a succession of small implementation
checks; an original-scope theorem remains missing.

## Continued evaluation — from finite repairs to a structural question

Resume the naturally saved neutral-exchange checkpoint for twenty minutes,
keeping the statement, guide, runtime, model and effort unchanged. The longer
window allows a small implementation trial and the subsequent mathematical
decision to occur in one quota; it does not require a longer computation.
Check whether successful finite repairs lead to a precise general claim,
whether a failure is scoped correctly, and whether literature or a resource
estimate changes the chosen method before a growing search consumes the run.

The previous run is terminal, and external copies of all six input/handoff
files are saved under _review/erdos-1159-r24-phase/neutral-repair-r27.
The observer adds no mathematical lead and leaves the agent's plan intact.
The pending known order-five repair is explicitly calibration in that plan;
reproducing it alone will not count as new research progress.

Observed outcome:

- RESEARCH is saved before the first delegated check. The known q5 repair
  serves as calibration. Radius-four perturbation enumeration examines36456
  point sets and finds12 strict one/two-toggle traps; all twelve have checked
  neutral three-step repairs. These are scoped controls, not an assertion
  about all configurations or orders.
- A primary-source search leads to
  [Dover–Mellinger's published conic construction](https://msp.org/iig/2011/12-1/iig-v12-n1-p06-p.pdf).
  Two explicit conics in PG(2,7), with or without their common interior
  center, give a closed two-state component at energy one. The agent gives
  an algebraic explanation and exhausts114 single and3192 double toggles.
  This refutes the proposed universal nonincreasing one/two-point repair
  algorithm. Existing cap-four blockers in the same plane prevent confusing
  an algorithmic trap with nonexistence. The construction is attributed and
  no novelty claim is made for the derived reconfiguration interpretation.
- Allowing energy two first reaches a5000-node BFS limit, recorded as
  UNKNOWN. Instead of increasing that bound, the agent tests a finite
  geometric four-move template, then a short seeded search avoiding revisits.
  The latter finds a six-toggle path with energies1,2,2,2,1,1,0. Exact
  coordinate/line replay checks the path. Together with the closed-component
  lower bound, this establishes the minimum ceiling as two for this starting
  set, not a uniform ceiling or a general search-performance result.
- The literature branch proves a simpler original-scope sufficient condition:
  total hinge defect E_k<=r can be repaired by at most r added points to give
  a blocker with cap k+r, in any plane. This exposes the unnecessary strength
  of insisting on zero defect at the original auxiliary cap. Known geometric
  stability and generic reconfiguration/factor algorithms are checked against
  their size, field and grouped-incidence hypotheses rather than applied by
  analogy. No absolute bound on the achievable defect is proved.
- After the monotone route fails, the parent selects independent fixed-size
  choices on punctured pencil lines as a different correlated sampler. It
  derives exact empty-line marginals and pair moments for every plane, proves
  negative pair covariance, and obtains quadratic typical hole counts for
  fixed selections per group. Full q2/q3 sample enumerations check the
  formulas. It explicitly leaves rare successes and dependence between groups
  open; a high-probability failure is not called an existence obstruction.
- A recent primary-source check correctly separates
  [balanced intersection-size frequencies](https://arxiv.org/html/2605.23644v2)
  from bounded intersection sizes. The paper's dense sampling and coloring
  hypotheses do not imply a thin blocker or an unbounded lower bound. Its
  overlap-conditioning idea is relevant methodological context, rather than
  a theorem closing the present gap.
- The run exits normally, reporting1070.5 seconds, and ends in PLAN with a
  proposed incidence-based generalization of the saved energy-two repair.
  No computation or additional review starts after wrap-up. All four
  automatic before-run snapshots match, PROBLEM/AGENTS are unchanged, all
  ten checkpoint paths and128 recursively reached artifact paths exist,
  and earlier index targets remain. INDEX/PLAN/SUMMARY contain31/6/11 local
  links; no missing target or research process remains.

There is also a phase-observability limitation. At10:08:31 UTC one successful
shell command atomically replaces state.json with PLAN, writes the new route,
then replaces it again with RESEARCH. Both reasons remain in STATUS, and the
public command proves that both file updates occurred. Gacha's250ms polling
observes only the final RESEARCH checkpoint. The external phase-observation
record saves the command, its zero exit status and the observed event sequence.
This is not the earlier failure to update state at all, and no historical
event is backfilled. It means that sampled checkpoints alone cannot be used
to audit every short-lived phase.

The research behavior supports retaining the mathematical guidance: retrieved
knowledge supplies an adversarial example, a limited search prompts a method
change, and an unnecessarily strong auxiliary requirement is relaxed toward
the original quantifiers. One run still cannot demonstrate frontier novelty
or general autonomy. The next engineering check is a small clarification of
phase-update boundaries so consecutive phase changes are separately observable,
without adding a second journal or a mandatory research scheduler.

## Revision 11 — separate phase-update operations

Add one sentence to the guide: save each phase change in its own tool call
before starting work in that phase. The existing evidence/status/index and
atomic-replacement procedure remains. Clarify the matching design paragraph
and its observed-checkpoint semantics. The runtime and research strategy are
unchanged; do not add a ledger, phase inference, sleep requirement or forced
research cycle.

The r27 command demonstrates why this distinction matters: its two successful
state replacements occurred between observations of the 250 ms sampler. Keep
that historical omission intact. Update only the experimental item's guide
after its terminal run, then continue its own saved mathematical task for
twenty minutes with the same model and effort. Observe whether naturally
occurring phase changes are separate operations and appear in the event log;
do not inject a phase change merely to make the regression pass. A passing
trial will not establish lossless state-history guarantees for arbitrary
external writers.

The TypeScript build and all seven existing CLI integration tests pass.
The experimental guide hash becomes
8af6685c5a83a41e2101bc2a70e34ed3989b48db47bec5a6be780a5d5bb333a9;
guide-revision11.json records the old/new hashes and unchanged research-file
hashes. The before-run copies are under
_review/erdos-1159-r24-phase/phase-boundary-r28. Only AGENTS changes in the
item; the original statement and its agent-authored mathematical checkpoint
are preserved byte for byte before launching the continuation.

Observed outcome:

- The resumed thread explicitly acknowledges the updated phase instruction.
  RESEARCH is written at 10:29:00.680 UTC and observed at 10:29:00.792, before
  the first delegation at 10:29:08.183. The initial orchestration call waits
  for the shell invocation to save state, then performs Jacobian discovery;
  it contains no second phase change. Later, the conditional repair route's
  missing starting configurations motivate PLAN at 10:44:17.398, observed
  at 10:44:17.530. That successful call saves the transition reason and state;
  a later call writes the next plan. Both natural transitions are recorded.
- The six-toggle q7 witness becomes an explicit sufficient incidence lemma
  for every plane and auxiliary cap at least four. Initial tangents and
  saturated lines give an eight-term defect formula, also a directed-cut
  frontier. All 64 packet subsets and 720 orders are checked; 208 orders have
  ceiling two. A typed Jacobian DAG operation confirms the packet's optimum
  ceiling. This generalizes a supplied local configuration, without claiming
  that suitable packets or bounded-defect starting sets always exist.
- The hole-cover branch distinguishes the number of defects from their
  geometric repair cost. In any plane, a cap-k set whose holes are covered
  by r points extends to a blocker of cap at most k+r. Reproducing the known
  [Bruen–Fisher characteristic-three family](https://msp.org/pjm/1974/53-1/pjm-v53-n1-p06-p.pdf)
  gives an infinite diagnostic: deleting one point can create at least q/3
  concurrent holes, all repaired by restoring that point with cap four.
  Exact extension-field checks at q=9/q=27 give three/nine holes. This is a
  purposeful reproduction and derived comparison, not a new blocker family
  or a lower bound on the plane's minimum defect. The branch also recognizes
  that an unrestricted thin residual-cover theorem would essentially restate
  the original problem, and checks why published small partial-cover results
  do not supply the desired initial sets.
- Reading the quantitative proof of
  [Asgarli–Ghioca–Yip](https://arxiv.org/html/2510.15332v2)
  gives a restricted but stronger route obstruction: fixed-degree reflexive
  nonlinear algebraic support in odd Galois planes leaves a positive fraction
  of all lines uncovered. Since a new point meets only q+1 lines, any repair
  needs Omega(q) new points, even if old points may be deleted. The note keeps
  the reflexivity/degree/field hypotheses and explicitly allows the unresolved
  possibility of a linear-size repair with bounded line congestion. Exact
  q=23/q=31 conic diagnostics illustrate the mechanism; they do not establish
  the asymptotic result or a lower bound for arbitrary blockers.
- Further literature changes the proposed optimization target. The known
  [minimum external-conic-cover classification](https://media.accademiaxl.it/memorie/S5-VXXXI-P1-2009/Korchmaros89-112.pdf)
  says that for odd q>=9 every minimum-cardinality cover is a secant with
  its two conic points removed. Adding it to the conic therefore gives cap
  q+1. A larger cover from the known characteristic-three family gives cap
  at most six instead. Checked q=9/q=27 examples compare caps 10/28 against 6.
  The agent separates this cardinality obstruction from the desired minimax
  congestion bound. Its residual optimum is within two of the whole-plane
  optimum, which is an equivalence of the unresolved Galois-plane question,
  not a shortcut or a resolution for non-Desarguesian planes.
- The saved next step is to read the original minimum-cover proof and seek
  applicable near-minimum stability results before a short q=11 size-11/cap-3
  trial. The equality classification alone is not extrapolated to larger
  covers. The stated trial distinguishes SAT, finite UNSAT and UNKNOWN;
  neither the proof review nor that trial starts in this run.
- Gacha reports 1034.4 seconds and exits normally with endReason quota at
  10:45:34.086 UTC. The agent first saves its handoff and ends a turn; the
  automatic continuation reads the checkpoint before wrap-up arrives at
  10:45:19.700. Its only later tool action refreshes the handoff. It launches
  no computation or additional review and leaves the research phase PLAN.
- PROBLEM/AGENTS remain byte-identical and the guide matches the template.
  All four automatic before-run copies match. All eight checkpoint paths
  and 153 recursively reached artifact paths exist; earlier index targets
  remain. INDEX/PLAN/SUMMARY contain 37/4/8 local links. No research process
  remains in the item directory.

The external phase-observation record preserves the public calls, successful
tool returns and sampled checkpoints. This trial covers the two ordinary
phase changes above. It does not contain an intermediate PLAN-to-RESEARCH
return, so it does not reproduce r27's rapid two-transition pattern or prove
lossless observation of arbitrary writes. Keep that limitation explicit;
do not force an artificial mathematical route change to increase coverage.

Research behavior is encouraging at the decision level: primary literature
changes the chosen objective, known constructions test an overly strong
proxy, and local conclusions retain their missing existence hypotheses.
None establishes novelty or an original-scope advance. The parent handoff
also joins some English words together, reducing readability despite complete
links; the observer leaves the agent-owned files intact and records this
for further observation rather than adding another instruction from this case.

## Revision 11 continued — knowledge at a new subproblem

The previous goal turn made concrete progress: revision11 was tested,
evaluated and pushed as 9370a91. Its run is terminal. Continue the same
agent-authored checkpoint without changing the guide or supplying a
mathematical lead. External before-run copies of all six input/handoff files
are under _review/erdos-1159-r24-phase/near-minimum-conic-r29. The unchanged
guide hash is 8af6685c5a83a41e2101bc2a70e34ed3989b48db47bec5a6be780a5d5bb333a9.

Allow twenty-five minutes for the saved proof/literature investigation and
any check it motivates. Assess whether the researcher reads the known
minimum-cover result at the needed scope, searches related terminology
before developing a new subproblem, and lets those findings change its
mathematical decision. A finite SAT/UNSAT result must keep its finite scope;
a timeout must not become a theorem or an automatic demand for a larger
budget. Observe natural phase boundaries and handoff quality as well.

This continuation can supply evidence about recurrence and transfer within
the problem. It is not an instruction to manufacture a new route, a phase
cycle, or a potentially publishable claim within one short run. The remaining
rapid-transition coverage from r28 stays open unless it occurs naturally.

Observed outcome:

- The agent reads the original author-uploaded Aguglia–Korchmaros proof,
  identifying the exact incidence, constant-coefficient and group-invariance
  uses of equality. It derives a coefficient extension for additive slack
  and a unique degree-q normal form with 2q+1 parameters. Exact Jacobian
  ranks at q=7/11 are 15/23. It distinguishes this ideal representation from
  the unproved classification of totally split products; no novelty claim
  or congestion theorem is inferred from the rank checks.
- A primary-source search finds
  [Giulietti's perfect-cover classification](https://arxiv.org/html/math/0607118).
  It settles the zero-internal-point size-11/cap-3 subcase in PG(2,11), which
  had timed out in an unassisted solver trial. Its known Baer constructions
  also defeat an almost-full-line extrapolation just one point above the
  minimum: size-q examples can have cap sqrt(q)+1. A purposeful GF(9)
  reproduction checks all 91 lines, including all 36 external lines hit
  exactly once. The cap still grows, so this is not a bounded-cap family
  resolving the original question.
- The excess identity for a size-s cover with r internal points is
  Delta=(q-1)(s-q)/2+r. At s=q, r=1 forces a unique doubled external line.
  Justified conic-group symmetry and redundant counting constraints let
  native Z3 finish that q=11/cap=3 subcase as UNSAT in 0.116 seconds. The
  wider five-second trials remain UNKNOWN. This is a decision for a smaller
  specified subcase, not a speedup or solution of the original full search.
  A typed Jacobian alternative hits its operation timeout and is recorded
  as operational UNKNOWN; the completed native decision is still used.
- Keeping the overlap terms in the published proof gives exact character
  equations. The agent saves 112 rational systems and checks their outputs.
  Their coordinate differences/signs exclude size-q, r=1 covers at q=19/23
  for any cap. Simultaneous q=11 necessary conditions still leave six dual
  locations; these are not geometric covers. A separate full-row-rank
  observation limits unrestricted syndrome arguments outside the defining
  characteristic. All these conclusions keep their stated scope.
- Literature search expands to internal-point partitions, restricted codes,
  exterior sets and integral-distance graphs. The agent catches opposite
  pair conditions and the mismatch between regular graphs and the two
  degrees of the full conic graph. It records a bounded search that found
  no applicable stability theorem, rather than declaring the topic absent
  from the literature.
- The parent explicitly recognizes that cap K permits the full O(Kq)
  cardinality range. Near-minimum classification alone cannot handle it.
  It returns to PLAN to assess a justified bridge to the restrictive error
  regime before escalating finite searches. This is an actual change to
  its own checkpoint, not a mathematical instruction supplied by the observer.
- RESEARCH is observed at 10:53:14.177 UTC before the first delegation at
  10:53:21.756; PLAN is observed at 11:13:23.204. Both changes use separate
  state-writing calls. There is again no intermediate PLAN-to-RESEARCH
  return. Gacha reports 1288.6 seconds and ends normally at 11:14:27.958
  with endReason quota. Automatic continuation only refreshes the handoff;
  no computation or new review starts after the explicit wrap-up.
- PROBLEM/AGENTS are unchanged, all four automatic before-run copies match,
  and all eight checkpoint paths and 177 recursively reached artifact paths
  exist. Earlier index targets remain. INDEX/PLAN/SUMMARY contain 42/0/4
  local links; no research process remains. The new plan and summary are
  readable prose, so the earlier joined-word issue does not justify another
  style instruction from this evaluation.

The content audit finds a concrete reproduction defect despite those passing
path checks. Seven QF_FD SMT exports are identical 77-byte files containing
only a status header and check-sat, with no constraints. The default-engine
export contains 189 assertions. The note nevertheless calls every export
an exact assertion file, and the final summary reports no cleanup needed.
The observer preserves early copies and the final comparison outside the
item in near-minimum-conic-r29; it does not repair the agent-owned evidence.
The agent never identifies or qualifies the export defect during this run.

This does not show that the native Z3 computation was wrong. Its generator,
command, settings and result are saved; the generator hash matches the
completed UNSAT record, so that Python command remains the reproduction
entry point. The purported standalone SMT files are unusable for that
purpose. Together with the earlier r25 failed raw-result save, this supports
a focused improvement to saving new formats, while retaining trust in tools
within their documented guarantees.

## Revision 12 — check a new export method

Extend the existing reproduction instruction by one sentence: check a new
export method on a small example to ensure it preserves the intended data.
The subject is the saved input/result, not re-proving the solver or requiring
independent UNSAT certificates. The runtime, phase model and mathematical
acceptance criteria remain unchanged. A file's existence or checksum cannot
by itself show that an export contains the promised data.

Use a new experimental item with the same unmodified problem statement and
the revised guide for a ten-minute fresh run. This also checks behavior
outside the long external-conic continuation. Supply no old mathematical
plan, solver-specific hint or forced phase change. Observe whichever export
or result-saving method it actually uses. If the problematic export method
does not occur, distinguish a useful fresh-run check from coverage of the
specific QF_FD serialization failure. Preserve the r29 artifacts as evidence.

The TypeScript build and all seven existing integration tests pass after
the guide change. Gacha add creates erdos-1159-r30-fresh with a byte-identical
PROBLEM.md (be1ab2f64347f22bd30aa220ebce8fe748355be25b69ffe228c911e37a0639a1).
The revision12 guide hash is
26f80bbb5220ca6e2a61a5bffb3177f0a84f4476a62299d82a6483258e218e14.
The four initial files are copied under _review/erdos-1159-r30-fresh/export-r30.
No old plan, status, index, notes or scripts are imported; the earlier
experimental item remains at its saved revision11 checkpoint.

Observed outcome:

- The researcher reads the latest supplied AGY version and the primary
  Bruen–Fisher and Erdős–Silverman–Stein results at their stated scope.
  It labels the low-cap obstruction and small-plane optima as known
  reproductions. The characteristic-three construction supplies a test
  case for proposed universal obstructions; its shared-origin spectrum
  correction does not become a claim of a new construction.
- It derives integral formal cap-four point profiles for every q congruent
  to 1 modulo 3 with q at least 13. They satisfy the listed global and
  pencil moments, private tangents and pair-line identities. Exact samples
  support the algebraic derivation; neither the samples nor the formal
  profiles supply an incidence structure. There is no novelty claim.
- A stronger q13 integer test admits line-composition counts satisfying
  all line-neighbor sums and all 15 colored-point pair totals. The two
  explicit witnesses survive review by reading their saved JSON and
  checking the equations with integers. The agent searches the related
  tactical-decomposition literature, recognizing that formal schemes
  and realizability differ, before moving to actual incidence constraints.
- The small-plane JSON retains SAT point coordinates, indices and all
  line counts, together with commands and versions. A separate script
  reads that saved file and reports PASS for all six cases. No SMT export
  occurs. Thus this run supplies positive evidence for saved-data
  usability, but does not exercise the particular QF_FD export method that
  failed in r29. It is not a controlled comparison establishing that the
  new sentence caused the observed behavior.
- After the aggregate repairs remain feasible, the researcher returns to
  PLAN and then RESEARCH. Its actual-plane encoding accepts the pinned
  known q9 witness, with 18 points and all 91 line counts saved. A five-second
  all-placement q13 test for precisely the five-type profile returns
  UNKNOWN. The final handoff records the encoding review as pending and
  proposes diagnosing the bottleneck before increasing effort. It makes
  no infeasibility claim and does not generalize this profile to all
  cap-four sets. Whether this finite diagnostic yields a useful general
  argument remains an open evaluation question.
- Gacha observes PLAN at 11:19:56.212 UTC, RESEARCH at 11:21:09.293,
  PLAN at 11:26:52.314 and RESEARCH at 11:27:56.949. The three phase
  changes have separate state-writing calls before work in the new phase.
  This naturally exercises a return to RESEARCH, though the transitions
  are minutes apart and do not establish lossless rapid-change logging.
- The fixed-incidence command starts at 11:28:29.750, before wrap-up at
  11:28:33.581, and finishes seconds afterwards. Only handoff updates follow;
  no new computation or review starts after wrap-up. The run ends normally
  at 11:29:18.670 with endReason quota and 553.8 seconds of recorded runtime.
- PROBLEM/AGENTS are unchanged and the fresh guide matches the template.
  The sole automatic before-run copy, state.json, matches the observer's
  initial copy. All ten checkpoint paths and 30 recursively reached
  artifact paths exist; INDEX/PLAN/SUMMARY have 10/1/14 local links. No
  item process remains. The experiment manifest retains its earlier
  no-timeout statement and omits the late fixed-profile trial, but INDEX,
  state and the final summary directly link and accurately qualify that
  UNKNOWN result. Record the stale manifest without rewriting the
  agent-owned artifacts or adding another rule from this single case.

The original problem remains unresolved. The useful behavioral evidence is
that literature changes the interpretation, aggregate feasibility changes
the route, and a bounded timeout remains a bounded timeout. File counts or
the quantity of finite calculations are not evidence of original-problem
progress. The external content observation and artifact audit remain under
_review/erdos-1159-r30-fresh, separate from the researcher's checkpoint.

## Revision 12 continued — value of a finite diagnostic

The previous goal turn made concrete progress: revision12 was evaluated in a
fresh run and pushed as 152cc8d. That run is terminal. Continue its own saved
checkpoint with the same guide for fifteen minutes, allowing time to inspect
the encoding and test a response to the five-second timeout. Seven before-run
files are preserved outside the item under
_review/erdos-1159-r30-fresh/fixed-incidence-r31.

Observe whether the agent diagnoses the bottleneck, finds applicable methods
or tools, and explains what a finite result would change in its mathematical
route. Also watch whether checking its own encoding stays proportionate to
the claim, and whether a saved pending review becomes an unproductive loop.
No mathematical hint, new instruction, revised plan or larger solver budget
is supplied by the observer. A useful outcome can be a justified abandonment
or reformulation; repeated calculations alone do not establish progress.

Observed outcome:

- The original finite encoding passes a review at its exact five-type q13
  scope. The reviewer explicitly notes that the earlier pinned q9 control
  covered only the incidence/cap shell, not the profile constraints. It
  reads the Z3 authors' cardinality/PB documentation, discovers that the
  available Jacobian operation is not a suitable exact solver, and builds
  a Boolean-selector formulation with a full-profile q5 control. The old
  nested arithmetic is identified as a plausible bottleneck, not a proven
  explanation of the timeout.
- The ten-second PB trial, thirty-second proven flag normalization and
  fifteen-second double-tangent/singleton normalization all remain UNKNOWN.
  The transformations preserve a representative of every profile placement;
  there is no unproved orbit restriction. The agent explicitly stops this
  solver campaign pending a structural argument or measurable improvement.
- The QF_FD serialization failure recurs naturally. A new parse/count check
  initially passes because both pre-check assertion lists are empty. The
  old record later reports a post-solve internal count of 12,524 despite
  its 77-byte export containing no constraints. The observer preserves the
  initial files outside the item and does not intervene.
- At 11:41:24 UTC the researcher inspects sizes, hashes and actual export
  contents. At 11:42:48 it implements its own repair: record every original
  added formula and serialize that source list with the ordinary solver.
  A nonempty two-assertion control and complete parsed-AST comparisons check
  the replacement method. The three saved exports contain 2,754/2,769/2,795
  source assertions; observer readback and hashes agree. The note explicitly
  retracts the vacuous check and labels both old exports invalid. Native
  solve statuses remain UNKNOWN. This supplies the specific export-path
  coverage missing from r30, without establishing that one guide sentence
  alone caused the repair.
- An observer-only contradictory two-formula control independently reproduces
  the defect outside the item: native QF_FD returns UNSAT, but its empty
  export reloads as SAT; ordinary Solver preserves the two formulas and
  returns UNSAT after reload. This locates the reproduction problem without
  questioning the native computation. Script and output are retained in
  the external r31 review directory.
- The coding-theory route derives a formal cap-four weight enumerator with
  nonnegative integral MacWilliams coefficients for every integer q>=13,
  interpreted as a necessary condition only at prime-power field orders.
  It uses exact moment divisibility, an all-high-degree bound and fourteen
  low-degree rational-polynomial certificates. A separate review checks
  those identities without replaying the large transforms. The extension
  beyond the original congruence progression does not also claim the same
  local point types or an actual projective code/blocking set.
- Jacobian's transform works on its documented binary example but errors on
  the prime-field target calls and rejects extension fields. The researcher
  records those as operational limitations and uses a tested exact local
  transform. It does not infer mathematical infeasibility or keep retrying
  the same failing operation.
- Related-field search reaches shallow hitting sets, hereditary hypergraph
  methods and finite-geometry polynomial techniques. The agent checks why
  the cited small-set, girth, dimension and hereditary hypotheses fail here.
  Its explicit restriction-to-one-line argument refutes a too-strong
  hereditary premise, and an all-plane Bernoulli estimate shows that simple
  independent rejection sampling has exponentially small fixed-cap success
  probability. Neither argument excludes correlated repair or resolves the
  original problem.

The observer separately retrieves the public
[1997 Illes–Pisinger report](https://di.ku.dk/forskning/Publikationer/tekniske_rapporter/tekniske-rapporter-1997/97-13.pdf),
whose journal abstract the researcher had previously read. Visual inspection
of pages 5/9/13 confirms that its q13 table gives a size-24, cap-5 example,
with spectrum (117,9,33,18,6). This does not answer the exact size-27, cap-4,
no-trisecants profile under investigation. It is an independent literature
control, not a latest-bound survey or a hint supplied during the trial. The
agent's literature coverage remains bounded, and no novelty claim follows.

Final handoff and evaluation:

- The researcher records PLAN at 11:48:25.717 UTC after the geometric search
  remains UNKNOWN and the counting/coding repairs remain feasible. Its new
  plan asks for a coefficient or direction-multiplicity constraint before
  more search, and explicitly asks whether an expensive finite campaign can
  inform growing orders or general caps. Completed encoding reviews are
  removed from the current pending work.
- Automatic continuation records RESEARCH at 11:49:51.047 in a separate
  state-writing call. Wrap-up arrives at 11:50:05.323 before any result of
  the selected coefficient extraction is saved. The agent records that
  step as pending, starts no computation or review after wrap-up, and saves
  the final handoff. No unperformed step becomes a finding. The run ends at
  11:50:33.027, endReason quota, elapsedMs 792259, with the same thread ID as
  r30. This is a naturally observed RESEARCH-to-PLAN-to-RESEARCH cycle.
- PROBLEM, AGENTS and item settings remain byte-identical. All four automatic
  pre-run handoff copies match the observer's originals. All nine checkpoint
  paths and 59 recursively reached artifact paths exist; INDEX/PLAN/SUMMARY
  have 16/2/10 local links, no previous index target is removed, and no item
  process remains. The earlier no-timeout sentence still appears above the
  manifest's new continuation section, which correctly records the UNKNOWN
  trials. Current notes, summary and index clearly identify the invalid
  exports and their valid replacements.
- The observer's final audit initially rejects its own differently shaped
  snapshot metadata. Its helper is updated to read either stored hash format;
  the preserved before-run bytes are not changed. The completed audit is
  saved beside the public trace and content observations outside the item.

Keep revision12 unchanged. This run provides concrete examples of autonomous
formulation repair, scoped related-field research, artifact correction and
route reassessment. It does not prove a general performance gain, a novel
mathematical contribution or that the current geometric continuation will
be useful. No product code or guide changes are made from this observation,
so the already-passing integration suite is not repeated for this log-only
update. A subsequent continuation should test whether the new structural
step produces information that affects the original route, rather than
assuming that a new representation is automatically progress.

## Revision 12 continued — from reformulation to a useful constraint

The previous goal turn made progress: r31 supplied natural export-failure
coverage, an autonomous repair and a scoped route change, recorded in ea508af.
The worktree is clean and the previous run is terminal. Continue its saved
geometric checkpoint for twenty minutes with the same guide and thread.
Seven before-run files are preserved outside the item under
_review/erdos-1159-r30-fresh/geometric-compatibility-r32.

The question is whether the selected polynomial formulation produces a useful
constraint, a reusable argument or evidence to abandon a premise. Watch the
link from a finite profile to the original quantifiers, renewed use of relevant
literature, and whether formal finite-grid identities are confused with global
factorization. No mathematical hint or instruction change is supplied. More
time allows a substantive structural check and its consequences rather than
judging the route only from the interrupted pre-wrap selection in r31.

Observed outcome:

- The saved coefficient step is completed. Exact reduction modulo V^q-V,
  followed by finite-slope reduction modulo W^q-W, distinguishes vanishing
  on the finite grid from global polynomial divisibility. The researcher
  constructs a relaxed solution for every one of the 330 normalized q13
  column supports, with known-positive and deliberately failing small
  controls. It then proves that these particular relaxed polynomials cannot
  factor into valid point products. This identifies a missing nonlinear
  condition; it does not exclude every polynomial with those supports.
- Related-field research checks Yoshinaga's covering/freeness equivalence
  and arrangement methods, then proves that the proposed individual-pencil
  exponent test is automatic under its hypotheses. Exact Jacobian nullspace
  examples supplement the argument. The agent records the remaining common
  arrangement-extension issue instead of presenting a reformulation as a
  solved obstruction. The observer checks the primary theorem and the scope
  of the saved argument without supplying a hint to the researcher.
- An incidence-only argument proves q <= t2+t3 <= 3q+1 for cap-four blockers
  in every plane of order q >= 13 with 3 not dividing q. The saved independent
  review checks this lemma and the exact two-intersection benchmark. A later
  nonzero-defect argument for orders divisible by three, together with that
  benchmark, extends the lower bound to all prime-power orders >=13. The
  non-prime-power exact-type exception remains explicit. This restricts the
  scale of a possible stability argument; it does not exclude cap four or
  settle whether a larger universal cap exists. No novelty claim is made.
- The full-goal branch revisits current primary literature, including the
  October 2026 Asgarli-Ghioca-Yip journal article, and checks the distinction
  between complete cap sets and blocking sets. A uniform bounded-repair
  lemma would imply a positive solution, so it tests concrete proposed rules
  on actual planes before committing to a larger search. Small greedy cap4
  sets are maximal but nonblocking. At q13, strict one-swap descent stops at
  12 empty lines; two-swaps repair that trap and reach 10. Complete checks
  including variable-cardinality moves then refute strict empty-line descent
  with at most two deletions and two additions at this state.
- A changed potential, lexicographic (empty lines, four-secants), makes five
  improvements in 1.247 seconds and stops at 26 points, 9 empty lines and
  35 four-secants. A separately generated homogeneous incidence carrier
  replays the moves and checks every allowed deletion/addition size pair,
  using necessary saturated-line filters. This is a finite failure of that
  refined rule, not nonexistence of a blocking set. Larger batches, other
  potentials and larger caps remain open. The researcher changes the rule
  rather than simply extending a failed computation's budget.

Final handoff and evaluation:

- Wrap-up arrives at 12:11:29.577 UTC after the last computational check.
  Only document/checkpoint writes and link/hash checks follow. At
  12:12:26.367 the observed phase changes from RESEARCH to PLAN. The final
  plan removes completed pending work and asks for a new invariant or a
  globally justified repair rule before more computation. It explicitly
  ties a positive proof to every plane and a negative proof to unbounded
  lower bounds in actual planes. No original-problem candidate, VERIFY or
  DONE is claimed.
- The run ends at 12:12:30.726, endReason quota, elapsedMs 1079733. PROBLEM,
  AGENTS and item settings remain byte-identical. All four automatic
  pre-run copies match the observer's originals. INDEX/PLAN/SUMMARY have
  24/1/12 local links; 96 recursively reached paths and all ten checkpoint
  paths exist, no previous index target is removed, and no item process
  remains. Public traces, final artifact audit and scoped content observations
  are saved outside the item under the observer review directory.

Keep revision12 unchanged. The continuation demonstrates literature-informed
scope checks, a conditional structural lemma, cheap counterexamples to proposed
repairs, and an explicit return to planning. It does not establish general
performance improvement or a new mathematical result. A remaining research
risk is spending many rounds on finite repair variants whose connection to a
uniform theorem stays speculative. The next continuation should be judged by
whether it develops that connection or abandons the premise, not by counting
more scripts or configurations. Do not add a special rule for this example
or rewrite the researcher's plan. This is a log-only update; the previously
passing product checks are not repeated without a code or guide change.

## Revision 12 continued — returning from finite repairs to the general question

The previous goal turn made progress: r32 completed a structural continuation,
checked its scoped findings and handoff, and pushed the observation in 56dd9c4.
The current checkout is clean, and the run is terminal in PLAN with no pending
computation. Its own plan asks for a new invariant or a uniformly justified
repair rule before more finite search. Preserve that plan and the guide.

Continue for fifteen minutes from this checkpoint, with seven original files
saved outside the item in _review/erdos-1159-r30-fresh/global-route-r33. Test
whether the researcher uses the finite failures to develop a link to the
original quantifiers or makes a reasoned route change. Watch renewed literature
use, the PLAN-to-RESEARCH transition, and whether more computation has a stated
decision purpose. Do not supply a preferred mathematical rule. A larger number
of variants or artifact files is not itself a successful outcome.

Observed outcome:

- The researcher changes the question from trying another finite exchange
  to asking whether actual nonblocking sets can have linearly many saturated
  secants through every outside point. Such a family would refute every
  fixed-deletion strict-descent rule at the chosen cap. It searches complete
  arcs, conic constructions and projection methods, saves the chosen plan,
  and records RESEARCH at 12:20:53.685 UTC in a separate call before the first
  delegation at 12:21:04.952.
- An explicit pair of smooth dual conics over F5 intersects in one degree-four
  Frobenius orbit. Odd-degree extensions preserve that orbit, so no rational
  dual line contains any common base point. This supplies disjoint branch
  points in every outside pencil, not merely a generic independence claim.
  The saved cap4 proof combines genus-one character bounds with incidence
  counting to produce an infinite family in actual Desarguesian planes.
- A common dual pencil extends the construction to every fixed even cap
  C=2r. It contains enough smooth members after increasing the field. The
  joint-sign count is bounded below by
  (q+1)/2^r - (r-2+2^(1-r))*sqrt(q) - r. Removing at most 4*binom(r,2)
  component-crossing lines still leaves Omega_C(q) saturated C-secants
  through every outside point; simultaneous exterior lines make the set
  nonblocking. A saved independent review checks the orbit, branch loci,
  genus, constants and quantifiers. The parent separately checks a
  [general-genus Hasse-Weil source](https://math.mit.edu/~roed/courses/18.782/LectureNotes37.pdf)
  rather than extending an elliptic-curve citation beyond its scope.
- Adding an outside point requires deleting a different old point on every
  saturated line through it. Thus, for each fixed even cap and deletion
  budget, these sets defeat every one-step cap-preserving modification that
  adds a point, regardless of the number of additions. Any same-cap blocking
  set would require Omega_C(q) deletions from these particular seeds. This
  rules out the proposed all-starting-sets repair lemma, not blocking-set
  existence. Cumulative plateau deletions, other starting sets and odd caps
  remain unexcluded; no novelty claim is made.
- Exact prime-field trials at 5,13,29,101 retain their matrices, point sets,
  line counts and small-field failures of positive saturation. At p101 the
  202-point set has 2501 empty lines and minimum outside four-secant degree
  18; the trial takes about 0.107 seconds. Jacobian factors the base quartic
  and other prime-field examples, with a reducible calibration input. The
  infinite-family conclusion is proved analytically rather than extrapolated
  from these trials. Optional GF125 enumeration is explicitly not launched,
  not marked complete or UNKNOWN, and is not needed for the proof.
- Literature review distinguishes completeness after patching exceptional
  tangent lines from high saturation at every outside point. The inspected
  Bastioni-Micheli and Hermitian/BKS results do not automatically give the
  stronger uniform hypothesis. A proposed odd-cap mechanism is saved with
  its cubic/projection and degree-12-orbit existence gaps explicitly open.

Final handoff and evaluation:

- Wrap-up arrives at 12:30:28.567. Only checkpoint, summary, plan, status,
  index and link updates follow. The researcher returns to PLAN at
  12:31:26.528 after the completed even-cap obstruction removes the reason
  to repeat fixed-batch strict-descent tests. Its next proposed check concerns
  the conditional odd-cap construction or a positive route with a justified
  restriction on starting sets. Both are unstarted. It explicitly notes that
  even an odd-cap obstruction would not resolve the original question.
- The run ends at 12:31:31.636, endReason quota, elapsedMs 826744, on the
  same thread. PROBLEM, AGENTS and item settings are unchanged; all four
  automatic before-run copies match the observer snapshots. INDEX/PLAN/SUMMARY
  have 29/1/9 local links, all 106 recursively reached artifact paths and
  eight checkpoint paths exist, no old index target is removed, and no item
  process remains. Public trace, artifact audit and scoped content review
  are saved outside the research item.

Keep revision12 unchanged. This continuation answers the evaluation question:
finite failures lead to a quantified obstruction to an entire proposed class
of repairs, with a concrete consequence for route choice. The observer checks
the saved argument and cited bounds without giving the researcher a hint or
editing its mathematical files. This is evidence of useful autonomous
abstraction, not a general performance guarantee or an established new result.
The next run should justify the value of its chosen continuation for the
original problem; closing the odd-cap variant is not automatically the best
next investment. No product or guide change is justified by this observation,
so only the experimental log changes and the existing product tests are not
repeated.

## Revision 12 continued — choosing what to do with a method obstruction

The previous goal turn made progress: r33 completes a quantified obstruction
to all-starting-sets bounded-deletion repair at even caps, checks its scope and
handoff, and pushes the observation in 25420bc. The checkout is clean and that
run is terminal. Its PLAN offers either the unproved odd-cap mechanism or a
positive route with a justified restriction on starting states. Neither has
started. Preserve those research-owned choices and the unchanged guide.

Run another fifteen-minute continuation, with seven before-run files saved
outside the item in _review/erdos-1159-r30-fresh/strategy-value-r34. Assess why
the selected work is worth doing for the original problem, how related
literature changes that assessment, and whether a failed sufficient hypothesis
is distinguished from failure of the desired conclusion. The observer may
independently inspect related finite-geometry/coding literature as a coverage
control, without steering the researcher or asserting novelty from a search.

Observed outcome:

- The researcher chooses a concrete cubic/conic compatibility check rather
  than assuming generic monodromy. It saves RESEARCH in a separate call at
  12:38:50.363 UTC, before its first delegation at 12:39:03.292. Alongside
  the finite check and proof, it commissions an assessment of whether the
  result is worth pursuing for the original question.
- The first F5 pencil fails to supply the desired fiber. An exact F13
  example succeeds: a smooth cubic with j=7 and a smooth dual conic meet
  in one degree-twelve dual orbit. Saved polynomial, field-tower and actual
  Frobenius-orbit checks establish the finite compatibility. Jacobian exact
  factorizations use an inspected contract and a small reducible calibration
  input. Failure to find a prime-field parameter is not extrapolated to
  extension fields, and no computation is treated as an original solution.
- The saved odd-cap argument checks uniform S3 projection monodromy,
  disjoint branch loci and the arithmetic constant field. A certified
  twelve-cycle supplies compatible Frobenius cosets along extension degrees
  congruent to one modulo twelve; no generic S12 hypothesis is substituted.
  The observer checks the applicable nontrivial-constant-field version in
  [Kosters, Theorem 2 and Corollary 1](https://hrcak.srce.hr/file/274189).
  Together with the earlier even-cap argument, the scoped result gives
  nonblocking seeds resisting every fixed-deletion repair for each fixed
  cap at least three. It does not exclude other blocking sets or cumulative
  deletion strategies, and no novelty claim is established.
- The route-value audit makes that limitation consequential. Known cap-six
  blockers, as reported in AGY, coexist with the earlier rigid seeds in
  characteristic five. Also, the unrestricted graph of cap-preserving
  additions and deletions is connected through the empty set. More local
  rigidity therefore cannot by itself become an original negative answer.
  The researcher explicitly ends local-trap classification as its main route.
- A renewed literature search finds the October 2026 primary paper
  [Two-coloring the points of a projective plane](https://arxiv.org/html/2610.41357v1).
  It distinguishes that paper's one-preferred-intersection hypothesis from
  the two preferred values in its cap-four question. A naive quadratic
  annihilator loses the needed structure because the Schur square of the
  incidence code is the whole coordinate space. The saved inverse statement
  that would connect to AGY and the original quantifiers remains explicitly
  unproved. The next plan is to inspect the actual stability proof and test
  a precise two-value formulation retaining the binary preimage; that check
  has not started, and a cap-four result alone would not settle all caps.

The observer's independent coverage control also finds a classical baseline.
The introduction of
[De Clerck, De Winter and Maes](https://cage.ugent.be/geometry/Files/361/J%20Comb%20Theory%20A%202011%20De%20Clerck.pdf)
records Denniston maximal d-arcs for even q and d dividing q, of size
q(d-1)+d with line intersections zero or d. For fixed d and q>d, counting
through an outside point gives q+1-q/d saturated lines and q/d empty lines.
Thus these classical examples already give a bounded-deletion obstruction
for powers-of-two caps in characteristic two. This does not replace the
odd-characteristic result for arbitrary fixed caps, such as six. The saved
research notes do not explicitly compare this special case. This is a
bounded literature-coverage observation, not evidence that all work was
redundant or that the broader result is new. Nothing is supplied to the
researcher and no mathematical files are edited.

Final handoff and evaluation:

- The researcher returns to PLAN in a separate call at 12:49:09.548. It
  saves the reason for abandoning the main route, its evidence and a new
  concrete next check. No original candidate is promoted to VERIFY or DONE.
- Wrap-up arrives at 12:49:27.667. An automatic continuation checks the
  cutoff and only refreshes the checkpoint and summary; no new computation
  or review is launched. The run ends at 12:49:48.890, endReason quota,
  elapsedMs 785714, on the same thread, with no pending process or review.
- PROBLEM, AGENTS and item settings are unchanged; all four automatic
  before-run copies match the observer snapshots. INDEX/PLAN/SUMMARY have
  34/1/9 local links; all 118 recursively reached artifact paths and eight
  checkpoint paths exist, and no old index target is removed. Public trace,
  artifact audit, literature control and final observation remain outside
  the research item.

Keep revision12 unchanged. The useful behavior is not merely completing an
intermediate theorem: the researcher checks what it implies for the original
goal, recognizes coexistence with known solutions, and changes its plan.
The coverage control shows that broader terminology can still reveal useful
classical comparisons. Neither observation warrants a case-specific rule or
establishes generally improved research performance. The next continuation
should be assessed by whether the proposed source-proof inspection yields a
useful original-goal lemma or an early rejection, rather than another long
sequence of intermediate targets. This is a log-only update; existing passing
product checks are not repeated without a code or guide change.

## Revision 12 continued — transferring a related theorem into a useful question

The previous goal turn made progress: r34 completed its scoped obstruction,
used known constructions to reassess the route, saved an original-goal plan,
and pushed the audited observation in 143bd63. The current checkout is clean;
the latest run is terminal in PLAN and no item process remains. Its own next
step is to inspect the proof of a recent one-value stability theorem before
attempting a two-value extension. Preserve this research-owned plan.

Continue for fifteen minutes with revision12 unchanged. Seven before-run
files are saved outside the item in
_review/erdos-1159-r30-fresh/source-transfer-r35. Evaluate whether the source
inspection identifies a useful transferable argument, a precise missing
hypothesis, or an early reason to reject the route. Distinguish a genuinely
discriminating next question from simply creating another intermediate target.
Observe renewed literature/tool choices, phase changes and the final handoff.
The observer may check the cited source independently without supplying a
mathematical hint or modifying research artifacts. No additional guide rule
is justified before observing this behavior.

Observed outcome:

- RESEARCH is saved at 12:57:14.952807 UTC. The researcher awaits the
  state-saving command before fetching the source, and first delegates at
  12:57:25.631. It investigates the proof mechanism, the binary-input repair
  and the proposed inverse geometry in parallel.
- Inspection of the
  [coloring paper](https://arxiv.org/html/2610.41357v1) identifies the
  one-residue codeword and correction steps that do not transfer to two
  values. The actual one-residue exceptional count is quadratic, so the
  cited small-exception hypotheses fail. A conditional nonlinear pencil
  representation is retained without assuming that a small point cover exists.
- The researcher turns the finite membership test into a self-contained
  proposition: for every cap-four blocker in any plane of prime order p>=5,
  h=(r-1)(r-4) lies outside the original incidence code. Incidence moments
  bound the nonempty bad-line family below p^2; constant pencil sums would
  force this binary family to be a full pencil, contradicted by the selected
  and outside point counts modulo three. A saved independent review and
  the observer's scoped inspection check this argument. It excludes the
  particular repair, not cap-four blockers or any larger cap.
- Saved actual blockers at p5 and p7 supply exact nonmembership certificates.
  Incidence ranks 16/29 rise to 17/30 after adjoining h. A further tiny test
  excludes every nonzero constant weighting of the two bad secant classes
  on those two examples. The note explicitly limits this latter result to
  finite cases; it is not an all-large-primes weighting theorem. Jacobian
  checks use inspected exact-operation contracts and a small calibration.
- The inverse audit rejects specific ordinary-arc and dual-envelope theorem
  transfers because their hypotheses or geometric carrier differ. It gives
  the exact dimension-three projective code formulation with every nonzero
  weight in [n-k,n-1]; the upper bound is essential for blocking. Homogeneous
  relations correspond to code-power rank defects, consistent with
  [Randriambololona, Proposition 1.28](https://arxiv.org/html/1312.0022v3).
  This selected-point code is distinguished from the whole-plane incidence
  code whose Schur square was previously shown to be full.
- Exact interpolation of the saved p5/p7 witnesses gives least vanishing
  degrees three and five. The p7 example only refutes an all-primes quartic
  assertion, not a statement with a larger prime threshold. Its degree-five
  relation is already forced by having more monomials than points, and is
  explicitly not counted as evidence of asymptotic structure. The exporter
  rebuilds the source matrices and checks returned nullspace vectors;
  zero-nullity conclusions use the established tool guarantee without a
  second rank implementation.
- The audit also recognizes that, given the saved AGY reduction, the
  eventual bounded-degree inverse statement is as substantial as eventual
  nonexistence itself. A reformulation has not reduced that difficulty.
  Exploratory Pexider/BLR searches are visible, but no theorem from that
  direction is applied and the final summary marks it undeveloped.

Final handoff and evaluation:

- The researcher returns to PLAN at 13:08:36.389769, preserving evidence and
  replacing the exhausted membership repair with a primary-source search
  for narrow-weight projective codes. It retains projectivity, the upper
  weight bound, growing prime characteristic and the every-fixed-cap
  quantifier. It expressly avoids further interpolation samples without a
  discriminating proposed lemma. The rank-defect implication is still
  unproved; no complete original candidate enters VERIFY or DONE.
- Wrap-up arrives at 13:09:36.879. Only a checkpoint and summary refresh
  follows. The run ends at 13:09:53.615, endReason quota, elapsedMs 781276,
  on the same thread. All launched computations and reviews are terminal.
- PROBLEM, AGENTS and item settings are unchanged; all four automatic
  before-run copies match the observer snapshots. INDEX/PLAN/SUMMARY have
  39/2/5 local links. All 133 recursively reached artifact paths and nine
  checkpoint paths exist, no old index target is removed, and no item
  process remains. Public trace, source control and final observation are
  stored outside the research item. The observer supplies no mathematical
  hints and changes no research-owned files.

Keep revision12 unchanged. This continuation tests the intended behavior:
source reading exposes an exact transfer failure, a small test develops into
a general obstruction to that repair, and the plan records the consequence.
It also distinguishes a finite diagnostic and an equivalent reformulation
from progress on the original quantifiers. The next question is still broad
and difficult: assess whether the researcher can sharpen the coding route
into a discriminating lemma or reject it before a long sequence of auxiliary
targets. No original bound, novelty claim or general performance guarantee
is established. This is a log-only update, so the existing passing product
checks are not repeated.

## Revision 12 continued — sharpening the narrow-weight code route

The previous goal turn made progress: r35 completed the source-transfer
audit, ruled out the proposed quadratic-code repair, saved its scope and
handoff, and pushed the observation in c9ad5db. The current checkout is clean,
the latest run is terminal in PLAN, and no item process remains. The saved
next action is a primary-source search for projective dimension-three codes
with every nonzero weight in [n-k,n-1], looking for a bounded-degree relation
in growing prime characteristic. This is a substantial unproved target,
not already a reduction to an easier problem.

Continue for fifteen minutes with revision12 unchanged. Seven before-run
files are saved outside the item in
_review/erdos-1159-r30-fresh/narrow-weight-r36. Evaluate whether the researcher
turns this broad reformulation into a precise discriminating lemma, finds a
useful theorem or algorithm, or rejects the route before expanding auxiliary
work. Watch projectivity, the blocking upper weight bound and original
quantifiers, and distinguish new names for the same problem from evidence
that changes the next action. Do not supply a mathematical hint or alter the
research-owned plan. The preceding run already exercised the relevant
general guidance, so an additional rule is not justified before this test.

Observed outcome:

- The researcher saves RESEARCH at 13:16:19.467570 UTC, before its first
  delegation at 13:16:26.114. It reads the existing MacWilliams and
  arrangement notes, distinguishes completed calculations from remaining
  conditions, and pursues source scope, cover parameters and a precise
  sparse-pencil consequence in parallel.
- A direct expansion modulo p^2 proves all Ball-Blokhuis coefficient-tail
  conditions automatic in the relevant rank-three maximum-weight window.
  The observer checks
  [Corollary 5.1 and Theorem 6.1](https://web.mat.upc.edu/simeon.michael.ball/codeswithallone.pdf),
  the two nonnegative exponents and degree bounds. The saved independent
  review passes at this numerical scope. This closes a previously untested
  stronger condition; it does not establish a code or blocker realization.
- The researcher finds the finite-Abelian-group theorem in
  [Linear Consistency Testing](https://johanhastad.se/lincon.pdf) and applies
  it to additive and multiplicative pencil charts. The resulting conditional
  theorem excludes a three-center cover of residue-exceptional lines for
  cap-k blockers in PG(2,q), when q>=3k^2 and gcd(q,m)=1. A saved review
  checks both chart configurations and integer correction bounds. The
  observer reads the rendered primary Theorem 2 to confirm its rejection
  threshold and individual correction guarantee after PDF text extraction
  is unreadable. The argument supplies no exceptional-line cover and does
  not extend to arbitrary non-Desarguesian planes or resolve the original
  question. No new mathematical computation is needed.
- The cover audit retains multiplicity only at nonzero vectors and computes
  the exact independent-set decomposition number
  max(1,ceil(r/2),ceil(n/3)). It grows linearly with p despite a fixed secant
  cap, preventing a substitution of that cap into a fixed-number-of-bases
  theorem. The researcher checks the published cover paper separately from
  the [withdrawn 2022 paper](https://arxiv.org/abs/2205.03389), which it
  excludes. It also recognizes that critical exponent two is already
  automatic for proper blockers and contributes no cap restriction.
- The final plan is more concrete than the initial inverse target: calibrate
  Yang's q+2-orbit second-order MacWilliams transform on actual p5/p7
  witnesses, preserving projective direction labels and scalar multiplicity.
  It specifies pair totals, ordinary marginals and low-support dual checks
  before measuring q13 direction-assignment orbits and trying a small exact
  relaxation. All these checks remain explicitly unstarted. Feasibility is
  to prompt route reassessment, not an automatic budget increase; any
  infeasibility would still be specific to that formal profile.

Final handoff:

- PLAN is saved at 13:26:56.781201. No original candidate enters VERIFY or
  DONE. Wrap-up arrives at 13:28:41.022, followed only by a checkpoint and
  summary refresh. The run ends at 13:28:57.360, endReason quota,
  elapsedMs 780920, on the same thread, with no running computation or review.
- PROBLEM, AGENTS and item settings are unchanged during r36; the four
  automatic before-run copies match the observer snapshots. INDEX/PLAN/SUMMARY
  have 45/1/6 local links. All 139 recursively reached artifact paths and ten
  checkpoint paths exist, no old index target is removed, and no item process
  remains. Source checks and the final observation are outside the item.

The observer also identifies a bounded source-version omission. The saved
cover audit and public fetches use Jafari's August 2026 v1. The
[September v2](https://arxiv.org/html/2608.23647v2) is a major revision and
includes rank-three thresholds and a proved low-rank characteristic criterion.
The extension-degree theorem used in the audit survives; for cap-four sizes
about 2p, the new low-rank criterion's density hypothesis still fails. Thus
this does not invalidate the run's proofs or change its route conclusion,
but the account of what is currently known is incomplete. No hint or update
is sent to the researcher, and its mathematical files are left untouched.

This run demonstrates historical-memory use, a cross-field theorem application
and a specific next experiment without new sample accumulation. It establishes
neither an original bound nor novelty. The observed version omission justifies
a small generic clarification in the next guide revision; it does not justify
mandatory literature logs or a rule naming this paper.

## Revision 13 — current source versions and corrections

Clarify the existing literature sentence to read current versions of relied-on
results and check corrections or withdrawals alongside scope. No new phase,
artifact, fixed search quota or review role is added. The change addresses the
r36 omission above while retaining trust in established results at their actual
scope. It does not rewrite any research-owned proof, plan or problem statement.

Run the existing build and CLI tests, then copy the updated template only to
the stopped test item's AGENTS.md. Continue its own second-order calibration
plan for ten minutes. Snapshot the seven starting files outside the item in
_review/erdos-1159-r30-fresh/source-revisions-r37. Observe source-version checks
when relevant and whether the proposed small calibration answers its stated
uncertainty. A single trial without a changed-source encounter cannot establish
that the revision fixes the omission. Do not supply a paper-specific hint.

Validation before launch: TypeScript build and all seven CLI tests pass.
The stopped item's guide matches the revised template, with SHA-256
b6c6749ecafcf3d7a7ee22d0a4e4eaefd35ad093a70ed6289ef97b626147e5aa.
The previous guide bytes are preserved in the r36 observer snapshot; no
mathematical handoff file is changed by the observer.

Observed outcome:

- RESEARCH is saved at 13:35:10.824735 UTC, before the first delegation at
  13:35:18.884. The researcher opens both the current arXiv record and the
  latest v3 text of
  [Yang's Second-Order Weight Distributions](https://arxiv.org/abs/1007.3108).
  Its saved notes explicitly identify the latest version and say no
  correction or withdrawal is indicated on that inspected record. The
  observer checks the primary Theorem II.12, including the direction of
  the matrix substitution and normalization. This demonstrates the intended
  source check, but no changed or withdrawn source is encountered in this
  run; it does not establish that revision13 fixes the r36 omission.
- A short identity-code control precedes exact pair enumeration on the
  saved actual p5/p7 blockers. Counts, ordinary marginals, dependent-pair
  multiplicities and all 210/495 direction-resolved dual coefficients
  through union support four match restricted-column kernel enumeration.
  The new transform implementation is calibrated at that scope in about
  three seconds. The observer reads the implementation and saved result
  without replaying the computation. No formal-profile verdict follows.
- A separate direction-labeling trial reduces 319319 assignments for the
  five q13 local histograms to 174 PGL2 orbit variables, in about 0.82
  seconds. Small controls compare generated and full group actions.
  Jacobian's exact group-order operation is discovered, its contract read,
  and its degree limit respected; it returns 2184. The notes distinguish
  this group-order check from certification of the coloring partition.
- The theoretical audit proves that the entire independent dual-pair
  union-support distribution of a cap-four set depends only on n and t4.
  Together with ordinary dual weights, scalar aggregation therefore adds
  no direction information at any cutoff. This changes the proposed test:
  the useful unresolved information starts with four distinct directions
  and their projective cross-ratio classes. It is a statement about the
  diagnostic's scope, not a new bound for the original problem.
- A calibrated four-bin preliminary checks all 84 coefficients through
  support six for the fixed q13 profile: all are integral and nonnegative.
  A separately calibrated exact uniform-labeling trial passes positivity
  through support four, but its four-distinct coefficient is 14976/11.
  The researcher correctly rejects only this uniform choice as an integral
  enumerator, not all nonuniform mixtures or the profile itself. The
  general 174-variable feasibility problem is not run.
- The three four-subset target orbits have sizes 546, 273 and 182, totaling
  all 1001 subsets. Frame multiplicities give coefficient steps 48, 96 and
  144 with integer secant counts summing to 52. The researcher catches and
  corrects a prose subset-count typo before handoff; the exact export was
  already correct. The final plan explicitly aligns the two direction
  labeling conventions, retains stabilizer multiplicities, and proposes
  a small rational trial before an integer repair. It calls for reassessing
  value before increasing the cutoff or solver budget.

Final handoff and evaluation:

- The phase remains RESEARCH. Completed calibration steps are replaced
  with the unstarted coefficient-matrix assembly; no complete original
  candidate enters VERIFY or DONE. The summary distinguishes a rational
  diagnostic, an integral enumerator and actual geometric realization,
  and preserves the all-plane and every-fixed-cap gaps.
- Wrap-up arrives at 13:43:22.037. Only the existing checkpoint and summary
  are refreshed afterward. The run ends at 13:43:38.434, endReason quota,
  elapsedMs 526429, on the same thread. No computation or review remains
  running; none of the small trials reports a timeout or UNKNOWN.
- PROBLEM, AGENTS and item settings are unchanged during r37; all four
  automatic before-run copies match the external snapshots. The guide
  matches revision13. INDEX/PLAN/SUMMARY have 51/2/6 local links. All 159
  recursively reached artifact paths and nine checkpoint paths exist,
  no old index target is removed, and no item process remains. Public
  trace and final observation are stored outside the research item.

Keep revision13 without another rule. This continuation shows a current-source
check, purposeful reproduction, inexpensive tool calibration, and a theoretical
scope check preventing deeper computation of an uninformative aggregation.
It also preserves the difference between a failed candidate and an impossible
family. These are useful research behaviors, not evidence of a solved problem,
novelty, or a general improvement established by one trial. The outstanding
evaluation question is whether the next finite diagnostic changes the route
back toward the original quantifiers rather than creating more auxiliary work.
The observer supplies no mathematical hint and edits no research-owned files.
The passing build and seven CLI tests remain the product validation; subsequent
changes are only this experiment log.

## Revision 13 continued — value of the nonuniform orbit diagnostic

The previous goal turn made progress: r36 exposed a current-source omission,
the guide received one generic clarification, and r37 calibrated the proposed
second-order tools while identifying an uninformative aggregation and a failed
uniform candidate. The guide and observations were pushed in 8d8223f. The
checkout is clean, the latest run is terminal in RESEARCH, the item guide
matches revision13 and no item process remains.

Continue for ten minutes with the guide unchanged. The researcher's saved next
action is a 174-variable nonuniform direction-orbit model for the fixed q13
profile, with calibrated frame multiplicities and integer target-orbit counts.
Seven starting files are copied outside the item to
_review/erdos-1159-r30-fresh/nonuniform-orbits-r38. Observe whether the researcher
can turn its small calibrated tools into a useful exact test, distinguish a
rational relaxation from actual geometry, and use the outcome to reassess the
route's value before expanding computation. A finite profile result must remain
connected to the outstanding original quantifiers. Do not feed a mathematical
hint or edit its plan. The preceding product checks still apply because this
turn has made no product change.

Observed outcome:

- The researcher resumes RESEARCH, reads the saved handoff and current Yang
  record, and refreshes its active checkpoint at 13:48:44.745940 UTC before
  the first delegated check at 13:48:59.349. Existing calibration helpers
  and orbit exports are reused. It explicitly aligns the two direction
  conventions and preserves the full GL frame/stabilizer multiplicities.
- The 174-variable model is assembled exactly. Uniform orbit weights
  reproduce the previously saved coefficient 14976/11, and weighted totals
  are invariant within each local point type. Z3 5.4.1 returns SAT for both
  rational and integer models within their separate limits. Assembly and
  both solver calls take about 0.157 seconds. Raw and normalized integer
  rows, input hashes, variable identities and exact assignments are saved;
  every exported assignment is substituted back using Fraction arithmetic.
- The integer witness has four-secant orbit counts (26,0,26), giving
  direction-resolved coefficients (1248,0,3744). Together with three-
  transitivity and the fixed histogram totals, it passes the tested
  support-four conditions. This repairs the uniform candidate's
  fractionality. The researcher states correctly that it gives neither
  a higher-order enumerator nor a code, common incidence structure or
  blocking set. These low-four constraints cannot exclude this profile.
- The route audit identifies that rational feasibility was already known:
  that solver call is a calibration, not a new obstruction test. After
  population totals, the variable target image has dimension at most two.
  A direct quartic-feature expansion derives
  q^2 a_O = H_O + (|O|/M)(q^2 t4-E), reducing the varying part to an
  orbit-count lattice condition. The observer checks the factorization,
  three-transitivity argument, saved builder and result without replaying
  computation. No claim of automatic integer repair for all profiles or
  field orders follows.
- For the symmetry context, the researcher consults the current
  [Tricot record](https://arxiv.org/abs/2408.14714) and uses only the stated
  consequence that PGL2 subset orbits form three-designs. An unavailable
  2006 mirror is explicitly not used as evidence. The new source is not
  misrepresented as supplying geometric realization or a classification
  theorem for blockers.
- A separate checker validates all exported assignments and independently
  recomputes the fixed dependent contribution and 24 matrix entries using
  a set-partition formula. These include every representative used by the
  integer witness. No solver is replayed; the review clearly describes its
  sampled matrix scope rather than claiming a second full matrix rebuild.

Route decision and final handoff:

- The researcher does not raise the support cutoff or solver budget after
  SAT. It records PLAN at 13:56:34.690938, retires low-four exclusion of this
  profile, and selects an original-goal proof audit: read the polynomial
  mechanism in
  [Heger-Nagy, Avoiding secants of given size in finite projective planes](https://arxiv.org/abs/2409.14213).
  The current abstract/version record has been checked; the proof and its
  precise all-plane scope have not. The next step must identify a justified
  multi-forbidden-count extension or the exact step preventing it, before
  computation. No extension or all-plane construction is asserted.
- Wrap-up arrives at 13:56:47.197. The independent audit was already saved
  before wrap-up; only its final handoff/index reconciliation follows.
  The run ends at 13:57:12.474, endReason quota, elapsedMs 534471, on the
  same thread. No original candidate enters VERIFY or DONE. All launched
  computations and reviews are terminal, with no timeout or UNKNOWN.
- PROBLEM, AGENTS and item settings are unchanged. All four automatic
  before-run copies match the external snapshots. INDEX/PLAN/SUMMARY have
  55/0/4 local links. All 167 recursively reached paths and eight checkpoint
  paths exist; no old index target is removed and no item process remains.
  Public trace and final observation are saved outside the research item.

Keep revision13 unchanged. This run supplies direct evidence for the behavior
being tested: a finite diagnostic is completed cheaply, its mathematical
strength is assessed, and the researcher changes direction instead of merely
enlarging the calculation. The next proof audit remains unstarted, so whether
this new direction yields a useful lemma is still open. This is one observed
continuation, not a general performance or novelty claim. The observer supplies
no hint and modifies no research-owned file. Only the experiment log changes;
the existing passing product tests are not rerun.
