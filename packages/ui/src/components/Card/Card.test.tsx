import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders title at the requested heading level", () => {
    render(<Card title="GetPod" headingLevel={2} />);
    expect(screen.getByRole("heading", { level: 2, name: "GetPod" })).toBeInTheDocument();
  });

  it("exposes exactly one link when href is set", () => {
    render(
      <Card title="GetPod" href="/work/getpod" eyebrow="Crown Labs">
        Body
      </Card>,
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAccessibleName("GetPod");
    expect(links[0]).toHaveAttribute("href", "/work/getpod");
  });

  it("renders eyebrow, body and footer", () => {
    render(
      <Card title="T" eyebrow="Eyebrow" footer={<span>Footer</span>}>
        <p>Body copy</p>
      </Card>,
    );
    expect(screen.getByText("Eyebrow")).toBeInTheDocument();
    expect(screen.getByText("Body copy")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("can render as a list item", () => {
    render(
      <ul>
        <Card as="li" title="Item" />
      </ul>,
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("renders tags in the footer", () => {
    render(<Card title="T" tags={["Astro", "React"]} />);
    expect(screen.getByText("Astro")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
