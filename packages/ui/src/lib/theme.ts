// Framework-free theme helpers. Safe to import from a plain <script> so pages
// that never hydrate React can still toggle the theme.

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "jj-theme";

export function getTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this page.
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

/**
 * Progressive enhancement for server-rendered `[data-theme-toggle]` buttons
 * that are not hydrated as React islands. No React required.
 */
export function bindThemeToggles(root: ParentNode = document): void {
  const buttons = () => root.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  const sync = (theme: Theme) => buttons().forEach((b) => b.setAttribute("aria-pressed", String(theme === "dark")));
  sync(getTheme());
  buttons().forEach((button) => button.addEventListener("click", () => sync(toggleTheme())));
  new MutationObserver(() => sync(getTheme())).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}
