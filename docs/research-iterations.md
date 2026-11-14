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
