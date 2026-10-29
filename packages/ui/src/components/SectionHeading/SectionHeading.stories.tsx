import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "Components/SectionHeading",
  component: SectionHeading,
  args: {
    eyebrow: "Selected work",
    title: "Products I've shipped",
    description: "Problem, what I built, stack and outcome — one page each.",
  },
  argTypes: { level: { control: "inline-radio", options: [1, 2, 3] } },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level2: Story = {};
export const Level1: Story = { args: { level: 1 } };
export const TitleOnly: Story = { args: { eyebrow: undefined, description: undefined } };
