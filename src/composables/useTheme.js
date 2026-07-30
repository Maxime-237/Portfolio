import { reactive, watch } from 'vue';

const STORAGE_KEY = 'portfolio-theme';

export const themeState = reactive({
  // Le site est conçu "dark" par défaut : on ne bascule en clair
  // que si l'utilisateur l'a explicitement choisi la dernière fois.
  theme: localStorage.getItem(STORAGE_KEY) || 'dark',
});

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

applyTheme(themeState.theme);

watch(
  () => themeState.theme,
  (theme) => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }
);

export function toggleTheme() {
  themeState.theme = themeState.theme === 'dark' ? 'light' : 'dark';
}