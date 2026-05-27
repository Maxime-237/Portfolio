<template>
  <section class="relative py-20 overflow-hidden" id="projects">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->
         <div class="text-center mb-16" data-aos="fade-up">

            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                {{ t('servicesPrefix') }} <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                    {{t('projectsTitle')}}
                </span>
            </h2>

            <p class="text-blue-200 text-lg max-w-2xl mx-auto">
               {{t('projectsIntro')}}
            </p>
         </div>

         <!-- Projets Grid -->

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div v-for="(projet, index) in projets"
                :key="(projet.id)"
                class="group relative bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-3xl overflow-hidden border backdrop-blur-sm hover:border-blue-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
                :class="projet.bordColor"
                data-aos="fade-up"
                :data-aos-delay="(index + 1) * 100">

                    <!-- Project Image -->
                     <div class="relative overflow-hidden">

                        <img :src="projet.image" :alt="projet.title"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        >
                            <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>   

                            <div class="absolute top-4 right-4">
                                <span class="px-3 py-1 text-white text text-xs rounded-full font-semibold"
                                    :class="projet.badgColor"
                                >
                                    {{ projet.category }}
                                </span>
                            </div>
                     </div>

                     <!-- Projet Content -->
                      <div class="p-6">
                        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {{ projet.title }}
                        </h3>

                        <p class="text-blue-100 text-sm leading-relaxed mb-4">{{ projet.desc }}</p>

                        <!-- Technologies -->
                         <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in projet.technolg"
                                :key="tech"
                                class="px-2 py-1 border rounded text-xs"
                                :class="tech.class">

                                {{ tech.name }}
                            </span>
                         </div>

                         <!-- Project Links -->
                          <div class="flex gap-3">
                            <a v-for="link in projet.links" :key="link.id" :href="link.url" target="blank"
                                :class="link.class"
                                class="flex items-center gap-2 transition-colors duration-300 text-sm font-medium">

                                    <component :is="link.icon" class="w-4 h-4" />
                                    {{ link.name }}
                            </a>
                          </div>
                      </div>
            </div>
         </div>

         <!-- CTA Section -->
          <div class="text-center mt-16" data-aos="fade-up">

            <div class="inline-flex flex-col sm:flex-row gap-4 items-center">

                <button class="px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center">
                        {{t('projectsCtaViewAll')}}
                        
                    <ArrowRightIcon class="w-5 h-5 ml-2" />
                </button>

                <button class="px-8 py-4 rounded-xl border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center">
                    <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2" />
                    {{t('projectsCtaDiscuss')}}
                </button>
            </div>
          </div>
    </div>

  </section>
</template>

<script setup>
import { ArrowRightIcon, ChatBubbleLeftRightIcon, ClockIcon, CodeBracketIcon, EyeIcon } from '@heroicons/vue/16/solid';
import { computed, ref } from 'vue';
import { setLang, t, i18nState } from '../i18n.js';
import image1 from '../../public/about3.PNG'
import image2 from '../../public/Patlearn_img.PNG'
import image3 from '../../public/gamestore.PNG'
import image4 from '../../public/bestie.PNG'
import image5 from '../../public/presenceToggle.PNG'



const projets = ref(computed(() => [
    {
        id: 1,
        title: "E-Commerce Platform  - ArtShop",
        desc: t('projectsdesc1'),
        image: image1,
        category: 'Back-end',
        bordColor: 'border-blue-500/20',
        badgColor: "bg-blue-500",
        technolg: [
            {
                name: "Html - Css - js, Blade",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            },
            {
                name: "Laravel-PHP",
                class: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-200'
            },
            {
                name: "PostgreSQL",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            }
        ],
        links: [
            {
                name: t('projectLive'),
                url: "https://art-shop-rag8.onrender.com/",
                icon: EyeIcon,
                class: "text-blue-400 hover:text-blue-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237/art-shop",
                icon: CodeBracketIcon,
                class: "text-cyan-400 hover:text-cyan-300"
            }
        ]
    },

    {
        id: 2,
        title: "E-Learning Platform  - PatLearn",
        desc: t('projectsdesc2'),
        image: image2,
        category: 'Back-end',
        bordColor: 'border-cyan-500/20',
        badgColor: "bg-cyan-500",
        technolg: [
            {
                name: "Next js",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            },
            {
                name: "Laravel-PHP",
                class: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-200'
            },
            {
                name: "Supabase",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            }
        ],
        links: [
            {
                name: t('projectLive'),
                url: "https://patlearn.vercel.app/",
                icon: EyeIcon,
                class: "text-blue-400 hover:text-blue-300"
            },
             {
                name: "Code",
                url: "https://github.com/fidelisdaleck/PATLEARN",
                icon: CodeBracketIcon,
                class: "text-cyan-400 hover:text-cyan-300"
            }
        ]
    },
    
    {
        id: 3,
        title: "E-Commerce Platform - GameStore",
        desc: t('projectsdesc3'),
        image: image3,
        category: 'Full-Stack',
        bordColor: 'border-blue-500/20',
        badgColor: "bg-blue-500",
        technolg: [
            {
                name: "Html - Css - js",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            },
            {
                name: "PHP",
                class: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-200'
            },
            {
                name: "Mysql",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            }
        ],
        links: [
            {
                name: t('projectLive'),
                url: "https://gamestore-shop.byethost14.com/",
                icon: EyeIcon,
                class: "text-blue-400 hover:text-blue-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237",
                icon: EyeIcon,
                class: "text-cyan-400 hover:text-cyan-300"
            }
        ]
    },
    {
        id: 4,
        title: "Valentine website",
        desc: t('projectsdesc4'),
        image: image4,
        category: 'Valentine',
        bordColor: 'border-cyan-500/20',
        badgColor: "bg-cyan-500",
        technolg: [
            {
                name: "Html - Css - js",
                class: 'bg-blue-500/20 border-blue-400/30 text-blue-200'
            }
        ],
        links: [
            {
                name: t('projectLive'),
                url: "https://legendary-gumption-0e710b.netlify.app",
                icon: EyeIcon,
                class: "text-blue-400 hover:text-blue-300"
            },
             {
                name: "Code",
                url: "https://github.com/Maxime-237/Valentine-test-website-",
                icon: CodeBracketIcon,
                class: "text-cyan-400 hover:text-cyan-300"
            }
        ]
    },
    {
        id: 5,
        title: "Presence - Toggle",
        desc: t('projectsdesc5'),
        image: image5,
        category: 'Dashboard',
        bordColor: 'border-blue-500/20',
        badgColor: "bg-blue-500",
        technolg: [
            {
                name: "Html - Css - js",
                class: 'bg-gray-500/20 border-gray-400/30 text-gray-200'
            },
            {
                name: "PHP",
                class: 'bg-slate-500/20 border-slate-400/30 text-slate-200'
            },
            {
                name: "Mysql",
                class: 'bg-gray-500/20 border-gray-400/30 text-gray-200'
            }
        ],
        links: [
            {
                name: t('projectProgress'),
                url: "https://github.com/Maxime-237/Presence-Toggle",
                icon: ClockIcon,
                class: "text-gray-400 hover:text-cyan-300"
            }
        ]
    }
]))

</script>
