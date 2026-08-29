<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-gray-950/85 backdrop-blur-sm" @click="close"></div>

        <div class="relative w-full max-w-md rounded-2xl border border-amber-500/20 bg-gray-900 shadow-2xl overflow-hidden">
          <!-- Terminal-style window chrome, consistent with the site's other modals -->
          <div class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/2">
            <div class="window-chrome">
              <button type="button" class="window-dot bg-red-500/70 hover:bg-red-500 transition-colors" @click="close" :aria-label="t('modalClose')"></button>
              <span class="window-dot bg-amber-400/70"></span>
              <span class="window-dot bg-emerald-500/70"></span>
            </div>
            <span class="font-mono text-xs text-gray-500">avis.txt</span>
          </div>

          <div class="p-6">
            <h3 class="text-white font-display font-bold text-xl mb-1">{{ t('reviewFormTitle') }}</h3>
            <p class="text-gray-400 text-sm mb-5">{{ t('reviewFormDesc') }}</p>

            <form class="space-y-4" @submit.prevent="submit">
              <div>
                <label class="text-amber-200 text-sm font-medium mb-1.5 block">{{ t('reviewFormName') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="t('reviewFormNamePlaceholder')"
                  class="w-full bg-gray-800/60 border border-amber-500/20 rounded-xl px-4 py-2.5 text-amber-100 text-sm focus:border-amber-400 focus:outline-none transition-all"
                >
              </div>

              <div>
                <label class="text-amber-200 text-sm font-medium mb-1.5 block">{{ t('reviewFormContext') }}</label>
                <input
                  v-model="form.context"
                  type="text"
                  :placeholder="t('reviewFormContextPlaceholder')"
                  class="w-full bg-gray-800/60 border border-amber-500/20 rounded-xl px-4 py-2.5 text-amber-100 text-sm focus:border-amber-400 focus:outline-none transition-all"
                >
              </div>

              <div>
                <label class="text-amber-200 text-sm font-medium mb-1.5 block">{{ t('reviewFormRating') }}</label>
                <div class="flex gap-1">
                  <button
                    v-for="n in 5"
                    :key="n"
                    type="button"
                    class="p-0.5"
                    :aria-label="`${n} / 5`"
                    @click="form.rating = n"
                  >
                    <StarIcon class="w-7 h-7 transition-colors" :class="n <= form.rating ? 'text-amber-400' : 'text-gray-700'" />
                  </button>
                </div>
              </div>

              <div>
                <label class="text-amber-200 text-sm font-medium mb-1.5 block">{{ t('reviewFormMessage') }}</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  :placeholder="t('reviewFormMessagePlaceholder')"
                  class="w-full bg-gray-800/60 border border-amber-500/20 rounded-xl px-4 py-2.5 text-amber-100 text-sm focus:border-amber-400 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <p class="text-gray-500 text-xs leading-relaxed">{{ t('reviewFormNote') }}</p>

              <div class="flex gap-3 pt-1">
                <button
                  type="button"
                  class="flex-1 px-5 py-3 rounded-xl border border-amber-400/40 text-amber-300 font-semibold hover:bg-amber-400/10 transition-all"
                  @click="close"
                >
                  {{ t('modalClose') }}
                </button>
                <button
                  type="submit"
                  :disabled="!form.name || !form.message || form.rating === 0"
                  class="flex-1 px-5 py-3 rounded-xl bg-linear-to-r from-amber-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {{ t('reviewFormSubmit') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/16/solid';
import { reactive, ref } from 'vue';
import { t } from '../i18n.js';
import { openWhatsAppPreview } from '../composables/useWhatsApp.js';

const isOpen = ref(false);
const form = reactive({ name: '', context: '', rating: 0, message: '' });

function open() {
  form.name = '';
  form.context = '';
  form.rating = 0;
  form.message = '';
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

function submit() {
  const stars = '⭐'.repeat(form.rating);
  const text =
    `Nouvel avis pour le portfolio ${stars} (${form.rating}/5)\n\n` +
    `Nom : ${form.name}\n` +
    (form.context ? `Contexte : ${form.context}\n` : '') +
    `\nAvis : ${form.message}`;

  close();
  openWhatsAppPreview(text);
}

defineExpose({ open });
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