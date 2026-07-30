<template>
  <button
    type="button"
    class="p-2.5 rounded-full border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:text-amber-400 transition-all duration-300"
    :aria-label="themeState.theme === 'dark' ? t('themeSwitchToLight') : t('themeSwitchToDark')"
    :title="themeState.theme === 'dark' ? t('themeSwitchToLight') : t('themeSwitchToDark')"
    @click="toggleTheme"
  >
    <SunIcon v-if="themeState.theme === 'dark'" class="w-5 h-5" />
    <MoonIcon v-else class="w-5 h-5" />
  </button>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid';
import { t } from '../i18n.js';
import { themeState, toggleTheme } from '../composables/useTheme.js';
</script>