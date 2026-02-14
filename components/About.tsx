"use client";

import Image from "next/image";
import { ANCHORS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function About() {
  const { translation } = useTranslation();
  const { about } = translation;

  return (
    <Section id={ANCHORS.about} heading={about.headline}>
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-white/80">
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[22rem]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <Image
              src="/assets/img/esteban-about.jpg"
              alt={about.imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 352px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
