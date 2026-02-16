# Esteban Murillo Porras — Recruiter Landing Page

This repository defines and implements a recruiter-focused personal landing page for a Senior Software Engineer.
This README.md is the SINGLE SOURCE OF TRUTH and must be treated as a complete build specification.
All architecture, code, structure, configuration, and features must be implemented strictly based on this document.
No additional prompts or external instructions are required.

====================================================================
PROJECT GOALS
====================================================================
- Build a recruiter-first personal landing page
- Clearly present senior-level engineering experience
- Highlight measurable impact, projects, and skills
- Include professional photos, video introduction, resume download, and Calendly booking
- Follow production-grade frontend engineering standards
- Be portfolio-ready and deployable

====================================================================
TECH STACK (MANDATORY)
====================================================================
- Next.js (latest stable) using App Router
- TypeScript (strict mode)
- Tailwind CSS
- next/font (Inter)
- next/image for all images
- Node.js >= 18
- npm

====================================================================
DESIGN & UX STYLE
====================================================================
- Dark tech / agency aesthetic
- Background colors: #050807 – #0b0f0e
- Accent color: neon green #2dff7a
- Large uppercase hero headline
- Right-aligned professional portrait image
- Minimal, premium UI
- Subtle animations respecting prefers-reduced-motion

====================================================================
PAGE STRUCTURE (ORDER IS REQUIRED)
====================================================================
1. Sticky Navbar
2. Hero (headline, portrait, CTAs)
3. Impact / Stats
4. About Me
5. Video Introduction (English)
6. Experience Timeline
7. Projects
8. Skills
9. Contact + Calendly
10. Resume Download
11. Footer

Each section must have a stable anchor ID.

====================================================================
RESUME DOWNLOAD (MANDATORY)
====================================================================
- Resume must be a PDF located at: /public/resume.pdf
- Resume must be accessible from:
  - Hero section CTA
  - Dedicated Resume section
- Button labels:
  - EN: Download Resume
  - ES: Descargar CV
- Resume opens in a new tab
- Accessible aria-label required

====================================================================
PROJECT STRUCTURE (MUST MATCH EXACTLY)
====================================================================
/app
  layout.tsx
  page.tsx
  globals.css

/components
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  About.tsx
  VideoIntro.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Contact.tsx
  Resume.tsx
  Footer.tsx
  LanguageToggle.tsx
  /ui
    Button.tsx
    Card.tsx
    Container.tsx
    Section.tsx
    Tag.tsx

/content
  types.ts
  en.ts
  es.ts

/lib
  cn.ts
  seo.ts
  constants.ts

/public
  /assets
    /img
      esteban-hero.PNG
      esteban-about.JPG
      esteban-speaking.jpg
      project-*.png
      og.png
    /video
      esteban-intro.mp4 (optional)
  resume.pdf

/tests
  home.spec.ts
  i18n.spec.ts

.github/workflows
  ci.yml

====================================================================
CONTENT MODEL (STRICT, TYPED)
====================================================================
- ALL visible text and data MUST come from /content
- NO hardcoded strings in components
- Content must be strongly typed using TypeScript interfaces
- Use TypeScript `satisfies` to validate EN/ES dictionaries

Default profile values:
- Name: Esteban Murillo Porras
- Role: Senior Software Engineer (Backend / Cloud / AI)
- Location: Costa Rica
- Languages: Spanish (Native), English (C1)
- Email: e.murillo.dev@gmail.com
- Phone: +506 8626-6357
- GitHub: https://github.com/emuripo
- LinkedIn: https://www.linkedin.com/in/emurillop

====================================================================
INTERNATIONALIZATION (EN / ES)
====================================================================
- Default language: English
- Toggle: EN | ES
- Persist language selection in localStorage
- Implement using React Context + useReducer
- Components consume a typed `t` object only

====================================================================
FEATURE FLAGS
====================================================================
- Video mode: youtube | local
- Enable or disable Calendly embed
- Section visibility toggles

====================================================================
PERFORMANCE REQUIREMENTS
====================================================================
- Use next/image for all images
- Hero image marked as priority
- Lazy-load remaining media
- Dynamic imports for:
  - Video section
  - Calendly embed
- Prevent layout shift using aspect-ratio
- Respect prefers-reduced-motion

====================================================================
ACCESSIBILITY REQUIREMENTS
====================================================================
- Skip-to-content link
- Single H1 on page
- Keyboard navigable UI
- aria-labels for icons and buttons
- Visible focus states
- Accessible mobile menu

====================================================================
SEO REQUIREMENTS
====================================================================
- Metadata defined in layout.tsx
- OpenGraph and Twitter cards
- JSON-LD Person schema
- OG image located at /public/assets/img/og.png

====================================================================
TESTING
====================================================================
- Use Playwright
- Required smoke tests:
  - Home page loads
  - Language toggle switches EN → ES
  - Resume download link exists

====================================================================
CI / CODE QUALITY
====================================================================
- GitHub Actions workflow must:
  - Install dependencies
  - Lint
  - Type-check
  - Build
  - Run tests
- Include ESLint, Prettier, .editorconfig, .nvmrc

====================================================================
LOCAL DEVELOPMENT
====================================================================
npm install
npm run dev

====================================================================
DEPLOYMENT
====================================================================
- Deploy using Vercel

====================================================================
EXPECTED OUTCOME
====================================================================
- Clean, professional recruiter landing page
- Senior-level frontend architecture
- Typed, maintainable, production-quality code
