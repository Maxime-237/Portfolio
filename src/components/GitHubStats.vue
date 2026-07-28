<template>
  <section class="relative py-20 overflow-hidden" id="github">
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-teal-400">{{ t('githubTitle') }}</span>
        </h2>
        <p class="text-amber-200 text-lg max-w-2xl mx-auto">{{ t('githubDesc') }}</p>
      </div>

      <!-- Terminal-window card, consistent with the rest of the site's signature -->
      <div class="rounded-2xl border border-amber-500/20 bg-gray-900/40 backdrop-blur-sm overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <div class="window-chrome px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <span class="window-dot bg-red-500/70"></span>
          <span class="window-dot bg-amber-400/70"></span>
          <span class="window-dot bg-emerald-500/70"></span>
          <span class="ml-2 font-mono text-xs text-gray-500">github.com/{{ GITHUB_USERNAME }}</span>
        </div>

        <div class="p-6 md:p-8">

          <!-- Loading state -->
          <div v-if="status === 'loading'" class="flex items-center justify-center gap-3 py-10 font-mono text-sm text-gray-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>fetching stats…</span>
          </div>

          <!-- Graceful fallback: never a broken image, always a working link -->
          <div v-else-if="status === 'error'" class="flex flex-col items-center justify-center gap-4 py-8 text-center">
            <p class="text-gray-400 text-sm max-w-md">{{ t('githubError') }}</p>
            <a
              :href="`https://github.com/${GITHUB_USERNAME}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-400/40 text-amber-300 font-semibold hover:bg-amber-400/10 transition-all"
            >
              <CodeBracketIcon class="w-4 h-4" />
              github.com/{{ GITHUB_USERNAME }}
            </a>
          </div>

          <div v-else class="grid md:grid-cols-2 gap-8">
            <!-- Key numbers -->
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div class="text-3xl font-display font-bold text-amber-400">{{ profile.public_repos }}</div>
                <div class="text-gray-400 text-xs font-mono mt-1">{{ t('githubRepos') }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-display font-bold text-amber-400">{{ totalStars }}</div>
                <div class="text-gray-400 text-xs font-mono mt-1">{{ t('githubStars') }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-display font-bold text-amber-400">{{ profile.followers }}</div>
                <div class="text-gray-400 text-xs font-mono mt-1">{{ t('githubFollowers') }}</div>
              </div>
            </div>

            <!-- Top languages, computed from public repos -->
            <div>
              <h4 class="font-mono text-xs uppercase tracking-wider text-teal-400 mb-3">{{ t('githubTopLangs') }}</h4>
              <div class="space-y-2">
                <div v-for="lang in topLanguages" :key="lang.name">
                  <div class="flex justify-between text-xs font-mono text-gray-300 mb-1">
                    <span>{{ lang.name }}</span>
                    <span>{{ lang.percent }}%</span>
                  </div>
                  <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full bg-linear-to-r from-amber-500 to-teal-500 rounded-full" :style="{ width: lang.percent + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon } from '@heroicons/vue/16/solid';
import { onMounted, ref } from 'vue';
import { t } from '../i18n.js';

const GITHUB_USERNAME = 'Maxime-237';

const status = ref('loading'); // loading | ready | error
const profile = ref({ public_repos: 0, followers: 0 });
const totalStars = ref(0);
const topLanguages = ref([]);

onMounted(async () => {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed');

    const user = await userRes.json();
    const repos = await reposRes.json();

    profile.value = user;
    totalStars.value = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const counts = {};
    for (const repo of repos) {
      if (!repo.language) continue;
      counts[repo.language] = (counts[repo.language] || 0) + 1;
    }

    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    topLanguages.value = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([name, count]) => ({ name, percent: Math.round((count / total) * 100) }));

    status.value = 'ready';
  } catch (e) {
    status.value = 'error';
  }
});
</script>
