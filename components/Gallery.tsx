"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { gallery } from "@/lib/data";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-offwhite">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Our Work</Eyebrow>
        <h2 className="section-heading mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
          Recent installations
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink/70">
          A look at recent residential, commercial, automotive, and security
          film projects completed by our team.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {gallery.map((item, index) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl shadow-card ${
              index % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <figcaption className="text-sm font-semibold text-white">
                {item.category}
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
