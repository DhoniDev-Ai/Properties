"use client";

import Link from "next/link";
import { MapPin, MessageSquareCode, BadgeCheck } from "lucide-react";
import Image from "next/image";

interface PropertyGridProps {
    properties: any[];
    viewMode: "grid" | "list";
}

export default function PropertyGrid({ properties, viewMode }: PropertyGridProps) {
    if (properties.length === 0) {
        return (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 md:p-16 text-center shadow-sm">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 md:w-10 md:h-10 text-slate-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-2 uppercase tracking-tight">No properties found</h3>
                <p className="text-slate-500 font-medium mb-8 max-w-sm mx-auto text-sm md:text-base">
                    Try adjusting your filters or search keywords to find your perfect property.
                </p>
                <button
                    onClick={() => {
                        window.location.href = '/properties';
                    }}
                    className="px-8 py-3 bg-[#1D4ED8] text-white rounded-xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                    Reset All Filters
                </button>
            </div>
        );
    }

    if (viewMode === "list") {
        return (
            <div className="flex flex-col gap-6 md:gap-8">
                {properties.map((prop) => (
                    <div key={prop.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row shadow-sm">
                        {/* Image Side */}
                        <div className="md:w-2/5 aspect-4/3 md:aspect-auto overflow-hidden relative shrink-0">
                            <Image
                                src={prop.images[0]}
                                alt={prop.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md border border-white/20 backdrop-blur-md ${prop.listingType === "For Sale" ? "bg-white/90 text-[#1E3A8A]" : "bg-orange-500 text-white"}`}>
                                    {prop.listingType}
                                </span>
                                {prop.approvalType && (
                                    <span className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-md bg-[#1E3A8A]/90 text-white border border-white/10 backdrop-blur-md flex items-center gap-1.5 w-fit">
                                        <BadgeCheck className="w-3.5 h-3.5" />
                                        {prop.approvalType}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-5 md:p-8 flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4 gap-4">
                                <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-[#1D4ED8] transition-colors uppercase italic">{prop.title}</h3>
                                <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-widest border border-slate-100 shrink-0">
                                    {(prop.type.toLowerCase().includes('flat') || prop.type.toLowerCase().includes('apartment'))
                                        ? prop.specs.bhk
                                        : prop.specs.carpetArea}
                                </span>
                            </div>

                            <div className="flex items-center text-slate-800 text-[13px] font-bold mb-4 opacity-70">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-[#1D4ED8]" />
                                <span className="truncate">{prop.location.address}, {prop.location.city}</span>
                            </div>

                            <p className="text-slate-500 mt-2 text-sm line-clamp-1 md:line-clamp-2 leading-relaxed mb-6 font-medium">
                                {prop.description}
                            </p>

                            <div className="flex justify-between items-center text-slate-900 text-[16px] mb-8 pb-4 border-b border-slate-50">
                                <div className="font-black text-2xl tracking-tighter text-[#1D4ED8]">{prop.price}</div>
                                <div className="text-right flex flex-col items-end gap-0.5">
                                    <p className="text-[10px] font-black text-slate-300 uppercase underline decoration-[#1D4ED8] decoration-2 underline-offset-4">Location Priority</p>
                                    <p className="font-bold text-slate-900 text-sm">{prop.location.city}</p>
                                </div>
                            </div>

                            <div className="mt-auto flex gap-3">
                                <Link
                                    href={`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`}
                                    className="flex-1 bg-[#1e3a8a] md:flex-none md:w-36 hover:bg-blue-900 text-white font-black uppercase tracking-widest py-3 px-2 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm text-[12px] md:text-[14px]"
                                >
                                    Details
                                </Link>
                                <a
                                    target="_blank"
                                    href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${prop.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop.slug}`}
                                    className="flex-1 bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] font-black uppercase tracking-widest py-3 px-2 rounded-xl transition-all flex items-center justify-center gap-2 text-[12px] md:text-[14px] hover:bg-blue-50"
                                >
                                    <MessageSquareCode className="w-4 h-4" /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Default Grid View - Refined for Mobile 2-column excellence
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {properties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col relative h-full">
                    <div className="relative aspect-4/3 sm:aspect-3/2 w-full overflow-hidden">
                        <Image
                            src={prop.images[0]}
                            alt={prop.title}
                            fill
                            sizes="(max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-col gap-1.5">
                            <span className={`px-2 md:px-3 py-1 rounded-lg text-[9px] md:text-[11px] font-black uppercase tracking-widest shadow-lg ${prop.listingType === "For Sale" ? "bg-white text-[#1D4ED8]" : "bg-orange-500 text-white"}`}>
                                {prop.listingType}
                            </span>
                            {prop.approvalType && (
                                <span className="px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg bg-[#1E3A8A] text-white border border-white/20 flex items-center gap-1 w-fit">
                                    <BadgeCheck className="w-3 h-3" />
                                    {prop.approvalType}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2 gap-2">
                            <h3 className="text-[15px] md:text-xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-[#1D4ED8] transition-colors line-clamp-2 uppercase shrink min-w-0 italic h-[2.4em]">{prop.title}</h3>
                            <span className="text-[10px] md:text-[12px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 uppercase shrink-0">
                                {(prop.type.toLowerCase().includes('flat') || prop.type.toLowerCase().includes('apartment'))
                                    ? prop.specs.bhk
                                    : prop.specs.carpetArea}
                            </span>
                        </div>
                        {/* <div className="flex items-center text-slate-500 text-[11px] md:text-[13px] font-bold mb-4 md:mb-6">
                            <div className="bg-blue-50 p-1 rounded-md mr-2">
                                <MapPin className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="truncate">{prop.location.city}</span>
                        </div> */}
                        <div className="flex justify-between items-center text-slate-900  border-t border-slate-100 py-2 mb-4 max-md:mb-0 mt-auto">
                            <div className="font-black text-base md:text-xl tracking-tighter text-[#1D4ED8]">{prop.price}</div>
                            {/* <div className="flex flex-col items-end">
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Elite Status</p>
                                <p className="font-bold text-slate-900 text-[11px] uppercase tracking-tighter">Verified</p>
                            </div> */}
                        </div>
                        <div className="mt-auto flex flex-col sm:flex-row gap-2">
                            <Link href={`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`} className="flex-1 bg-[#1D4ED8] hover:bg-blue-800 text-white font-black uppercase tracking-widest py-3 px-1 rounded-xl transition-all flex items-center justify-center gap-1 shadow-md text-[10px] md:text-[13px] active:scale-95">
                                Details
                            </Link>
                            <a
                                target="_blank"
                                href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${prop.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop.slug}`}
                                className="flex-1 bg-white border-2 border-slate-100 text-[#1e3a8a] font-black uppercase tracking-widest py-3 px-1 rounded-xl transition-all flex items-center justify-center gap-1 text-[10px] md:text-[13px] hover:bg-blue-50 active:scale-95"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
