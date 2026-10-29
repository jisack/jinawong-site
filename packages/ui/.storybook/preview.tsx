import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/tokens/tokens.scss";
import "./preview.scss";

const withTheme: Decorator = (Story, context) => {
  document.documentElement.dataset.theme = context.globals.theme === "dark" ? "dark" : "light";
  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: { title: "Theme", icon: "mirror", items: ["light", "dark"], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [withTheme],
  parameters: { layout: "padded" },
};

export default preview;
