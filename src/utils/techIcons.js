// Associe un nom de technologie à sa classe d'icône Devicon.
// Ajoute une entrée ici pour qu'une techno affiche son logo au lieu
// d'une icône générique. Clé = nom en minuscules.

const ICON_MAP = {
  html: 'devicon-html5-plain colored',
  css: 'devicon-css3-plain colored',
  javascript: 'devicon-javascript-plain colored',
  js: 'devicon-javascript-plain colored',
  php: 'devicon-php-plain colored',
  laravel: 'devicon-laravel-plain colored',
  blade: 'devicon-laravel-plain colored',
  vue: 'devicon-vuejs-plain colored',
  'vue.js': 'devicon-vuejs-plain colored',
  'vue js': 'devicon-vuejs-plain colored',
  next: 'devicon-nextjs-original',
  'next.js': 'devicon-nextjs-original',
  'next js': 'devicon-nextjs-original',
  mysql: 'devicon-mysql-plain colored',
  postgresql: 'devicon-postgresql-plain colored',
  postgres: 'devicon-postgresql-plain colored',
  'tailwind css': 'devicon-tailwindcss-plain colored',
  tailwindcss: 'devicon-tailwindcss-plain colored',
  tailwind: 'devicon-tailwindcss-plain colored',
  python: 'devicon-python-plain colored',
  figma: 'devicon-figma-plain colored',
  git: 'devicon-git-plain colored',
  docker: 'devicon-docker-plain colored',
};

/**
 * Retourne la classe CSS Devicon pour une techno, ou null si aucune
 * icône n'est mappée (un fallback générique est alors affiché).
 */
export function getTechIconClass(name) {
  const key = name.trim().toLowerCase();
  return ICON_MAP[key] ?? null;
}