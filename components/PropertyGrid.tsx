"use client";

import Link from "next/link";
import { MapPin, MessageSquareCode, BadgeCheck, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { getPropertyHighlights, PropertyHighlight, getPropertyImage, hasPropertyImage } from "@/lib/property-utils";

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
                                src={getPropertyImage(prop)}
                                alt={prop.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {!hasPropertyImage(prop) && (
                                <div className="absolute inset-x-0 bottom-0 py-1.5 bg-black/50 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-widest text-center">
                                    Representative Image
                                </div>
                            )}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md border border-white/20 backdrop-blur-md ${prop.listingType === "For Sale" ? "hidden" : "bg-orange-500 text-white"}`}>
                                    {prop.listingType}
                                </span>
                                {prop.approvalType && (
                                    <span className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-md bg-[#1E3A8A]/90 text-white border border-white/10 backdrop-blur-md flex items-center gap-1.5 w-fit">
                                        <BadgeCheck className="w-3.5 h-3.5" />
                                        {prop.approvalType}
                                    </span>
                                )}
                                {prop.projectName && (
                                    <span className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-md bg-orange-600/90 text-white border border-white/10 backdrop-blur-md flex items-center gap-1.5 w-fit">
                                        <LayoutGrid className="w-3.5 h-3.5" />
                                        {prop.projectName}
                                    </span>
                                )}
                            </div>
                            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-white border border-[#1a4cd5]/80 rounded-full flex justify-between items-center text-slate-900 p-2 mb-1 max-md:mb-0">
                                <div className="font-black text-base max-md:text-[8px] tracking-tighter text-[#1a4cd5]">{prop.price}</div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-2 md:p-3 flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start ">
                                <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-[#1D4ED8] transition-colors ">{prop.title}</h3>
                            </div>

                            <div className="flex items-center text-slate-800 text-[13px] font-bold opacity-70">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-[#1D4ED8]" />
                                <span className="truncate">{prop.location.address}, {prop.location.city}</span>
                            </div>

                            <p className="text-slate-500 mt-2 text-sm line-clamp-1 md:line-clamp-2 leading-relaxed  font-medium">
                                {prop.description}
                            </p>

                            <div className="grid grid-cols-3 gap-2  py-2 border-slate-50 ">
                                {getPropertyHighlights(prop).map((highlight: PropertyHighlight, idx: number) => (
                                    <div key={idx} className="flex flex-col items-center justify-center p-1 max-md:p-1 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-blue-50 transition-colors">
                                        <highlight.icon className="w-3.5 h-3.5 text-[#1D4ED8] mb-1" />
                                        <span className="text-[8px] font-black text-slate-900 uppercase tracking-tighter truncate max-w-full text-center">
                                            {highlight.value}
                                        </span>
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mt-0.5">
                                            {highlight.label}
                                        </span>
                                    </div>
                                ))}
                            </div>


                            <div className="mt-1 flex gap-2">
                                <Link
                                    href={`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`}
                                    className="flex-1 bg-[#1e3a8a] md:flex-none md:w-36 hover:bg-blue-900 text-white font-black uppercase tracking-widest py-3 px-2 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm text-[12px] md:text-[14px]"
                                >
                                    Details
                                </Link>
                                <a
                                    target="_blank"
                                    href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${prop.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop.slug}`}
                                    className="flex-1 bg-white border-2 border-[#25D366] text-[#25D366] font-black uppercase tracking-widest py-3 px-2 rounded-xl transition-all flex items-center justify-center gap-2 text-[12px] md:text-[14px] hover:bg-blue-50"
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
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-3 md:gap-8">
            {properties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-slate-200 flex flex-col relative h-full">
                    <div className="relative aspect-4/3 sm:aspect-3/2 w-full overflow-hidden">
                        <Image
                            src={getPropertyImage(prop)}
                            alt={prop.title}
                            fill
                            sizes="(max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {!hasPropertyImage(prop) && (
                            <div className="absolute inset-x-0 bottom-0 py-1.5 bg-black/50 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-widest text-center">
                                Representative Image
                            </div>
                        )}
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-col   gap-1.5">
                            <span className={`px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[11px] font-black uppercase tracking-widest shadow-lg ${prop.listingType === "For Sale" ? "hidden" : "bg-orange-500 text-white"}`}>
                                {prop.listingType}
                            </span>
                            {prop.approvalType && (
                                <span className="px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg bg-[#1E3A8A] text-white border border-white/20 flex items-center gap-1 w-fit">
                                    <BadgeCheck className="w-3 h-3" />
                                    {prop.approvalType}
                                </span>
                            )}
                            {prop.projectName && (
                                <span className="px-2 md:px-3 py-1 rounded-lg text-[6px] md:text-[9px] font-black uppercase tracking-widest shadow-lg bg-orange-600 text-white border border-white/20 flex items-center gap-1 w-fit">
                                    <LayoutGrid className="w-2.5 h-2.5" />
                                    {prop.projectName}
                                </span>
                            )}
                        </div>
                        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-white border border-[#1a4cd5]/80 rounded-full flex justify-between items-center text-slate-900 p-2 mb-1 max-md:mb-0">
                            <div className="font-black text-base max-md:text-[8px] tracking-tighter text-[#1a4cd5]">{prop.price}</div>
                        </div>
                    </div>
                    <div className="p-2 md:p-3 flex-1 flex flex-col justify-between">
                        <div className="">
                            {/* Property Title - Max 2 Lines */}
                            <h3 className="text-[10px] md:text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#1D4ED8] transition-colors  line-clamp-1 ">
                                {prop.title}
                            </h3>

                            {/* Address/Location - Simple Text with Icon */}
                            <div className="flex items-start text-slate-500 text-[8px] md:text-[13px] font-bold">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-400 mt-0.5" />
                                <span className="line-clamp-1 truncate w-full pr-2">
                                    {prop.location.address}, {prop.location.city}
                                </span>
                            </div>
                        </div>

                        {/* Smart Highlights Section */}
                        <div className="grid grid-cols-3 gap-2  pt-2 border-slate-50 ">
                            {getPropertyHighlights(prop).map((highlight: PropertyHighlight, idx: number) => (
                                <div key={idx} className="flex flex-col items-center justify-center p-1 max-md:p-1 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-blue-50 transition-colors">
                                    <highlight.icon className="w-3.5 h-3.5 text-[#1D4ED8] mb-1" />
                                    <span className="text-[8px] font-black text-slate-900 uppercase tracking-tighter truncate max-w-full text-center">
                                        {highlight.value}
                                    </span>
                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mt-0.5">
                                        {highlight.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2 flex flex-row gap-2">
                            <Link href={`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`} className="flex-1 bg-[#1D4ED8] hover:bg-blue-800 text-white font-black uppercase tracking-widest py-2 px-1  rounded-xl transition-all flex items-center justify-center gap-1 shadow-md text-[8px] md:text-[12px] active:scale-95">
                                Details
                            </Link>
                            <a
                                target="_blank"
                                href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${prop.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${prop.slug}`}
                                className="flex-1 bg-white border-2 border-[#25D366] text-[#25D366] font-black uppercase tracking-widest py-2 px-1 rounded-xl transition-all flex items-center justify-center gap-1 text-[8px] md:text-[12px] hover:bg-[#25D366]/10 active:scale-95"
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
