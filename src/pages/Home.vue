<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Editor from '../components/Editor.vue';
import Preview from '../components/Preview.vue';
import ErrorBoundary from '../components/ErrorBoundary.vue';

const markdown = ref('# Welcome Victoria\n\nEdit this to see changes.');

onMounted(() => {
  const saved = localStorage.getItem('markdown-content');
  if (saved) markdown.value = saved;
});

watch(markdown, (newVal) => {
  localStorage.setItem('markdown-content', newVal);
});

const downloadFile = () => {
  const blob = new Blob([markdown.value], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'notes.md'; a.click();
};
</script>

<template>
  <ErrorBoundary>
    <div class="p-6">
      <header class="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <h1 class="text-xl font-bold">Vue Markdown Previewer</h1>
        <button @click="downloadFile" class="bg-green-600 text-white px-4 py-2 rounded">Download</button>
      </header>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Editor v-model:markdown="markdown" />
        <Preview :markdown="markdown" />
      </div>
    </div>
  </ErrorBoundary>
</template>