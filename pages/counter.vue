<script setup>
import CounterDisplay from "~/components/features/counter/CounterDisplay.vue";
import CounterButtons from "~/components/features/counter/CounterButtons.vue";
</script>

<template>
  <div class="container">
    <h1>カウンター</h1>
    <NuxtLink to="/" class="back-link">← 戻る</NuxtLink>
    <div class="counter-container">
      <CounterDisplay />
      <CounterButtons />
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
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

.counter-container {
  margin-top: 20px;
}
</style>
