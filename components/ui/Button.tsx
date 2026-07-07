import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-card hover:shadow-lg",
  secondary:
    "bg-white text-primary hover:bg-offwhite border border-primary/20",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0";

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
