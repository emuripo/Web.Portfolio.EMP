"use client";

import { motion } from "framer-motion";
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
  const [activeSection, setActiveSection] = useState<string>(ANCHORS.hero);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sectionIds = translation.nav
      .map((item) => item.href.replace("#", ""))
      .filter((id) => !!document.getElementById(id));
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const offset = 140;
      let current = sectionIds[0] ?? ANCHORS.hero;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [translation.nav]);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-white/5">
        <motion.div
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>
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
              {translation.nav.map((item) => {
                const anchorId = item.href.replace("#", "");
                const isActive = activeSection === anchorId;
                return (
                  <li key={item.href} className="relative">
                    <Link className="hover:text-white" href={item.href}>
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
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
    </>
  );
}

export default Navbar;
