# jinawong-site

Portfolio and application site for **Jinawong Jino** — Senior Full-Stack Engineer.

```
apps/site       Astro 7 (static) · React islands · SCSS · Content Collections (zod) → Cloudflare Pages
packages/ui     React 19 + TypeScript component library · design tokens · Storybook 10 · Vitest
```

## Quick start
```sh
corepack enable          # pnpm version is pinned in package.json
pnpm install
pnpm dev                 # http://localhost:4321
pnpm storybook           # http://localhost:6006
pnpm check               # lint + typecheck + test + build (same as CI)
```

## Configuration
- **Public URL:** `SITE_URL` in `apps/site/src/site.config.ts` (canonical, OG, sitemap, robots all derive from it).
- **Cloudflare Pages:** `apps/site/wrangler.toml` (project `jinawong-site`).
- **CI secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`; optional repo variable `CF_PAGES_PROJECT`.
  Without them, CI still runs every check and skips the deploy.
- **Contact form:** off. See the header of `apps/site/functions/api/contact.ts`.

Conventions: [CLAUDE.md](CLAUDE.md) · Content guide: [CONTRIBUTING-for-non-engineers.md](CONTRIBUTING-for-non-engineers.md)
