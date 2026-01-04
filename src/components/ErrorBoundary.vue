<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
const hasError = ref(false);
const errorMsg = ref('');

onErrorCaptured((err) => {
  hasError.value = true;
  errorMsg.value = err.message;
  return false;
});
</script>
<template>
  <div v-if="hasError" class="p-10 text-center">
    <h1 class="text-red-600 font-bold text-2xl">Something went wrong</h1>
    <p>{{ errorMsg }}</p>
    <button @click="hasError = false" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Try Again</button>
  </div>
  <slot v-else />
</template>