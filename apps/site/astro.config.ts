import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/site.config";

// Static output: every page is pre-rendered HTML served from Cloudflare Pages.
// Interactive bits are React islands that hydrate only where a page asks.
export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "always",
  integrations: [react(), sitemap({ filter: (page) => !page.endsWith("/404/") })],
  build: { inlineStylesheets: "auto" },
  markdown: { syntaxHighlight: false },
  devToolbar: { enabled: false },
});
