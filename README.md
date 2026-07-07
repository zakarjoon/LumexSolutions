# Lumex Window Films

A modern, Awwwards-style marketing website for a window film business (residential,
commercial, and automotive), built with Next.js App Router, TypeScript, Tailwind CSS,
and Framer Motion.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom green / brown / white brand palette
- **Framer Motion** — scroll reveals, parallax hero, animated stat counters, hover
  micro-interactions
- **next/font** — self-hosted Google Font (Poppins, weights 400/500/600/700)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Project structure

```
app/
  layout.tsx        Root layout, Poppins font, global metadata
  page.tsx           Single-page marketing site (imports all sections)
  globals.css         Tailwind directives + small global styles
components/
  Navbar.tsx           Sticky/transparent nav, gains solid bg on scroll, mobile menu
  Hero.tsx             Full-bleed hero with parallax background + CTAs
  TrustBar.tsx          Stats strip with animated counters
  Services.tsx          Services grid (residential, commercial, auto, security, decorative)
  Benefits.tsx           Alternating image/text rows (UV, energy, privacy, security)
  Gallery.tsx            Responsive image grid with hover zoom
  Testimonials.tsx        Client quotes with star ratings
  About.tsx                Brand story section
  CtaBanner.tsx             Full-width CTA banner
  ContactForm.tsx           Quote request form with client-side validation
  Footer.tsx                Footer with nav, contact info, socials
  ui/
    Section.tsx             Section + Eyebrow layout primitives
    Button.tsx               Button / LinkButton primitives
    ServiceCard.tsx           Animated service card
    AnimatedCounter.tsx        Framer Motion count-up number
lib/
  data.ts               Centralized placeholder content (services, benefits, gallery,
                         testimonials, stats, nav links, service dropdown options)
tailwind.config.ts    Brand color tokens, fonts, shadows, keyframes
```

## Brand palette

| Token          | Hex       | Usage                              |
| -------------- | --------- | ----------------------------------- |
| `primary`      | `#2F5D3A` | Dominant brand green (CTAs, navbar) |
| `accent`       | `#5B8C5A` | Softer sage for highlights/hovers   |
| `brown`        | `#6B4F3A` | Earthy secondary accent             |
| `tan`          | `#D9C5B2` | Light background contrast          |
| `white`        | `#FFFFFF` | Primary background                 |
| `offwhite`     | `#F7F5F1` | Alternating section backgrounds     |
| `ink`          | `#1E1E1C` | Primary text color                 |

All tokens are defined in [`tailwind.config.ts`](./tailwind.config.ts) and used via
Tailwind utility classes (e.g. `bg-primary`, `text-brown`, `bg-offwhite`).

## Content & images

- All copy in `lib/data.ts` is realistic placeholder content for a fictional business,
  **Lumex Window Films** — replace with real business details before launch.
- Images use [picsum.photos](https://picsum.photos) seeded placeholders so the site
  renders immediately with no asset setup. Swap the `src` values in `lib/data.ts` and
  the hero/about images for real photography before going live.
- The quote form in `components/ContactForm.tsx` validates client-side and currently
  logs submissions to the console (`console.log("Quote request submitted:", values)`).
  Wire this up to a real API route, email service, or CRM webhook for production use.

## Accessibility notes

- Semantic HTML landmarks (`header`, `main`, `nav`, `footer`, `section`).
- All images include descriptive `alt` text.
- Form fields have associated `label`s, `aria-invalid`, and `aria-describedby` error
  messaging.
- Focus-visible outlines are defined globally in `app/globals.css` for keyboard
  navigation.
