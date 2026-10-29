---
title: CI/CD + Claude Code PR review
summary: 26 GitHub Actions workflows for PR checks, Docker builds and AWS deploys — with Claude Code PR review built in.
org: Crown Labs
role: CI/CD owner
period: "2026"
order: 4
stack:
  - GitHub Actions
  - Docker
  - AWS
  - Claude Code
  - Vitest
  - Playwright
problem: >-
  A fast-moving monorepo with many services and a lot of AI-assisted code. Every change needed the same
  gates — checks, builds, reviews, tests — and every service needed a repeatable path to each environment.
outcome:
  - 26 workflows covering PR gates, Docker builds and per-environment deploys.
  - Claude Code reviews pull requests as part of CI.
  - ~230 test files added to the codebase.
metrics:
  - value: "26"
    label: GitHub Actions workflows
  - value: ~230
    label: test files added
---

## What I built

- **PR gates**: Go checks, formatting, migration linting, web and docs checks, and Docker builds — run on every pull request.
- **Deploy workflows** per service and environment to AWS (container registry and S3).
- **Claude Code PR review** in CI, plus repo-level `CLAUDE.md` and custom skills for unit tests, e2e tests and review — so AI-assisted changes follow the same conventions as hand-written ones.
- **Tests** across the stack: ~230 test files added.

## Architecture

```text
pull request
    │
    ├─▶ checks: Go · format · migration lint · web · docs
    ├─▶ docker build
    ├─▶ Claude Code review ──▶ comments on the PR
    │
 merge
    │
    └─▶ deploy per service ──▶ develop ──▶ production   (AWS)
```

The same idea runs this site: see [How this site is built](/how-this-site-is-built/).
