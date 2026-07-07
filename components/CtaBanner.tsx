"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grain-gradient opacity-60" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-8xl flex-col items-center gap-8 px-6 text-center md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading max-w-2xl text-balance font-display text-4xl font-bold text-white md:text-5xl"
        >
          Ready to upgrade your windows?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-balance text-white/80"
        >
          Get a free, no-obligation quote from a local window film expert.
          Most quotes are delivered within one business day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-tan-light"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+18005550199"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" />
            (800) 555-0199
          </a>
        </motion.div>
      </div>
    </section>
  );
}
