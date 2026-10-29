import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";

const items = [
  {
    period: "Jun 2022 – Present",
    title: "Senior Full-Stack Engineer",
    org: "Crown Labs",
    current: true,
    points: ["GetPod platform and desktop app."],
  },
  { period: "Mar 2016 – May 2022", title: "Web Developer", org: "20Scoops CNX", orgNote: "Chiang Mai" },
];

describe("Timeline", () => {
  it("renders an ordered list with one item per entry", () => {
    render(<Timeline items={items} />);
    const list = screen.getAllByRole("list")[0]!;
    expect(list.tagName).toBe("OL");
    expect(list.querySelectorAll(":scope > li")).toHaveLength(2);
  });

  it("announces the current role to screen readers", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("(current)")).toBeInTheDocument();
  });

  it("renders periods, titles and notes", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("Mar 2016 – May 2022")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Web Developer · 20Scoops CNX/ })).toBeInTheDocument();
    expect(screen.getByText("Chiang Mai")).toBeInTheDocument();
  });

  it("renders bullet points when provided", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("GetPod platform and desktop app.").tagName).toBe("LI");
  });
});
