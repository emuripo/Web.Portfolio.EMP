"use client";

import { useEffect, useState } from "react";
import { ANCHORS, FEATURE_FLAGS } from "../lib/constants";
import { useTranslation } from "./LanguageToggle";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function VideoIntro() {
  const { translation } = useTranslation();
  const { video, labels } = translation;
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!media.matches);
    const handler = () => setAllowMotion(!media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <Section id={ANCHORS.video} heading={video.headline}>
      <Card className="grid gap-6 bg-white/5 md:grid-cols-[2fr_1fr]">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
          {FEATURE_FLAGS.videoMode === "youtube" ? (
            <iframe
              title={labels.watchVideo}
              src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&autoplay=0&mute=1`}
              className="h-full w-full"
              loading="lazy"
              allow={allowMotion ? "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" : undefined}
            />
          ) : (
            <video
              className="h-full w-full object-cover"
              controls
              poster="/assets/img/esteban-speaking.jpg"
              autoPlay={false}
              muted
              playsInline
            >
              <source src="/assets/video/esteban-intro.mp4" type="video/mp4" />
              {labels.watchVideo}
            </video>
          )}
        </div>
        <div className="space-y-3">
          <Tag>{video.caption}</Tag>
          <p className="text-white/80">{video.description}</p>
        </div>
      </Card>
    </Section>
  );
}

export default VideoIntro;
