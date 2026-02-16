"use client";

import { motion } from "framer-motion";
import { ANCHORS } from "../lib/constants";
import { motionVariants } from "./motion/motionVariants";
import { Reveal } from "./motion/Reveal";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Skills() {
  const { translation } = useTranslation();
  const { skills } = translation;

  return (
    <Section id={ANCHORS.skills} heading={skills.headline}>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <Card className="bg-white/5">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <motion.div
                variants={motionVariants.staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-3 flex flex-wrap gap-2 text-sm text-white/75"
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={motionVariants.staggerItem}
                    className="rounded-full bg-white/10 px-3 py-1"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
