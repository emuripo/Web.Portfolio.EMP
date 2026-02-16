"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ANCHORS, CONTACT } from "../lib/constants";
import { motionVariants, defaultTransition } from "./motion/motionVariants";
import { Reveal } from "./motion/Reveal";
import { useReducedMotionPreference } from "./motion/useReducedMotionPreference";
import { useTranslation } from "./LanguageToggle";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Tag } from "./ui/Tag";

export function Hero() {
  const { translation } = useTranslation();
  const { hero, labels } = translation;
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <section id={ANCHORS.hero} className="pb-12 pt-16 md:pt-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          variants={motionVariants.staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={shouldReduceMotion ? "visible" : "visible"}
          transition={defaultTransition}
          className="space-y-6"
        >
          <motion.div variants={motionVariants.staggerItem}>
            <Tag>{hero.eyebrow}</Tag>
          </motion.div>
          <motion.h1
            variants={motionVariants.staggerItem}
            className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p variants={motionVariants.staggerItem} className="text-lg text-white/80 md:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.ul variants={motionVariants.staggerItem} className="space-y-2 text-sm text-white/70">
            {hero.highlights.map((item) => (
              <motion.li key={item} variants={motionVariants.staggerItem} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={motionVariants.staggerItem} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                href={hero.primaryCta.href}
                aria-label={hero.primaryCta.ariaLabel}
                target="_blank"
                rel="noreferrer"
              >
                {labels.downloadResume}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button href={CONTACT.calendly} variant="ghost" aria-label={labels.bookCall}>
                {labels.bookCall}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <Reveal variant="scaleIn" delay={0.1} className="flex justify-end">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...defaultTransition, duration: 0.7, delay: 0.15 }}
            className="relative w-full max-w-[24rem]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <Image
                src="/assets/img/esteban-hero.PNG"
                alt={hero.portraitAlt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 384px"
              />
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
