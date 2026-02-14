"use client";

import Image from "next/image";
import Link from "next/link";
import { ANCHORS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function Projects() {
  const { translation } = useTranslation();
  const { projects } = translation;

  return (
    <Section id={ANCHORS.projects} heading={projects.headline}>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.items.map((project) => (
          <Card key={project.name} className="flex flex-col gap-4 bg-white/5">
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
              aria-label={`${translation.labels.viewProject} ${project.name}`}
            >
              {translation.labels.viewProject}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
