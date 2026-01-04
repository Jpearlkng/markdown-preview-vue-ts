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
    <div class="p-6 bg-gray-50 min-h-screen">
      <header class="flex flex-col md:flex-row justify-between items-center mb-6 max-w-6xl mx-auto gap-4">
        <div>
          <h1 class="text-xl font-bold text-gray-800">Vue Markdown Previewer</h1>
          <p class="text-xs text-gray-500">Victoria Lefevre | ALT/SOE/025/1625</p>
        </div>

        <div class="flex flex-wrap gap-3">
          <router-link 
            to="/error-test" 
            class="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition shadow-sm"
          >
            Test Error
          </router-link>
          
          <router-link 
            to="/not-found-test" 
            class="bg-gray-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-600 transition shadow-sm"
          >
            Test 404
          </router-link>

          <button 
            @click="downloadFile" 
            class="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition shadow-sm"
          >
            Download .md
          </button>
        </div>
      </header>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Editor v-model:markdown="markdown" />
        <Preview :markdown="markdown" />
      </div>
    </div>
  </ErrorBoundary>
</template>