import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../Tag/Tag";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    eyebrow: "Crown Labs · 2022–now",
    title: "GetPod platform",
    children: "A cloud dev-environment platform. Web dashboard, admin console and Go APIs.",
  },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}>{Story()}</div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {};
export const Linked: Story = { args: { href: "#" } };
export const WithFooter: Story = {
  args: {
    href: "#",
    footer: (
      <>
        <Tag>Next.js 15</Tag>
        <Tag>Go</Tag>
        <Tag>Turborepo</Tag>
      </>
    ),
  },
};
