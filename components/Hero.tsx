"use client";

import Image from "next/image";
import { ANCHORS, CONTACT } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Tag } from "./ui/Tag";

export function Hero() {
  const { translation } = useTranslation();
  const { hero, labels } = translation;

  return (
    <section id={ANCHORS.hero} className="pb-12 pt-16 md:pt-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <Tag>{hero.eyebrow}</Tag>
          <h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="text-lg text-white/80 md:text-xl">{hero.subtitle}</p>
          <ul className="space-y-2 text-sm text-white/70">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button
              href={hero.primaryCta.href}
              aria-label={hero.primaryCta.ariaLabel}
              target="_blank"
              rel="noreferrer"
            >
              {labels.downloadResume}
            </Button>
            <Button href={CONTACT.calendly} variant="ghost" aria-label={labels.bookCall}>
              {labels.bookCall}
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative w-full max-w-[24rem]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <Image
                src="/assets/img/esteban-hero.jpg"
                alt={hero.portraitAlt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 384px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
