<template>
  <i v-if="iconClass" :class="iconClass" class="text-base leading-none" aria-hidden="true"></i>
  <CodeBracketIcon v-else class="w-3.5 h-3.5" aria-hidden="true" />
</template>

<script setup>
import { computed } from 'vue';
import { CodeBracketIcon } from '@heroicons/vue/16/solid';
import { getTechIconClass } from '../utils/techIcons.js';

const props = defineProps({
  name: { type: String, required: true },
});

const iconClass = computed(() => getTechIconClass(props.name));
</script>