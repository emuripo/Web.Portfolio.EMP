"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useReducedMotionPreference() {
  const framerPrefersReduced = useReducedMotion();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReduced(mediaQuery.matches);
    handler();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return framerPrefersReduced ?? prefersReduced;
}
