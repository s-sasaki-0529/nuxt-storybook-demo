import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  viteFinal: (config) => {
    config.optimizeDeps = {
      include: ["vue"],
    };
    return config;
  },
};
export default config;
