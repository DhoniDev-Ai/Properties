"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyListingClient from "@/components/PropertyListingClient";

interface Props {
    params: Promise<{ type: string }>;
}

export default function CategoryClient({ params }: Props) {
    const { type } = use(params);
    const searchParams = useSearchParams();
    const approval = searchParams.get('approval');

    // Clean mappings for large display titles
    const typeMap: Record<string, string> = {
        'plot': 'PLOTS',
        'project': 'PROJECTS',
        'apartment': 'APARTMENTS',
        'housing-board': 'HOUSING BOARD',
        'hb': 'Housing Board HOMES',
        'independent-house': 'INDEPENDENT HOUSES',
        'villa': 'LUXURY VILLAS',
        'commercial': 'COMMERCIAL SPACES',
        'farmhouse': 'FARMHOUSES',
        'agriculture-land': 'AGRICULTURE LAND',
    };

    // Mapping back to data-friendly types
    const dataMap: Record<string, string[]> = {
        'plot': ['Plot'],
        'project': [],
        'apartment': ['Apartment'],
        'flat': ['Flat'],
        'independent-house': ['Independent House'],
        'penthouse': ['Penthouse'],
        'hb': [],
        'housing-board': [],
        'villa': ['Villa'],
        'commercial': ['Commercial'],
        'farmhouse': ['Farmhouse'],
        'agriculture-land': ['Agriculture Land', 'farmer_land'],
    };

    let title = typeMap[type.toLowerCase()] || type.toUpperCase().replace(/-/g, ' ') + 'S';
    if (approval) {
        const cleanApproval = approval.toUpperCase();
        title = `${cleanApproval} ${title}`;
    }

    const dataTypes = dataMap[type.toLowerCase()] || [type.charAt(0).toUpperCase() + type.slice(1).replace(/-/g, ' ')];

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />

            <PropertyListingClient
                initialFilters={{
                    propertyType: dataTypes,
                    approvalType: type.toLowerCase() === 'hb' || type.toLowerCase() === 'housing-board' ? 'HB' : (approval || "")
                }}
                hideHero={true}
                hideCategoryCards={true}
                showBackButton={true}
                title={title}
                description={`Premium ${dataTypes.length ? dataTypes.join(' & ') : 'Property'} listings in Jaipur. Carefully selected for location, quality, and investment value.`}
            />

            <Footer />
        </main>
    );
}
