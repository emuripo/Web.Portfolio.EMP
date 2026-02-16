"use client";

import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../motion/Reveal";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  heading?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, heading, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <Container>
        {heading ? (
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{heading}</h2>
            </div>
          </Reveal>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
