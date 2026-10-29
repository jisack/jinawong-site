---
title: Electron desktop client
summary: The GetPod desktop app. Security-first by design, because it lets AI agents use your computer.
org: Crown Labs
role: Main contributor
period: "2026"
order: 2
stack:
  - Electron
  - React 19
  - TypeScript
  - Vite
  - zod
problem: >-
  An agent that can click and type on a user's machine is powerful and risky. The desktop client had to
  make that capability useful while keeping the renderer untrusted, every privileged action explicit and
  every agent action reviewable after the fact.
outcome:
  - Main contributor, 57% of the app's commits.
  - Renderer runs sandboxed; it can only call a small, scoped IPC API.
  - Agent computer use is consent-gated and written to an audit trail.
metrics:
  - value: 57%
    label: of commits
---

## What I built

- **Sandboxed renderer.** The React 19 UI never touches Node or the OS directly.
- **Scoped IPC.** A narrow capability API exposed through the preload bridge — the renderer can ask for specific things, nothing else.
- **Consent + audit trail for computer use.** The user approves agent control, and every action is recorded.
- **Desktop plumbing**: an in-app updater and macOS/Windows support for computer use.

## Architecture

```text
┌──────────────────────────┐        ┌─────────────────────────────┐
│ Renderer (sandboxed)     │  IPC   │ Main process                │
│ React 19 + TypeScript    │ ─────▶ │ capability API              │
│ no Node, no OS access    │ scoped │  ├─ consent gate            │
└──────────────────────────┘        │  ├─ computer-use actions    │
                                    │  └─ audit trail             │
                                    └──────────────┬──────────────┘
                                                   ▼
                                        macOS / Windows input
```
