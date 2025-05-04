<script setup>
import CounterDisplay from "~/components/features/counter/CounterDisplay.vue";
import CounterButtons from "~/components/features/counter/CounterButtons.vue";
</script>

<template>
  <div class="container">
    <h1>カウンター</h1>
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

.counter-container {
  margin-top: 20px;
}
</style>
