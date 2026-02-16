"use client";

import { motion, useInView } from "framer-motion";
import React, { ReactNode, useMemo, useRef } from "react";
import { motionVariants, defaultTransition, MotionVariantKey } from "./motionVariants";
import { useReducedMotionPreference } from "./useReducedMotionPreference";

type RevealProps = {
  children: ReactNode;
  variant?: MotionVariantKey;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  forwardedRef?: React.Ref<HTMLDivElement>;
};

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  forwardedRef,
}: RevealProps) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const shouldReduce = useReducedMotionPreference();
  const inView = useInView(localRef, { amount, once });

  const setRefs = useMemo(() => {
    return (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef && typeof forwardedRef === "object") {
        // @ts-expect-error allow mutable ref
        forwardedRef.current = node;
      }
    };
  }, [forwardedRef]);

  const selectedVariant = motionVariants[variant] ?? motionVariants.fadeUp;
  const initialState = shouldReduce ? "visible" : "hidden";
  const animateState = shouldReduce ? "visible" : inView ? "visible" : "hidden";

  return (
    <motion.div
      ref={setRefs}
      className={className}
      variants={selectedVariant}
      initial={initialState}
      animate={animateState}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
