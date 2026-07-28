<template>
  <section class="relative py-20 overflow-hidden min-h-screen flex items-center" id="about">

    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">

        <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div class="lg:h-full flex justify-center lg:justify-start order-2 lg:order-1">

                <div class="relative w-full max-w-md">
                    <div data-aos="zoom-in" class="relative bg-linear-to-br from-gray-800/60 to-slate-900/40 rounded-3xl p-6 backdrop-blur-sm border border-amber-500/30 shadow-2xl">

                        <div class="grid grid-cols-2 gap-4">
                            <div
                                v-for="(image, index) in aboutImage"
                                :key="image.id"
                                class="relative group"
                                :data-aos="image.animation"
                                :data-aos-delay="image.delay"
                            >

                                <div class="rounded-2xl p-2 border shadow-lg"
                                    :class="image.gradient"
                                >

                                    <img :src="image.src" :alt="image.alt"
                                        class="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                                    >
                                </div>

                                <div class="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full font-semibold"
                                    :class="image.badgeColor"
                                >
                                    {{ image.badge }}
                                </div>
                            </div>
                        </div>

                        <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-linear-to-r from-amber-500 to-teal-500 rounded-2xl px-6 py-3 border border-amber-400/40 shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay="600">
                            <div class="text-center text-white text-xl font-bold">{{ t('aboutYearsExperience') }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center order-1 lg:order-2">

                <div class="text-center lg:text-left"
                    data-aos="fade-left">

                    <h2 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        {{ t('aboutPrefix') }} <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{ t('aboutTitle') }}</span>
                    </h2>
                    <p class="text-amber-200 font-medium text-lg md:text-xl mt-4" data-aos="fade-left" data-aos-delay="100">
                        {{ t('aboutSubtitle') }}
                    </p>
                    
                </div>

                <p class="text-gray-300 pt-4 text-center lg:text-left text-lg leading-relaxed"
                    data-aos="fade-left"
                    data-aos-delay="200">
                    {{ t('aboutParagraph') }}
                </p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8" data-aos="fade-up" data-aos-delay="300">

                    <div v-for="skill in skills"
                            :key="skill.id"
                        class="flex flex-col"
                    >
                        <div class="flex items-center gap-3 mb-3">

                            <component 
                                :is="skill.icon"
                                class="w-6 h-6"
                                :class="skill.iconColor"
                            ></component>

                            <h3 class="text-lg font-bold text-white">{{ skill.title }}</h3>
                            
                        </div>

                        <p class="text-amber-100 text-sm">{{ skill.desc }}</p>
                    </div>
                </div>

                <div class="flex gap-4 pt-8 flex-col sm:flex-row"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <button
                      v-for="button in ctaButtons"
                      :key="button.id"
                      class="px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                      :class="button.classes"
                      type="button"
                      @click="button.id === 2 ? openWhatsAppPreview('Bonjour Maxime, je suis intéressé(e) par vos services.') : scrollToProjects()"
                    >
                        <component
                            :is="button.icon"
                            class="w-4 h-4"
                            :class="button.iconclass"
                        />
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import {
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    CodeBracketSquareIcon,
    CubeIcon,
    PaintBrushIcon,
    ServerIcon
} from '@heroicons/vue/16/solid';

import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.PNG'
import about3 from '../../public/about3.PNG'
import about4 from '../../public/about4.PNG'
import { setLang, t, i18nState } from '../i18n.js';
import { computed } from 'vue';
import { openWhatsAppPreview } from '../composables/useWhatsApp.js';

const aboutImage = computed(() => [
    {
        id: 1,
        src: about1,
        alt: "Maxime - Professional Photo",
        gradient: 'bg-linear-to-r from-amber-600 to-teal-600 border-amber-400/40',
        badge: t('aboutBadge1'),
        badgeColor: 'bg-amber-500',
        animation: 'fade-right',
        delay: 200
    },
    {
        id: 2,
        src: about2,
        alt: "Maxime - Working Environment",
        gradient: 'bg-linear-to-r from-amber-500 to-teal-500 border-amber-400/40',
        badge: t('aboutBadge2'),
        badgeColor: 'bg-teal-500',
        animation: 'fade-left',
        delay: 300
    },
    {
        id: 3,
        src: about3,
        alt: "Maxime - Professional Photo",
        gradient: 'bg-linear-to-r from-amber-500 to-teal-500 border-amber-400/40',
        badge: t('aboutBadge3'),
        badgeColor: 'bg-amber-500',
        animation: 'fade-right',
        delay: 200
    },
    {
        id: 4,
        src: about4,
        alt: "Maxime - Design Work",
        gradient: 'bg-linear-to-r from-amber-600 to-teal-600 border-amber-400/40',
        badge: t('aboutBadge4'),
        badgeColor: 'bg-teal-500',
        animation: 'fade-left',
        delay: 500
    }
]);

const skills = [
    {
        id: 1,
        icon: CodeBracketSquareIcon,
        iconColor: "text-amber-400",
        title: 'Frontend',
        desc: "Vue js, Javascript, tailwind css"
    },
    {
        id: 2,
        icon: ServerIcon,
        iconColor: "text-teal-400",
        title: 'Backend',
        desc: "Php, Laravel-PHP, Mysql, SQL, REST APIs"
    },
    {
        id: 3,
        icon: PaintBrushIcon,
        iconColor: "text-amber-400",
        title: 'Design',
        desc: "UI/UX Design, Figma, Responsive Design, Prototyping"
    },
    {
        id: 4,
        icon: CubeIcon,
        iconColor: "text-teal-400",
        title: 'Tools',
        desc: "Git, GitHub, VS Code, Webpack, Docker"
    }
]

const ctaButtons = computed(() => [
    {
        id: 1,
        text: t('aboutCtaPortfolio'),
        icon: ArrowRightIcon,
        iconclass: `ml-2 group-hover:translate-x-1 transition-transform`,
        classes: `bg-linear-to-r from-amber-600 to-teal-600 text-white hover:from-amber-500 hover:to-teal-500`
    },
    {
        id: 2,
        text: t('aboutCtaContact'),
        icon: ChatBubbleLeftRightIcon,
        iconclass: `mr-2`,
        classes: `border border-amber-400 text-amber-400 hover:bg-amber-400/10`
    }
]);


function scrollToProjects() {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
}

</script>
