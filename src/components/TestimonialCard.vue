<template>
  <div>
    <span class="absolute top-6 right-8 text-6xl font-display text-amber-400/10 select-none leading-none" v-if="featured">"</span>

    <div class="flex gap-1 mb-4">
      <StarIcon v-for="n in (testimonial.rating || 5)" :key="n" class="w-4 h-4 text-amber-400" />
    </div>

    <p :class="featured ? 'text-lg mb-8' : 'text-sm mb-6'" class="text-amber-100 leading-relaxed relative z-10">
      {{ testimonial.text }}
    </p>

    <div class="flex items-center gap-4">
      <!-- Photo si fournie, sinon pastille avec initiales générée automatiquement -->
      <img
        v-if="testimonial.avatar"
        :src="testimonial.avatar"
        :alt="testimonial.name"
        :class="featured ? 'w-14 h-14' : 'w-11 h-11'"
        class="rounded-full object-cover border-2 border-amber-400/50"
      >
      <div
        v-else
        :class="featured ? 'w-14 h-14 text-lg' : 'w-11 h-11 text-sm'"
        class="rounded-full flex items-center justify-center font-display font-bold text-gray-950 bg-linear-to-br from-amber-400 to-teal-400 border-2 border-amber-400/50"
      >
        {{ initials }}
      </div>

      <div>
        <p class="text-white font-semibold" :class="featured ? '' : 'text-sm'">{{ testimonial.name }}</p>
        <p class="text-amber-300" :class="featured ? 'text-sm' : 'text-xs'">{{ testimonial.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { StarIcon } from '@heroicons/vue/16/solid';

const props = defineProps({
  testimonial: { type: Object, required: true },
  featured: { type: Boolean, default: false },
});

const initials = computed(() =>
  props.testimonial.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
);
</script>