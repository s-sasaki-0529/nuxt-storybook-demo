import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { userEvent, within, findByRole } from "@storybook/test";
import Component from "./todo.vue";

const meta = {
  title: "pages/todo",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 初期状態: Story = {
  args: {},
};

export const TODOを追加する: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    const button = await canvas.getByRole("button", { name: "追加" });

    await userEvent.type(input, "TODO1");
    await userEvent.click(button);
    await userEvent.type(input, "TODO2");
    await userEvent.click(button);
  },
};

export const TODOを完了する: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    const button = await canvas.getByRole("button", { name: "追加" });

    await userEvent.type(input, "TODO1");
    await userEvent.click(button);
    await userEvent.click(canvas.getByRole("button", { name: "完了にする" }));
    await userEvent.type(input, "TODO2");
    await userEvent.click(button);
    await userEvent.click(canvas.getByRole("button", { name: "完了にする" }));
  },
};

export const TODOを未完了に戻す: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    const button = await canvas.getByRole("button", { name: "追加" });

    await userEvent.type(input, "TODO1");
    await userEvent.click(button);
    await userEvent.click(canvas.getByRole("button", { name: "完了にする" }));
    await userEvent.click(canvas.getByRole("button", { name: "未完了に戻す" }));
  },
};

export const TODOを削除しようとする: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    const button = await canvas.getByRole("button", { name: "追加" });

    await userEvent.type(input, "TODO1");
    await userEvent.click(button);
    await userEvent.click(canvas.getByRole("button", { name: "削除" }));
  },
};

export const TODOを削除する: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    const button = await canvas.getByRole("button", { name: "追加" });

    await userEvent.type(input, "TODO1");
    await userEvent.click(button);

    const deleteButton = await canvas.getByRole("button", { name: "削除" });
    await userEvent.click(deleteButton);

    const confirmDialog = await findByRole(document.body, "dialog");
    const confirmButton = await within(confirmDialog).getByRole("button", { name: "OK" });
    await userEvent.click(confirmButton);
  },
};
