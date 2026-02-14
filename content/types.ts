export type Language = "en" | "es";

export interface CTA {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface Stat {
  label: string;
  value: string;
  helper?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  impact: string;
  link: string;
  image: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ContactContent {
  headline: string;
  subhead: string;
  emailLabel: string;
  phoneLabel: string;
  calendlyLabel: string;
}

export interface ResumeContent {
  headline: string;
  subhead: string;
  cta: CTA;
}

export interface Translation {
  meta: {
    language: Language;
    locale: string;
  };
  labels: {
    brand: string;
    skipToContent: string;
    languageToggle: string;
    downloadResume: string;
    bookCall: string;
    watchVideo: string;
    viewProject: string;
    linkedin: string;
    github: string;
    openMenu: string;
    closeMenu: string;
  };
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: string[];
    primaryCta: CTA;
    secondaryCta: CTA;
    portraitAlt: string;
  };
  stats: {
    headline: string;
    items: Stat[];
  };
  about: {
    headline: string;
    body: string[];
    tags: string[];
    imageAlt: string;
  };
  video: {
    headline: string;
    description: string;
    youtubeId: string;
    caption: string;
  };
  experience: {
    headline: string;
    items: ExperienceItem[];
  };
  projects: {
    headline: string;
    items: ProjectItem[];
  };
  skills: {
    headline: string;
    groups: SkillGroup[];
  };
  contact: ContactContent;
  resume: ResumeContent;
  footer: {
    note: string;
  };
}
