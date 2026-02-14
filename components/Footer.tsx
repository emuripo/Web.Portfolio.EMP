"use client";

import { ANCHORS } from "../lib/constants";
import { Section } from "./ui/Section";
import { useTranslation } from "./LanguageToggle";

export function Footer() {
  const { translation } = useTranslation();
  return (
    <Section id={ANCHORS.footer}>
      <p className="text-center text-sm text-white/60">{translation.footer.note}</p>
    </Section>
  );
}

export default Footer;
