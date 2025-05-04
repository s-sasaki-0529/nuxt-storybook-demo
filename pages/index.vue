<template>
  <div class="container">
    <h1>Nuxt Storybook Demo</h1>
    <div class="links">
      <NuxtLink to="/counter" class="nav-link"> カウンターを開く </NuxtLink>
      <NuxtLink to="/todo" class="nav-link"> TODOを開く </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.nav-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #41b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #3aa876;
}
</style>
