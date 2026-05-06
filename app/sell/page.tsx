import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostProperty from "@/components/PostProperty";

export const metadata: Metadata = {
    title: "Sell Your Property in Jaipur | Agrawal Properties - Get Best Market Value",
    description: "List your property with Agrawal Properties and reach 2500+ potential buyers in Jaipur. We specialize in JDA plots, villas, and apartments. Expert marketing and legal support by Anil Goyal.",
    keywords: ["Sell Property Jaipur", "List Property Jaipur", "Agrawal Properties Sell", "Property Valuation Jaipur", "Real Estate Agent Jaipur"],
};

export default function SellPropertyPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar theme="light" />
            
            <div className="mt-20">
                <PostProperty />
            </div>

            <Footer />
        </main>
    );
}
