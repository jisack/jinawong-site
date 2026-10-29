import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricStat } from "./MetricStat";

const meta = {
  title: "Components/MetricStat",
  component: MetricStat,
  args: { value: "26", label: "GitHub Actions workflows" },
} satisfies Meta<typeof MetricStat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = { args: { value: "~230", label: "test files added", hint: "GetPod monorepo" } };

export const Row: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
      <MetricStat value="10+" label="years shipping web products" />
      <MetricStat value="~25%" label="of ~9.5k GetPod commits" />
      <MetricStat value="57%" label="of desktop-app commits" />
    </div>
  ),
};
