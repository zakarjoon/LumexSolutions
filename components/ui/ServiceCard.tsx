"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/0 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink/70">{service.description}</p>
        <a
          href="#contact"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          Get a quote
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </motion.div>
  );
}
