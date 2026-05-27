<template>
  <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
    <div class="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Dev <span class="font-black">Portfolio</span>
    </div>

    <div class="md:hidden z-30">

        <button type="button"
                class="block focus:outline-none p-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300"
                @click="isMenuOpen = !isMenuOpen">

                <div class="relative w-6 h-6">
                    <span :class="[
                        'absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300',
                        isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                    ]"></span>

                    <span :class="[
                        'absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300',
                        isMenuOpen ? 'opacity-0' : 'top-3 opacity-100'
                    ]"></span>

                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                    ]"></span>
                </div>
        </button>
    </div>

    <nav :class="[
    `fixed inset-0 z-0 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row`,
    isMenuOpen ? 'block' : 'hidden'
  ]">

    <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in Menu" :key="item.name" class="group relative">
            <a :href="item.href" 
            class="relative block text-blue-100 hover:text-blue-400 transition-all duration-300 text-xl md:text-base font-medium group"
            @click="scrollTosection(item.href)">
               {{ item.name }}
               <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
        </li>
    </ul>

    <div class="mt-8 md:mt-0 md:ml-8">
        <div class="relative">
          <button
            type="button"
            class="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            @click="isLangOpen = !isLangOpen"
            aria-haspopup="listbox"
            :aria-expanded="isLangOpen"
          >
<span>{{ t('navbarChangeLanguage') }}</span>
            <span class="text-base">{{ currentLangLabel }}</span>
          </button>

          <div
            v-if="isLangOpen"
            class="absolute right-0 mt-3 w-56 bg-gray-900/90 border border-blue-400/30 rounded-xl shadow-2xl backdrop-blur p-2 z-50"
            role="listbox"
          >
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-400/10 transition-all"
              :class="lang.code === currentLang ? 'bg-blue-400/15 border border-blue-400/20' : 'border border-transparent'"
              @click="setLanguage(lang.code); isLangOpen = false"
            >
              <span class="text-xl">{{ lang.flag }}</span>
              <span class="text-blue-100 font-medium">{{ lang.label }}</span>
            </button>
          </div>
        </div>

    </div>
  </nav>
  </header>
  
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';



const Menu = computed(() => [
  { name: t('servicesTitle'), href: '#services' },
  { name: t('aboutLink'), href: '#about' },
  { name: t('skillLink'), href: '#skills' },
  { name: t('projectsTitle'), href: '#projects' },
  { name: t('servicesGetInTouch'), href: '#contact' },
  { name: t('testimonialsTitle'), href: '#testimonials' },  
]);

const isMenuOpen = ref(false);
const isLangOpen = ref(false);

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

const currentLang = ref(i18nState.lang);
const currentLangLabel = computed(() => languages.find((l) => l.code === i18nState.lang)?.label ?? '');

// keep local selection in sync with global state
watch(
  i18nState,
  () => {
    currentLang.value = i18nState.lang;
  },
  { immediate: true }
);

function setLanguage(code) {
  currentLang.value = code;
  setLang(code);
  // document.documentElement.lang = code;
}

const scrollTosection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollInView({ behavior: 'smooth' });
    }
}
</script>

