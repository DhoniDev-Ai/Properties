"use client";

import { useState } from "react";
import { MapPin, Compass, MessageSquareCode, ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";

// Sample Data
const properties = [
    {
        id: 1,
        title: "Mahima Shubh Nilay",
        location: "Ajmer Road",
        price: "₹32.9 Lacs Onwards",
        status: "Ready to move-in",
        bhk: "2, 3, & 3.5 BHK Flats",
        size: "1945 Sq. Ft.",
        image: "/hero.png",
    },
    {
        id: 2,
        title: "Mansion Royale",
        location: "Opp. Jaipur Int. Airport",
        price: "On Request",
        status: "Possession Soon",
        bhk: "4 & 5 BHK Flats",
        size: "6977 Sq. Ft.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Royal Rajvilas",
        location: "C-Scheme, Jaipur",
        price: "₹1.5 Cr Onwards",
        status: "Under Construction",
        bhk: "3 & 4 BHK Premium Flats",
        size: "3500 Sq. Ft.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Eldeco Hillside",
        location: "Delhi Road, Jaipur",
        price: "₹45 Lacs Onwards",
        status: "Ready to move-in",
        bhk: " Villas",
        size: "1800 Sq. Ft.",
        image: "/her1.png",
    },
];

export default function FeaturedProperties() {
    const [wishlist, setWishlist] = useState<number[]>([]);

    const toggleWishlist = (id: number) => {
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
                    <button className="hidden md:flex cursor-pointer items-center text-[#1D4ED8] font-semibold hover:text-blue-800 transition-colors group">
                        View All Properties
                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* 
                  On mobile: horizontal snap-scroll row (each card ~80vw).
                  On desktop (lg+): standard 2-column grid.
                */}

                {/* Mobile horizontal scroll — hidden on lg+ */}
                <div className="flex lg:hidden gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="snap-start shrink-0 w-[82vw] max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative"
                        >
                            {/* Image */}
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 rounded-md text-[12px] font-medium text-white bg-slate-800/60 backdrop-blur-md">
                                        {property.status}
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleWishlist(property.id)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20"
                                >
                                    <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(property.id) ? "fill-[#1D4ED8] text-[#1D4ED8]" : "text-gray-300"}`} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1.5 gap-3">
                                    <h3 className="text-[18px] font-medium text-slate-900 leading-snug">{property.title}</h3>
                                    <span className="text-sm font-medium text-slate-600 text-right shrink-0 mt-0.5">{property.bhk}</span>
                                </div>
                                <div className="flex items-center text-slate-700 text-[13px] font-semibold mb-4">
                                    <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                                    <span className="truncate">{property.location}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 text-[13px] mb-5 pb-1">
                                    <div><span className="font-semibold text-slate-700">Price: </span>{property.price}</div>
                                    <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{property.size}</div>
                                </div>
                                <div className="mt-auto flex gap-2.5">
                                    <button className="flex-1 bg-[#1e3a8a] text-white font-medium py-2.5 px-3 rounded-md text-[14px] flex items-center justify-center">View Details</button>
                                    <button className="flex-1 border border-[#1e3a8a] text-[#1e3a8a] font-medium py-2.5 px-3 rounded-md text-[14px] flex items-center justify-center gap-1.5">
                                        <MessageSquareCode className="w-4 h-4" /> Enquire
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop 2-column grid — hidden on mobile */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-10">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-slate-200 flex flex-col relative"
                        >
                            <div className="relative h-[340px] w-full overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3.5 py-1.5 rounded-md text-[13px] font-medium text-white bg-slate-800/60 backdrop-blur-md">
                                        {property.status}
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleWishlist(property.id)}
                                    className="absolute cursor-pointer top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors border border-white/20 shadow-sm"
                                >
                                    <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(property.id) ? "fill-[#1D4ED8] text-[#1D4ED8]" : "text-gray-300"}`} />
                                </button>
                            </div>
                            <div className="p-7 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2 gap-4">
                                    <h3 className="text-[22px] font-medium text-slate-900 tracking-tight leading-snug">{property.title}</h3>
                                    <span className="text-[15px] font-medium text-slate-600 text-right shrink-0 mt-1">{property.bhk}</span>
                                </div>
                                <div className="flex items-center text-slate-800 text-[14px] font-semibold mb-6">
                                    <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-700" />
                                    <span className="truncate">{property.location}</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-600 text-[15px] mb-8">
                                    <div><span className="font-semibold text-slate-700">Price: </span>{property.price}</div>
                                    <div className="text-right"><span className="font-semibold text-slate-700">Size: </span>{property.size}</div>
                                </div>
                                <div className="mt-auto flex gap-4">
                                    <button className="flex-1 bg-[#1e3a8a] hover:bg-blue-900 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-[15px]">View Details</button>
                                    <button className="flex-1 bg-white border border-[#1e3a8a] hover:bg-blue-50 text-[#1e3a8a] font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-[15px]">
                                        <MessageSquareCode className="w-4 h-4" /> Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View All" button — desktop only */}
                <div className="mt-10 text-center  md:block ">
                    <button className="px-6 py-3 cursor-pointer bg-white border border-slate-200 text-[#1D4ED8] font-semibold rounded-xl inline-flex items-center hover:bg-slate-50 active:scale-95 transition-all shadow-sm">
                        View All Properties

                    </button>
                </div>
            </div>
        </section>
    );
}
