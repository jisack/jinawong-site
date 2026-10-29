# CLAUDE.md — conventions for this repo

Portfolio + application site for Jinawong Jino. pnpm workspaces + Turborepo.

## Layout
- `apps/site` — Astro (static output) for Cloudflare Pages. Pages in `src/pages`, case studies in
  `src/content/case-studies/*.md`, schema in `src/content.config.ts`, profile facts in `src/data/profile.ts`,
  the public URL in `src/site.config.ts` (`SITE_URL` — the only place it lives).
- `packages/ui` — React + TypeScript component library (`@jj/ui`). SCSS Modules, design tokens in
  `src/tokens/tokens.scss`, a Storybook story and a Vitest test next to every component.

## Commands
- `pnpm dev` — site on localhost:4321 · `pnpm storybook` — Storybook on :6006
- `pnpm check` — lint + typecheck + test + build (what CI runs). **Run it before every PR.**
- `pnpm new:case-study "Name"` — scaffold a case study (or use the `/new-case-study` slash command)

## Rules
1. **Facts only.** Every claim about Jinawong (dates, numbers, employers) must already be in
   `src/data/profile.ts`, an existing case study or the resume. New facts go in `REVIEW.md` (local, git-ignored) → "Needs confirmation"
   until confirmed. Never invent metrics.
2. **Nothing private.** No screenshots of private products, internal code, hostnames, customer names, tokens or
   secrets. Architecture diagrams stay high-level.
3. **Content changes go through the schema.** Don't loosen `content.config.ts` to make content pass — fix the content.
4. **Near-zero JS.** Library components render on the server by default. Only add `client:*` when a component
   truly needs interactivity; prefer `client:visible`. Framework-free helpers live in `@jj/ui/theme`.
5. **Styling.** Use tokens (`var(--jj-*)`) — no hard-coded colors, sizes or spacing. SCSS Modules in the library,
   scoped `<style lang="scss">` in Astro. Check light and dark, and 375px wide.
6. **Accessibility.** Semantic HTML, one `h1` per page, visible focus, labelled controls, 4.5:1 contrast.
   Lighthouse CI fails below 95 for performance or accessibility.
7. **Components.** A new library component needs: `Name.tsx`, `Name.module.scss`, `Name.stories.tsx`,
   `Name.test.tsx` (test roles/names/behavior, not snapshots), an export in `src/index.ts`, and a section on `/ui`.
   Pass data (strings/arrays) from Astro to React — Astro markup can't be a React prop.
8. **Tone.** English, concise and confident. Short sentences. No buzzwords, no academic phrasing.
9. **Never** push, deploy or change Cloudflare/GitHub settings unless asked. CI deploys on merge.
