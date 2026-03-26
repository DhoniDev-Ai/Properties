"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, MessageSquareCode, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { getFeaturedProperties } from "@/lib/data";
import { Property } from "@/data/properties";

export default function FeaturedProperties() {
    const [wishlist, setWishlist] = useState<string[]>([]);
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

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

    const toggleWishlist = (id: string) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

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

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-2xl h-[450px] animate-pulse shadow-sm border border-slate-200" />
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Mobile horizontal scroll — hidden on lg+ */}
                        <div className="flex lg:hidden gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
                            {featuredProperties.map((property) => (
                                <div
                                    key={property.id}
                                    className="snap-start shrink-0 w-[82vw] max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-3/2 w-full overflow-hidden">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            sizes="(max-width: 640px) 80vw, 350px"
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            <span className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold shadow-md ${property.listingType === "For Sale" ? "bg-blue-100/90 text-[#1E3A8A] backdrop-blur-md" : "bg-orange-500 text-white"}`}>
                                                {property.listingType}
                                            </span>
                                        </div>
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
                                            <a 
                                                target="_blank" 
                                                href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${property.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${property.slug}`}
                                                className="border border-[#1e3a8a] text-[#1e3a8a] font-medium py-2.5 px-3 rounded-md text-[14px] flex items-center justify-center gap-1.5"
                                            >
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
                                    <div className="relative aspect-3/2 w-full overflow-hidden">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            <span className={`px-3.5 py-1.5 rounded-full text-[13px] font-bold shadow-md ${property.listingType === "For Sale" ? "bg-blue-100/90 text-[#1E3A8A] backdrop-blur-md" : "bg-orange-500 text-white"}`}>
                                                {property.listingType}
                                            </span>
                                        </div>
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
                                            <a 
                                                target="_blank" 
                                                href={`https://wa.me/918426022000?text=Hi, I'm interested in the property: "${property.title}" - ${typeof window !== 'undefined' ? window.location.origin : ''}/properties/${property.slug}`}
                                                className="bg-white justify-center border border-[#1e3a8a] hover:bg-blue-50 text-[#1e3a8a] font-medium py-3 px-4 rounded-md transition-colors flex items-center gap-2 shadow-sm text-[15px]"
                                            >
                                                <MessageSquareCode className="w-4 h-4" /> Enquire Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

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
