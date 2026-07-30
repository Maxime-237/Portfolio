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

          <template v-else>
            <div class="grid md:grid-cols-2 gap-8">
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

            <!-- Latest activity -->
            <div v-if="latestActivity" class="mt-10 pt-8 border-t border-white/5">
              <h4 class="font-mono text-xs uppercase tracking-wider text-teal-400 mb-4">{{ t('githubLatestActivity') }}</h4>

              <div class="flex items-start gap-3">
                <i class="devicon-git-plain colored text-xl mt-0.5" aria-hidden="true"></i>
                <div class="min-w-0">
                  <p class="text-amber-100 text-sm leading-relaxed break-words">
                    <span v-html="latestActivity.html"></span>
                  </p>
                  <p class="text-gray-500 text-xs font-mono mt-1">{{ latestActivity.date }}</p>
                </div>
              </div>
            </div>

            <!-- Contribution calendar -->
            <div v-if="weeks.length" class="mt-10 pt-8 border-t border-white/5">
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-mono text-xs uppercase tracking-wider text-teal-400">{{ t('githubContributions') }}</h4>
                <span class="font-display font-bold text-amber-400">{{ totalContributions }}</span>
              </div>

              <div class="overflow-x-auto">
                <div class="inline-grid gap-[3px]" :style="{ gridTemplateColumns: `repeat(${weeks.length}, 11px)`, gridTemplateRows: '14px repeat(7, 11px)' }">
                  <!-- Month labels -->
                  <span
                    v-for="m in monthLabels"
                    :key="`m-${m.weekIndex}`"
                    class="text-[10px] font-mono text-gray-500"
                    :style="{ gridColumn: m.weekIndex + 1, gridRow: 1 }"
                  >
                    {{ monthLabel(m.month) }}
                  </span>

                  <!-- Cells -->
                  <template v-for="(week, wi) in weeks" :key="wi">
                    <span
                      v-for="(day, di) in week"
                      :key="di"
                      class="w-[11px] h-[11px] rounded-[2px]"
                      :class="day ? levelClass(day.level) : 'bg-transparent'"
                      :style="{ gridColumn: wi + 1, gridRow: di + 2 }"
                      :title="day ? `${day.count} contribution(s) — ${day.date}` : ''"
                    ></span>
                  </template>
                </div>
              </div>
            </div>
          </template>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon } from '@heroicons/vue/16/solid';
import { onMounted, ref } from 'vue';
import { t } from '../i18n.js';
import { buildContributionGrid, monthLabel } from '../utils/githubContributions.js';

const GITHUB_USERNAME = 'Maxime-237';

const status = ref('loading'); // loading | ready | error
const profile = ref({ public_repos: 0, followers: 0 });
const totalStars = ref(0);
const topLanguages = ref([]);
const latestActivity = ref(null);
const weeks = ref([]);
const monthLabels = ref([]);
const totalContributions = ref(0);

const LEVEL_CLASSES = ['bg-gray-800', 'bg-amber-900', 'bg-amber-700', 'bg-amber-500', 'bg-amber-400'];
function levelClass(level) {
  return LEVEL_CLASSES[level] ?? LEVEL_CLASSES[0];
}

function formatEvent(event) {
  const repo = event.repo?.name ?? '';
  const date = new Date(event.created_at).toLocaleString('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const repoLink = `<a href="https://github.com/${repo}" target="_blank" rel="noopener noreferrer" class="text-teal-300 hover:text-teal-200 underline underline-offset-2">${repo}</a>`;

  switch (event.type) {
    case 'PushEvent': {
      const commits = event.payload?.commits ?? [];
      const lastCommit = commits[commits.length - 1];
      const branch = (event.payload?.ref ?? '').replace('refs/heads/', '');
      const sha = lastCommit?.sha?.slice(0, 7);
      return {
        html: sha
          ? `${t('githubPushed')} <code class="text-amber-300">${sha}</code> ${t('githubTo')} <code class="text-amber-300">${branch}</code> ${t('githubIn')} ${repoLink}`
          : `${t('githubPushed')} ${t('githubTo')} <code class="text-amber-300">${branch}</code> ${t('githubIn')} ${repoLink}`,
        date,
      };
    }
    case 'CreateEvent':
      return { html: `${t('githubCreated')} ${event.payload?.ref_type ?? 'repository'} ${t('githubIn')} ${repoLink}`, date };
    case 'WatchEvent':
      return { html: `${t('githubStarred')} ${repoLink}`, date };
    case 'ForkEvent':
      return { html: `${t('githubForked')} ${repoLink}`, date };
    case 'IssuesEvent':
      return { html: `${event.payload?.action ?? ''} ${t('githubIssue')} ${t('githubIn')} ${repoLink}`, date };
    case 'PullRequestEvent':
      return { html: `${event.payload?.action ?? ''} ${t('githubPr')} ${t('githubIn')} ${repoLink}`, date };
    default:
      return { html: `${t('githubActivityIn')} ${repoLink}`, date };
  }
}

onMounted(async () => {
  try {
    const [userRes, reposRes, eventsRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`),
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`),
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

    // Dernière activité publique (best-effort : ne bloque pas le reste si ça échoue)
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      if (events.length) latestActivity.value = formatEvent(events[0]);
    }

    // Calendrier de contributions (best-effort, service tiers indépendant de l'API GitHub officielle)
    if (contribRes.ok) {
      const contrib = await contribRes.json();
      const { weeks: w, monthLabels: m } = buildContributionGrid(contrib.contributions);
      weeks.value = w;
      monthLabels.value = m;
      totalContributions.value = Object.values(contrib.total ?? {}).reduce((a, b) => a + b, 0);
    }

    status.value = 'ready';
  } catch (e) {
    status.value = 'error';
  }
});
</script>