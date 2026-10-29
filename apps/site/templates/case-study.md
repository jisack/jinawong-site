---
# Copy to src/content/case-studies/<slug>.md (or run: pnpm new:case-study "Title").
# Every field below is checked by src/content.config.ts — CI fails if one is wrong.
title: Short project name # 3–60 characters
summary: One sentence that says what it is and why it matters, for cards and search results. # 40–180 characters
org: Company or "Independent"
role: Your role
period: Jan 2024 – Present # or "Mar 2016 – May 2022", or "2026"
order: 99 # position in lists, 1 = first
stack: # 2–10 items
  - TypeScript
  - React
problem: >-
  Two or three sentences on the problem: who had it, why it was hard. 40–500 characters.
outcome: # 1–5 items, each a full sentence
  - What changed because of the work.
metrics: # optional, up to 4. Only numbers you can back up.
  - value: "26"
    label: what the number counts
draft: true # set to false when it's ready to publish
---

## What I built

- **Thing one.** One line on what it does.
- **Thing two.** One line on what it does.

## Architecture

```text
  input ──▶ your system ──▶ output
```

No screenshots of private products, no internal code, no secrets.
