import Link from "next/link";
import { Facebook, Instagram, Sun, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-8xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
                <Sun className="h-5 w-5" aria-hidden />
              </span>
              Lumex <span className="text-accent-light">Window Films</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Premium window film for homes, offices, and vehicles &mdash;
              professionally installed with a lifetime warranty.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a href="tel:+18005550199" className="hover:text-white">
                  (800) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:hello@lumexfilms.com" className="hover:text-white">
                  hello@lumexfilms.com
                </a>
              </li>
              <li>128 Maple Street, Riverdale, ST 00000</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Lumex Window Films. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
