"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Wrench } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";

const highlights = [
  { icon: Award, label: "Lifetime installation warranty" },
  { icon: Users, label: "Family-owned since 2007" },
  { icon: Wrench, label: "Factory-trained installers" },
];

export function About() {
  return (
    <Section id="about" className="bg-offwhite">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative h-80 overflow-hidden rounded-xl2 shadow-card sm:h-[28rem]"
        >
          <Image
            src="https://picsum.photos/seed/lumex-team/900/1100"
            alt="The Lumex Window Films installation team on site"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-xl2 bg-white p-5 shadow-soft sm:block">
            <p className="font-display text-3xl font-bold text-primary">18+</p>
            <p className="text-sm text-ink/70">years protecting homes &amp; businesses from the sun</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="section-heading mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
            Built on craftsmanship,
            <br /> backed by warranty
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Lumex Window Films started in a single garage with one installer
            and a promise: do the job right, every time. Nearly two decades
            later, we&rsquo;ve grown into a full-service film company serving
            homeowners, businesses, and drivers across the region &mdash;
            without losing that same attention to detail on every last edge
            and corner.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Every installer on our team is factory-certified on the films we
            install, so you get manufacturer-backed warranties and a finish
            that holds up for years, not just months.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink/80">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
