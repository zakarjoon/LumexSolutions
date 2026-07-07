"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary-dark"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-window-film/1920/1200"
          alt="Modern home with professionally tinted floor-to-ceiling windows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-ink/90" />
        <div className="absolute inset-0 bg-grain-gradient" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-8xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tan-light ring-1 ring-white/20 backdrop-blur"
        >
          Residential &bull; Commercial &bull; Automotive
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Let the light in.
          <br />
          Keep the heat <span className="text-accent-light">out.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Premium window film for homes, offices, and vehicles. Block 99% of
          UV rays, cut energy costs, and add privacy &amp; security &mdash;
          professionally installed with a lifetime warranty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-tan-light"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5" />
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/40 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}
