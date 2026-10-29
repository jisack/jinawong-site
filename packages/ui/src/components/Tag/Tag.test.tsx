import { render, screen } from "@testing-library/react";
import { Badge, Tag } from "./Tag";

describe("Tag", () => {
  it("renders text with the neutral variant by default", () => {
    render(<Tag>Astro</Tag>);
    expect(screen.getByText("Astro").className).toContain("neutral");
  });

  it("supports the accent variant", () => {
    render(<Tag variant="accent">Current</Tag>);
    expect(screen.getByText("Current").className).toContain("accent");
  });

  it("exports Badge as an alias", () => {
    expect(Badge).toBe(Tag);
  });
});
