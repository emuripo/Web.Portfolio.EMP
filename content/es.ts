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
    bookCall: "Agendar llamada",
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
    eyebrow: "Ingeniero de Software Senior",
    title: "Esteban Murillo Porras",
    subtitle:
      "Ingeniero en backend, nube y AI con una década construyendo productos escalables y confiables.",
    highlights: [
      "10+ años en backend, datos y nube",
      "Liderazgo en sistemas distribuidos y observabilidad",
      "Bilingüe: Español (Nativo), Inglés (C1)",
    ],
    primaryCta: {
      label: "Descargar CV",
      href: "/resume.pdf",
      ariaLabel: "Descargar el CV de Esteban en PDF",
    },
    secondaryCta: {
      label: "Agendar llamada",
      href: CONTACT.calendly,
      ariaLabel: "Abrir Calendly para agendar una llamada",
    },
    portraitAlt: "Retrato de Esteban Murillo Porras",
  },
  stats: {
    headline: "Impacto en cifras",
    items: [
      { label: "Disponibilidad", value: "99.99%", helper: "Lideré confiabilidad y guardias" },
      { label: "Liderazgo", value: "8 ingenieros", helper: "Mentoría y coaching" },
      { label: "Ahorro en nube", value: "$280k", helper: "Optimización de cómputo y storage" },
    ],
  },
  about: {
    headline: "Construyo sistemas resilientes con impacto medible",
    body: [
      "Soy un ingeniero basado en Costa Rica enfocado en backend, nube y productos impulsados por AI. Disfruto traducir necesidades de negocio en servicios mantenibles, observables y eficientes.",
      "Trabajo reciente incluye migraciones de plataforma, arquitecturas event-driven y endurecer confiabilidad con SLOs, trazas y ejercicios de caos.",
    ],
    tags: ["Backend", "Cloud", "AI", "SRE", "Plataforma", "Liderazgo"],
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
          "Construí y mantuve APIs en Python, reduciendo errores de datos en 20%.",
          "Desarrollé componentes UI habilitados con AI, mejorando usabilidad y velocidad de carga en 30%.",
          "Automatizé despliegues con Jenkins y Terraform, reduciendo el tiempo de preparación de entornos en 40%.",
          "Usé AWS Lambda para cargas de datos, reduciendo intervenciones manuales en 25%.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "International College SEK",
        period: "Abr 2022 – Jun 2025",
        location: "San José, Costa Rica",
        achievements: [
          "Entregué plataformas de RRHH y salud con APIs en Python, mejorando confiabilidad en 35%.",
          "Construí pipelines CI/CD con Jenkins, GitHub Actions y Terraform, reduciendo ciclos de liberación en 35%.",
          "Desplegué aplicaciones con Docker y Kubernetes (AWS EKS), reduciendo downtime en 40%.",
          "Apliqué RBAC y capas de validación, bajando riesgos de cumplimiento en 30%.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Advirsors RM S.A",
        period: "Feb 2018 – Abr 2022",
        location: "San José, Costa Rica",
        achievements: [
          "Construí APIs REST en Python integradas con PostgreSQL, mejorando confiabilidad de transacciones en 35%.",
          "Desarrollé tableros para conciliación y reportes en tiempo real.",
          "Automatizé flujos y integraciones con APIs de terceros, reduciendo carga administrativa en 50%.",
        ],
      },
    ],
  },
  projects: {
    headline: "Proyectos destacados",
    items: [
      {
        name: "Cloud Cost Guard",
        description: "Gobernanza de costos en la nube con alertas de anomalía y rightsizing automático.",
        tech: ["TypeScript", "AWS", "EventBridge", "Lambda", "Step Functions"],
        impact: "Redujo el gasto mensual en 18% en servicios clave.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-1.png",
      },
      {
        name: "Observability Starter",
        description: "Plantillas opinionadas para trazas, métricas y logs con OpenTelemetry.",
        tech: ["Node.js", "OpenTelemetry", "Grafana", "Tempo"],
        impact: "Redujo el tiempo de onboarding en 40% para nuevos servicios.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-2.png",
      },
      {
        name: "AI Incident Assistant",
        description: "Asistente con LLM que resume incidentes y sugiere tareas de remediación para on-call.",
        tech: ["Python", "LangChain", "FastAPI", "Azure OpenAI"],
        impact: "Aceleró los postmortems y bajó la carga cognitiva en outages.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-3.png",
      },
    ],
  },
  skills: {
    headline: "Habilidades",
    groups: [
      {
        title: "Backend",
        items: ["TypeScript", "Node.js", "Python", "GraphQL", "REST", "gRPC"],
      },
      {
        title: "Nube y Plataforma",
        items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      },
      {
        title: "Datos y AI",
        items: ["PostgreSQL", "Redis", "Kafka", "Snowflake", "APIs de OpenAI", "Feature Stores"],
      },
      {
        title: "Prácticas",
        items: ["SRE", "Observabilidad", "DDD", "Testing", "Seguridad", "Mentoría"],
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
