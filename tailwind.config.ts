import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F5D3A",
          dark: "#234529",
          light: "#3E7A4C",
        },
        accent: {
          DEFAULT: "#5B8C5A",
          light: "#7FAA7E",
        },
        brown: {
          DEFAULT: "#6B4F3A",
          dark: "#523C2C",
        },
        tan: {
          DEFAULT: "#D9C5B2",
          light: "#EAE0D5",
        },
        offwhite: "#F7F5F1",
        ink: "#1E1E1C",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(30, 30, 28, 0.15)",
        card: "0 8px 30px -8px rgba(43, 66, 45, 0.2)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at 20% 20%, rgba(91,140,90,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(107,79,58,0.12), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
