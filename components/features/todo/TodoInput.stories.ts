import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./TodoInput.vue";

const meta = {
  title: "Components/Todo/TodoInput",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    onAdd: { action: "add" },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoInput: Story = {
  args: {},
};
