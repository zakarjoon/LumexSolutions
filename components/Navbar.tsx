"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between px-6 md:px-10"
        aria-label="Primary"
      >
        <Link href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            } transition-colors duration-300`}
          >
            <Sun className="h-5 w-5" aria-hidden />
          </span>
          <span className={scrolled ? "text-ink" : "text-white"}>
            Lumex <span className="text-accent">Window Films</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark md:inline-flex"
        >
          Get a Free Quote
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-white shadow-soft md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-offwhite"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
