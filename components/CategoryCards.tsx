"use client";

import Image from "next/image";
import { BadgeCheck, LayoutGrid, Tractor } from "lucide-react";
import { useRouter } from "next/navigation";

interface CategoryCard {
    id: string;
    label: string;
    image: string;
    isListingType?: boolean;
}

const categories: CategoryCard[] = [
    { id: "Apartment", label: "Apartments / Flats", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
    { id: "Plot", label: "Plots", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
    { id: "Project", label: "Gated Society", image: "/gpplot.png" },
    { id: "HB", label: "HB Homes", image: "/hero.png" }, // Assuming hb.png exists or fallback
    { id: "Society-Patta", label: "Society Patta", image: "/gpplot.png" },
    { id: "JDA-Scheme", label: "JDA Scheme", image: "/gpplot.png" },
    { id: "Villa", label: "Duplex Villas", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811" },
    { id: "Farmhouse", label: "Farm House", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
    { id: "Commercial", label: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
    { id: "Agriculture-Land", label: "Agriculture Land", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
];

interface CategoryCardsProps {
    activePropertyTypes?: string[];
    onTogglePropertyType?: (type: string) => void;
    listingType?: string;
}

export default function CategoryCards({
    activePropertyTypes = [],
    onTogglePropertyType,
    listingType = "all"
}: CategoryCardsProps) {
    const router = useRouter();

    // Filter categories based on listing type (Sale/Rent)
    const filteredCategories = categories.filter(cat => {
        if (listingType.toLowerCase() === 'rent') {
            const rentFriendlyIds = ['Apartment', 'Villa', 'Farmhouse', 'Commercial'];
            return rentFriendlyIds.includes(cat.id);
        }
        return true; // Show all for 'sale' or 'all'
    });

    const handleCategoryClick = (cat: CategoryCard) => {
        if (cat.id === 'Project') {
            router.push('/properties/project?approval=Gated%20Society');
            return;
        }
        if (cat.id === 'HB') {
            router.push('/properties/hb');
            return;
        }
        if (cat.id === 'Society-Patta') {
            router.push('/properties/project?approval=Society%20Patta');
            return;
        }
        if (cat.id === 'JDA-Scheme') {
            router.push('/properties/project?approval=JDA%20Scheme');
            return;
        }

        // Use clean URL for navigation for property types
        const urlType = cat.id.toLowerCase();
        router.push(`/properties/${urlType}`);

        // Only trigger callback if provided (prevents error on server components like home page)
        if (onTogglePropertyType) {
            onTogglePropertyType(cat.id);
        }
    };

    return (
        <div className="w-full relative py-2">
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-[#1D4ED8]" />
                    Browse By Category
                </h3>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full">
                    <span className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Swipe to Explore</span>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                </div>
            </div>

            <div className="relative group/scroll-container">
                {/* Scroll hint gradient - Soft edge to indicate more content */}
                <div className="absolute top-0 right-0 bottom-4 w-12 bg-linear-to-l from-white via-white/40 to-transparent z-10 pointer-events-none md:w-24 group-hover/scroll-container:opacity-0 transition-opacity duration-300" />

                <div className="flex overflow-x-auto no-scrollbar gap-3 md:gap-5 snap-x snap-mandatory scroll-smooth pb-4 px-1 relative z-0">
                    {filteredCategories.map((cat) => {
                        const isActive = activePropertyTypes.includes(cat.id);

                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat)}
                                className={`
                                shrink-0 snap-start group cursor-pointer relative 
                                w-[150px] h-28 sm:w-[220px] sm:h-40 lg:w-[280px] lg:h-48 rounded-3xl overflow-hidden border-2 transition-all duration-700
                                ${isActive
                                        ? 'border-[#1D4ED8] ring-4 ring-blue-500/10 scale-[1.02]'
                                        : 'border-transparent hover:border-slate-300'
                                    }
                            `}
                            >
                                <Image
                                    src={`${cat.image}?auto=format&fit=crop&w=800&q=80`}
                                    alt={cat.label}
                                    fill
                                    className={`
                                    object-cover transition-transform duration-1000 
                                    ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                                `}
                                    priority={isActive}
                                />
                                <div className={`
                                absolute inset-0 transition-all duration-700
                                ${isActive ? 'bg-[#1D4ED8]/25' : 'bg-black/30 group-hover:bg-black/15'}
                            `} />

                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col items-start text-left bg-linear-to-t from-black/80 via-black/10 to-transparent">
                                    {cat.id === 'Agriculture-Land' && (
                                        <div className="mb-1.5 bg-green-600 text-white p-1 rounded-lg shadow-xl">
                                            <Tractor className="w-3 h-3" />
                                        </div>
                                    )}
                                    <span className={`
                                    text-[11px] sm:text-lg font-black tracking-tight text-white transition-all duration-500 uppercase
                                    ${isActive ? 'scale-105 drop-shadow-2xl' : 'group-hover:translate-x-1'}
                                `}>
                                        {cat.label}
                                    </span>
                                    {isActive && (
                                        <div className="mt-1.5 bg-white text-[#1D4ED8] px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            Active
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
