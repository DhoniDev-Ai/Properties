"use client";

import Link from "next/link";
import { Heart, MapPin, BedDouble, Bath, Square, ChevronRight, MessageSquareCode } from "lucide-react";

interface PropertyGridProps {
    properties: any[];
    viewMode: "grid" | "list";
}

export default function PropertyGrid({ properties, viewMode }: PropertyGridProps) {
    if (properties.length === 0) {
        return (
            <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No properties found</h3>
                <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto">
                    We couldn't find any properties matching your current filters. Try adjusting your search criteria or clear all filters to see more results.
                </p>
                <button
                    onClick={() => {
                        // In a real app, this would trigger the clear filters function passed via props or context
                        window.location.href = '/properties';
                    }}
                    className="px-8 py-3 bg-[#1D4ED8] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-500/20"
                >
                    Clear All Filters
                </button>
            </div>
        );
    }

    if (viewMode === "list") {
        return (
            <div className="flex flex-col gap-6">
                {properties.map((prop) => (
                    <div key={prop.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row shadow-sm">
                        {/* Image Side */}
                        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative shrink-0">
                            <img
                                src={prop.images[0]}
                                alt={prop.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <span className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium text-white bg-slate-800/60 backdrop-blur-md`}>
                                    {prop.listingType}
                                </span>
                                {prop.isFeatured && (
                                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-orange-500 text-white shadow-sm">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <button className="absolute cursor-pointer top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20 shadow-sm z-10">
                                <Heart className="w-5 h-5 transition-colors text-gray-300 hover:text-red-500" />
                            </button>
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-bold text-sm border border-white/20">
                                {prop.price}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-2 gap-4">
                                <h3 className="text-[22px] font-medium text-slate-900 tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors">{prop.title}</h3>
                                <span className="text-[15px] font-medium text-slate-600 text-right shrink-0 mt-1">{prop.specs.bhk}</span>
                            </div>
                            
                            <div className="flex items-center text-slate-800 text-[14px] font-semibold mb-6">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-700" />
                                <span className="truncate">{prop.location.address}, {prop.location.city}</span>
                            </div>

                            <p className="text-slate-600 mt-2 text-sm line-clamp-2 leading-relaxed mb-6">
                                {prop.description}
                            </p>

                            <div className="flex justify-between items-center text-slate-600 text-[15px] mb-8 pb-4 border-b border-slate-100">
                                <div><span className="font-semibold text-slate-700">Price: </span>{prop.price}</div>
                                <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{prop.specs.carpetArea}</div>
                            </div>

                            <div className="mt-auto flex gap-4">
                                <Link
                                    href={`/properties/${prop.slug}`}
                                    className="flex-1 bg-[#1e3a8a] md:flex-none md:w-40 hover:bg-blue-900 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-[15px]"
                                >
                                    View Details
                                </Link>
                                <button className="flex-1 bg-white border md:flex-none md:w-48 border-[#1e3a8a] hover:bg-blue-50 text-[#1e3a8a] font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-[15px]">
                                    <MessageSquareCode className="w-4 h-4" /> Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Default Grid View
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-slate-200 flex flex-col relative">
                    <div className="relative h-[340px] w-full overflow-hidden">
                        <img
                            src={prop.images[0]}
                            alt={prop.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            <span className="px-3.5 py-1.5 rounded-md text-[13px] font-medium text-white bg-slate-800/60 backdrop-blur-md">
                                {prop.listingType}
                            </span>
                            {prop.isFeatured && (
                                <span className="px-3 py-1 rounded-md text-xs font-bold bg-orange-500 text-white shadow-sm inline-block w-fit">
                                    Featured
                                </span>
                            )}
                        </div>
                        <button
                            className="absolute cursor-pointer top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20 shadow-sm z-10"
                            onClick={(e) => { e.preventDefault(); }}
                        >
                            <Heart className="w-5 h-5 transition-colors text-gray-300 hover:text-red-500" />
                        </button>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2 gap-4">
                            <h3 className="text-[22px] font-medium text-slate-900 tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors line-clamp-1">{prop.title}</h3>
                            <span className="text-[15px] font-medium text-slate-600 text-right shrink-0 mt-1">{prop.specs.bhk}</span>
                        </div>
                        <div className="flex items-center text-slate-800 text-[14px] font-semibold mb-6">
                            <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-700" />
                            <span className="truncate">{prop.location.address}, {prop.location.city}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600 text-[15px] mb-8">
                            <div><span className="font-semibold text-slate-700">Price: </span>{prop.price}</div>
                            <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{prop.specs.carpetArea}</div>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <Link href={`/properties/${prop.slug}`} className="flex-1 bg-[#1e3a8a] hover:bg-blue-900 text-white font-medium py-3 px-2 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-[14px] lg:text-[15px] whitespace-nowrap">
                                View Details
                            </Link>
                            <button className="flex-1 bg-white border border-[#1e3a8a] hover:bg-blue-50 text-[#1e3a8a] font-medium py-3 px-2 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm text-[14px] lg:text-[15px] whitespace-nowrap">
                                <MessageSquareCode className="w-4 h-4 shrink-0" /> Enquire
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
