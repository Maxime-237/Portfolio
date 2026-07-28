import { reactive } from 'vue';

export const i18nState = reactive({
  lang: document?.documentElement?.lang || 'fr',
});

const translations = {
  fr: {
    // Navbar
    navbarChangeLanguage: 'Changer de langue',

    // Hero
    heroDomain: 'Développeur full-stack',
    heroDesc: 'Je transforme tes idées en interfaces modernes, avec des fonctionnalités utiles, un design soigné et un code optimisé pour offrir une expérience fluide.',
    heroContactMe: 'Contactez-moi',
    heroDownloadCv: 'Télécharger le CV',
    heroStatsProjects: 'Projets',
    heroStatsYears: 'Années',
    heroStatsTech: 'Technologies',
    heroRoles: ['Développeur Full-Stack', 'Intégrateur Vue.js & Laravel', 'Résolveur de problèmes'],
    heroEyebrow: 'Disponible pour de nouvelles missions',

    // Sections

    // Services
    servicesPrefix: 'Mes',
    servicesTitle: 'Services',
    serviceIntro: 'Des solutions sur mesure de bout en bout : développement web, UI/UX, intégration et optimisation des performances.',
    serviceName1: 'Développement web',
    serviceName2: 'Design UI/UX',
    serviceName3: 'Architecture logicielle & Design',
    serviceName4: 'Développement backend & Intégration API',
    serviceName5: 'DevOps & Cloud',
    serviceName6: 'Gestion & Optimisation de bases de données',
    servicedesc1: 'Développement d’applications web performantes avec Vue.js et intégration d’API pour des interfaces fluides et modernes.',
    servicedesc2: 'Design UI/UX orienté produit : wireframes, maquettes Figma et prototypes pour une expérience utilisateur claire et attractive.',
    servicedesc3: 'Modelisation conceptuelle de systèmes(UML), architecture de bases de données relationnelles, et conception de la logique metier pour garantir des applications évolutives, strucurés et perfomantes.',
    servicedesc4: 'Conception de bases de données robuste, création d\'APIs REST perfomantes et securisées, et logique metier optimisée pour alimenter vos applications.',
    servicedesc5: 'Intégration et déploiement continus : automatisation, gestion des ressources cloud et monitoring pour une opération fluide et fiable.',
    servicedesc6: 'Modelisation conceptuelle de bases de données, optimisation des requêtes et gestion des performances pour garantir une accessibilité rapide et fiable des données.',
  
    servicesGetInTouch: 'Entrons en contact',


    //About section

    aboutLink: 'À propos de moi',
    aboutPrefix: 'À propos de',
    aboutTitle: 'moi',
    aboutSubtitle: 'Développeur Full-Stack',
    aboutParagraph:
      'Je conçois et développe des applications modernes, rapides et fiables. Mon approche : un code propre, une UX soignée et une expérience développeur agréable (performances, maintenance, scalabilité).',
    aboutBadge1: 'Professionnel',
    aboutBadge2: 'créatif',
    aboutBadge3: 'Développeur',
    aboutBadge4: 'Designer',
    aboutYearsExperience: '2+ Années d’expérience',
    aboutCtaPortfolio: 'Voir le portfolio',
    aboutCtaContact: 'Contactez-moi',

    // Skills section

    skillLink: 'Compétences & Expérience',
    skillsSectionTitle1: 'Compétences ',
    skillsSectionTitle: '& Expérience',
    skillParagraph: 'Mes compétences techniques au service de projets concrets : développement, intégration, UX et livraison.',
    technicalSkillsTitle: 'Compétences techniques',    
    technicalSkillsTitle: 'Compétences techniques',
    techStackTitle: 'Tech Stack',
    workExperienceTitle: 'Expérience professionnelle',
    SkillsDesc1: 'Participation à la création d’une application web de vente d’objets d’art : intégration des composants, collaboration back-end et mise en pratique des bonnes pratiques (Git, qualité du code).',
    SkillsDesc2: 'Participation à la création d’un site de vente des jeux, consoles et accessoires gaming : collaboration front-end et back-end et mise en pratique des bonnes pratiques (Git, qualité du code).',


    // Projects section
    projectsTitle: 'Projets',
    projectsIntro: 'Une sélection de mes réalisations récentes et de solutions créatives.',
    projectsdesc1: 'Plateforme e-commerce développée pour une expérience back-end solide : gestion produits, parcours clients et fonctionnalités intégrées.',
    projectsdesc2: 'Application e-learning avec une stack moderne : pages dynamiques, gestion des contenus et suivi pensé pour une expérience fluide côté utilisateur.',
    projectsdesc3: 'Projet full-stack e-commerce : interfaces front réactives, logique back-end claire et données persistantes pour une navigation et un panier fiables.',
    projectsdesc4: 'Site web Belleza conçu pour une expérience front-end réactive : interfaces claires, logique back-end structurée et données persistantes pour un parcours utilisateur fiable.',
    projectsdesc6: 'Site web Valentine conçu pour une expérience rapide et élégante : mise en page soignée, interactions légères et rendu mobile-friendly.',
    projectsdesc5: 'Dashboard en cours de finalisation : affichage des données, logique back-end et interface responsive pour un contrôle clair des informations.',
    projectLive: 'Démo en ligne',
    projectProgress: 'En cours',
    projectsCtaViewAll: 'Voir tous les projets',
    projectsCtaDiscuss: 'Discuter de projet',
    projectDetailsCta: 'Voir le détail',
    projectsShowMore: 'Voir plus de projets',
    projectsShowLess: 'Voir moins',
    modalStack: 'Stack technique',
    modalClose: 'Fermer',
    modalRole: 'Mon rôle',
    modalObjective: 'Objectif',

    githubTitle: 'Activité GitHub',
    githubDesc: 'Un aperçu en direct de mes contributions et de mes langages les plus utilisés.',
    githubRepos: 'Dépôts publics',
    githubStars: 'Étoiles reçues',
    githubFollowers: 'Abonnés',
    githubTopLangs: 'Langages les plus utilisés',
    githubError: 'Les statistiques sont momentanément indisponibles (limite de requêtes GitHub). Retrouvez mon profil directement :',

    whatsappPreviewTitle: 'Aperçu du message',
    whatsappPreviewDesc: 'Voici le message qui sera envoyé sur WhatsApp.',
    whatsappPreviewEdit: 'Modifier',
    whatsappPreviewSend: 'Confirmer et envoyer',

    //testmonials section
    testimonialsTitle: 'Témoignages',
    testimonialsDesc: 'Ce que les gens disent de travailler avec moi',
    testimonialstText: 'De l’idée jusqu’à la mise en ligne : rapide, rigoureux et orienté résultats. Je recommande Maxime.',
    testimonialsPosition: 'Collaboration',

    contactTitle: 'Entrons en',
    contactSecondTitle: 'contact',
    contactIntro: 'Travaillons ensemble sur votre prochain projet',

    //contact section
    contactInfoTitle: 'Coordonnées',
    contactEmailLabel: 'Email',
    contactPhoneLabel: 'Téléphone',
    contactLocationLabel: 'Localisation',

    contactFollowMe: 'Suivez-moi',

    contactFormName: 'Nom',
    contactFormEmail: 'Email',
    contactFormSubject: 'Sujet',
    contactFormMessage: 'Message',
    contactFormPlaceholderName: 'Votre nom',
    contactFormPlaceholderEmail: 'votre@email.com',
    contactFormPlaceholderSubject: 'Sujet',
    contactFormPlaceholderMessage: 'Votre message',
    contactFormSend: 'Envoyer le message',
    contactSuccess: '✅ Message bien reçu. Je vous répondrai bientôt.',

    //footer section
    footerDesc: 'Je construis des applications web modernes avec une attention particulière à l’expérience utilisateur, la qualité du code et les performances. Discutons de votre prochain projet.',


    footerQuickLinks: 'Liens rapides',
    homeFooter: 'Accueil',
    footerServices: 'Services',
    footerPrivacyPolicy: 'Politique de confidentialité',
    footerTermsOfService: 'Conditions d’utilisation',
    footerCopyright: '© {year} Maxime. Tous droits réservés',

    // Dynamic lists keys
    servicesCtaGetInTouch: 'Entrons en contact',
  },

  en: {
    // Navbar
    navbarChangeLanguage: 'Change Language',

    // Hero
    heroDomain: 'Full-Stack Developer',
    heroDesc: 'I transform your ideas into modern interfaces, with useful features, a polished design and optimized code to offer a smooth experience.',
    heroContactMe: 'Contact Me',
    heroDownloadCv: 'Download CV',
    heroStatsProjects: 'Projects',
    heroStatsYears: 'Years',
    heroStatsTech: 'Technologies',
    heroRoles: ['Full-Stack Developer', 'Vue.js & Laravel Integrator', 'Problem Solver'],
    heroEyebrow: 'Available for new projects',

    // Sections

    //services
    servicesPrefix: 'My',
    servicesTitle: 'Services',
    serviceIntro: 'End-to-end tailored solutions: web development, UI/UX, integration and performance optimization.',
    serviceName1: 'Web Development',
    serviceName2: 'UI/UX Design',
    serviceName3: 'Software Architecture & Design',
    serviceName4: 'Backend Development & API Integration',
    serviceName5: 'DevOps & Cloud',
    serviceName6: 'Database Management & Optimization',
    servicedesc1: 'Building performant web applications with Vue.js and API integration for smooth, modern interfaces.',
    servicedesc2: 'Product-oriented UI/UX design: wireframes, Figma mockups and prototypes for a clear and attractive user experience.',
    servicedesc3: 'Conceptual modeling of systems (UML), relational database architecture, and business logic design to ensure scalable, structured, and performant applications.',
    servicedesc4: 'Robust database design, creation of performant and secure REST APIs, and optimized business logic to power your applications.',
    servicedesc5: 'Continuous integration and deployment: automation, cloud resource management, and monitoring for smooth and reliable operation.',
    servicedesc6: 'Conceptual modeling of databases, query optimization, and performance management to ensure fast and reliable data accessibility.',
    servicesGetInTouch: 'Get in Touch',

    //About section

    aboutLink: 'About Me',
    aboutPrefix: 'About',
    aboutTitle: 'Me',
    aboutSubtitle: 'Full-Stack Developer',
    aboutParagraph:
      'I design and develop modern, fast, and reliable applications. My approach: clean code, a polished UX, and a developer-friendly experience (performance, maintainability, scalability).',
    aboutBadge1: 'Professional',
    aboutBadge2: 'Creative',
    aboutBadge3: 'Developer',
    aboutBadge4: 'Designer',
    aboutYearsExperience: '2+ Years Experience',
    aboutCtaPortfolio: 'View Portfolio',
    aboutCtaContact: 'Contact Me',

    //skills section
    skillLink: 'Skills & Experience',
    skillsSectionTitle1: 'Skills ',
    skillsSectionTitle: '& Experience',
    skillParagraph: 'My technical skills at the service of real projects: development, integration, UX and delivery.',
    technicalSkillsTitle: 'Technical skills',
    techStackTitle: 'Tech Stack',
    workExperienceTitle: 'Work Experience',
    SkillsDesc1: 'Participation in the creation of a web application for selling art objects: component integration, back-end collaboration, and implementation of best practices (Git, code quality).',
    SkillsDesc2: 'Participation in the creation of a website for selling games, consoles, and gaming accessories: front-end and back-end collaboration and implementation of best practices (Git, code quality).',
    
    projectsTitle: 'Projects',
    projectsIntro: 'A collection of my recent work and creative solutions.',
    projectsdesc1: 'E-commerce platform developed for a solid back-end experience: product management, customer journey, and integrated features.',
    projectsdesc2: 'E-learning application with a modern stack: dynamic pages, content management, and tracking designed for a smooth user experience.',
    projectsdesc3: 'Full-stack e-commerce project: reactive front interfaces, clear back-end logic, and persistent data for reliable navigation and cart.',
    projectsdesc4: 'Belleza website designed for a reactive front-end experience: clear interfaces, structured back-end logic, and persistent data for a reliable user journey.',
    projectsdesc6: 'Valentine website designed for a fast and sleek experience: polished layout, light interactions, and mobile-friendly rendering.',
    projectsdesc5: 'Dashboard in finalization: data display, back-end logic, and responsive interface for clear control of information.',
    projectLive: 'Live Demo',
    projectProgress: 'In Progress',
    projectsCtaViewAll: 'View All Projects',
    projectsCtaDiscuss: 'Discuss Project',
    projectDetailsCta: 'View details',
    projectsShowMore: 'Show more projects',
    projectsShowLess: 'Show less',
    modalStack: 'Tech stack',
    modalClose: 'Close',
    modalRole: 'My role',
    modalObjective: 'Objective',

    githubTitle: 'GitHub Activity',
    githubDesc: 'A live look at my contributions and most-used languages.',
    githubRepos: 'Public repos',
    githubStars: 'Stars earned',
    githubFollowers: 'Followers',
    githubTopLangs: 'Most used languages',
    githubError: 'Stats are temporarily unavailable (GitHub rate limit). Check out my profile directly:',

    whatsappPreviewTitle: 'Message preview',
    whatsappPreviewDesc: 'Here is the message that will be sent on WhatsApp.',
    whatsappPreviewEdit: 'Edit',
    whatsappPreviewSend: 'Confirm and send',

    testimonialsTitle: 'Testimonials',
    testimonialsDesc: 'What people say about working with me',
    testimonialstText: 'From idea to launch: fast, thorough, and results-oriented. I highly recommend Maxime.',
    testimonialsPosition: 'Collaboration',


    contactTitle: 'Get in',
    contactSecondTitle: 'Touch',
    contactIntro: "Let's work together on your next project",

    contactInfoTitle: 'Contact Information',
    contactEmailLabel: 'Email',
    contactPhoneLabel: 'Phone',
    contactLocationLabel: 'Location',

    contactFollowMe: 'Follow Me',

    contactFormName: 'Name',
    contactFormEmail: 'Email',
    contactFormSubject: 'Subject',
    contactFormMessage: 'Message',
    contactFormPlaceholderName: 'Your name',
    contactFormPlaceholderEmail: 'your@email.com',
    contactFormPlaceholderSubject: 'Subject',
    contactFormPlaceholderMessage: 'Your message',
    contactFormSend: 'Send Message',
    contactSuccess: '✅ Message received. I will get back to you soon.',

    footerDesc: 'I build modern web applications with a focus on user experience, code quality, and performance. Let’s talk about your next project.',
    footerQuickLinks: 'Quick Links',
    homeFooter: 'Home',
    footerServices: 'Services',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsOfService: 'Terms of Service',
    footerCopyright: '© {year} Maxime. All rights reserved',
  },
  de: {
    // Navbar
    navbarChangeLanguage: 'Sprache ändern',

    // Hero
    heroDomain: 'Full-Stack Entwickler',
    heroDesc: 'Ich verwandle deine Ideen in moderne Schnittstellen mit nützlichen Funktionen, einem polierten Design und optimiertem Code für eine reibungslose Erfahrung.',
    heroContactMe: 'Kontakt',
    heroDownloadCv: 'Lebenslauf laden',
    heroStatsProjects: 'Projekte',
    heroStatsYears: 'Jahre',
    heroStatsTech: 'Technologien',
    heroRoles: ['Full-Stack Entwickler', 'Vue.js & Laravel Integrator', 'Problemlöser'],
    heroEyebrow: 'Verfügbar für neue Projekte',

    // Sections

    // Services
    servicesPrefix: 'Meine',
    servicesTitle: 'Leistungen',
    serviceIntro: 'Maßgeschneiderte End-to-End-Lösungen: Webentwicklung, UI/UX, Integration und Performance-Optimierung.',
    serviceName1: 'Webentwicklung',
    serviceName2: 'UI/UX Design',
    serviceName3: 'Softwarearchitektur & Design',
    serviceName4: 'Backend-Entwicklung & API-Integration',
    serviceName5: 'DevOps & Cloud',
    serviceName6: 'Datenbankverwaltung & Optimierung',
    servicedesc1: 'Leistungsstarke Webanwendungen mit Vue.js und API-Integration für reibungslose, moderne Schnittstellen.',
    servicedesc2: 'Produktorientiertes UI/UX-Design: Wireframes, Figma-Mockups und Prototypen für eine klare und attraktive Benutzererfahrung.',
    servicedesc3: 'Konzeptionelle Modellierung von Systemen (UML), Architektur relationaler Datenbanken und Design der Geschäftslogik, um skalierbare, strukturierte und leistungsstarke Anwendungen zu gewährleisten.',
    servicedesc4: 'Robustes Datenbankdesign, Erstellung leistungsstarker und sicherer REST-APIs und optimierte Geschäftslogik zur Unterstützung Ihrer Anwendungen.',
    servicedesc5: 'Kontinuierliche Integration und Bereitstellung: Automatisierung, Verwaltung von Cloud-Ressourcen und Überwachung für einen reibungslosen und zuverlässigen Betrieb.',
    servicedesc6: 'Konzeptionelle Modellierung von Datenbanken, Optimierung von Abfragen und Leistungsmanagement, um eine schnelle und zuverlässige Datenzugänglichkeit zu gewährleisten.',
    servicesGetInTouch: 'Kontakt aufnehmen',

    //About section

    aboutLink: 'Über mich',
    aboutPrefix: 'Über',
    aboutTitle: 'mich',
    aboutSubtitle: 'Full-Stack Entwickler',
    aboutParagraph:
      'Ich entwerfe und entwickle moderne, schnelle und zuverlässige Anwendungen. Mein Ansatz: sauberen Code, eine durchdachte UX und eine angenehme Entwickler-Experience (Performance, Wartbarkeit, Skalierbarkeit).',
    aboutBadge1: 'Professionell',
    aboutBadge2: 'kreativ',
    aboutBadge3: 'Entwickler',
    aboutBadge4: 'Designer',
    aboutYearsExperience: '2+ Jahre Erfahrung',
    aboutCtaPortfolio: 'Portfolio ansehen',
    aboutCtaContact: 'Kontakt',

    //skills section
    skillLink: 'Fähigkeiten & Erfahrung',
    skillsSectionTitle1: 'Fähigkeiten ',
    skillsSectionTitle: '& Erfahrung',
    skillParagraph: 'Meine technischen Fähigkeiten im Dienst realer Projekte: Entwicklung, Integration, UX und Lieferung.',
    technicalSkillsTitle: 'Technische Fähigkeiten',
    techStackTitle: 'Tech Stack',
    workExperienceTitle: 'Berufserfahrung',
    SkillsDesc1: 'Teilnahme an der Erstellung einer Webanwendung zum Verkauf von Kunstobjekten: Integration von Komponenten, Zusammenarbeit im Backend und Umsetzung von Best Practices (Git, Codequalität).',
    SkillsDesc2: 'Teilnahme an der Erstellung einer Website zum Verkauf von Spielen, Konsolen und Gaming-Zubehör: Zusammenarbeit im Frontend und Backend sowie Umsetzung von Best Practices (Git, Codequalität).',

    // Projects section

    projectsTitle: 'Projekte',
    projectsIntro: 'Eine Auswahl meiner aktuellen Arbeiten und kreativen Lösungen.',
    projectsdesc1: 'E-Commerce-Plattform entwickelt für eine solide Back-End-Erfahrung: Produktmanagement, Kundenreise und integrierte Funktionen.',
    projectsdesc2: 'E-Learning-Anwendung mit einem modernen Stack: dynamische Seiten, Inhaltsverwaltung und Tracking für eine reibungslose Benutzererfahrung.',
    projectsdesc3: 'Full-Stack-E-Commerce-Projekt: reaktive Front-Interfaces, klare Back-End-Logik und persistente Daten für zuverlässige Navigation und Warenkorb.',
    projectsdesc4: 'Belleza-Website für eine reaktive Front-End-Erfahrung: klare Schnittstellen, strukturierte Back-End-Logik und persistente Daten für eine zuverlässige Benutzerreise.',
    projectsdesc6: 'Valentine-Website für eine schnelle und elegante Erfahrung: poliertes Layout, leichte Interaktionen und mobilefreundliches Rendering.',
    projectsdesc5: 'Dashboard in der Finalisierung: Datenanzeige, Back-End-Logik und responsive Oberfläche für klare Kontrolle über Informationen.',
    projectLive: 'Live-Demo',
    projectProgress: 'In Bearbeitung',
    projectsCtaViewAll: 'Alle Projekte ansehen',
    projectsCtaDiscuss: 'Projekt besprechen',
    projectDetailsCta: 'Details ansehen',
    projectsShowMore: 'Mehr Projekte anzeigen',
    projectsShowLess: 'Weniger anzeigen',
    modalStack: 'Tech-Stack',
    modalClose: 'Schließen',
    modalRole: 'Meine Rolle',
    modalObjective: 'Ziel',

    githubTitle: 'GitHub-Aktivität',
    githubDesc: 'Ein Live-Einblick in meine Beiträge und meistgenutzten Sprachen.',
    githubRepos: 'Öffentliche Repos',
    githubStars: 'Erhaltene Sterne',
    githubFollowers: 'Follower',
    githubTopLangs: 'Meistgenutzte Sprachen',
    githubError: 'Statistiken sind vorübergehend nicht verfügbar (GitHub-Ratenlimit). Mein Profil direkt ansehen:',

    whatsappPreviewTitle: 'Nachrichtenvorschau',
    whatsappPreviewDesc: 'Dies ist die Nachricht, die per WhatsApp gesendet wird.',
    whatsappPreviewEdit: 'Bearbeiten',
    whatsappPreviewSend: 'Bestätigen und senden',

    testimonialsTitle: 'Referenzen',
    testimonialsDesc: 'Was Leute über die Zusammenarbeit mit mir sagen',
    testimonialstText: 'Von der Idee bis zum Start: schnell, gründlich und ergebnisorientiert. Ich empfehle Maxime sehr.',
    testimonialsPosition: 'Zusammenarbeit',

    contactTitle: 'Kontakt',
    contactSecondTitle: 'aufnehmen',
    contactIntro: 'Lass uns gemeinsam an deinem nächsten Projekt arbeiten',

    contactInfoTitle: 'Kontakt informationen',
    contactEmailLabel: 'E-Mail',
    contactPhoneLabel: 'Telefon',
    contactLocationLabel: 'Standort',

    contactFollowMe: 'Folge mir',

    contactFormName: 'Name',
    contactFormEmail: 'E-Mail',
    contactFormSubject: 'Betreff',
    contactFormMessage: 'Nachricht',
    contactFormPlaceholderName: 'Dein Name',
    contactFormPlaceholderEmail: 'deine@email.com',
    contactFormPlaceholderSubject: 'Betreff',
    contactFormPlaceholderMessage: 'Deine Nachricht',
    contactFormSend: 'Nachricht senden',
    contactSuccess: '✅ Nachricht erhalten. Ich melde mich bald bei dir.',

    footerDesc: 'Ich baue moderne Webanwendungen mit besonderem Augenmerk auf Benutzererfahrung, Codequalität und Leistung. Lass uns über dein nächstes Projekt sprechen.',
    footerQuickLinks: 'Schnelllinks',
    homeFooter: 'Startseite',
    footerServices: 'Leistungen',
    footerPrivacyPolicy: 'Datenschutzerklärung',
    footerTermsOfService: 'Nutzungsbedingungen',
    footerCopyright: '© {year} Maxime. Alle Rechte vorbehalten',
  },
};

export function t(key, params) {
  const value = translations[i18nState.lang]?.[key] ?? translations.fr?.[key] ?? key;
  if (typeof value === 'string' && params) {
    return Object.keys(params).reduce(
      (str, paramKey) => str.replaceAll(`{${paramKey}}`, params[paramKey]),
      value
    );
  }
  return value;
}

export function setLang(lang) {
  i18nState.lang = lang;
  document.documentElement.lang = lang;
}

