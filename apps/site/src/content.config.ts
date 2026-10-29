import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Case-study frontmatter contract. `astro check` and `astro build` both fail on
 * a missing field, a wrong type or an unknown key, so bad content can't reach
 * production. Template: apps/site/templates/case-study.md
 */
const period = z
  .string()
  .regex(
    /^((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) )?\d{4}( – (((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) )?\d{4}|Present))?$/,
    'Use "Mon YYYY – Mon YYYY", "Mon YYYY – Present" or "YYYY" (en dash with spaces).',
  );

const caseStudies = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/content/case-studies" }),
  schema: z.strictObject({
    title: z.string().min(3).max(60),
    /** One sentence for cards and the meta description. */
    summary: z.string().min(40).max(180),
    org: z.string().min(2),
    role: z.string().min(2),
    period,
    /** Position in lists, 1 = first. Must be unique. */
    order: z.number().int().positive(),
    stack: z.array(z.string().min(1)).min(2).max(10),
    problem: z.string().min(40).max(500),
    outcome: z.array(z.string().min(10)).min(1).max(5),
    metrics: z
      .array(z.strictObject({ value: z.string().min(1).max(8), label: z.string().min(3).max(60) }))
      .max(4)
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
