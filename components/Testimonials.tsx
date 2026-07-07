"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="section-heading mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
          Trusted by homeowners
          <br /> &amp; businesses alike
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
            className="relative flex flex-col gap-5 rounded-xl2 bg-offwhite p-8 shadow-card ring-1 ring-ink/5"
          >
            <Quote className="h-8 w-8 text-accent/40" aria-hidden />
            <blockquote className="text-base leading-relaxed text-ink/80">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating ? "fill-brown text-brown" : "text-ink/20"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} portrait`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                <p className="text-xs text-ink/60">{testimonial.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
