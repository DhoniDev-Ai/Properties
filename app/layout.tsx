import type { Metadata } from "next";
import { Outfit, Inter, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agrwal Properties - Real Estate",
  description: "Find your dream property with Agrwal Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} ${greatVibes.variable} font-sans antialiased bg-slate-50`}
      >
        <SmoothScrollProvider />
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
