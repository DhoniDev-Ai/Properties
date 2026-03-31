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
    { id: "Plot", label: "Plots", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
    { id: "Project", label: "Gated Society", image: "/gpplot.png" },
    { id: "Apartment", label: "Apartments", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
    { id: "Villa", label: "Villas", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811" },
    { id: "Independent-House", label: "Independent House", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
    { id: "Farmhouse", label: "Farmhouses", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83" },
    { id: "Penthouse", label: "Penthouses", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd" },
    { id: "Commercial", label: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
    { id: "Agriculture-Land", label: "Agriculture Land", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
];

interface CategoryCardsProps {
    activePropertyTypes?: string[];
    onTogglePropertyType?: (type: string) => void;
}

export default function CategoryCards({
    activePropertyTypes = [],
    onTogglePropertyType
}: CategoryCardsProps) {
    const router = useRouter();

    const handleCategoryClick = (cat: CategoryCard) => {
        if (cat.id === 'Project') {
            router.push('/properties/plots/projects');
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
        <div className="w-full mb-10">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-[#1D4ED8]" />
                    Browse By Category
                </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6">
                {categories.map((cat) => {
                    const isActive = activePropertyTypes.includes(cat.id);

                    return (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat)}
                            className={`
                                group cursor-pointer relative h-36 sm:h-48 lg:h-56 rounded-3xl overflow-hidden border-2 transition-all duration-700
                                ${isActive
                                    ? 'border-[#1D4ED8] ring-8 ring-blue-500/5 scale-[1.03]'
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
                                ${isActive ? 'bg-[#1D4ED8]/30' : 'bg-black/40 group-hover:bg-black/20'}
                            `} />

                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col items-start text-left bg-linear-to-t from-black/80 via-black/20 to-transparent">
                                {cat.id === 'Agriculture-Land' && (
                                    <div className="mb-2 bg-green-600 text-white p-1.5 rounded-lg shadow-xl">
                                        <Tractor className="w-4 h-4" />
                                    </div>
                                )}
                                <span className={`
                                    text-[14px] sm:text-[22px] font-black tracking-tight text-white transition-all duration-500 uppercase
                                    ${isActive ? 'scale-105 drop-shadow-2xl' : 'group-hover:translate-x-1'}
                                `}>
                                    {cat.label}
                                </span>
                                {isActive && (
                                    <div className="mt-2 bg-white text-[#1D4ED8] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        Selected
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
