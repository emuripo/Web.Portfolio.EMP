"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { ANCHORS, FEATURE_FLAGS } from "../lib/constants";
import { Reveal } from "./motion/Reveal";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function Projects() {
  const { translation } = useTranslation();
  const { projects } = translation;
  const tiltEnabled = FEATURE_FLAGS.projectsTilt;

  return (
    <Section id={ANCHORS.projects} heading={projects.headline}>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            delay={index * 0.08}
            tiltEnabled={tiltEnabled}
            ctaLabel={translation.labels.viewProject}
          />
        ))}
      </div>
    </Section>
  );
}

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    tech: string[];
    impact: string;
    link: string;
    image: string;
  };
  delay?: number;
  tiltEnabled: boolean;
  ctaLabel: string;
};

function ProjectCard({ project, delay = 0, tiltEnabled, ctaLabel }: ProjectCardProps) {
  const [tiltStyle, setTiltStyle] = useState<{ transform?: string }>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -4;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
    });
  };

  const resetTilt = () => {
    if (!tiltEnabled) return;
    setTiltStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
  };

  return (
    <Reveal delay={delay}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="h-full transition-transform duration-200 ease-out"
        style={tiltEnabled ? tiltStyle : undefined}
      >
        <Card className="flex h-full flex-col gap-4 bg-white/5">
          <div className="relative h-40 w-full overflow-hidden rounded-lg border border-white/10">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <Tag>{project.impact}</Tag>
            </div>
            <p className="text-sm text-white/75">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              {project.tech.map((stack) => (
                <span key={stack} className="rounded-full bg-white/10 px-2 py-1">
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={project.link}
            className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4"
            aria-label={`${ctaLabel} ${project.name}`}
          >
            {ctaLabel}
          </Link>
        </Card>
      </div>
    </Reveal>
  );
}

export default Projects;
