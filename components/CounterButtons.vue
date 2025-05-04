<script setup lang="ts">
const count = useState("count", () => 0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div class="counter-buttons">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
.counter-buttons {
  display: inline-block;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}
</style>
