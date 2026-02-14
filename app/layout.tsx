import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { LanguageProvider } from "../components/LanguageToggle";
import { en } from "../content/en";
import { buildMetadata, personJsonLd } from "../lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body className={`${inter.variable} bg-background text-white antialiased`}>
        <a className="skip-link" href="#content">
          {en.labels.skipToContent}
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
