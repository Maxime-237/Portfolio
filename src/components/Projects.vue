<template>
  <section class="relative py-20 overflow-hidden" id="projects">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->
         <div class="text-center mb-16" data-aos="fade-up">

            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                {{ t('servicesPrefix') }} <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">
                    {{t('projectsTitle')}}
                </span>
            </h2>

            <p class="text-amber-200 text-lg max-w-2xl mx-auto">
               {{t('projectsIntro')}}
            </p>
         </div>

         <!-- Projets Grid -->

         <TransitionGroup tag="div" name="project-card" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div v-for="(projet, index) in visibleProjects"
                :key="projet.id"
                class="group relative bg-linear-to-br from-gray-800/50 to-slate-900/30 rounded-3xl overflow-hidden border backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 hover:transform hover:-translate-y-2 cursor-pointer"
                :class="projet.bordColor"
                data-aos="fade-up"
                :data-aos-delay="(index + 1) * 100"
                :style="index >= VISIBLE_COUNT ? { transitionDelay: (index - VISIBLE_COUNT) * 90 + 'ms' } : null"
                @click="selectedProject = projet">

                    <!-- Project Image -->
                     <div class="relative overflow-hidden">

                        <img :src="projet.image" :alt="projet.title"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        >
                            <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>   

                            <div class="absolute top-4 right-4">
                                <span class="px-3 py-1 text-white text-xs font-mono rounded-full font-semibold"
                                    :class="projet.badgColor"
                                >
                                    {{ projet.category }}
                                </span>
                            </div>

                            <div class="absolute inset-0 flex items-center justify-center bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-gray-950 font-semibold text-sm">
                                    <EyeIcon class="w-4 h-4" />
                                    {{ t('projectDetailsCta') }}
                                </span>
                            </div>
                     </div>

                     <!-- Projet Content -->
                      <div class="p-6">
                        <h3 class="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                            {{ projet.title }}
                        </h3>

                        <p class="text-amber-100 text-sm leading-relaxed mb-4">{{ truncate(projet.desc) }}</p>

                        <!-- Technologies -->
                         <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in projet.technolg"
                                :key="tech"
                                class="flex items-center gap-1.5 px-2.5 py-1 border border-amber-400/20 bg-amber-400/5 rounded text-xs font-mono text-amber-100">

                                <TechIcon :name="tech" />
                                {{ tech }}
                            </span>
                         </div>

                         <!-- Project Links -->
                          <div class="flex gap-3">
                            <a v-for="link in projet.links" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
                                :class="link.class"
                                class="flex items-center gap-2 transition-colors duration-300 text-sm font-medium"
                                @click.stop>

                                    <component :is="link.icon" class="w-4 h-4" />
                                    {{ link.name }}
                            </a>
                          </div>
                      </div>
            </div>
         </TransitionGroup>

         <!-- Animated "show more" indicator, only when there are more than VISIBLE_COUNT projects -->
         <div v-if="hasMore" class="flex justify-center mt-12">
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
                @click="collapseProjects"
            >
                <ChevronUpIcon class="w-8 h-8" />
                <span class="font-mono text-xs uppercase tracking-wider">{{ t('projectsShowLess') }}</span>
            </button>
         </div>

         <!-- CTA Section -->
          <div class="text-center mt-16" data-aos="fade-up">

            <div class="inline-flex flex-col sm:flex-row gap-4 items-center">

               <a 
                    href="https://github.com/Maxime-237"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-8 py-4 rounded-xl bg-linear-to-r from-amber-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 flex items-center"
                >
                        {{t('projectsCtaViewAll')}}
                        
                    <ArrowRightIcon class="w-5 h-5 ml-2" />
                </a>

                <button
                    type="button"
                    class="px-8 py-4 rounded-xl border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-400/10 transition-all duration-300 flex items-center"
                    @click="openWhatsAppPreview('Bonjour Maxime, je souhaiterais discuter d\'un projet avec vous.')"
                >
                    <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2" />
                    {{t('projectsCtaDiscuss')}}
                </button>
            </div>
          </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />

  </section>
</template>

<script setup>
import { ArrowRightIcon, ChatBubbleLeftRightIcon, ChevronDownIcon, ChevronUpIcon, ClockIcon, CodeBracketIcon, EyeIcon } from '@heroicons/vue/16/solid';
import { computed, ref } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';
import { openWhatsAppPreview } from '../composables/useWhatsApp.js';
import ProjectModal from './ProjectModal.vue';
import TechIcon from './TechIcon.vue';
import image1 from '../../public/artshoptof.PNG'
import image2 from '../../public/Patlearn_img.PNG'
import image3 from '../../public/gamestore.PNG'
import image4 from '../../public/valentine-project.png'
import image5 from '../../public/presenceToggle.PNG'
import belleza from '../../public/belleza.PNG'

const selectedProject = ref(null);

const VISIBLE_COUNT = 6;
const showAll = ref(false);

const projets = ref(computed(() => [
    {
        id: 1,
        title: "E-Commerce Platform  - ArtShop",
        desc: t('projectsdesc1'),
        image: image1,
        category: 'Back-end',
        bordColor: 'border-amber-500/20',
        badgColor: "bg-amber-500",
        technolg: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Laravel', 'PHP', 'PostgreSQL'],
        links: [
            {
                name: t('projectLive'),
                url: "https://art-shop-rag8.onrender.com/",
                icon: EyeIcon,
                class: "text-amber-400 hover:text-amber-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237/art-shop",
                icon: CodeBracketIcon,
                class: "text-teal-400 hover:text-teal-300"
            }
        ]
    },

    {
        id: 2,
        title: "E-Learning Platform  - PatLearn",
        desc: t('projectsdesc2'),
        image: image2,
        category: 'Back-end',
        bordColor: 'border-teal-500/20',
        badgColor: "bg-teal-500",
        technolg: ['Next.js', 'Laravel', 'PHP', 'Supabase'],
        links: [
            {
                name: t('projectLive'),
                url: "https://patlearn.vercel.app/",
                icon: EyeIcon,
                class: "text-amber-400 hover:text-amber-300"
            },
             {
                name: "Code",
                url: "https://github.com/fidelisdaleck/PATLEARN",
                icon: CodeBracketIcon,
                class: "text-teal-400 hover:text-teal-300"
            }
        ]
    },
    
    {
        id: 3,
        title: "E-Commerce Platform - GameStore",
        desc: t('projectsdesc3'),
        image: image3,
        category: 'Full-Stack',
        bordColor: 'border-amber-500/20',
        badgColor: "bg-amber-500",
        technolg: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        links: [
            {
                name: t('projectLive'),
                url: "https://gamestore-shop.byethost14.com/",
                icon: EyeIcon,
                class: "text-amber-400 hover:text-amber-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237",
                icon: CodeBracketIcon,
                class: "text-teal-400 hover:text-teal-300"
            }
        ]
    },
    {
        id: 4,
        title: "Belleza Catalog",
        desc: t('projectsdescBel'),
        image: belleza,
        category: 'Frontend',
        bordColor: 'border-teal-500/20',
        badgColor: "bg-teal-500",
        technolg: ['Vue js', 'tailwindcss'],
        links: [
            {
                name: t('projectLive'),
                url: "https://belleza-catalog.netlify.app/",
                icon: EyeIcon,
                class: "text-amber-400 hover:text-amber-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237/Belleza-Catalog",
                icon: CodeBracketIcon,
                class: "text-teal-400 hover:text-teal-300"
            }
        ]
    },
    {
        id: 5,
        title: "Valentine website",
        desc: t('projectsdesc4'),
        image: image4,
        category: 'Valentine',
        bordColor: 'border-amber-500/20',
        badgColor: "bg-amber-500",
        technolg: ['HTML', 'CSS', 'JavaScript'],
        links: [
            {
                name: t('projectLive'),
                url: "https://legendary-gumption-0e710b.netlify.app",
                icon: EyeIcon,
                class: "text-amber-400 hover:text-amber-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237/Valentine-test-website-",
                icon: CodeBracketIcon,
                class: "text-teal-400 hover:text-teal-300"
            }
        ]
    },
    {
        id: 6,
        title: "Presence - Toggle",
        desc: t('projectsdesc5'),
        image: image5,
        category: 'Dashboard',
        bordColor: 'border-teal-500/20',
        badgColor: "bg-teal-500",
        technolg: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        links: [
            {
                name: t('projectProgress'),
                url: "https://github.com/Maxime-237/Presence-Toggle",
                icon: ClockIcon,
                class: "text-gray-400 hover:text-teal-300"
            }
        ]
    },
]))

const visibleProjects = computed(() =>
  showAll.value ? projets.value : projets.value.slice(0, VISIBLE_COUNT)
);

const hasMore = computed(() => projets.value.length > VISIBLE_COUNT);

function truncate(text, maxLength = 90) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

function collapseProjects() {
  showAll.value = false;
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style scoped>
.project-card-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.project-card-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.project-card-leave-active {
  transition: opacity 0.25s ease;
  position: absolute;
}
.project-card-leave-to {
  opacity: 0;
}
.project-card-move {
  transition: transform 0.4s ease;
}
</style>