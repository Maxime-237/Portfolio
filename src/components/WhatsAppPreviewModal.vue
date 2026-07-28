<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="whatsappState.visible"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div class="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" @click="closeWhatsAppPreview"></div>

        <div class="relative w-full max-w-lg rounded-2xl border border-amber-500/20 bg-gray-900 shadow-2xl overflow-hidden">
          <!-- Terminal-style window chrome (signature detail) -->
          <div class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div class="window-chrome">
              <span class="window-dot bg-red-500/70"></span>
              <span class="window-dot bg-amber-400/70"></span>
              <span class="window-dot bg-emerald-500/70"></span>
            </div>
            <span class="font-mono text-xs text-gray-500">whatsapp-preview.txt</span>
          </div>

          <div class="p-6">
            <h3 class="text-white font-display font-bold text-xl mb-1">{{ t('whatsappPreviewTitle') }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ t('whatsappPreviewDesc') }}</p>

            <textarea
              v-model="whatsappState.message"
              rows="5"
              class="w-full bg-gray-800/60 border border-amber-500/20 rounded-xl px-4 py-3 text-amber-100 font-mono text-sm focus:border-amber-400 focus:outline-none transition-all resize-none"
            ></textarea>

            <div class="flex gap-3 mt-6">
              <button
                type="button"
                class="flex-1 px-5 py-3 rounded-xl border border-amber-400/40 text-amber-300 font-semibold hover:bg-amber-400/10 transition-all"
                @click="closeWhatsAppPreview"
              >
                {{ t('modalClose') }}
              </button>
              <button
                type="button"
                class="flex-1 px-5 py-3 rounded-xl bg-linear-to-r from-amber-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                @click="sendWhatsApp"
              >
                <ChatBubbleLeftRightIcon class="w-5 h-5" />
                {{ t('whatsappPreviewSend') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/16/solid';
import { t } from '../i18n.js';
import { whatsappState, closeWhatsAppPreview, sendWhatsApp } from '../composables/useWhatsApp.js';
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
