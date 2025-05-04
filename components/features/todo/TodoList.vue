<script setup lang="ts">
import type { Todo } from "~/types/todo";

const todos = useState<Todo[]>("todos", () => []);

const incompleteTodos = computed(() =>
  todos.value.filter((todo) => !todo.completed)
);

const completedTodos = computed(() =>
  todos.value.filter((todo) => todo.completed)
);

const toggleTodo = (id: number) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};
</script>

<template>
  <div class="todo-lists">
    <div class="todo-section">
      <h2>未完了のTODO</h2>
      <div class="todo-list">
        <div v-for="todo in incompleteTodos" :key="todo.id" class="todo-item">
          <span>{{ todo.text }}</span>
          <button @click="toggleTodo(todo.id)" class="toggle-button">
            完了にする
          </button>
        </div>
      </div>
    </div>

    <div class="todo-section">
      <h2>完了済みのTODO</h2>
      <div class="todo-list">
        <div v-for="todo in completedTodos" :key="todo.id" class="todo-item">
          <span class="completed">{{ todo.text }}</span>
          <button @click="toggleTodo(todo.id)" class="toggle-button">
            未完了に戻す
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-lists {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 20px 0;
}

.todo-section {
  flex: 1;
}

.todo-section h2 {
  margin-bottom: 15px;
  color: #666;
  font-size: 1.2rem;
}

.todo-list {
  margin: 0;
  width: 100%;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.toggle-button {
  padding: 5px 10px;
  margin-left: 2rem;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #3aa876;
}
</style>
