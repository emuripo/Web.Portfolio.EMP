import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>);

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";

function styles(variant: Variant) {
  if (variant === "ghost") {
    return "bg-transparent text-white border border-white/20 hover:border-white/40";
  }
  return "bg-accent text-black shadow-glow hover:scale-[1.01]";
}

export function Button({ children, variant = "primary", className, href, ...rest }: ButtonProps) {
  const classNames = cn(baseStyles, styles(variant), className);

  if (href) {
    return (
      <Link className={classNames} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
