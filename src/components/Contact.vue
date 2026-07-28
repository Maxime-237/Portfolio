<template>
  <section class="relative py-20 overflow-hidden bg-code-grid" id="contact">
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{t('contactTitle')}} <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{t('contactSecondTitle')}}</span>
        </h2>

        <p class="text-amber-200 text-lg">
          {{ t('contactIntro') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div data-aos="fade-right">
          <h3 class="text-2xl font-bold text-white mb-6">{{ t('contactInfoTitle') }}</h3>

          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <EnvelopeIcon class="w-6 h-6 text-amber-400" />
              <div>
                <p class="text-white font-semibold">{{ t('contactEmailLabel')}}</p>
                <p class="text-amber-200">enfanposemaxime@gmail.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <PhoneIcon class="w-6 h-6 text-amber-400" />
              <div>
                <p class="text-white font-semibold">{{ t('contactPhoneLabel') }}</p>
                <p class="text-amber-200">+237 674330299</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <MapPinIcon class="w-6 h-6 text-amber-400" />
              <div>
                <p class="text-white font-semibold">{{t('contactLocationLabel')}}</p>
                <p class="text-amber-200">Douala - Bonamoussadi</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-8">
            <h4 class="text-lg font-bold text-white mb-4">{{ t('contactFollowMe') }}</h4>

            <div class="flex gap-4">
              <a href="https://wa.me/237674330299" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="p-3 bg-amber-500/20 border border-amber-400/30 rounded-xl text-amber-400 hover:bg-amber-500/30 transition-all">
                <ChatBubbleLeftRightIcon class="w-5 h-5" />
              </a>

              <a href="https://github.com/Maxime-237" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="p-3 bg-teal-500/20 border border-teal-400/30 rounded-xl text-teal-400 hover:bg-teal-500/30 transition-all">
                <CodeBracketIcon class="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/in/maxime-djongoue-83b751394" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="p-3 bg-pink-500/20 border border-pink-400/30 rounded-xl text-pink-400 hover:bg-pink-500/30 transition-all">
                <ShareIcon class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div data-aos="fade-left">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-white text-sm font-medium mb-2 block">{{ t('contactFormName') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full bg-gray-800/50 border border-amber-500/30 rounded-xl px-4 py-3 text-white placeholder-amber-300 focus:border-amber-300 focus:outline-none transition-all"
                  :placeholder="t('contactFormPlaceholderName')"
                  required
                />
              </div>

              <div>
                <label class="text-white text-sm font-medium mb-2 block">{{t('contactFormEmail')}}</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full bg-gray-800/50 border border-amber-500/30 rounded-xl px-4 py-3 text-white placeholder-amber-300 focus:border-amber-300 focus:outline-none transition-all"
                  :placeholder="t('contactFormPlaceholderEmail')"
                  required
                />
              </div>
            </div>

            <div>
              <label class="text-white text-sm font-medium mb-2 block">{{ t('contactFormSubject') }}</label>
              <input
                v-model="form.subject"
                type="text"
                class="w-full bg-gray-800/50 border border-amber-500/30 rounded-xl px-4 py-3 text-white placeholder-amber-300 focus:border-amber-300 focus:outline-none transition-all"
                :placeholder="t('contactFormPlaceholderSubject')"
                required
              />
            </div>

            <div>
              <label class="text-white text-sm font-medium mb-2 block">{{t('contactFormMessage')}}</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full bg-gray-800/50 border border-amber-500/30 rounded-xl px-4 py-3 text-white placeholder-amber-300 focus:border-amber-300 focus:outline-none transition-all"
                :placeholder="t('contactFormPlaceholderMessage')"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-linear-to-r from-amber-500 to-teal-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              {{t('contactFormSend')}}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, CodeBracketIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, ShareIcon } from '@heroicons/vue/16/solid';
import { reactive, ref } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';
import { openWhatsAppPreview } from '../composables/useWhatsApp.js';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

function buildWhatsAppText() {
  return (
    `Nouveau message depuis le site\n\n` +
    `Nom: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Sujet: ${form.subject}\n\n` +
    `Message: ${form.message}`
  );
}

function handleSubmit() {
  // Opens the shared preview modal so the message can be reviewed/edited before sending on WhatsApp
  openWhatsAppPreview(buildWhatsAppText());

  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
}
</script>

