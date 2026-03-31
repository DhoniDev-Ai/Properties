"use client";

import { use, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyListingClient from "@/components/PropertyListingClient";

interface Props {
    params: Promise<{ type: string }>;
}

function CategoryPageContent({ params }: Props) {
    const { type } = use(params);
    
    // Clean mappings for large display titles
    const typeMap: Record<string, string> = {
        'plot': 'PLOTS',
        'flat': 'FLATS & APARTMENTS',
        'apartment': 'APARTMENTS',
        'penthouse': 'PENTHOUSES',
        'independent-house': 'INDEPENDENT HOUSES',
        'villa': 'LUXURY VILLAS',
        'commercial': 'COMMERCIAL SPACES',
        'farmhouse': 'FARMHOUSES',
        'agriculture-land': 'AGRICULTURE LAND',
    };

    // Mapping back to data-friendly types
    const dataMap: Record<string, string> = {
        'plot': 'Plot',
        'flat': 'Apartment',
        'apartment': 'Apartment',
        'penthouse': 'Penthouse',
        'independent-house': 'Independent House',
        'villa': 'Villa',
        'commercial': 'Commercial',
        'farmhouse': 'Farmhouse',
        'agriculture-land': 'Agriculture Land',
    };

    const title = typeMap[type.toLowerCase()] || type.toUpperCase() + 'S';
    const dataType = dataMap[type.toLowerCase()] || type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />
            
            <PropertyListingClient 
                initialFilters={{ propertyType: [dataType] }}
                hideHero={true}
                hideCategoryCards={true}
                showBackButton={true}
                title={title}
                description={`Premium ${dataType} listings in Jaipur. Carefully selected for location, quality, and investment value.`}
            />

            <Footer />
        </main>
    );
}

export default function CategoryPage({ params }: Props) {
    return (
        <Suspense fallback={<div className="min-h-screen flex text-xl items-center justify-center text-slate-400 font-black tracking-tighter uppercase">Initializing Category...</div>}>
            <CategoryPageContent params={params} />
        </Suspense>
    );
}
