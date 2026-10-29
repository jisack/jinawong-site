import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "./Timeline";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  args: {
    items: [
      { period: "Jun 2022 – Present", title: "Senior Full-Stack Engineer", org: "Crown Labs", current: true },
      { period: "Dec 2021 – May 2022", title: "Full-stack Developer", org: "nuvo" },
      {
        period: "Mar 2016 – May 2022",
        title: "Web Developer → Senior Web Developer",
        org: "20Scoops CNX",
        orgNote: "Chiang Mai",
      },
    ],
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
