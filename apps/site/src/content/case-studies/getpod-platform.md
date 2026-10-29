---
title: GetPod platform
summary: A cloud dev-environment platform. I work across the web dashboard, the admin console and the Go APIs behind them.
org: Crown Labs
role: Senior Full-Stack Engineer
period: Jun 2022 – Present
order: 1
stack:
  - Next.js 15
  - React 19
  - Vite + React
  - Go
  - pnpm + Turborepo
  - Stripe
problem: >-
  GetPod gives every user a cloud machine for development and AI agents. That means a product UI, an
  operator console and the APIs that provision VMs, proxy AI models and bill for it all — moving fast,
  in one monorepo, without breaking each other.
outcome:
  - Top-3 contributor to the monorepo, ~25% of ~9.5k commits.
  - Shipped across every layer, from customer-facing UI to billing and VM APIs.
  - Operators run the platform from an admin console wired to live data.
metrics:
  - value: Top-3
    label: contributor to the monorepo
  - value: ~25%
    label: of ~9.5k commits
---

## What I built

- **Web dashboard** (Next.js 15 / React 19) — the customer-facing product where users manage their machines.
- **Admin console** (Vite + React) — built end-to-end for operators: VM metrics, host management, AI-model quotas and billing history, all on live APIs.
- **Go APIs** for VM lifecycle, an AI-model proxy and Stripe billing.
- **One monorepo** (pnpm + Turborepo) where an OpenAPI-generated types package keeps the frontends and the API in step.

## Architecture

```text
     ┌──────────────────────────────────────────────┐
     │          pnpm + Turborepo monorepo           │
     │                                              │
     │  apps/web        apps/admin      apps/api    │
     │  Next.js 15      Vite + React    Go          │
     │      │               │             ▲         │
     │      └───────────────┴─────────────┘         │
     │       shared OpenAPI → TS types package      │
     └──────────────────────────────────────────────┘
                            │
     ┌──────────────┬───────┴───────┬──────────────┐
     ▼              ▼               ▼              ▼
VM lifecycle   AI-model proxy    Stripe billing   Auth
```

High-level only — internal service names and infrastructure details are left out on purpose.
