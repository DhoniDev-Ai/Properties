"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostProperty from "@/components/PostProperty";

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
