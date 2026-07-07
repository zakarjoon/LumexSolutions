"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <Section id="benefits" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Why Window Film</Eyebrow>
        <h2 className="section-heading mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
          Real benefits you&rsquo;ll feel
          <br /> the same day
        </h2>
      </div>

      <div className="mt-20 flex flex-col gap-20 md:gap-28">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          const reversed = index % 2 === 1;
          return (
            <div
              key={benefit.title}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16`}
            >
              <motion.div
                initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative h-72 overflow-hidden rounded-xl2 shadow-card sm:h-96 ${
                  reversed ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-5">
                  <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary">
                    {benefit.stat}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className={reversed ? "md:order-1" : ""}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {benefit.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
