# Adding content without being an engineer

You can add or edit a case study on this site safely. The checks catch mistakes before anything goes live.

## What you need
- Access to the GitHub repo, and Claude Code installed (ask an engineer for a 10-minute setup).

## Add a case study
1. Open a terminal in the repo and start Claude Code: `claude`
2. Type: `/new-case-study "Project name"`
3. Answer Claude's questions in plain language — what the problem was, what was built, the tools used, and the result.
   Only give numbers you can back up.
4. Claude creates the page, runs every check, and fixes anything that fails.
5. Ask Claude to "open a pull request". A few minutes later a **preview link** appears on the pull request —
   open it and read the page like a visitor would.
6. When it looks right, ask an engineer to review and merge. The live site updates automatically.

## Edit existing text
Ask Claude: "Change the summary of the GetPod case study to …". The same checks and preview apply.

## What the checks protect
- **Missing or wrong fields** (for example a date like `2024-2025` instead of `Jan 2024 – Present`) stop the build
  with a message naming the file and the field.
- **Slow or inaccessible pages** fail the Lighthouse check.
- Nothing reaches the live site without a pull request and a review.

## Never put on the site
Screenshots of private products, internal code, passwords or keys, customer names, or anything you're unsure is
public. If in doubt, leave it out and ask.
