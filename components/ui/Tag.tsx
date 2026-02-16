import { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80 transition-transform duration-150 ease-out will-change-transform hover:scale-[1.03]",
        className,
      )}
    >
      {children}
    </span>
  );
}
