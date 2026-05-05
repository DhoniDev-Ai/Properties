import { Metadata } from 'next';
import { Suspense } from "react";
import CategoryClient from "./CategoryClient";

interface Props {
    params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { type } = await params;
    
    const typeMap: Record<string, string> = {
        'plot': 'Plots',
        'apartment': 'Apartments',
        'villa': 'Villas',
        'commercial': 'Commercial Properties',
        'farmhouse': 'Farmhouses',
        'hb': 'Housing Board Homes',
        'housing-board': 'Housing Board Homes',
    };

    const categoryName = typeMap[type.toLowerCase()] || type.charAt(0).toUpperCase() + type.slice(1).replace(/-/g, ' ');
    
    return {
        title: `${categoryName} for Sale in Jaipur | Agrawal Real Estate`,
        description: `Explore premium ${categoryName.toLowerCase()} in Jaipur. Hand-picked JDA approved properties, prime locations, and competitive pricing. Find your dream ${categoryName.toLowerCase()} today with Agrawal Real Estate.`,
        keywords: [`${categoryName} Jaipur`, `Buy ${categoryName} Jaipur`, `JDA ${categoryName} Jaipur`, `Real Estate ${categoryName} Jaipur`, "Agrawal Real Estate", "Property Dealer Jaipur"],
    };
}

export default function CategoryPage({ params }: Props) {
    return (
        <Suspense fallback={<div className="min-h-screen flex text-xl items-center justify-center text-slate-400 font-black tracking-tighter uppercase italic">Initializing Category...</div>}>
            <CategoryClient params={params} />
        </Suspense>
    );
}
