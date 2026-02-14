import { ANCHORS, CONTACT } from "../lib/constants";
import type { Translation } from "./types";

export const en = {
  meta: {
    language: "en",
    locale: "en-US",
  },
  labels: {
    brand: "Esteban Murillo",
    skipToContent: "Skip to content",
    languageToggle: "EN",
    downloadResume: "Download Resume",
    bookCall: "Book a Call",
    watchVideo: "Watch Introduction",
    viewProject: "View project",
    linkedin: "LinkedIn",
    github: "GitHub",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  nav: [
    { label: "Home", href: `#${ANCHORS.hero}` },
    { label: "Impact", href: `#${ANCHORS.stats}` },
    { label: "About", href: `#${ANCHORS.about}` },
    { label: "Video", href: `#${ANCHORS.video}` },
    { label: "Experience", href: `#${ANCHORS.experience}` },
    { label: "Projects", href: `#${ANCHORS.projects}` },
    { label: "Skills", href: `#${ANCHORS.skills}` },
    { label: "Contact", href: `#${ANCHORS.contact}` },
    { label: "Resume", href: `#${ANCHORS.resume}` },
  ],
  hero: {
    eyebrow: "Senior Software Engineer",
    title: "Esteban Murillo Porras",
    subtitle:
      "Backend, Cloud, and AI engineer with a decade of building reliable, scalable products for millions of users.",
    highlights: [
      "10+ years across backend, data, and cloud platforms",
      "Leadership in distributed systems, observability, and SRE",
      "Bilingual: Spanish (Native), English (C1)",
    ],
    primaryCta: {
      label: "Download Resume",
      href: "/resume.pdf",
      ariaLabel: "Download Esteban's resume in PDF",
    },
    secondaryCta: {
      label: "Book Intro Call",
      href: CONTACT.calendly,
      ariaLabel: "Open Calendly to book an intro call",
    },
    portraitAlt: "Portrait of Esteban Murillo Porras",
  },
  stats: {
    headline: "Impact at a glance",
    items: [
      { label: "Systems uptime", value: "99.99%", helper: "Led reliability and on-call" },
      { label: "Team leadership", value: "8 engineers", helper: "Mentored across squads" },
      { label: "Cloud savings", value: "$280k", helper: "Optimized compute & storage" },
    ],
  },
  about: {
    headline: "I build resilient systems with measurable outcomes",
    body: [
      "I'm a Costa Rica-based engineer focused on backend, cloud, and AI-driven products. I enjoy translating business needs into maintainable, observable, and cost-efficient services.",
      "Recent work includes platform migrations, designing event-driven architectures, and hardening reliability with SLOs, tracing, and chaos drills.",
    ],
    tags: ["Backend", "Cloud", "AI", "SRE", "Platform", "Leadership"],
    imageAlt: "Esteban speaking at a conference",
  },
  video: {
    headline: "Quick introduction",
    description:
      "A brief overview of my background, leadership approach, and how I collaborate with product and recruiting teams.",
    youtubeId: "dQw4w9WgXcQ",
    caption: "2-minute overview in English",
  },
  experience: {
    headline: "Experience",
    items: [
      {
        role: "Senior Software Engineer",
        company: "Infinite Computer Solutions",
        period: "Jun 2025 – Present",
        location: "San José, Costa Rica",
        achievements: [
          "Built and maintained Python APIs, reducing data errors by 20%.",
          "Developed AI-enabled UI components, improving usability and page load speed by 30%.",
          "Automated deployments with Jenkins and Terraform, reducing environment setup time by 40%.",
          "Leveraged AWS Lambda for data-driven workloads, reducing manual interventions by 25%.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "International College SEK",
        period: "Apr 2022 – Jun 2025",
        location: "San José, Costa Rica",
        achievements: [
          "Delivered HR and healthcare platforms using Python APIs, improving reliability by 35%.",
          "Built CI/CD pipelines with Jenkins, GitHub Actions, and Terraform, reducing release cycles by 35%.",
          "Deployed applications using Docker and Kubernetes (AWS EKS), reducing downtime by 40%.",
          "Applied RBAC and validation layers, cutting compliance risks by 30%.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Advirsors RM S.A",
        period: "Feb 2018 – Apr 2022",
        location: "San José, Costa Rica",
        achievements: [
          "Built Python REST APIs integrated with PostgreSQL, improving transaction reliability by 35%.",
          "Developed dashboards for real-time reconciliation and reporting.",
          "Automated workflows and third-party API integrations, reducing administrative workload by 50%.",
        ],
      },
    ],
  },
  projects: {
    headline: "Selected projects",
    items: [
      {
        name: "Cloud Cost Guard",
        description: "Automated cloud cost governance with anomaly alerts and rightsizing recommendations.",
        tech: ["TypeScript", "AWS", "EventBridge", "Lambda", "Step Functions"],
        impact: "Reduced monthly spend by 18% across targeted services.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-1.png",
      },
      {
        name: "Observability Starter",
        description: "Opinionated templates for distributed tracing, metrics, and logs with OpenTelemetry.",
        tech: ["Node.js", "OpenTelemetry", "Grafana", "Tempo"],
        impact: "Cut onboarding time for new services by 40%.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-2.png",
      },
      {
        name: "AI Incident Assistant",
        description: "LLM-powered assistant that summarizes incidents and proposes remediation tasks for on-call.",
        tech: ["Python", "LangChain", "FastAPI", "Azure OpenAI"],
        impact: "Accelerated incident postmortems and reduced cognitive load during outages.",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-3.png",
      },
    ],
  },
  skills: {
    headline: "Skills",
    groups: [
      {
        title: "Backend",
        items: ["TypeScript", "Node.js", "Python", "GraphQL", "REST", "gRPC"],
      },
      {
        title: "Cloud & Platform",
        items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      },
      {
        title: "Data & AI",
        items: ["PostgreSQL", "Redis", "Kafka", "Snowflake", "OpenAI APIs", "Feature Stores"],
      },
      {
        title: "Practices",
        items: ["SRE", "Observability", "Domain-Driven Design", "Testing", "Security", "Mentorship"],
      },
    ],
  },
  contact: {
    headline: "Let's collaborate",
    subhead: "Available for senior engineering roles and technical leadership opportunities.",
    emailLabel: "Email",
    phoneLabel: "Call",
    calendlyLabel: "Schedule via Calendly",
  },
  resume: {
    headline: "Resume",
    subhead: "Full project history, impact metrics, and references available in PDF.",
    cta: {
      label: "Download Resume",
      href: "/resume.pdf",
      ariaLabel: "Download Esteban's resume",
    },
  },
  footer: {
    note: "Built with care — Esteban Murillo Porras",
  },
} satisfies Translation;
