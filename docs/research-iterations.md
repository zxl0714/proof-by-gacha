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
