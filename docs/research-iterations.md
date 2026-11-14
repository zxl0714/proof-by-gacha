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
