"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotionPreference } from "./useReducedMotionPreference";

type CountUpOptions = {
  durationMs?: number;
  startValue?: number;
  inView: boolean;
};

export function useCountUp(rawValue: string, { durationMs = 1200, startValue = 0, inView }: CountUpOptions) {
  const shouldReduce = useReducedMotionPreference();
  const [displayValue, setDisplayValue] = useState(rawValue);
  const hasAnimated = useRef(false);

  const parsed = useMemo(() => {
    const match = rawValue.match(/-?\d+(?:\.\d+)?/);
    if (!match || match.index === undefined) return null;
    const number = parseFloat(match[0]);
    const decimals = match[0].split(".")[1]?.length ?? 0;
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[0].length);
    return { number, decimals, prefix, suffix };
  }, [rawValue]);

  useEffect(() => {
    if (!inView || shouldReduce || hasAnimated.current) return;
    if (!parsed) return;

    let frame: number;
    const startTime = performance.now();
    const { number, decimals, prefix, suffix } = parsed;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (number - startValue) * eased;
      setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        hasAnimated.current = true;
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, inView, parsed, shouldReduce, startValue]);

  return displayValue;
}
