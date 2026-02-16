"use client";

import { ANCHORS } from "../lib/constants";
import { Reveal } from "./motion/Reveal";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Experience() {
  const { translation } = useTranslation();
  const { experience } = translation;

  return (
    <Section id={ANCHORS.experience} heading={experience.headline}>
      <div className="space-y-4">
        {experience.items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
            <Card className="bg-white/5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold leading-tight">{item.role}</h3>
                  <p className="text-white/70">{item.company}</p>
                </div>
                <div className="text-sm text-white/60 md:text-right">
                  <div>{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {item.achievements.map((ach) => (
                  <li key={ach} className="flex gap-2 leading-relaxed">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
