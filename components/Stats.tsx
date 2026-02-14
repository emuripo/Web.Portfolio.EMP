"use client";

import { ANCHORS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Stats() {
  const { translation } = useTranslation();
  const { stats } = translation;

  return (
    <Section id={ANCHORS.stats} heading={stats.headline}>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.items.map((item) => (
          <Card key={item.label} className="border border-white/10 bg-white/5 text-center">
            <div className="text-3xl font-semibold text-accent">{item.value}</div>
            <div className="mt-2 text-sm uppercase tracking-wide text-white/70">{item.label}</div>
            {item.helper ? <p className="mt-2 text-xs text-white/60">{item.helper}</p> : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Stats;
