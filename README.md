# Maxime.dev — Portfolio (Vue 3 + Vite)

Portfolio personnel — Full-Stack Developer.

## Fonctionnalités

- Contact → preview du message puis envoi via WhatsApp (message pré-rempli, éditable)
- Download CV → télécharge le PDF
- Formulaire de contact → ouvre la preview WhatsApp avant envoi
- i18n FR / EN / DE
- Case study modal sur chaque projet
- Statistiques GitHub en direct (github-readme-stats)

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

## Build (production)

```bash
npm run build
npm run preview
```

## Notes

- Numéro WhatsApp défini dans `src/composables/useWhatsApp.js`
- CV à télécharger : `public/maxime_Cv.pdf`
- Palette et polices définies dans `src/style.css` (`@theme`)
