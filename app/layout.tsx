import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", variable: "--font-cursive", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#f8fafc", // Matches bg-slate-50
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agrawalpropertys.com"),
  title: {
    default: "Agrawal Properties & Real Estate | Best Property Dealer & Agency in Jaipur",
    template: "%s | Agrawal Real Estate"
  },
  description: "Find your dream property with Agrawal Real Estate & Properties, Jaipur's most trusted agency. We specialize in JDA plots, Housing Board homes, and Luxury 3BHK/4BHK/5BHK flats. Expert consultation by Anil Goyal.",
  keywords: [
    "Agrawal Real Estate",
    "Agrawal Properties Jaipur",
    "Real Estate Agency Jaipur",
    "Property Dealer in Jaipur",
    "Anil Goyal Real Estate",
    "Agrawal Real Estate and Properties",
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agrawalpropertys.com",
    siteName: "Agrawal Properties",
    title: "Agrawal Properties | Real Estate Agency in Jaipur",
    description: "Find JDA plots, luxury flats, and rental properties in Jaipur. Expert real estate guidance by Anil Goyal.",
    images: [
      {
        url: "/logodrk.png", // Next.js uses metadataBase to resolve this
        width: 1200,
        height: 630,
        alt: "Agrawal Properties Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrawal Properties | Real Estate Agency in Jaipur",
    description: "Premium property listings and expert real estate consultation in Jaipur.",
    images: ["/logodrk.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Agrawal Properties",
    "description": "Your trusted partner for buying, selling, and renting premium properties in Jaipur. Expert consultation by Anil Goyal.",
    "url": "https://agrawalpropertys.com",
    "logo": "https://agrawalpropertys.com/logodrk.png",
    "image": "https://agrawalpropertys.com/logodrk.png",
    "priceRange": "₹₹",
    "telephone": "+918426022000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302020",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/jaipurestate",
      "https://www.linkedin.com/in/agrawal-property-5540a5408"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} ${greatVibes.variable} font-sans antialiased bg-slate-50`}
      >
        <SmoothScrollProvider />
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}