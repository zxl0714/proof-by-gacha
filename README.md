# 🎲 Proof by Gacha

**Go to bed with a conjecture. Wake up to another attempt.**

A lightweight CLI that gives AI agents time to work on your research problems—and keeps their progress ready for the next try.

Got a stubborn conjecture? A proof with one missing step? A weird recursive system you can't stop thinking about? Put it on the list, pick an agent, give it a time budget, and let it work.

Maybe this run finds a promising proof. Maybe a counterexample. Maybe it finally explains why yesterday's brilliant idea doesn't work. Keep the notes. Roll again.

> 🚧 **README-first, code next.** The CLI is not available yet. The commands below preview the intended experience.

## Your research backlog, on the night shift

- **Keep a list of questions.** Each gets its own folder for notes, code, experiments, and results.
- **Choose your agent.** Planned integrations include agent tools such as Claude Code CLI, with model and effort settings per problem.
- **Give it a budget.** Let a problem run for a few hours, with time to wrap up and save progress.
- **Pick up where it left off.** Continue by default, or ask for a fresh attempt.
- **Queue up the whole list.** Run up to two problems at a time by default.
- **Read the morning notes.** See what changed, what failed, and what's still open.

## An evening with `gacha`

Create a workspace for your questions:

```bash
gacha init ./research
cd ./research
```

Each workspace has its own settings and research items. Create another whenever you want a separate collection.

Add a question with a guided setup:

```text
$ gacha add hydra
? Title        › Does this Hydra variant terminate?
? Problem      › Open editor
? Agent        › Claude Code CLI
? Model        › Use agent default
? Effort       › Use agent default
? Time budget  › 3h
```

Choose from the available options, or keep the defaults. Prefer a one-liner? Supply everything directly:

```bash
gacha add hydra --title "Does this Hydra variant terminate?" --problem-file ./hydra.md --agent claude --model '<MODEL_ID>' --effort '<EFFORT>' --quota 3h --non-interactive
```

Then put this workspace's research list to work:

```bash
gacha run --all
```

The next morning:

```bash
gacha status
gacha status hydra

# Keep going with the existing notes.
gacha run hydra

# Or take another shot, starting from the original question.
gacha run hydra --fresh
```

A fresh attempt keeps your existing work. It starts without automatically feeding the previous approach into the agent's context.

## Room to think

The agent chooses how to investigate: read papers, write programs, test examples, chase a proof, or look for a counterexample. You set the question and the budget.

A finished run can leave an open problem. The useful part is knowing what was tried and having something to build on. Promising proofs still need checking.

Curious about how it will work? See the [design notes](docs/design.md).
