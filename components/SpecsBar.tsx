"use client";

import { BedDouble, Bath, Square, Layers, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";

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
        { icon: <BedDouble className="w-5 h-5" />, label: "Bedroom", value: specs.bhk, color: "bg-blue-50 text-[#1D4ED8]" },
        ...(specs.bathrooms > 0 ? [{ icon: <Bath className="w-5 h-5" />, label: "Bathrooms", value: `${specs.bathrooms}`, color: "bg-orange-50 text-orange-600" }] : []),
        { icon: <Ruler className="w-5 h-5" />, label: "Living Area", value: specs.carpetArea, color: "bg-green-50 text-green-700" },
        { icon: <Layers className="w-5 h-5" />, label: "Position", value: specs.floor, color: "bg-purple-50 text-purple-700" },
    ];

    return (
        <div className="mb-12">
            {/* Elite Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                {mainSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-4xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className={`w-12 h-12 rounded-2xl ${spec.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                            {spec.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{spec.label}</p>
                            <p className="text-lg font-black text-slate-900 tracking-tight">{spec.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium Highlights */}
            <div className="flex flex-col gap-4">
                <p className="text-[11px] font-black text-slate-400 tracking-[0.2em] uppercase">Marketed Highlights</p>
                <div className="flex flex-wrap gap-2">
                    {amenities.slice(0, 8).map((amenity, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200/60 rounded-xl text-[13px] font-bold hover:bg-white hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all cursor-default"
                        >
                            <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                            {amenity}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
