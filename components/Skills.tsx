"use client";

import { ANCHORS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Skills() {
  const { translation } = useTranslation();
  const { skills } = translation;

  return (
    <Section id={ANCHORS.skills} heading={skills.headline}>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.groups.map((group) => (
          <Card key={group.title} className="bg-white/5">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/75">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
