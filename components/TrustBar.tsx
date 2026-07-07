"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustBar() {
  return (
    <div className="relative bg-ink py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center gap-1 text-center md:items-start md:text-left"
          >
            <span className="font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/60 sm:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
