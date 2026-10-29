import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("defaults to an h2", () => {
    render(<SectionHeading title="Selected work" />);
    expect(screen.getByRole("heading", { level: 2, name: "Selected work" })).toBeInTheDocument();
  });

  it("renders level, id, eyebrow and description", () => {
    render(<SectionHeading level={1} id="top" title="Hello" eyebrow="Intro" description="Short line" />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveAttribute("id", "top");
    expect(screen.getByText("Intro")).toBeInTheDocument();
    expect(screen.getByText("Short line")).toBeInTheDocument();
  });
});
