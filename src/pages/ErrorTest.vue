<template>
  <div class="p-8 text-center">
    <h2 class="text-2xl mb-4">Error Boundary Test Page</h2>
    <p class="mb-4">Clicking the button below will trigger a Vue error to test your boundary.</p>
    <button 
      @click="triggerError" 
      class="bg-red-500 text-white px-4 py-2 rounded shadow"
    >
      Trigger Crash
    </button>
  </div>
</template>

<script setup lang="ts">
const triggerError = () => {
  // We throw a standard error which will be caught by ErrorBoundary.vue
  throw new Error("This is a deliberate test error for Victoria's project!");
};
</script>