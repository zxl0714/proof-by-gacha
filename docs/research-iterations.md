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
