"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" className="bg-offwhite">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>What We Do</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mt-5 font-display text-4xl font-bold text-ink md:text-5xl"
        >
          Film for every window,
          <br /> every purpose
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-ink/70"
        >
          From cozy living rooms to full office towers and daily drivers, our
          film systems are engineered and installed to fit the space.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
