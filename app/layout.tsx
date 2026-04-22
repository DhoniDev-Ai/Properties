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
    default: "Agrawal Real Estate | Best Property Dealer & Real Estate Agency in Jaipur",
    template: "%s | Agrawal Real Estate"
  },
  description: "Find your dream property with Agrawal Real Estate, Jaipur's most trusted agency. We specialize in Rental Properties, JDA plots, Housing Board homes, and Luxury 3BHK/4BHK/5BHK flats. Expert consultation by Anil Goyal.",
  keywords: [
    "Agrawal Real Estate",
    "Agrawal Properties Jaipur",
    "Real Estate Agency Jaipur",
    "Property Dealer in Jaipur",
    "Anil Goyal Real Estate",
    "Rental Properties in Jaipur",
    "3BHK Flats for sale Jaipur",
    "4BHK 5BHK Luxury Apartments Jaipur",
    "Buy Plots in Jaipur",
    "JDA Approved Plots Jagatpura",
    "Housing Board Homes Jaipur",
    "Luxury Villas in Jaipur",
    "Ready to Move Flats Jaipur",
    "Independent House for Sale Jaipur",
    "Real Estate Investment Jaipur"
  ],
  authors: [{ name: "Anil Goyal" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agrawalrealestate.com",
    siteName: "Agrawal Real Estate",
    title: "Agrawal Real Estate | Best Property Dealer in Jaipur",
    description: "Premium property listings and expert real estate consultation in Jaipur. JDA Plots, Apartments, and Villas.",
    images: [
      {
        url: "https://agrawalrealestate.com/logodrk.png",
        width: 1200,
        height: 630,
        alt: "Agrawal Real Estate Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrawal Real Estate | Best Property Dealer in Jaipur",
    description: "Find your dream home with Jaipur's most trusted real estate partner.",
    images: ["https://agrawalrealestate.com/logodrk.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Agrawal Real Estate",
              "description": "Your trusted partner for buying, selling, and renting premium properties in Jaipur. Expert consultation by Anil Goyal.",
              "url": "https://agrawalrealestate.com",
              "logo": "https://agrawalrealestate.com/logodrk.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302020",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918426022000",
                "contactType": "Sales and Consultation",
                "areaServed": "Jaipur",
                "availableLanguage": ["English", "Hindi"]
              },
              "founder": {
                "@type": "Person",
                "name": "Anil Goyal"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
