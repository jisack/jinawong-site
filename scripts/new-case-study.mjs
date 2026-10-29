#!/usr/bin/env node
// Scaffold a case study from the template: pnpm new:case-study "Project name"
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: pnpm new:case-study "Project name"');
  process.exit(1);
}

const root = new URL("..", import.meta.url).pathname;
const dir = join(root, "apps/site/src/content/case-studies");
const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const file = join(dir, `${slug}.md`);
if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

// Next free `order` = highest existing + 1.
const orders = readdirSync(dir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => Number(/^order:\s*(\d+)/m.exec(readFileSync(join(dir, f), "utf8"))?.[1] ?? 0));
const order = Math.max(0, ...orders) + 1;

const template = readFileSync(join(root, "apps/site/templates/case-study.md"), "utf8")
  .replace(/^# .*\n/gm, "")
  .replace(/^title: .*$/m, `title: ${JSON.stringify(title)}`)
  .replace(/^order: .*$/m, `order: ${order}`);
writeFileSync(file, template);
console.log(`Created ${file.replace(root, "")} (draft: true, order: ${order})`);
