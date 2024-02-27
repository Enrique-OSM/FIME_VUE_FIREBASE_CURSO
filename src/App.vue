<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value = count.value + 1;
}

function decrement() {
  count.value = count.value - 1;
}
</script>

<template>
  <div>
    <h3 :class="{ red: count > 10, green: count < 0 }">
      El contador actual es: {{ count }}
    </h3>
    <button @click="increment()" type="button">Incrementar</button>
    <button @click="decrement()" type="button">Decrementar</button>
  </div>
  <h2 v-if="count >= 20">Lo lograste</h2>
  <h2 v-else>Aun no lo logras</h2>
</template>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
