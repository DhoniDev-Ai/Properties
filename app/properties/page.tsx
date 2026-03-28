"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyListingClient from "@/components/PropertyListingClient";

function PropertiesPageContent() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />
            
            {/* The shared listing component handles Hero, Filters, and Grid */}
            <PropertyListingClient />

            <Footer />
        </main>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex text-xl font-bold items-center justify-center text-slate-400">Loading Properties...</div>}>
            <PropertiesPageContent />
        </Suspense>
    );
}
