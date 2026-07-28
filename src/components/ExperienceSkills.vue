<template>
  <section class="relative py-20 overflow-hidden" id="skills">

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{ t('skillsSectionTitle1') }} </span>{{ t('skillsSectionTitle') }}
            </h2>

            <p class="text-amber-200 text-lg max-w-2xl mx-auto">
                {{ t('skillParagraph') }}
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div data-aos="fade-right">

                <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    {{ t('technicalSkillsTitle') }}
                </h3>

                <div class="space-y-6">

                    <div v-for="skill in skills"
                        :key="skill.id"
                        class="group"
                    >
                        <div class="flex items-center justify-between mb-3">

                                <span class="text-amber-200 font-semibold flex items-center gap-2">

                                    <component 
                                        :is="skill.icon"
                                        class="w-5 h-5"
                                        :class="skill.iconColor"
                                    ></component>
                                    {{ skill.title }}
                                </span>

                                <span class="font-mono" :class="skill.percentageColor">
                                    {{ skill.percentage }} %
                                </span>
                        </div>

                            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-1000 group-hover:scale-105"
                                    :class="skill.gradient"
                                    :style="{width: skill.percentage + '%'}">
                                </div>
                            </div>
                    </div>
                </div>

                <div class="mt-12">

                    <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Squares2X2Icon class="w-6 h-6 text-teal-400" />
                        {{ t('techStackTitle') }}
                    </h4>

                    <div class="flex flex-wrap gap-3">
                        <span v-for="tech in techStack"
                            :key="tech"
                            class="px-4 py-2 bg-linear-to-r from-amber-500/20 border border-amber-400/30 rounded-full text-amber-200 text-sm font-mono font-medium hover:scale-105 transition-transform duration-300">
                            {{ tech }}

                        </span>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left">
                <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <BriefcaseIcon class="w-8 h-8 text-teal-400" />
                    {{ t('workExperienceTitle') }}
                </h3>

                <div class="space-y-8">
                    <div v-for="exp in experiences"
                        :key="exp.id"
                        class="relative pl-8 border-l-2 group"
                        :class="exp.borderColor">

                        <div class="absolute -left-2 top-0 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300"
                            :class="exp.dotColor">
                        </div>

                        <div class="bg-linear-to-r from-gray-800/50 to-slate-900/30 rounded-2xl p-6 border backdrop-blur-sm group-hover:border-amber-400/40 transition-all duration-300"
                            :class="exp.borderclass">

                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                <h4 class="text-lg font-bold text-white">{{ exp.position }}</h4>
                                <span :class="exp.dateColor"
                                  class="mt-1 sm:mt-0 font-mono text-sm">{{ exp.period }}</span>
                            </div>

                            <p :class="exp.companyColor"
                                class="font-medium mb-3">{{ exp.company }}
                            </p>

                            <p class="text-amber-100 text-sm leading-relaxed">{{ exp.desc }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

  </section>
</template>

<script setup>
import { BriefcaseIcon, CloudIcon, CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, ServerIcon, Squares2X2Icon } from '@heroicons/vue/16/solid';
import { setLang, t, i18nState } from '../i18n.js';
import { computed } from 'vue';

const skills = [
    {
        id: 1,
        title: "Frontend Development",
        icon: CodeBracketIcon,
        iconColor: 'text-amber-400',
        percentage: 70,
        percentageColor: "text-amber-400 text-sm",
        gradient: 'bg-linear-to-r from-amber-500 to-teal-500'
    },
    {
        id: 2,
        title: "Backend Development",
        icon: ServerIcon,
        iconColor: 'text-teal-400',
        percentage: 75,
        percentageColor: "text-teal-400 text-sm",
        gradient: 'bg-linear-to-r from-teal-500 to-amber-500'
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: PaintBrushIcon,
        iconColor: 'text-amber-400',
        percentage: 30,
        percentageColor: "text-amber-400 text-sm",
        gradient: 'bg-linear-to-r from-amber-500 to-teal-500'
    },
    {
        id: 4,
        title: "System architecture",
        icon: DevicePhoneMobileIcon,
        iconColor: 'text-teal-400',
        percentage: 55,
        percentageColor: "text-amber-400 text-sm",
        gradient: 'bg-linear-to-r from-teal-500 to-amber-500'
    },
    {
        id: 5,
        title: "DevOps & Cloud",
        icon: CloudIcon,
        iconColor: 'text-amber-400',
        percentage: 50,
        percentageColor: "text-amber-400 text-sm",
        gradient: 'bg-linear-to-r from-amber-500 to-teal-500'
    }
]

const experiences = computed(() => [
    {
        id: 1,
        position: "Backend Developer",
        company: "Ccn Technologie.",
        period: "27 février - 29 mai 2026",
        desc: t('SkillsDesc1'),
        borderColor: "border-amber-500/30",
        dotColor: "bg-amber-500",
        borderclass: "border-amber-400 text-sm font-semibold",
        dateColor: "text-amber-400 text-sm font-semibold",
        companyColor: "text-teal-400"
    },
    {
        id: 2,
        position: "Full-Stack Developer",
        company: "Projet de groupe - Institut universitaire de technologie (IUT) de Douala.",
        period: "Oct 2025 - Nov 2025",
        desc: t('SkillsDesc2'),
        borderColor: "border-teal-500/30",
        dotColor: "bg-teal-500",
        borderclass: "border-teal-400 text-sm font-semibold",
        dateColor: "text-teal-400 text-sm font-semibold",
        companyColor: "text-amber-400"
    },
    // {
    //     id: 3,
    //     position: "Junior web Developper",
    //     company: "SartUp Innovations",
    //     period: "2019 - 2020",
    //     desc: "Participation à la création d’applications web : intégration des composants, collaboration back-end et mise en pratique des bonnes pratiques (Git, qualité du code).",
    //     borderColor: "border-amber-500/30",
    //     dotColor: "bg-amber-500",
    //     borderclass: "border-amber-500/20",
    //     dateColor: "text-amber-400 text-sm font-semibold",
    //     companyColor: "text-teal-400"
    // }
])

const techStack = [
    'Vue js', 'Laravel', 'Mysql', 'PostgreSQL', 'Tailwind Css','python', 'Figma', 'Git', 'Docker', 'REST APIs'
]
</script>

