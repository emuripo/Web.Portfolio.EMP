import { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={cn("card-surface p-6", className)}>{children}</div>;
}
