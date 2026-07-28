<template>
  <section class="relative py-20 overflow-hidden" id="testimonials">

    <div class="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
      <div class="text-center mb-12" data-aos="fade-up">

        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{ t('testimonialsTitle') }}</span>
        </h2>

        <p class="text-amber-200 text-lg">
          {{ t('testimonialsDesc') }}
        </p>
      </div>

      <!-- Cas 1 : un seul témoignage -> on le met en avant en grand, plutôt qu'une grille avec des cases vides -->
      <div
        v-if="testimonials.length === 1"
        class="relative bg-linear-to-br from-gray-800/50 to-slate-900/30 rounded-3xl p-8 md:p-10 border border-amber-500/20 backdrop-blur-sm hover:border-amber-400 transition-all duration-300 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <TestimonialCard :testimonial="testimonials[0]" featured />
      </div>

      <!-- Cas 2 : plusieurs témoignages -> grille, avec "voir plus" au-delà de 6 -->
      <template v-else>
        <TransitionGroup tag="div" name="testimonial-card" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in visibleTestimonials"
            :key="item.name"
            class="bg-linear-to-br from-gray-800/50 to-slate-900/30 rounded-2xl p-6 border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="(index % 6 + 1) * 100"
            :style="index >= VISIBLE_COUNT ? { transitionDelay: (index - VISIBLE_COUNT) * 90 + 'ms' } : null"
          >
            <TestimonialCard :testimonial="item" />
          </div>
        </TransitionGroup>

        <!-- Indicateur animé "voir plus", uniquement si plus de VISIBLE_COUNT témoignages -->
        <div v-if="hasMore" class="flex justify-center mt-10">
          <button
            v-if="!showAll"
            type="button"
            class="group flex flex-col items-center gap-1 text-amber-300 hover:text-amber-400 transition-colors"
            @click="showAll = true"
          >
            <span class="font-mono text-xs uppercase tracking-wider">{{ t('projectsShowMore') }}</span>
            <ChevronDownIcon class="w-8 h-8 animate-bounce" />
          </button>

          <button
            v-else
            type="button"
            class="group flex flex-col items-center gap-1 text-amber-300 hover:text-amber-400 transition-colors"
            @click="collapseTestimonials"
          >
            <ChevronUpIcon class="w-8 h-8" />
            <span class="font-mono text-xs uppercase tracking-wider">{{ t('projectsShowLess') }}</span>
          </button>
        </div>
      </template>

      <!-- Signal de confiance honnête, toujours visible -->
      <div
        class="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-amber-500/20 px-6 py-5 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span class="relative flex h-2.5 w-2.5 shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <p class="text-gray-400 text-sm font-mono">{{ t('heroEyebrow') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/16/solid';
import { computed, ref } from 'vue';
import { t } from '../i18n.js';
import TestimonialCard from './TestimonialCard.vue';
import person2 from '../../public/avatar-client-1.jpg';

// ─────────────────────────────────────────────────────────────
// 👉 POUR AJOUTER UN NOUVEAU CLIENT : ajoute simplement un objet
// ici. Pas besoin de toucher au reste du fichier ni à i18n.js.
//
//   - avatar : importe une image (voir "person2" ci-dessus) ou
//              laisse `null` -> une pastille avec les initiales
//              du client est générée automatiquement.
//   - rating : optionnel, 5 par défaut.
// ─────────────────────────────────────────────────────────────
const testimonials = ref([
  {
    name: "Adianice Momo",
    position: "Cliente",
    avatar: person2,
    text: "Maxime a été très professionnel et réactif tout au long du projet. Je recommande vivement ses services !",
    rating: 5,
  },

  // Exemple pour un futur client (décommente et complète) :
  // {
  //   name: "Nom du client",
  //   position: "Poste / Entreprise",
  //   avatar: null, // ou un import d'image
  //   text: "Le témoignage du client ici.",
  //   rating: 5,
  // },
]);

const VISIBLE_COUNT = 6;
const showAll = ref(false);

const visibleTestimonials = computed(() =>
  showAll.value ? testimonials.value : testimonials.value.slice(0, VISIBLE_COUNT)
);

const hasMore = computed(() => testimonials.value.length > VISIBLE_COUNT);

function collapseTestimonials() {
  showAll.value = false;
  document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.testimonial-card-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.testimonial-card-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.testimonial-card-leave-active {
  transition: opacity 0.25s ease;
  position: absolute;
}
.testimonial-card-leave-to {
  opacity: 0;
}
.testimonial-card-move {
  transition: transform 0.4s ease;
}
</style>