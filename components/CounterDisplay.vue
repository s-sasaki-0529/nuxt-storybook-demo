<script setup lang="ts">
const count = useState("count", () => 0);
</script>

<template>
  <span class="counter-display">{{ count }}</span>
</template>

<style scoped>
.counter-display {
  font-size: 1.5rem;
  margin: 0 1rem;
}
</style>
