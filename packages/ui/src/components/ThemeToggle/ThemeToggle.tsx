import { useSyncExternalStore } from "react";
import { cx } from "../../lib/cx";
import { getTheme, toggleTheme, type Theme } from "../../lib/theme";
import styles from "./ThemeToggle.module.scss";

export interface ThemeToggleProps {
  className?: string;
}

/**
 * Light/dark switch. Both icons render on the server and CSS picks the visible
 * one from `html[data-theme]`, so the static HTML is correct before any JS runs.
 * Hydrate it as an island, or wire the static markup with `bindThemeToggles()` from `@jj/ui/theme`.
 */
// Subscribe to html[data-theme] so every toggle on the page stays in sync,
// including ones wired by bindThemeToggles().
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getServerTheme = (): Theme | null => null;

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  return (
    <button
      type="button"
      className={cx(styles.toggle, className)}
      data-theme-toggle=""
      aria-label="Dark theme"
      aria-pressed={theme === null ? undefined : theme === "dark"}
      onClick={() => toggleTheme()}
    >
      <svg className={styles.sun} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg className={styles.moon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
      </svg>
    </button>
  );
}
