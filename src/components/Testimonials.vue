<template>
  <section class="relative py-20 overflow-hidden" id="testimonials">

    <div class="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">

        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
          Client <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">{{ t('testimonialsTitle') }}</span>
        </h2>

        <p class="text-blue-200 text-lg">
          {{ t('testimonialsDesc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(testimonial, index) in testimonials" :key="testimonial.id"
          class="bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400 transition-all duration-300"
          :data-aos="'fade-up'" :data-aos-delay="index * 100">

          <!-- Rating -->
           <div class="flex gap-1 mb-4">

            <StarIcon v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400"  />
           </div>

           <!-- testimonial Text -->
            <p class="text-blue-100 text-sm leading-relaxed mb-6">{{ testimonial.text }}</p>

            <!-- Client Info -->
             <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/50">

                <img :src="testimonial.avatar" alt="testimonial.name" class="w-full h-full object-cover">
              </div>

              <div>
                <p class="text-white font-semibold">{{ testimonial.name }}</p>
                <p class="text-blue-300 text-sm">{{ testimonial.position }}</p>
              </div>
             </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import person1 from '../../public/IMG_20230813_204607.png';
import person2 from '../../public/trop zolie.jpeg';
import person3 from '../../public/fd GON hxh.png';
import { StarIcon } from '@heroicons/vue/16/solid';
import { setLang, t, i18nState } from '../i18n.js';
import { computed } from 'vue';


const testimonials = computed(() => [
 
  {
    id: 1,
    text: t('testimonialstText'),
    name: "Adianice Momo",
    position: t('testimonialsPosition'),
    avatar: person2,
  },
  //  {
  //   id: 2,
  //   text: "Maxime a livré un travail de qualité : code propre, intégration fluide et rendu parfaitement conforme à la demande.",
  //   name: "John Doe",
  //   position: "CES, TechCorp",
  //   avatar: person1,
  // },
  // {
  //   id: 3,
  //   text: "De l’idée jusqu’à la mise en ligne : rapide, rigoureux et orienté résultats. Je recommande Maxime.",
  //   name: "Will Smith",
  //   position: "Startup Founder",
  //   avatar: person3,
  // },
]);

</script>

