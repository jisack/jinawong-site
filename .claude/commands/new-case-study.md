---
description: Scaffold a new case study from the template, fill it in by interview, and verify it passes CI.
argument-hint: "Project name"
allowed-tools: Bash(pnpm new:case-study:*), Bash(pnpm check), Bash(pnpm typecheck), Bash(pnpm build), Bash(git status), Bash(git diff:*), Read, Edit
---

Create a new case study for: **$ARGUMENTS**

The person running this may not be an engineer. Use plain language, one question at a time.

1. Run `pnpm new:case-study "$ARGUMENTS"`. It copies `apps/site/templates/case-study.md` into
   `apps/site/src/content/case-studies/` as a draft with the next free `order`.
2. Read `CLAUDE.md` (content rules) and `apps/site/src/content.config.ts` (the schema). Don't change the schema.
3. Interview the user to fill each field — org, role, period, stack, problem, what was built, outcome,
   and any numbers. Ask for the source of every number; leave out anything they can't back up.
4. Write the body: `## What I built` (3–5 bullets) and `## Architecture` (a small `text` diagram, ≤ 60 chars wide).
   Never include screenshots of private products, internal code, customer names, hostnames or secrets.
   If something might be confidential, ask, and list it under "Needs confirmation" in `REVIEW.md`.
5. Run `pnpm check`. If it fails, read the error (it names the file and field), fix the content, and re-run.
   Never weaken the schema or skip a check to make it pass.
6. Leave `draft: true` unless the user says it's ready to publish. Show `git diff`, then tell the user the next
   step: open a pull request — CI repeats the checks and posts a preview link.
