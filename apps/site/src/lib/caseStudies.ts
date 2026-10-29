import { getCollection, type CollectionEntry } from "astro:content";

export type CaseStudy = CollectionEntry<"caseStudies">;

/** Published case studies in display order. Fails the build on duplicate `order`. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = (await getCollection("caseStudies", ({ data }) => import.meta.env.DEV || !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
  const seen = new Map<number, string>();
  for (const entry of entries) {
    const clash = seen.get(entry.data.order);
    if (clash) throw new Error(`Case studies "${clash}" and "${entry.id}" both use order ${entry.data.order}.`);
    seen.set(entry.data.order, entry.id);
  }
  return entries;
}

export const caseStudyHref = (entry: CaseStudy) => `/work/${entry.id}/`;
