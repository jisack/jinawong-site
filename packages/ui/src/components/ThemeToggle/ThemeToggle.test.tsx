import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { bindThemeToggles, THEME_STORAGE_KEY } from "../../lib/theme";
import { ThemeToggle } from "./ThemeToggle";

beforeAll(() => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: false }) as unknown as typeof window.matchMedia;
});

describe("ThemeToggle", () => {
  it("reflects the current theme with aria-pressed", () => {
    document.documentElement.dataset.theme = "dark";
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: "Dark theme" })).toHaveAttribute("aria-pressed", "true");
  });

  it("toggles html[data-theme] and persists the choice", async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "Dark theme" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("works as static markup wired by bindThemeToggles (no hydration)", async () => {
    document.body.innerHTML = '<button type="button" data-theme-toggle aria-label="Dark theme"></button>';
    bindThemeToggles();
    const button = screen.getByRole("button", { name: "Dark theme" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
