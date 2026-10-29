/**
 * Site-wide settings. `SITE_URL` is the ONLY place the public URL lives:
 * canonical links, Open Graph tags, the sitemap and robots.txt all read it.
 */
export const SITE_URL = "https://jj.jisack.xyz";

export const SITE = {
  name: "Jinawong Jino",
  title: "Jinawong Jino — Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer with 10+ years shipping web products end-to-end — now also building the AI-agent tooling that lets teams ship faster.",
  locale: "en",
  ogImage: "/og.png",
  resumePath: "/jinawong-jino-resume.pdf",
  /**
   * Contact form (Cloudflare Pages Function + Turnstile). Off until the
   * Turnstile site key and the Pages secrets are configured — see wrangler.toml.
   */
  contact: {
    enabled: false,
    turnstileSiteKey: "",
  },
} as const;
