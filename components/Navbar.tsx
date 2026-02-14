"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ANCHORS } from "../lib/constants";
import { LanguageToggle, useTranslation } from "./LanguageToggle";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Navbar() {
  const { translation } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
        scrolled ? "bg-[#050807]/70" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href={`#${ANCHORS.hero}`} className="text-sm font-semibold uppercase tracking-widest">
          {translation.labels.brand}
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-4 text-sm text-white/80 md:flex">
            {translation.nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <Button
              href="/resume.pdf"
              aria-label={translation.labels.downloadResume}
              target="_blank"
              rel="noreferrer"
            >
              {translation.labels.downloadResume}
            </Button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? translation.labels.closeMenu : translation.labels.openMenu}
              className="rounded-full border border-white/20 px-3 py-2 text-sm text-white/80"
            >
              {menuOpen ? translation.labels.closeMenu : translation.labels.openMenu}
            </button>
          </div>
        </nav>
      </Container>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-surface/90 pb-4 pt-2 md:hidden">
          <Container>
            <ul className="space-y-2 text-sm text-white/80">
              {translation.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block py-2 hover:text-white"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                href="/resume.pdf"
                aria-label={translation.labels.downloadResume}
                target="_blank"
                rel="noreferrer"
                className="w-full justify-center"
              >
                {translation.labels.downloadResume}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
