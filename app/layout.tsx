import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumex Window Films | Premium Residential, Commercial & Auto Tinting",
  description:
    "Lumex Window Films delivers premium window tinting and film installation for homes, offices, and vehicles. Block 99% of UV rays, cut energy costs, and add privacy & security with professional installation and a lifetime warranty.",
  keywords: [
    "window tinting",
    "window film",
    "residential window film",
    "commercial window film",
    "automotive tint",
    "security film",
    "decorative film",
  ],
  openGraph: {
    title: "Lumex Window Films | Premium Window Tinting & Film",
    description:
      "Premium window film for homes, offices, and vehicles. UV protection, energy savings, privacy, and security — professionally installed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
