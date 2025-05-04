<template>
  <div class="container">
    <h1>Nuxt Storybook Demo</h1>
    <NuxtLink to="/counter" class="counter-link"> カウンターを開く </NuxtLink>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.counter-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #41b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.counter-link:hover {
  background-color: #3aa876;
}
</style>
