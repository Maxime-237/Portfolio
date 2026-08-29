<template>
  <nav
    class="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-amber-500/20 bg-gray-900/90 backdrop-blur-lg shadow-2xl px-2 py-2"
    aria-label="Navigation rapide"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      class="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-full transition-all duration-300"
      :class="active === tab.id ? 'bg-amber-400/15 text-amber-400' : 'text-gray-400 hover:text-amber-300'"
      @click="goTo(tab.id)"
    >
      <component :is="tab.icon" class="w-5 h-5" />
      <span class="text-[10px] font-mono leading-none">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<script setup>
import { HomeIcon, CodeBracketIcon, Squares2X2Icon, EnvelopeIcon } from '@heroicons/vue/16/solid';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { t } from '../i18n.js';

const tabs = computed(() => [
  { id: 'home', label: t('navHome'), icon: HomeIcon },
  { id: 'projects', label: t('projectsTitle'), icon: CodeBracketIcon },
  { id: 'skills', label: t('navSkills'), icon: Squares2X2Icon },
  { id: 'contact', label: t('navContact'), icon: EnvelopeIcon },
]);

const active = ref('home');
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id;
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  tabs.value.forEach((tab) => {
    const el = document.getElementById(tab.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => observer?.disconnect());

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>