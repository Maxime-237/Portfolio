# Maxime.dev — Portfolio (Vue 3 + Vite)

Simple portfolio web.

## Fonctionnalités

- **Contact** → ouvre WhatsApp (message pré-rempli)
- **Download CV** → télécharge le PDF
- **Formulaire contact** → envoie via WhatsApp + petit message de confirmation

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

- Le numéro WhatsApp est défini dans :
  - `src/components/Hero.vue`
  - `src/components/About.vue`
  - `src/components/Contact.vue`
- Le CV à télécharger est dans :
  - `public/CV.pdf`
