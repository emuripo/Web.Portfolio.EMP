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
    bookCall: "See GenAI Projects",
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
    eyebrow: "Senior Backend & GenAI Engineer",
    title: "RAG, LLM integrations, cloud-native delivery",
    subtitle:
      "I design RAG pipelines, LLM-powered features, and automated cloud backends that reduce time-to-knowledge and operational load.",
    highlights: [
      "-60% lookup time with RAG + Azure Cognitive Search",
      "+30% usability/page load from AI-enabled UI components",
      "-40% environment setup with Jenkins + Terraform automation",
    ],
    primaryCta: {
      label: "Download Resume",
      href: "/resume.pdf",
      ariaLabel: "Download Esteban's resume in PDF",
    },
    secondaryCta: {
      label: "See GenAI Projects",
      href: `#${ANCHORS.projects}`,
      ariaLabel: "Jump to GenAI and RAG projects",
    },
    portraitAlt: "Portrait of Esteban Murillo Porras",
  },
  stats: {
    headline: "Impact at a glance",
    items: [
      {
        label: "RAG lookup time",
        value: "-60%",
        helper: "Azure Cognitive Search + RAG pipeline",
      },
      {
        label: "AI-enabled UI performance",
        value: "+30%",
        helper: "Usability and page load improvements",
      },
      {
        label: "Env setup automation",
        value: "-40%",
        helper: "Jenkins + Terraform",
      },
    ],
  },
  about: {
    headline: "I build cloud-native systems with LLM and RAG features",
    body: [
      "Senior Software Engineer (7+ years, Costa Rica) building backends and GenAI integrations that cut lookup time, improve usability, and automate delivery across cloud platforms.",
      "What I do: RAG pipelines, OpenAI integrations, event-driven microservices, CI/CD automation, Kubernetes operations.",
    ],
    tags: ["RAG", "OpenAI APIs", "Cloud-native", "Automation", "Kubernetes", "Python/Java"],
    imageAlt: "Esteban speaking at a conference",
  },
  video: {
    headline: "Quick introduction",
    description:
      "A brief overview of my background, leadership approach, and how I collaborate with product and recruiting teams.",
    youtubeId: "uvLTy_N54qI",
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
          "Built Python APIs, reducing data errors by 20% and stabilizing services.",
          "Delivered AI-enabled UI components, improving usability and page load speed by 30%.",
          "Automated environments with Jenkins + Terraform, cutting setup time by 40%.",
          "Used AWS Lambda to trim manual interventions by 25% for data workflows.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "International College SEK",
        period: "Apr 2022 – Jun 2025",
        location: "San José, Costa Rica",
        achievements: [
          "Shipped HR and healthcare platforms with Python APIs, boosting reliability by 35%.",
          "Cut release cycles by 35% via CI/CD with Jenkins, GitHub Actions, and Terraform.",
          "Reduced downtime by 40% using Docker and Kubernetes on AWS EKS.",
          "Lowered compliance risk by 30% with RBAC and validation layers.",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Advirsors RM S.A",
        period: "Feb 2018 – Apr 2022",
        location: "San José, Costa Rica",
        achievements: [
          "Built Python REST APIs with PostgreSQL, improving transaction reliability by 35%.",
          "Delivered reconciliation dashboards for real-time reporting.",
          "Automated workflows and 3rd-party API integrations, cutting admin workload by 50%.",
        ],
      },
    ],
  },
  projects: {
    headline: "Selected projects",
    items: [
      {
        name: "AI Knowledge Search Assistant (RAG)",
        description:
          "Python + OpenAI APIs with a RAG pipeline over Azure Cognitive Search, reducing lookup time by 60%.",
        tech: ["RAG", "Azure Cognitive Search", "OpenAI APIs", "Python"],
        impact: "-60% lookup time",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-1.png",
      },
      {
        name: "Membership Payment System",
        description:
          "Spring Boot microservices with RabbitMQ retry queues for multi-tenant payments, achieving 99.95% reliability and -40% deploy time via Jenkins + Docker.",
        tech: ["Spring Boot", "RabbitMQ", "Microservices", "CI/CD"],
        impact: "99.95% reliability",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-2.png",
      },
      {
        name: "HR Management System",
        description:
          "Python APIs for enterprise portals serving 20K+ users; Docker + Kubernetes reduced downtime by 35%.",
        tech: ["Python", "Kubernetes", "Docker", "APIs"],
        impact: "-35% downtime",
        link: "https://github.com/emuripo",
        image: "/assets/img/project-3.png",
      },
    ],
  },
  skills: {
    headline: "Skills",
    groups: [
      {
        title: "AI & LLMs",
        items: ["OpenAI APIs", "Prompt Engineering", "RAG"],
      },
      {
        title: "Cloud & Platform",
        items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      },
      {
        title: "Backend",
        items: ["Python", "Java/Spring", "Node.js", "REST", "gRPC"],
      },
      {
        title: "Data",
        items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB", "SQL Server"],
      },
      {
        title: "Testing",
        items: ["PyTest", "JUnit", "Jest", "Cypress", "Postman", "xUnit"],
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
