"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Compass, MessageSquareCode, ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
    const [wishlist, setWishlist] = useState<string[]>([]);

    const toggleWishlist = (id: string) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Show only the first 4 featured properties
    const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 4);

    return (
        <section id="properties" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Featured Properties
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Hand-picked properties just for you
                        </p>
                    </div>
                    <Link href="/properties" className="hidden md:flex cursor-pointer items-center text-[#1D4ED8] font-semibold hover:text-blue-800 transition-colors group">
                        View All Properties
                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* 
                  On mobile: horizontal snap-scroll row (each card ~80vw).
                  On desktop (lg+): standard 2-column grid.
                */}

                {/* Mobile horizontal scroll — hidden on lg+ */}
                <div className="flex lg:hidden gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
                    {featuredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="snap-start shrink-0 w-[82vw] max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative"
                        >
                            {/* Image */}
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 rounded-md text-[12px] font-medium text-white bg-slate-800/60 backdrop-blur-md">
                                        Featured
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleWishlist(property.id.toString())}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20"
                                >
                                    <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(property.id.toString()) ? "fill-[#1D4ED8] text-[#1D4ED8]" : "text-gray-300"}`} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1.5 gap-3">
                                    <h3 className="text-[18px] font-medium text-slate-900 leading-snug">{property.title}</h3>
                                    <span className="text-sm font-medium text-slate-600 text-right shrink-0 mt-0.5">{property.specs.bhk}</span>
                                </div>
                                <div className="flex items-center text-slate-700 text-[13px] font-semibold mb-4">
                                    <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                                    <span className="truncate">{property.location.address}, {property.location.city}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 text-[13px] mb-5 pb-1">
                                    <div><span className="font-semibold text-slate-700">Price: </span>{property.price}</div>
                                    <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{property.specs.builtUpArea}</div>
                                </div>
                                <div className="mt-auto gap-2.5 grid grid-cols-2">
                                    <Link href={`/properties/${property.slug}`} className="bg-[#1e3a8a] text-white font-medium py-2.5 px-3 rounded-md text-[14px] flex items-center justify-center">View Details</Link>
                                    <a target="_blank" href={`https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20"${property.title}"`} className="border border-[#1e3a8a] text-[#1e3a8a] font-medium py-2.5 px-3 rounded-md text-[14px] flex items-center justify-center gap-1.5">
                                        <MessageSquareCode className="w-4 h-4" /> Enquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop 2-column grid — hidden on mobile */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-10">
                    {featuredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-slate-200 flex flex-col relative"
                        >
                            <div className="relative h-[340px] w-full overflow-hidden">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3.5 py-1.5 rounded-md text-[13px] font-medium text-white bg-slate-800/60 backdrop-blur-md">
                                        Featured
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleWishlist(property.id.toString())}
                                    className="absolute cursor-pointer top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20 shadow-sm"
                                >
                                    <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(property.id.toString()) ? "fill-[#1D4ED8] text-[#1D4ED8]" : "text-gray-300"}`} />
                                </button>
                            </div>
                            <div className="p-7 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2 gap-4">
                                    <h3 className="text-[22px] font-medium text-slate-900 tracking-tight leading-snug">{property.title}</h3>
                                    <span className="text-[15px] font-medium text-slate-600 text-right shrink-0 mt-1">{property.specs.bhk}</span>
                                </div>
                                <div className="flex items-center text-slate-800 text-[14px] font-semibold mb-6">
                                    <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-700" />
                                    <span className="truncate">{property.location.address}, {property.location.city}</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-600 text-[15px] mb-8">
                                    <div><span className="font-semibold text-slate-700">Price: </span>{property.price}</div>
                                    <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{property.specs.builtUpArea}</div>
                                </div>
                                <div className="mt-auto grid grid-cols-2 gap-4">
                                    <Link href={`/properties/${property.slug}`} className="bg-[#1e3a8a] justify-center hover:bg-blue-900 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center gap-2 shadow-sm text-[15px]">View Details</Link>
                                    <a target="_blank" href={`https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20"${property.title}"`} className="bg-white justify-center border border-[#1e3a8a] hover:bg-blue-50 text-[#1e3a8a] font-medium py-3 px-4 rounded-md transition-colors flex items-center gap-2 shadow-sm text-[15px]">
                                        <MessageSquareCode className="w-4 h-4" /> Enquire Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View All" button — desktop only */}
                <div className="mt-10 text-center  md:block ">
                    <Link href="/properties" className="px-6 py-3 cursor-pointer bg-white border border-slate-200 text-[#1D4ED8] font-semibold rounded-xl inline-flex items-center hover:bg-slate-50 active:scale-95 transition-all shadow-sm">
                        View All Properties
                    </Link>
                </div>
            </div>
        </section>
    );
}
