export const ANCHORS = {
  hero: "hero",
  stats: "impact",
  about: "about",
  video: "video",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  contact: "contact",
  resume: "resume",
  footer: "footer",
} as const;

type VideoMode = "youtube" | "local";

export const FEATURE_FLAGS: {
  videoMode: VideoMode;
  enableCalendly: boolean;
  showSections: Record<keyof typeof ANCHORS, boolean>;
  projectsTilt: boolean;
} = {
  videoMode: "youtube",
  enableCalendly: true,
  projectsTilt: true,
  showSections: {
    hero: true,
    stats: true,
    about: true,
    video: true,
    experience: true,
    projects: true,
    skills: true,
    contact: true,
    resume: true,
    footer: true,
  },
};

export const CONTACT = {
  email: "e.murillo.dev@gmail.com",
  phone: "+506 8626-6357",
  github: "https://github.com/emuripo",
  linkedin: "https://www.linkedin.com/in/emurillop",
  calendly: "https://calendly.com/emuripo/intro",
};

export const SEO = {
  siteUrl: "https://estebanmurillo.dev",
  title: "Esteban Murillo — RAG & Cloud-Native Backend Engineer",
  description:
    "Senior Software Engineer (7+ yrs, Costa Rica) delivering RAG pipelines, OpenAI integrations, and cloud-native automation with measurable outcomes.",
  ogImage: "/assets/img/og.png",
  twitter: "@esteban_codes",
};
