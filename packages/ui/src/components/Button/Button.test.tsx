import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a button with type=button by default", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute("type", "button");
  });

  it("renders a link when href is set", () => {
    render(<Button href="/resume.pdf">Resume</Button>);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume.pdf");
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="secondary" size="lg">
        Go
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button.className).toContain("secondary");
    expect(button.className).toContain("lg");
  });

  it("hides icons from assistive tech", () => {
    render(<Button leadingIcon={<svg data-testid="icon" />}>Email</Button>);
    expect(screen.getByTestId("icon").parentElement).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("button", { name: "Email" })).toBeInTheDocument();
  });

  it("calls onClick and respects disabled", async () => {
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>Tap</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
    rerender(
      <Button onClick={onClick} disabled>
        Tap
      </Button>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
