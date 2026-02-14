"use client";

import { ANCHORS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Resume() {
  const { translation } = useTranslation();
  const { resume } = translation;

  return (
    <Section id={ANCHORS.resume} heading={resume.headline}>
      <Card className="flex flex-col items-start gap-4 bg-white/5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white/80">{resume.subhead}</p>
        </div>
        <Button
          href={resume.cta.href}
          aria-label={resume.cta.ariaLabel}
          target="_blank"
          rel="noreferrer"
        >
          {resume.cta.label}
        </Button>
      </Card>
    </Section>
  );
}

export default Resume;
