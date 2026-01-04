<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
    <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <p class="text-xl text-gray-600 mb-8">Oops! The page you are looking for doesn't exist.</p>
    <router-link 
      to="/" 
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
    >
      Return Home
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No logic needed for a static 404 page
</script>