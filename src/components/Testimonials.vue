<template>
  <section class="relative py-20 overflow-hidden" id="testimonials">

    <div class="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
      <div class="text-center mb-10" data-aos="fade-up">

        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{ t('testimonialsTitle') }}</span>
        </h2>

        <p class="text-amber-200 text-lg">
          {{ t('testimonialsDesc') }}
        </p>
      </div>

      <!-- Carte résumé des avis + bouton pour en laisser un -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-amber-500/20 bg-gray-900/40 backdrop-blur-sm px-6 py-5 mb-10"
        data-aos="fade-up"
      >
        <div class="flex items-center gap-3">
          <div class="flex gap-0.5">
            <StarIcon
              v-for="n in 5"
              :key="n"
              class="w-5 h-5"
              :class="n <= Math.round(averageRating) ? 'text-amber-400' : 'text-gray-700'"
            />
          </div>
          <span class="text-white font-display font-bold">{{ averageRating.toFixed(1) }}</span>
          <span class="text-gray-400 text-sm">· {{ testimonials.length }} {{ t('testimonialsReviewsCount') }}</span>
        </div>

        <button
          type="button"
          class="px-5 py-2.5 rounded-xl border border-amber-400/40 text-amber-300 font-semibold text-sm hover:bg-amber-400/10 transition-all shrink-0"
          @click="reviewFormRef?.open()"
        >
          {{ t('testimonialsGiveReview') }}
        </button>
      </div>

      <p v-if="testimonials.length === 0" class="text-center text-gray-500 text-sm mb-10">
        {{ t('testimonialsNoReviews') }}
      </p>

      <!-- Cas 1 : un seul témoignage -> on le met en avant en grand, plutôt qu'une grille avec des cases vides -->
      <div
        v-else-if="testimonials.length === 1"
        class="relative bg-linear-to-br from-gray-800/50 to-slate-900/30 rounded-3xl p-8 md:p-10 border border-amber-500/20 backdrop-blur-sm hover:border-amber-400 transition-all duration-300 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <TestimonialCard :testimonial="testimonials[0]" featured />
      </div>

      <!-- Cas 2 : plusieurs témoignages -> grille paginée -->
      <template v-else>
        <Transition name="fade-slide" mode="out-in">
          <div :key="currentPage" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(item, index) in pageItems"
              :key="item.name"
              class="bg-linear-to-br from-gray-800/50 to-slate-900/30 rounded-2xl p-6 border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300"
              data-aos="fade-up"
              :data-aos-delay="(index % 6 + 1) * 100"
            >
              <TestimonialCard :testimonial="item" />
            </div>
          </div>
        </Transition>

        <!-- Pagination par points -->
        <div v-if="pageCount > 1" class="flex justify-center items-center gap-2 mt-10">
          <button
            v-for="page in pageCount"
            :key="page"
            type="button"
            class="rounded-full transition-all duration-300"
            :class="page - 1 === currentPage
              ? 'w-6 h-2.5 bg-amber-400'
              : 'w-2.5 h-2.5 bg-gray-700 hover:bg-amber-400/50'"
            :aria-label="`Page ${page}`"
            :aria-current="page - 1 === currentPage ? 'true' : 'false'"
            @click="currentPage = page - 1"
          ></button>
        </div>
      </template>

      <!-- Signal de confiance honnête, toujours visible -->
      <div
        class="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-amber-500/20 px-6 py-5 text-center"
        data-aos="fade-up"
      >
        <span class="relative flex h-2.5 w-2.5 shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <p class="text-gray-400 text-sm font-mono">{{ t('heroEyebrow') }}</p>
      </div>
    </div>

    <ReviewFormModal ref="reviewFormRef" />
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/16/solid';
import { computed, ref, watch } from 'vue';
import { t } from '../i18n.js';
import TestimonialCard from './TestimonialCard.vue';
import ReviewFormModal from './ReviewFormModal.vue';
import person2 from '../../public/avatar-client-1.jpg';

const testimonials = ref([
  {
    name: "Adianice Momo",
    position: "Cliente",
    avatar: person2,
    text: "Maxime a été très professionnel et réactif tout au long du projet. Je recommande vivement ses services !",
    rating: 5,
  },

  
]);

const averageRating = computed(() => {
  if (testimonials.value.length === 0) return 0;
  const sum = testimonials.value.reduce((acc, tItem) => acc + (tItem.rating || 5), 0);
  return sum / testimonials.value.length;
});

const PAGE_SIZE = 6;
const currentPage = ref(0);

const pageCount = computed(() => Math.ceil(testimonials.value.length / PAGE_SIZE));

const pageItems = computed(() => {
  const start = currentPage.value * PAGE_SIZE;
  return testimonials.value.slice(start, start + PAGE_SIZE);
});

watch(pageCount, (count) => {
  if (currentPage.value > count - 1) currentPage.value = 0;
});

const reviewFormRef = ref(null);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
</style>