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
  title: {
    default: "Agrwal Properties | Best Real Estate Agency in Jaipur",
    template: "%s | Agrwal Properties"
  },
  description: "Your trusted partner for buying, selling, and renting premium properties in Jaipur. Expert consultation by Anil Goyal.",
  keywords: ["Real Estate Jaipur", "Agarwal Properties", "Anil Goyal Real Estate", "Properties in Jaipur", "Buy House Jaipur", "Rent Apartment Jaipur"],
  authors: [{ name: "Anil Goyal" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agrwalproperties.com",
    siteName: "Agrwal Properties",
    title: "Agrwal Properties | Best Real Estate Agency in Jaipur",
    description: "Premium property listings and expert real estate consultation in Jaipur by Anil Goyal.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Agrwal Properties Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrwal Properties | Real Estate Jaipur",
    description: "Find your dream home with Jaipur's most trusted real estate partner.",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
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
        suppressHydrationWarning
      >
        <SmoothScrollProvider />
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
