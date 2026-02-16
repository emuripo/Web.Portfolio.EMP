import { ANCHORS, CONTACT } from "../lib/constants";
import type { Translation } from "./types";

export const es = {
  meta: {
    language: "es",
    locale: "es-CR",
  },
  labels: {
    brand: "Esteban Murillo",
    skipToContent: "Saltar al contenido",
    languageToggle: "ES",
    downloadResume: "Descargar CV",
    bookCall: "Ver proyectos GenAI",
    watchVideo: "Ver introducción",
    viewProject: "Ver proyecto",
    linkedin: "LinkedIn",
    github: "GitHub",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  nav: [
    { label: "Inicio", href: `#${ANCHORS.hero}` },
    { label: "Impacto", href: `#${ANCHORS.stats}` },
    { label: "Sobre mí", href: `#${ANCHORS.about}` },
    { label: "Video", href: `#${ANCHORS.video}` },
    { label: "Experiencia", href: `#${ANCHORS.experience}` },
    { label: "Proyectos", href: `#${ANCHORS.projects}` },
    { label: "Habilidades", href: `#${ANCHORS.skills}` },
    { label: "Contacto", href: `#${ANCHORS.contact}` },
    { label: "CV", href: `#${ANCHORS.resume}` },
  ],
  hero: {
    eyebrow: "Ingeniero Senior Backend y GenAI",
    title: "RAG, integraciones LLM, entrega cloud-native",
    subtitle:
      "Diseño pipelines RAG, funcionalidades con LLM y backends automatizados en la nube que reducen tiempos de búsqueda y carga operativa.",
    highlights: [
      "-60% tiempo de búsqueda con RAG + Azure Cognitive Search",
      "+30% usabilidad/velocidad con UI habilitada por AI",
      "-40% setup de entornos con Jenkins + Terraform",
    ],
    primaryCta: {
      label: "Descargar CV",
      href: "/resume.pdf",
      ariaLabel: "Descargar el CV de Esteban en PDF",
    },
    secondaryCta: {
      label: "Ver proyectos GenAI",
      href: `#${ANCHORS.projects}`,
      ariaLabel: "Ir a los proyectos de GenAI y RAG",
    },
    portraitAlt: "Retrato de Esteban Murillo Porras",
  },
  stats: {
    headline: "Impacto en cifras",
    items: [
      {
        label: "Tiempo de búsqueda RAG",
        value: "-60%",
        helper: "Azure Cognitive Search + pipeline RAG",
      },
      {
        label: "Rendimiento UI con AI",
        value: "+30%",
        helper: "Usabilidad y velocidad de carga",
      },
      {
        label: "Automatización de entornos",
        value: "-40%",
        helper: "Jenkins + Terraform",
      },
    ],
  },
  about: {
    headline: "Construyo sistemas cloud-native con LLM y RAG",
    body: [
      "Ingeniero de software senior (7+ años, Costa Rica) que diseña backends e integraciones GenAI para reducir tiempos de búsqueda, mejorar usabilidad y automatizar la entrega en la nube.",
      "Qué hago: pipelines RAG, integraciones OpenAI, microservicios event-driven, automatización CI/CD, operación en Kubernetes.",
    ],
    tags: ["RAG", "OpenAI APIs", "Cloud-native", "Automatización", "Kubernetes", "Python/Java"],
    imageAlt: "Esteban hablando en una conferencia",
  },
  video: {
    headline: "Introducción rápida",
    description:
      "Un breve resumen de mi trayectoria, estilo de liderazgo y cómo colaboro con producto y reclutamiento.",
    youtubeId: "uvLTy_N54qI",
    caption: "Resumen de 2 minutos en inglés",
  },
  experience: {
    headline: "Experiencia",
    items: [
      {
        role: "Senior Software Engineer",
        company: "Infinite Computer Solutions",
        period: "Jun 2025 – Presente",
        location: "San José, Costa Rica",
        achievements: [
          "Construí APIs en Python, reduciendo errores de datos en 20% y estabilizando servicios.",
          "Entregué UI habilitada por AI, mejorando usabilidad y velocidad de carga en 30%.",
          "Automaticé entornos con Jenkins + Terraform, bajando el setup en 40%.",
          "Usé AWS Lambda para reducir intervenciones manuales en 25% en flujos de datos.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "International College SEK",
        period: "Abr 2022 – Jun 2025",
        location: "San José, Costa Rica",
        achievements: [
          "Entregué plataformas de RRHH y salud con APIs en Python, mejorando confiabilidad en 35%.",
          "Reducí ciclos de liberación en 35% con CI/CD (Jenkins, GitHub Actions, Terraform).",
          "Bajé downtime en 40% usando Docker y Kubernetes en AWS EKS.",
          "Disminuí riesgo de cumplimiento en 30% con RBAC y validaciones.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Advirsors RM S.A",
        period: "Feb 2018 – Abr 2022",
        location: "San José, Costa Rica",
        achievements: [
          "Construí APIs REST en Python con PostgreSQL, mejorando confiabilidad de transacciones en 35%.",
          "Desarrollé tableros de conciliación en tiempo real.",
          "Automaticé flujos e integraciones con APIs de terceros, reduciendo carga administrativa en 50%.",
        ],
      },
    ],
  },
  projects: {
    headline: "Proyectos destacados",
    items: [
      {
        name: "Asistente de Búsqueda de Conocimiento (RAG)",
        description:
          "Python + OpenAI APIs con pipeline RAG sobre Azure Cognitive Search, reduciendo tiempo de búsqueda en 60%.",
        tech: ["RAG", "Azure Cognitive Search", "OpenAI APIs", "Python"],
        impact: "-60% tiempo de búsqueda",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-1.png",
      },
      {
        name: "Sistema de Pagos de Membresías",
        description:
          "Microservicios en Spring Boot con colas de reintento en RabbitMQ para pagos multi-tenant, logrando 99.95% de confiabilidad y -40% tiempo de despliegue con Jenkins + Docker.",
        tech: ["Spring Boot", "RabbitMQ", "Microservicios", "CI/CD"],
        impact: "99.95% confiabilidad",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-2.png",
      },
      {
        name: "Sistema de Gestión de RRHH",
        description:
          "APIs en Python para portales empresariales atendiendo 20K+ usuarios; Docker + Kubernetes redujeron downtime en 35%.",
        tech: ["Python", "Kubernetes", "Docker", "APIs"],
        impact: "-35% downtime",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-3.png",
      },
    ],
  },
  skills: {
    headline: "Habilidades",
    groups: [
      {
        title: "AI y LLMs",
        items: ["OpenAI APIs", "Prompt Engineering", "RAG"],
      },
      {
        title: "Nube y Plataforma",
        items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      },
      {
        title: "Backend",
        items: ["Python", "Java/Spring", "Node.js", "REST", "gRPC"],
      },
      {
        title: "Datos",
        items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB", "SQL Server"],
      },
      {
        title: "Testing",
        items: ["PyTest", "JUnit", "Jest", "Cypress", "Postman", "xUnit"],
      },
    ],
  },
  contact: {
    headline: "Colaboremos",
    subhead: "Disponible para roles senior y liderazgo técnico.",
    emailLabel: "Correo",
    phoneLabel: "Llamar",
    calendlyLabel: "Agendar en Calendly",
  },
  resume: {
    headline: "CV",
    subhead: "Historial completo, métricas de impacto y referencias en PDF.",
    cta: {
      label: "Descargar CV",
      href: "/resume.pdf",
      ariaLabel: "Descargar el CV de Esteban",
    },
  },
  footer: {
    note: "Construido con detalle — Esteban Murillo Porras",
  },
} satisfies Translation;
