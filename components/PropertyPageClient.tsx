"use client";

import { useState, useEffect } from "react";
import { Share2, Eye, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import SpecsBar from "@/components/SpecsBar";
import ContactCard from "@/components/ContactCard";
import DescriptionSection from "@/components/DescriptionSection";
import PropertyTabs from "@/components/PropertyTabs";
import { Property } from "@/data/properties";
import EnquiryCTA from "@/components/EnquiryCTA";

interface PropertyPageClientProps {
    property: Property;
    similarProperties: Property[];
}

export default function PropertyPageClient({ property, similarProperties }: PropertyPageClientProps) {
    const handleShare = async () => {
        const shareData = {
            title: property.title,
            text: `Check out this property: ${property.title}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />

            {/* Image Gallery */}
            <PropertyGallery images={property.images} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
                    {/* Left Column: Content */}
                    <div className="lg:w-[68%]">
                        {/* Authoritative Header Info */}
                        <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 mb-10 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className={`px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-sm border ${property.listingType === "For Sale" ? "bg-white text-[#1E3A8A] border-blue-100" : "bg-[#1D4ED8] text-white border-blue-600"}`}>
                                        {property.listingType}
                                    </span>
                                    {property.isNew && (
                                        <span className="px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest bg-orange-500 text-white border border-orange-600 shadow-sm">
                                            Premium Selection
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-[32px] md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-tight uppercase italic">
                                    {property.title}
                                </h1>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8 pt-8 border-t border-slate-200/60">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Elite Location</p>
                                        <p className="text-slate-700 flex items-center gap-2 text-lg font-bold">
                                            <span className="bg-blue-100 p-1.5 rounded-lg text-[#1D4ED8]"><MapPin className="w-5 h-5" /></span>
                                            {property.location.address}, {property.location.city}
                                        </p>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-4xl border border-white shadow-xl flex flex-col items-start md:items-end group hover:border-[#1D4ED8] transition-all">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Investment Guide</p>
                                        <div className="text-[#1D4ED8] text-3xl md:text-4xl font-black tracking-tighter group-hover:scale-105 transition-transform">
                                            {property.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Bar/Metadata - High Contrast Mobile */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-10 py-6 px-4 md:px-0 border-y border-slate-100 text-slate-500 text-[13px] font-black uppercase tracking-widest mb-10">
                            <div className="flex items-center gap-2 group cursor-pointer hover:text-slate-900 transition-colors">
                                <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-50 transition-colors"><Eye className="w-4 h-4 text-[#1D4ED8]" /></div>
                                <span>{property.views} High-Intent Views</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-pointer hover:text-slate-900 transition-colors">
                                <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-50 transition-colors"><Clock className="w-4 h-4 text-[#1D4ED8]" /></div>
                                <span>Verified {property.updatedAt}</span>
                            </div>
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 hover:text-[#1D4ED8] transition-all ml-auto group active:scale-95"
                            >
                                <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors"><Share2 className="w-4 h-4 text-[#1D4ED8]" /></div>
                                <span>Share Listing</span>
                            </button>
                        </div>

                        {/* Quick Specs Bar */}
                        <SpecsBar specs={property.specs} amenities={property.amenities} />

                        {/* Description Section */}
                        <DescriptionSection description={property.description} />

                        {/* Tabbed Details */}
                        <PropertyTabs property={property} />

                        {/* Professional Guidance CTA */}
                        <div className="mt-16">
                            <EnquiryCTA
                                variant="vertical"
                                propertyTitle={property.title}
                            />
                        </div>
                    </div>

                    {/* Right Column: Sticky Contact Card */}
                    <div className="lg:w-[32%]">
                        <ContactCard propertyTitle={property.title} owner={property.owner} />
                    </div>
                </div>

                {/* Similar Properties Section */}
                <section className=" border-t border-slate-100 pt-16">
                    <h2 className="text-3xl font-bold text-[#1E3A8A] mb-10 tracking-tight">Similar Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {similarProperties.map((prop) => (
                            <Link
                                key={prop.id}
                                href={`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`}
                                className="group bg-white rounded-4xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-sm"
                            >
                                <div className="aspect-16/10 overflow-hidden relative">
                                    <Image
                                        src={prop.images[0]}
                                        alt={prop.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-[#1E3A8A] uppercase tracking-widest border border-slate-100 shadow-xl">
                                        {prop.listingType}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#1D4ED8] transition-colors leading-tight uppercase tracking-tight italic">
                                        {prop.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs font-bold mb-6 flex items-center gap-1 uppercase tracking-widest">
                                        <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /> {prop.location.city}
                                    </p>
                                    <div className="mt-auto flex justify-between items-center border-t border-slate-50 pt-4">
                                        <div className="text-[#1D4ED8] font-black text-xl tracking-tighter">{prop.price}</div>
                                        <div className="text-slate-500 text-[11px] font-black uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                            {prop.specs.bhk ? prop.specs.bhk : prop.specs.area}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
