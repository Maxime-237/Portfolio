<template>
  <Transition name="fade">
    <button v-if="isVisible" @click="scrollToTop"
      class="fixed bottom-24 right-4 md:bottom-4 z-30 bg-linear-to-r from-amber-600 to-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-amber-600"
      >
      ⇪
      </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const isVisible = ref(false);
const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>