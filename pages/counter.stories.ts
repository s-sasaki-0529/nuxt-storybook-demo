import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { userEvent, within } from "@storybook/test";
import Component from "./counter.vue";

const meta = {
  title: "pages/counter",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 初期状態: Story = {
  args: {},
};

export const カウントアップ: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: "+",
    });
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
  },
};

export const カウントダウン: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: "-",
    });
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
  },
};
