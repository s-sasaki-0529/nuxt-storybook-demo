<script setup lang="ts">
import TodoInput from "~/components/features/todo/TodoInput.vue";
import TodoList from "~/components/features/todo/TodoList.vue";
</script>

<template>
  <div class="container">
    <h1>TODO管理</h1>
    <NuxtLink to="/" class="back-link">← 戻る</NuxtLink>
    <div class="todo-container">
      <TodoInput />
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  color: #333;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
