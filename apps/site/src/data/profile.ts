// Profile facts. Source of truth: resume-C2. Anything new here must be
// confirmable by Jinawong before it ships.

export const profile = {
  name: "Jinawong Jino",
  title: "Senior Full-Stack Engineer",
  valueProp:
    "10+ years shipping web products end-to-end — now also building the AI-agent tooling that lets teams ship faster.",
  location: "Thailand · Remote (UTC+7)",
  email: "jinawong.jino@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jinawong",
    github: "https://github.com/0xTH0R",
  },
  languages: "Thai (native) · English (professional)",
  education: "Bachelor’s Degree, Computer Information System, RMUTL (2012–2016)",
} as const;

export const headlineStats = [
  { value: "10+", label: "years shipping web products" },
  { value: "Top-3", label: "GetPod contributor, ~25% of ~9.5k commits" },
  { value: "26", label: "GitHub Actions workflows owned" },
  { value: "8+", label: "agents in my self-hosted AI fleet" },
] as const;

export interface ExperienceEntry {
  period: string;
  title: string;
  org: string;
  orgNote?: string;
  current?: boolean;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "Jun 2022 – Present",
    title: "Senior Full-Stack Engineer",
    org: "Crown Labs",
    current: true,
    points: [
      "GetPod platform and desktop app across a TypeScript + Go monorepo.",
      "Kittycorn (DeFi): NestJS + GraphQL backend, Next.js dashboard, Uniswap V4 subgraph.",
    ],
  },
  {
    period: "Jan 2026 – Present",
    title: "AI Agent Systems",
    org: "Independent",
    current: true,
    points: [
      "Self-hosted multi-agent platform on Claude Code; video and content automation with ffmpeg, the Facebook Graph API and ElevenLabs.",
    ],
  },
  {
    period: "Dec 2021 – May 2022",
    title: "Full-stack Developer",
    org: "nuvo",
    points: [
      "Developed and maintained full-stack web applications across frontend and backend in a fast-paced product team.",
    ],
  },
  {
    period: "Mar 2016 – May 2022",
    title: "Web Developer → Senior Web Developer",
    org: "20Scoops CNX",
    orgNote: "Chiang Mai — product-engineering arm of Hamburg-based 20Scoops Venture Capital",
    points: [
      "Built web products for German startups in the venture portfolio, collaborating remotely in English with German founders and product owners.",
      "Handled architecture decisions and code reviews, and mentored developers.",
    ],
  },
];

export const toolbox = [
  { area: "Frontend", items: "React, TypeScript, Next.js, Vite, Electron, Tailwind" },
  { area: "Backend", items: "Go, Node.js, NestJS, GraphQL, PostgreSQL, Stripe" },
  { area: "Infra", items: "Docker, GitHub Actions, AWS, Cloudflare, Linux" },
  { area: "AI", items: "Claude Code, MCP, multi-agent orchestration" },
] as const;
