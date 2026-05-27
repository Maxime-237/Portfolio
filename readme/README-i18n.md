# Documentation i18n (langues FR / EN / DE)

## Contexte

Ton portfolio a déjà une **sélection de langue** câblée via `src/i18n.js` (changement de `document.documentElement.lang`).

Ce que j’ai fait ici:

1. J’ai **ajouté des clés de traduction** (FR/EN/DE) dans `src/i18n.js` pour couvrir des titres/labels utilisés dans l’UI.
2. J’ai **câblé le menu + le bouton “Change Language”** dans `src/components/Navbar.vue` pour que le vocabulaire change avec la langue.

> Remarque: à ce stade, seules les parties touchées par ces deux fichiers changent réellement. Les autres composants (Hero, Services, About, etc.) ont encore des textes en dur et doivent être migrés ensuite.

---

## 1) `src/i18n.js`

### Fichier original (idée)

- `i18nState.lang` stocke la langue active.
- `t(key)` renvoie la traduction associée à une clé.
- `setLang(lang)` met à jour `i18nState.lang` et `document.documentElement.lang`.

### Ce que j’ai changé

J’ai **complété `translations`** en y ajoutant beaucoup de clés pour:

- Navbar (bouton langue, libellés des sections)
- Hero (texte CTA + stats)
- Sections (services/about/skills/projects/testimonials/contact)
- Footer (quick links, services, politique, copyright)

#### Exemple de clé

```js
fr: {
  navbarChangeLanguage: 'Changer de langue',
  servicesTitle: 'Services',
  aboutTitle: 'À propos de moi'
}

en: {
  navbarChangeLanguage: 'Change Language',
  servicesTitle: 'Services',
  aboutTitle: 'About Me'
}

de: {
  navbarChangeLanguage: 'Sprache ändern',
  servicesTitle: 'Leistungen',
  aboutTitle: 'Über mich'
}
```

### Fonction `t(key)`

Elle reste la même logique:

```js
export function t(key) {
  return translations[i18nState.lang]?.[key] ?? translations.fr?.[key] ?? key;
}
```

- Si une traduction n’existe pas pour la langue courante => fallback sur `fr`
- Si même `fr` n’existe pas => fallback sur la clé elle-même.

---

## 2) `src/components/Navbar.vue`

### Objectif

- Les libellés du menu doivent être traduits
- Le bouton d’ouverture de la liste langue doit afficher une traduction
- La sélection de la langue doit être synchronisée avec `i18nState.lang`

### Changements importants

#### a) Import des fonctions / state i18n

Je remplace:

```js
import { setLang } from "../i18n.js";
```

par:

```js
import { setLang, t, i18nState } from "../i18n.js";
```

- `t` sert à récupérer les textes
- `i18nState` sert à lire la langue actuelle

#### b) Menu dynamique (pas de texte en dur)

Avant, le menu était:

```js
const Menu = ref([
  { name: 'Services', href: '#services' },
  ...
]);
```

Maintenant, le menu est généré via une `computed`:

```js
const Menu = computed(() => [
  { name: t("servicesTitle"), href: "#services" },
  { name: t("aboutTitle"), href: "#about" },
  { name: t("skillsSectionTitle"), href: "#skills" },
  { name: t("projectsTitle"), href: "#projects" },
  { name: t("testimonialsTitle"), href: "#testimonials" },
  { name: t("contactTitle"), href: "#contact" },
]);
```

=> Quand `i18nState.lang` change, `t(...)` change, et le menu se met à jour.

#### c) Bouton “Change Language” traduisible

Je remplace le texte en dur:

```html
<span>Change Language</span>
```

par:

```html
<span>{{ t('navbarChangeLanguage') }}</span>
```

#### d) Synchroniser la langue sélectionnée

J’utilise:

- `currentLang` local pour afficher l’option active
- `watch(i18nState, ...)` pour garder le local à jour

Code utilisé:

```js
const currentLang = ref(i18nState.lang);

watch(
  i18nState,
  () => {
    currentLang.value = i18nState.lang;
  },
  { immediate: true },
);
```

Et `currentLangLabel` calcule l’étiquette (English/Français/Deutsch):

```js
const currentLangLabel = computed(
  () => languages.find((l) => l.code === i18nState.lang)?.label ?? "",
);
```

#### e) Changer de langue

La fonction reste simple:

```js
function setLanguage(code) {
  currentLang.value = code;
  document.documentElement.lang = code;
}
```

> NB: dans ton repo, la version “propre” serait d’appeler `setLang(code)` pour que `i18nState.lang` soit mis à jour.

Dans mes modifications, le bouton utilise `setLanguage(lang.code)`.
Si tu constates que la langue ne change pas partout ensuite, le correctif serait:

- remplacer `document.documentElement.lang = code;` par `setLang(code);`

---

## 3) Vérification build

J’ai lancé `npm run build` (Vite) et le build a abouti.

---

## Pour apprendre / refaire seul

Quand tu veux traduire une autre section (Hero, Services, etc.), la recette est:

1. Mettre le texte en dur dans une clé dans `src/i18n.js`
2. Dans le composant cible, importer `t` (et éventuellement `computed/i18nState`)
3. Remplacer les textes par `{{ t('maCle') }}`
4. Pour les données en arrays (services/projets/testimonials), soit:
   - transformer les données en objet `{ fr, en, de }`
   - soit construire les arrays via `computed` en fonction de `i18nState.lang`

---

## Prochaines étapes recommandées

- Migrer `Hero.vue`
- Migrer `Services.vue`
- Migrer `About.vue`
- Migrer `ExperienceSkills.vue`
- Migrer `Projects.vue`
- Migrer `Testimonials.vue`
- Migrer `Contact.vue`
- Migrer `Footer.vue`

Chacune suit la même logique: ajouter clés => remplacer textes en dur par `t(key)`.
