# 🎲 Proof by Gacha

**Go to bed with a conjecture. Wake up to another attempt.**

A lightweight CLI that gives AI agents time to work on your research problems—and keeps their progress ready for the next try.

Got a stubborn conjecture? A proof with one missing step? A weird recursive system you can't stop thinking about? Put it on the list, pick an agent, give it a time budget, and let it work.

Maybe this run finds a promising proof. Maybe a counterexample. Maybe it finally explains why yesterday's brilliant idea doesn't work. Keep the notes. Roll again.

## Local installation

In the repository checkout on Linux or Ubuntu under WSL 2, use Node.js 22 or
later and a signed-in Codex CLI with app-server Goals support. Codex's Linux
sandbox also needs bubblewrap.

```bash
npm ci
npm install --global --prefix ~/.local .
```

Make sure `~/.local/bin` is on your `PATH`. Run `gacha --help` to see the commands.
Run `npm test` from the source checkout to test the CLI with a simulated Codex app-server.

## Your research backlog, on the night shift

- **Keep a list of questions.** Each gets a folder directly under the workspace for its statement, research state, evidence, and runs.
- **Choose your agent.** The Codex adapter uses Codex CLI's app-server, with model and effort settings per problem.
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
$ gacha add bb6-hydra-variant
? Title        › Does this Hydra variant terminate?
? Problem      › Open editor
? Agent        › Codex CLI
? Model        › Use agent default
? Effort       › Use agent default
? Time budget  › 3h
```

If you already have a title and statement, pass the statement inline:

```bash
gacha add problem-name --title="Maybe some math problem, a brief title" --problem-text="The description of problem. blablabla"
```

If the statement is in a Markdown file, use this form instead:

```bash
gacha add problem-name --title="Maybe some math problem, a brief title" --problem-file=somefile.md
```

Both commands create the item without prompting. Gacha saves the statement to `problem-name/PROBLEM.md`. You can set agent, model, effort, and time budget when adding the item or choose them later when running it.

Run all active items from a fresh starting point with the same settings:

```bash
gacha run --all --fresh \
  --agent codex \
  --model gpt-6.1-sol \
  --effort ultra \
  --quota 3h \
  --parallel 2
```

This gives each item a three-hour target and runs up to two at a time. Run a single item to pick up its research:

```bash
gacha run bb6-hydra-variant \
  --agent codex \
  --model gpt-6.1-sol \
  --effort ultra \
  --quota 3h
```

Flags on `run` apply to that invocation. Configure defaults when you add or edit an item.

The next morning:

```bash
gacha status
gacha status bb6-hydra-variant

# Keep going with the existing notes.
gacha run bb6-hydra-variant

# Or take another shot, starting from the original question.
gacha run bb6-hydra-variant --fresh
```

A fresh attempt keeps your existing work. It starts without automatically feeding the previous approach into the agent's context. Each run uses a Codex Goal and records its turns, evidence, and remaining gaps under the problem's `runs/` directory.

## Room to think

The agent chooses how to investigate: read papers, write programs, test examples, chase a proof, or look for a counterexample. You set the question and the budget.

Each problem records its current phase in `state.json`. Codex plans a route, investigates it, and verifies a specific candidate against the original statement before marking the problem done. If the run ends with the problem open, the next run can pick up from the last saved phase and evidence.

Curious about how it will work? See the [design notes](docs/design.md).
