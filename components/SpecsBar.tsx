"use client";

import { BedDouble, Bath, Square, Layers, CheckCircle2, ShieldCheck, Ruler, FenceIcon, CompassIcon } from "lucide-react";

interface SpecsBarProps {
    specs: {
        bhk?: string | null;
        bedrooms: number;
        bathrooms: number;
        area: string;
        floor?: string | null;
        balconies: number;
        facing: string | null;
    };
    amenities: string[];
}

export default function SpecsBar({ specs, amenities }: SpecsBarProps) {
    const mainSpecs = [];

    // Only show Bedroom if it's a residential property with BHK info
    if (specs.bhk && specs.bhk !== 'N/A' && specs.bhk !== '0') {
        mainSpecs.push({
            icon: <BedDouble className="w-5 h-5" />,
            label: "Bedroom",
            value: specs.bhk,
            color: "bg-blue-50 text-[#1D4ED8]"
        });
    }
    if (specs.facing && specs.facing !== 'N/A' && specs.facing !== '0') {
        mainSpecs.push({
            icon: <CompassIcon className="w-5 h-5" />,
            label: "Facing",
            value: specs.facing,
            color: "bg-blue-50 text-[#1D4ED8]"
        });
    }

    // Always show Area
    if (specs.area && specs.area !== 'N/A') {
        mainSpecs.push({
            icon: <Ruler className="w-5 h-5" />,
            label: "Area",
            value: specs.area,
            color: "bg-green-50 text-green-700"
        });
    }

    // Only show Bathrooms if > 0
    if (specs.bathrooms > 0) {
        mainSpecs.push({
            icon: <Bath className="w-5 h-5" />,
            label: "Bathrooms",
            value: `${specs.bathrooms}`,
            color: "bg-orange-50 text-orange-600"
        });
    }
    if (specs.balconies > 0) {
        mainSpecs.push({
            icon: <FenceIcon className="w-5 h-5" />,
            label: "Balconies",
            value: `${specs.balconies}`,
            color: "bg-orange-50 text-orange-600"
        });
    }

    // Only show Floor if not N/A
    if (specs.floor && specs.floor !== 'N/A' && specs.floor !== '0') {
        mainSpecs.push({
            icon: <Layers className="w-5 h-5" />,
            label: "Floor",
            value: specs.floor,
            color: "bg-purple-50 text-purple-700"
        });
    }

    return (
        <div className="py-3">
            {/* Elite Specs Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 ">
                {mainSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-white border border-slate-300 rounded-4xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className={`w-12 h-12 rounded-2xl ${spec.color} border  flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                            {spec.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{spec.label}</p>
                            <p className="text-lg font-semibold text-slate-900 tracking-tight">{spec.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium Highlights */}
        </div>
    );
}
