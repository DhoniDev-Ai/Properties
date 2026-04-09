"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getPropertyHighlights, PropertyHighlight, getPropertyImage, hasPropertyImage } from "@/lib/property-utils";
import { MapPin, MessageSquareCode, ArrowRight, Heart, Star, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getFeaturedProperties } from "@/lib/data";
import { Property } from "@/data/properties";
import { PropertySkeleton } from "./PropertySkeleton";

export default function FeaturedProperties() {
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const fetchFeatured = async () => {
            setLoading(true);
            try {
                const data = await getFeaturedProperties(8);
                setFeaturedProperties(data);
                console.log(featuredProperties);

            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    const toggleWishlist = (id: number) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section id="properties" className="py-24 bg-slate-100 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4" />
                            Exclusive Collections
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight uppercase italic">
                            Hand-Picked <br /> <span className="text-[#1D4ED8] bg-white px-3 shadow-sm border border-slate-100 italic">Featured Properties</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium border-l-4 border-blue-500 pl-6">
                            Discover high-value commercial, residential, and agriculture lands curated for maximum ROI in Rajasthan.
                        </p>
                    </div>
                    <Link href="/properties" className="group flex items-center gap-3 bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-slate-900 uppercase tracking-widest text-sm hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all hover:shadow-xl hover:-translate-y-1 shadow-sm">
                        Explore Full Inventory
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {loading ? (
                    <div className="flex gap-6 md:gap-10 overflow-hidden">
                        {[1, 2].map((i) => (
                            <div key={i} className="min-w-[90%] md:min-w-[calc(50%-20px)] h-[600px]">
                                <PropertySkeleton />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="relative group/slider">
                        {/* Navigation Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20 hidden md:block opacity-0 group-hover/slider:opacity-100 transition-opacity">
                            <button
                                onClick={() => scroll('left')}
                                className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 text-slate-800 hover:bg-[#1D4ED8] hover:text-white transition-all active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 hidden md:block opacity-0 group-hover/slider:opacity-100 transition-opacity">
                            <button
                                onClick={() => scroll('right')}
                                className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 text-slate-800 hover:bg-[#1D4ED8] hover:text-white transition-all active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar scroll-smooth"
                        >
                            {featuredProperties.map((property) => (
                                <div
                                    key={property.id}
                                    className="min-w-[90%] md:min-w-[calc(50%-20px)] snap-center group bg-white rounded-[2.5rem] overflow-hidden shadow-lg  transition-all duration-700 flex flex-col relative border border-slate-100 "
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative aspect-16/10 w-full overflow-hidden">
                                        <Image
                                            src={getPropertyImage(property)}
                                            alt={property.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            priority
                                        />
                                        {!hasPropertyImage(property) && (
                                            <div className="absolute inset-x-0 bottom-0 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] text-center z-10">
                                                Representative Image
                                            </div>
                                        )}
                                        {/* Glass Overlay Badges */}
                                        <div className="absolute top-6 left-6 flex flex-col  max-md:flex-row max-md:gap-1 max-md:top-3 max-md:left-3 gap-3">
                                            <span className={`px-5 py-2.5 max-md:p-2 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-xl border border-white/20 ${property.listingType === "For Sale" ? "hidden" : "bg-orange-500 text-white"}`}>
                                                {property.listingType}
                                            </span>
                                            {property.projectName && (
                                                <span className="px-5 py-2.5 max-md:p-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl bg-orange-600 text-white border border-white/20  backdrop-blur-xl flex items-center gap-2 w-fit">
                                                    <LayoutGrid className="w-4 h-4" />
                                                    {property.projectName}
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Tag Overlay */}
                                        <div className="absolute w-fit bottom-3 left-4 bg-white/95 px-6 py-3 max-md:px-3 max-md:py-2 max-md:left-3 max-md:bottom-3 rounded-2xl shadow-2xl border border-slate-100 backdrop-blur-md">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Price</p>
                                            <p className="text-xl font-black text-[#1D4ED8] tracking-tighter">{property.price}</p>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                                        <div className="mb-4">
                                            {/* Property Title - Max 2 Lines */}
                                            <h3 className="text-xl sm:text-xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase group-hover:text-[#1D4ED8] transition-colors line-clamp-2 mb-2">
                                                {property.title}
                                            </h3>

                                            {/* Address/Location - Simple Text with Icon */}
                                            <div className="flex items-start text-slate-500 text-[13px] md:text-[15px] font-bold">
                                                <MapPin className="w-4 h-4 mr-1.5 shrink-0 text-slate-400 mt-0.5" />
                                                <span className="line-clamp-1 truncate w-full pr-2">
                                                    {property.location.address}, {property.location.city}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2  pb-2 border-slate-50 ">
                                            {getPropertyHighlights(property).map((highlight: PropertyHighlight, idx: number) => (
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

                                        <div className="grid grid-cols-2 gap-4 mt-auto">
                                            <Link
                                                href={`/properties/${property.type.toLowerCase().replace(' ', '-')}/${property.slug}`}
                                                className="bg-[#1e3a8a] text-white font-black py-4 px-6 rounded-2xl transition-all hover:bg-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn"
                                            >
                                                View Details
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/918426022000?text=Hi, I'm interested in: "${property.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${property.type.toLowerCase().replace(' ', '-')}/${property.slug}`}
                                                className="bg-white border-2 border-green-600 text-green-600 font-black py-4 px-6 rounded-2xl transition-all hover:bg-green-50 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                                            >
                                                <MessageSquareCode className="w-4 h-4" /> WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
