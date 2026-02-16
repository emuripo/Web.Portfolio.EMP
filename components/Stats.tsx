"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ANCHORS } from "../lib/constants";
import { motionVariants, defaultTransition } from "./motion/motionVariants";
import { useCountUp } from "./motion/useCountUp";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Stats() {
  const { translation } = useTranslation();
  const { stats } = translation;

  return (
    <Section id={ANCHORS.stats} heading={stats.headline}>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.items.map((item, index) => (
          <StatItem key={item.label} item={item} delay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
}

type StatItemProps = {
  item: {
    label: string;
    value: string;
    helper?: string;
  };
  delay?: number;
};

function StatItem({ item, delay = 0 }: StatItemProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, { amount: 0.4, once: true });
  const displayValue = useCountUp(item.value, { inView, startValue: 0 });

  return (
    <motion.div
      ref={cardRef}
      variants={motionVariants.fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ ...defaultTransition, delay }}
    >
      <Card className="border border-white/10 bg-white/5 text-center">
        <div className="text-3xl font-semibold text-accent">{displayValue}</div>
        <div className="mt-2 text-sm uppercase tracking-wide text-white/70">{item.label}</div>
        {item.helper ? <p className="mt-2 text-xs text-white/60">{item.helper}</p> : null}
      </Card>
    </motion.div>
  );
}

export default Stats;
