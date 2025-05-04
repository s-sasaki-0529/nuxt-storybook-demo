<script setup lang="ts">
import type { Todo } from "~/types/todo";

const todos = useState<Todo[]>("todos", () => []);
const isDeleteModalOpen = ref(false);
const targetTodoId = ref<number | null>(null);

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

const confirmDelete = (id: number) => {
  targetTodoId.value = id;
  isDeleteModalOpen.value = true;
};

const handleConfirmDelete = () => {
  if (targetTodoId.value !== null) {
    todos.value = todos.value.filter((todo) => todo.id !== targetTodoId.value);
  }
  isDeleteModalOpen.value = false;
  targetTodoId.value = null;
};

const handleCancelDelete = () => {
  isDeleteModalOpen.value = false;
  targetTodoId.value = null;
};
</script>

<template>
  <div class="todo-lists">
    <div class="todo-section">
      <h2>未完了のTODO</h2>
      <div class="todo-list">
        <div v-for="todo in incompleteTodos" :key="todo.id" class="todo-item">
          <span>{{ todo.text }}</span>
          <div class="button-group">
            <button @click="toggleTodo(todo.id)" class="toggle-button">
              完了にする
            </button>
            <button @click="confirmDelete(todo.id)" class="delete-button">
              削除
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="todo-section">
      <h2>完了済みのTODO</h2>
      <div class="todo-list">
        <div v-for="todo in completedTodos" :key="todo.id" class="todo-item">
          <span class="completed">{{ todo.text }}</span>
          <div class="button-group">
            <button @click="toggleTodo(todo.id)" class="toggle-button">
              未完了に戻す
            </button>
            <button @click="confirmDelete(todo.id)" class="delete-button">
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalMessage
    :isOpen="isDeleteModalOpen"
    message="このTODOを削除してもよろしいですか？"
    @submit="handleConfirmDelete"
    @cancel="handleCancelDelete"
  />
</template>

<style scoped>
.todo-lists {
  display: flex;
  gap: 40px;
  flex-direction: row;
  margin: 20px 0;
}

.todo-section {
  flex: 1;
  width: 400px;
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

.button-group {
  display: flex;
  gap: 8px;
}

.toggle-button:hover {
  background-color: #3aa876;
}

.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #bb2d3b;
}
</style>
