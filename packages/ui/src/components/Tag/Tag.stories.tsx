import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  args: { children: "TypeScript" },
  argTypes: { variant: { control: "inline-radio", options: ["neutral", "accent", "outline"] } },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};
export const Accent: Story = { args: { variant: "accent", children: "Current" } };
export const Outline: Story = { args: { variant: "outline" } };
