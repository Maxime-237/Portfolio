<template>
  <section
    class="relative w-full overflow-hidden min-h-screen flex items-center bg-code-grid"
    id="home"
    @mousemove="onMouseMove"
  >
    <!-- Signature spotlight that follows the cursor -->
    <div
      class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
      :style="spotlightStyle"
    ></div>

    <div class="w-full px-5 sm:px-5 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">

      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

        <div class="flex flex-col md:mt-0 mt-20 justify-center">

          <!-- Terminal-style eyebrow badge -->
          <div
            class="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 mb-6 font-mono text-xs text-amber-300"
            data-aos="fade-right"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            {{ t('heroEyebrow') }}
          </div>

          <div class="text-white lg:text-left"
              data-aos="fade-right"
          >
            <h1 class="text-white font-bold text-4xl md:text-5xl">
              Hi, I'm <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">Maxime</span>👋
            </h1>

            <p class="text-amber-200 font-mono font-medium text-lg md:text-xl mt-4 flex items-center"
                data-aos="fade-right"
                data-aos-delay="100"
            >
              <span class="text-teal-400 mr-2">&gt;</span>{{ typedRole }}<span class="ml-0.5 inline-block w-[2px] h-5 bg-amber-300 animate-pulse"></span>
          </p>
        </div>

        <p class="text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-full text-lg leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="100">
          {{ t('heroDesc') }}
        </p>


        <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="300">
          
          <button
            class="px-8 md:px-10 py-4 rounded-xl relative group w-full sm:w-max flex justify-center overflow-hidden bg-linear-to-r from-amber-600 hover:to-teal-500 transition-all duration-300"
            type="button"
            @click="openWhatsAppPreview('Bonjour Maxime, je suis intéressé(e) par vos services.')"
          >
              <span class="relative flex items-center justify-center text-white font-semibold text-lg">
                {{ t('heroContactMe') }}
                <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button class=" border-2 border-amber-400 px-8 md:px-10 py-4 rounded-xl relative group w-full sm:w-max flex justify-center hover:bg-amber-400/10 transition-all duration-300"
            >
              <a
                :href="cvUrl"
                download
                class="flex items-center justify-center relative"
              >
                  <ArrowDownTrayIcon class="w-5 h-5 text-amber-400 group-hover:translate-y-1 transition-transform" />
                  <span class="text-amber-400 font-semibold text-lg">
                    {{ t('heroDownloadCv') }}
                  </span>
              </a>
          </button>
          </div>

          <div class="flex items-center justify-center lg:justify-start gap-8 pt-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
            <div class="text-center">
            
            <div class="text-2xl font-bold font-display text-amber-400">5+</div>
            <div class="text-amber-200 text-sm">{{ t('heroStatsProjects') }}</div>

          </div>

          <div class="text-center">
            
            <div class="text-2xl font-bold font-display text-amber-400">2+</div>
            <div class="text-amber-200 text-sm">{{ t('heroStatsYears') }}</div>
            
          </div>

          <div class="text-center">
            
            <div class="text-2xl font-bold font-display text-amber-400">10+</div>
            <div class="text-amber-200 text-sm">{{ t('heroStatsTech') }}</div>
            
          </div>
            </div>
        </div>

        <!-- Image -->
         <div class="lg:h-full flex justify-center lg:justify-end">

          <div class="relative w-full max-w-md lg:max-w-lg">

            <div class="relative z-10 bg-linear-to-r from-amber-600 to-teal-600 shadow-2xl rounded-[50%_30%_30%_60%/60%_30%_70%_30%] p-4 backdrop-blur-sm border border-amber-500/30 -translate-y-6"
                data-aos="zoom-in" data-aos-delay="500"
              >

                <div class="rounded-xl overflow-hidden">
                  <img src="../../public/prestige.png" 
                      alt="Maxime - Full Stack Developer"
                      loading="lazy"
                      class="w-125 h-130 object-contain -translate-y-8">
                </div>
              </div>

              <div class="absolute -top-2 -right-4 w-10 h-10 bg-amber-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
          </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/vue/16/solid';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';
import { openWhatsAppPreview } from '../composables/useWhatsApp.js';

const cvUrl = '/maxime_Cv.pdf';

// --- Terminal-style rotating role typing effect ---
const typedRole = ref('');
let roles = [];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let timeoutId = null;

function tick() {
  const current = roles[roleIndex] ?? '';

  if (!deleting) {
    charIndex++;
    typedRole.value = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      timeoutId = setTimeout(tick, 1600);
      return;
    }
  } else {
    charIndex--;
    typedRole.value = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  timeoutId = setTimeout(tick, deleting ? 35 : 65);
}

function restartTyping() {
  clearTimeout(timeoutId);
  roles = t('heroRoles');
  roleIndex = 0;
  charIndex = 0;
  deleting = false;
  typedRole.value = '';
  tick();
}

watch(() => i18nState.lang, restartTyping);

onMounted(restartTyping);
onUnmounted(() => clearTimeout(timeoutId));

// --- Cursor spotlight ---
const spotlightStyle = ref({ background: 'transparent' });

function onMouseMove(e) {
  const x = e.clientX;
  const y = e.clientY;
  spotlightStyle.value = {
    background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(245, 158, 11, 0.08), transparent 40%)`,
  };
}
</script>
