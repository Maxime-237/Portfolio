<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="project" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-gray-950/85 backdrop-blur-sm" @click="$emit('close')"></div>

        <div class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-amber-500/20 bg-gray-900 shadow-2xl">
          <!-- Terminal-style window chrome (signature detail, consistent with the WhatsApp modal) -->
          <div class="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gray-900/95 backdrop-blur">
            <div class="window-chrome">
              <button type="button" class="window-dot bg-red-500/70 hover:bg-red-500 transition-colors" @click="$emit('close')" :aria-label="t('modalClose')"></button>
              <span class="window-dot bg-amber-400/70"></span>
              <span class="window-dot bg-emerald-500/70"></span>
            </div>
            <span class="font-mono text-xs text-gray-500 truncate max-w-[60%]">{{ slug }}</span>
          </div>

          <img :src="project.image" :alt="project.title" class="w-full max-h-72 object-cover">

          <div class="p-6 md:p-8">
            <div class="flex items-center gap-3 mb-3">
              <span class="px-3 py-1 text-white text-xs font-mono rounded-full font-semibold" :class="project.badgColor">
                {{ project.category }}
              </span>
            </div>

            <h3 class="text-2xl md:text-3xl font-display font-bold text-white mb-4">{{ project.title }}</h3>

            <p class="text-amber-100 leading-relaxed mb-6">{{ project.desc }}</p>

            <div class="mb-6">
              <h4 class="font-mono text-xs uppercase tracking-wider text-teal-400 mb-3">{{ t('modalStack') }}</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technolg" :key="tech.name"
                  class="px-3 py-1.5 border rounded-lg text-sm font-mono"
                  :class="tech.class">
                  {{ tech.name }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a v-for="link in project.links" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 px-5 py-3 rounded-xl border border-amber-400/30 font-semibold text-sm transition-all hover:bg-amber-400/10"
                :class="link.class">
                <component :is="link.icon" class="w-4 h-4" />
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';
import { t } from '../i18n.js';

const props = defineProps({
  project: { type: Object, default: null },
});
defineEmits(['close']);

const slug = computed(() =>
  props.project
    ? props.project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.md'
    : ''
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
