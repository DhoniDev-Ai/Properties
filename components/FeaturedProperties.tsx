"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
                const data = await getFeaturedProperties(4);
                setFeaturedProperties(data);
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
        <section id="properties" className="py-24 bg-slate-50 relative overflow-hidden">
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
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            priority
                                        />
                                        {/* Glass Overlay Badges */}
                                        <div className="absolute top-6 left-6 flex flex-col gap-3">
                                            <span className={`px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-xl border border-white/20 ${property.listingType === "For Sale" ? "bg-white/90 text-[#1E3A8A]" : "bg-orange-500 text-white"}`}>
                                                {property.listingType}
                                            </span>
                                            {property.projectName && (
                                                <span className="px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl bg-orange-600 text-white border border-white/20 backdrop-blur-xl flex items-center gap-2 w-fit">
                                                    <LayoutGrid className="w-4 h-4" />
                                                    {property.projectName}
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Tag Overlay */}
                                        <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-3 rounded-2xl shadow-2xl border border-slate-100 backdrop-blur-md">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Price Guide</p>
                                            <p className="text-xl font-black text-[#1D4ED8] tracking-tighter">{property.price}</p>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 sm:p-10 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4 gap-6">
                                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase group-hover:text-[#1D4ED8] transition-colors">{property.title}</h3>
                                            <div className="text-right shrink-0">
                                                <span className="bg-slate-50 text-slate-500 px-4 py-2 rounded-xl text-sm font-black border border-slate-200 uppercase tracking-widest shadow-sm">
                                                    {(property.type.toLowerCase().includes('flat') || 
                                                      property.type.toLowerCase().includes('apartment') || 
                                                      property.type.toLowerCase().includes('house') || 
                                                      property.type.toLowerCase().includes('villa')) 
                                                        ? property.specs.bhk 
                                                        : property.specs.carpetArea}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center text-slate-500 text-[15px] font-semibold mb-8 group/loc">
                                            <div className="bg-blue-50 p-2 rounded-lg mr-3 group-hover/loc:bg-blue-100 transition-colors">
                                                <MapPin className="w-4 h-4 text-[#1D4ED8]" />
                                            </div>
                                            <span className="truncate group-hover:text-slate-900 transition-colors tracking-tight">{property.location.address}, {property.location.city}</span>
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
