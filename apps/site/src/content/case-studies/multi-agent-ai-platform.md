---
title: Multi-agent AI platform
summary: My self-hosted fleet of 8+ specialized agents on Telegram, with background workers, MCP servers and custom skills.
org: Independent
role: Builder & operator
period: Jan 2026 – Present
order: 3
stack:
  - Claude Code
  - MCP
  - TypeScript
  - Telegram
  - ffmpeg
  - ElevenLabs
problem: >-
  One general assistant is not enough for real work. I wanted specialists — each with its own memory,
  tools and permissions — that I can reach from my phone and that hand long jobs to background workers.
outcome:
  - 8+ specialized agents running day to day on a self-hosted gateway.
  - Video and content automation with ffmpeg, the Facebook Graph API and ElevenLabs.
  - Contributor to claude-gateway — 53 commits on computer use, MCP and orchestration.
metrics:
  - value: 8+
    label: specialized agents
  - value: "53"
    label: commits to claude-gateway
---

## What I built

- **An agent fleet on Telegram.** Each agent has its own workspace, memory, skills and scoped credentials.
- **Background workers.** Agents delegate long-running tasks and report back when they finish.
- **MCP servers and custom skills** that give agents real tools, from media generation to publishing.
- **Content automation**: video pipelines with ffmpeg and ElevenLabs, publishing through the Facebook Graph API.
- **Upstream contributions** to claude-gateway, the multi-agent gateway the fleet runs on: computer use, MCP tools and orchestration.

## Architecture

```text
Telegram
   │
   ▼
claude-gateway        routing · memory · sessions
   │
   ▼
agent (Claude Code)
   ├── skills
   ├── MCP servers ──▶ media · publishing · browser
   └── background workers
          │
          └──▶ result back to the chat
```
