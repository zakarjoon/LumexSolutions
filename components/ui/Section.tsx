import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-8xl px-6 md:px-10">{children}</div>
    </section>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-tan-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brown-dark ${className}`}
    >
      {children}
    </span>
  );
}
