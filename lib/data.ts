import {
  Home,
  Building2,
  Car,
  ShieldCheck,
  Layers,
  Sun,
  Zap,
  Eye,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    icon: Home,
    title: "Residential Window Film",
    description:
      "Keep your home cooler and your interiors protected with virtually invisible film that blocks heat and UV without sacrificing your view.",
    image: "https://picsum.photos/seed/residential-film/800/600",
  },
  {
    icon: Building2,
    title: "Commercial & Office Film",
    description:
      "Reduce glare on screens, lower cooling costs, and give your building a sleek, modern façade with commercial-grade film systems.",
    image: "https://picsum.photos/seed/commercial-film/800/600",
  },
  {
    icon: Car,
    title: "Automotive Tint",
    description:
      "Premium ceramic and carbon tint for a cooler cabin, sharper look, and reduced fade on your interior — installed precisely, no bubbles.",
    image: "https://picsum.photos/seed/auto-tint/800/600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Safety Film",
    description:
      "Reinforce glass against impact, forced entry, and severe weather with shatter-resistant film that holds shards safely in place.",
    image: "https://picsum.photos/seed/security-film/800/600",
  },
  {
    icon: Layers,
    title: "Decorative & Frosted Privacy Film",
    description:
      "Elevate glass partitions, conference rooms, and bathrooms with etched, frosted, or patterned film for style and privacy.",
    image: "https://picsum.photos/seed/decorative-film/800/600",
  },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  stat: string;
};

export const benefits: Benefit[] = [
  {
    icon: Sun,
    title: "Blocks 99% of Harmful UV Rays",
    description:
      "Protect your skin, furniture, flooring, and artwork from fading and sun damage. Our film blocks up to 99% of harmful UV radiation while letting natural light pour in.",
    image: "https://picsum.photos/seed/uv-protection/900/700",
    stat: "99% UV blocked",
  },
  {
    icon: Zap,
    title: "Lower Energy Bills, Year-Round",
    description:
      "By rejecting solar heat in summer and retaining warmth in winter, window film eases the load on your HVAC system — many customers see noticeable savings within the first season.",
    image: "https://picsum.photos/seed/energy-savings/900/700",
    stat: "Up to 30% energy savings",
  },
  {
    icon: Eye,
    title: "Privacy Without Losing Light",
    description:
      "From frosted office partitions to reflective residential film, enjoy daytime privacy from prying eyes while keeping interiors bright and welcoming.",
    image: "https://picsum.photos/seed/privacy-film/900/700",
    stat: "One-way daytime privacy",
  },
  {
    icon: Lock,
    title: "Added Security & Shatter Resistance",
    description:
      "Our security films hold glass together on impact, adding a critical layer of protection against break-ins, accidents, and extreme weather events.",
    image: "https://picsum.photos/seed/security-glass/900/700",
    stat: "Shatter-resistant strength",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

export const gallery: GalleryItem[] = [
  { src: "https://picsum.photos/seed/gallery-1/700/900", alt: "Modern home with tinted living room windows", category: "Residential" },
  { src: "https://picsum.photos/seed/gallery-2/900/700", alt: "Office tower with tinted glass façade", category: "Commercial" },
  { src: "https://picsum.photos/seed/gallery-3/700/700", alt: "Luxury sedan with freshly tinted windows", category: "Automotive" },
  { src: "https://picsum.photos/seed/gallery-4/900/700", alt: "Frosted decorative film on office partition", category: "Decorative" },
  { src: "https://picsum.photos/seed/gallery-5/700/900", alt: "Security film installation on storefront glass", category: "Security" },
  { src: "https://picsum.photos/seed/gallery-6/900/700", alt: "Sunroom with heat-reducing residential film", category: "Residential" },
  { src: "https://picsum.photos/seed/gallery-7/700/700", alt: "Conference room with etched glass film", category: "Commercial" },
  { src: "https://picsum.photos/seed/gallery-8/900/700", alt: "SUV with ceramic tint installation in progress", category: "Automotive" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Maple Grove",
    quote:
      "Our living room used to feel like a greenhouse every afternoon. Lumex installed film on all our south-facing windows and the difference was immediate — cooler, brighter, and our furniture isn't fading anymore.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-1/120/120",
  },
  {
    name: "David Chen",
    role: "Facilities Manager, Chen & Associates",
    quote:
      "We tinted our entire office building and saw a real drop in our summer cooling costs. The crew was professional, fast, and left zero mess. Highly recommend for any commercial property.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-2/120/120",
  },
  {
    name: "Maria Alvarez",
    role: "Auto Enthusiast",
    quote:
      "Best ceramic tint job I've had on any of my cars. Perfectly clean edges, no bubbling months later, and the heat rejection is night and day compared to my old tint.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-3/120/120",
  },
  {
    name: "James O'Connor",
    role: "Property Owner",
    quote:
      "After a break-in scare, we had security film installed on our ground floor windows. It gives us real peace of mind knowing the glass won't just shatter and give easy access.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-4/120/120",
  },
];

export const stats = [
  { label: "Years in Business", value: 18, suffix: "+" },
  { label: "Homes & Vehicles Serviced", value: 12500, suffix: "+" },
  { label: "UV Rays Blocked", value: 99, suffix: "%" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
];

export const serviceOptions = [
  "Residential Window Film",
  "Commercial & Office Film",
  "Automotive Tint",
  "Security & Safety Film",
  "Decorative & Frosted Privacy Film",
  "Not Sure / Need Advice",
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
