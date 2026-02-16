import type { Metadata } from "next";
import { CONTACT, SEO } from "./constants";

export function buildMetadata(): Metadata {
  const url = new URL(SEO.siteUrl);

  return {
    metadataBase: url,
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      title: SEO.title,
      description: SEO.description,
      url: SEO.siteUrl,
      siteName: "Esteban Murillo Porras",
      images: [SEO.ogImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [SEO.ogImage],
      creator: SEO.twitter,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Esteban Murillo Porras",
    url: SEO.siteUrl,
    jobTitle: "Senior Software Engineer (RAG / OpenAI / Cloud-native Backend)",
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    sameAs: [CONTACT.github, CONTACT.linkedin],
  };
}
