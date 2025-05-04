<script setup lang="ts">
import type { Todo } from "~/types/todo";

const todos = useState<Todo[]>("todos", () => []);
const newTodo = ref("");

const addTodo = () => {
  if (!newTodo.value.trim()) return;

  const todo: Todo = {
    id: Date.now(),
    text: newTodo.value.trim(),
    completed: false,
  };

  todos.value.push(todo);
  newTodo.value = "";
};
</script>

<template>
  <div class="todo-input">
    <input v-model="newTodo" type="text" placeholder="新しいTODOを入力" />
    <button @click="addTodo">追加</button>
  </div>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 840px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 8px 16px;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
