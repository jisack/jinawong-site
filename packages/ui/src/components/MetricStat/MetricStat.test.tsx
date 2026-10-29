import { render, screen } from "@testing-library/react";
import { MetricStat } from "./MetricStat";

describe("MetricStat", () => {
  it("renders value, label and hint", () => {
    render(<MetricStat value="26" label="GitHub Actions workflows" hint="CI/CD" />);
    expect(screen.getByText("26")).toBeInTheDocument();
    expect(screen.getByText("GitHub Actions workflows")).toBeInTheDocument();
    expect(screen.getByText("CI/CD")).toBeInTheDocument();
  });

  it("omits the hint when not provided", () => {
    const { container } = render(<MetricStat value="57%" label="of commits" />);
    expect(container.querySelectorAll("p")).toHaveLength(2);
  });
});
