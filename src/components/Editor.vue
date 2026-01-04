<script setup lang="ts">
defineProps<{ markdown: string }>();
const emit = defineEmits(['update:markdown']);

const handleChange = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  emit('update:markdown', target.value);
};
</script>
<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-lg font-semibold mb-3 text-gray-700">Editor</h2>
    <textarea
      :value="markdown"
      @input="handleChange"
      class="w-full h-96 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
      placeholder="Type your markdown here..."
    ></textarea>
  </div>
</template>