"use client";

import { BedDouble, Bath, Square, Layers, CheckCircle2 } from "lucide-react";

interface SpecsBarProps {
    specs: {
        bhk: string;
        bathrooms: number;
        carpetArea: string;
        floor: string;
    };
    amenities: string[];
}

export default function SpecsBar({ specs, amenities }: SpecsBarProps) {
    const mainSpecs = [
        { icon: <BedDouble className="w-5 h-5" />, label: specs.bhk },
        ...(specs.bathrooms > 0 ? [{ icon: <Bath className="w-5 h-5" />, label: `${specs.bathrooms} Bathrooms` }] : []),
        { icon: <Square className="w-5 h-5" />, label: specs.carpetArea },
        { icon: <Layers className="w-5 h-5" />, label: specs.floor },
    ];

    return (
        <div className="mb-10">
            {/* Quick Specs Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                {mainSpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1D4ED8] shadow-sm">
                            {spec.icon}
                        </div>
                        <div className="text-[15px] font-semibold text-slate-800">
                            {spec.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2">
                {amenities.slice(0, 5).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#1E3A8A] border border-blue-100/50 rounded-lg text-[13px] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {amenity}
                    </div>
                ))}
            </div>
        </div>
    );
}
