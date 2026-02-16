import { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "card-surface relative overflow-hidden rounded-xl p-6 transition-transform duration-200 ease-out will-change-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
