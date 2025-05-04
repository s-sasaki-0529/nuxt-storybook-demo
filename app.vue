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
  <div>
    <h1>カウンター</h1>
    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  padding: 20px;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}

span {
  font-size: 1.5rem;
  margin: 0 1rem;
}
</style>
