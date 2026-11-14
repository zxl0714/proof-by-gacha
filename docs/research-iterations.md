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
  summary preserved the new findings and actual next step.
- The 4 integration tests pass, but they establish protocol delivery and
  lifecycle behavior, not reliable model compliance. This live trial is
  explicitly a timeout, not a successful wrap-up.

Next change: make unresolved-run wrap-up a compact handoff rather than a
second report-writing phase. Keep the summary as the central handoff, make
only essential continuation updates, and leave unfinished checks or cleanup
pending. Do not add tool-specific patch instructions to the research guide.
