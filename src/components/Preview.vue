<script setup lang="ts">
import { ref, watch } from 'vue';
import { marked } from 'marked';

const props = defineProps<{ markdown: string }>();
const htmlContent = ref('');
const isLoading = ref(false);

watch(() => props.markdown, async (newVal) => {
  isLoading.value = true;
  htmlContent.value = await marked.parse(newVal);
  isLoading.value = false;
}, { immediate: true });
</script>
<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-lg font-semibold mb-3 text-gray-700">Preview</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="prose max-w-none p-3 border border-gray-300 rounded-md min-h-[24rem]" v-html="htmlContent"></div>
  </div>
</template>