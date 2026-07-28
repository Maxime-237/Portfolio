<template>
  <footer class="relative bg-gray-900/80 border-t border-amber-500/20">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

            <!-- Brand -->
         <div class="md:col-span-2">
            <div class="text-2xl font-bold bg-linear-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent mb-4">

                Maxime.dev
            </div>
            <p class="text-amber-200 text-sm leading-relaxed max-w-md">
                {{ t('footerDesc') }}
            </p>

<div class="flex gap-4 mt-6">
              <!-- WhatsApp/GitHub/Telegram/Snapchat/Instagram -->
              <a
                v-for="s in socialLinks"
                :key="s.name"
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-amber-500/20 border border-amber-400/30 rounded-lg text-amber-400 hover:bg-amber-500/30 transition-all"
                :aria-label="s.label"
              >
                <i :class="s.iconClass" class="text-xl" aria-hidden="true"></i>
              </a>
            </div>
         </div>

         <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">{{ t('footerQuickLinks') }}</h3>
            <ul class="space-y-2">

                <li v-for="link in quickLinks" :key="link.name">
                    <a :href="link.href" class="text-amber-200 hover:text-amber-400 text-sm transition-colors">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
          </div>

          <!-- Services -->
           <div>

            <h3 class="text-white font-semibold mb-4">{{t('footerServices')}}</h3>
            <ul>
                <li v-for="service in services" :key="service">
                    <a href="#" class="text-amber-200 hover:text-amber-400 text-sm transition-colors">{{ service }}</a>
                </li>
            </ul>
           </div>
        </div>

        <!-- Bottom Bar -->
         <div class="border-t border-amber-500/20 mt-8 p-8 flex flex-col md:flex-row justify-between items-center">

            <p class="text-amber-300 text-sm">
                {{ t('footerCopyright', { year: new Date().getFullYear() }) }}
            </p>

            <div class="flex gap-6 mt-4 md:mt-0">
                <a href="#" class="text-amber-400 text-sm transition-colors">
                    {{ t('footerPrivacyPolicy') }}
                </a>
                <a href="#" class="text-amber-400 text-sm transition-colors">
                    {{ t('footerTermsOfService') }}
                </a>
            </div>
         </div>
    </div>

  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';

// Sociales (mets ici les URLs exactes de tes comptes)
const WHATSAPP_NUMBER = '237674330299';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:enfanposemaxime@gmail.com',
    label: 'Email',
    iconClass: 'fa-solid fa-envelope',
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: 'WhatsApp',
    iconClass: 'fa-brands fa-whatsapp',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Maxime-237',
    label: 'GitHub',
    iconClass: 'fa-brands fa-github',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/muzikh24',
    label: 'Telegram',
    iconClass: 'fa-brands fa-telegram',
  },
  {
    name: 'Snapchat',
    href: 'https://www.snapchat.com/add/buzz24105',
    label: 'Snapchat',
    iconClass: 'fa-brands fa-snapchat',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maxime7780',
    label: 'Instagram',
    iconClass: 'fa-brands fa-instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxime-djongoue-83b751394',
    label: 'LinkedIn',
    iconClass: 'fa-brands fa-linkedin',
  }
];

const quickLinks = computed(() => [
  { name: t('homeFooter'), href: '#home' },
  { name: t('servicesTitle'), href: '#services' },
  { name: t('aboutPrefix','aboutTitle'), href: '#about' },
  { name: t('skillsSectionTitle'), href: '#skills' },
  { name: t('projectsTitle'), href: '#projects' },
  { name: t('contactTitle'), href: '#contact' },
  { name: t('testimonialsTitle'), href: '#testimonials' },  
]);

const services = computed(() => [
  t('serviceName1'),
  t('serviceName2'),
  t('serviceName3'),
  t('serviceName4'),
  t('serviceName5'),
  t('serviceName6'),
]);
</script>

