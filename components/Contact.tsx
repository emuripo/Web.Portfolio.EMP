"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ANCHORS, CONTACT, FEATURE_FLAGS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

const CalendlyFrame = dynamic(
  () =>
    Promise.resolve(({ url, title }: { url: string; title: string }) => (
      <iframe
        title={title}
        src={`${url}?hide_landing_page_details=1&hide_gdpr_banner=1`}
        className="h-[520px] w-full rounded-xl border border-white/10"
        loading="lazy"
      />
    )),
  { ssr: false },
);

export function Contact() {
  const { translation } = useTranslation();
  const { contact } = translation;

  return (
    <Section id={ANCHORS.contact} heading={contact.headline}>
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <Card className="bg-white/5">
          <p className="text-white/80">{contact.subhead}</p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <Link className="block" href={`mailto:${CONTACT.email}`} aria-label={contact.emailLabel}>
              {contact.emailLabel}: {CONTACT.email}
            </Link>
            <Link className="block" href={`tel:${CONTACT.phone}`} aria-label={contact.phoneLabel}>
              {contact.phoneLabel}: {CONTACT.phone}
            </Link>
            <Link className="block" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              {translation.labels.linkedin}
            </Link>
            <Link className="block" href={CONTACT.github} target="_blank" rel="noreferrer">
              {translation.labels.github}
            </Link>
          </div>
        </Card>
        {FEATURE_FLAGS.enableCalendly ? (
          <Card className="bg-white/5">
            <p className="mb-4 text-sm text-white/70">{contact.calendlyLabel}</p>
            <CalendlyFrame url={CONTACT.calendly} title={contact.calendlyLabel} />
          </Card>
        ) : null}
      </div>
    </Section>
  );
}

export default Contact;
