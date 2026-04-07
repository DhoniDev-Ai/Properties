"use client";

import { getPropertyHighlights, PropertyHighlight, getPropertyImage, hasPropertyImage } from "@/lib/property-utils"
import { Share2, Eye, Clock, MapPin, Check, CheckCircle2, BadgeCheck, LayoutGrid, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    const router = useRouter();
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

            {/* Back Navigation Bar */}


            {/* Image Gallery */}
            <PropertyGallery images={property.images && property.images.length > 0 ? property.images : [getPropertyImage(property)]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
                    {/* Left Column: Content */}
                    <div className="lg:w-[68%]">
                        {/* Authoritative Header Info */}
                        <div className="bg-slate-50/50 rounded-[2.5rem] p-4 mb-2 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">

                                <h1 className="text-[20px] md:text-3xl font-black text-slate-900  tracking-tighter leading-tight uppercase italic">
                                    {property.title}
                                </h1>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-2 pt-2     border-t border-slate-200/60">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Elite Location</p>
                                        <p className="text-slate-700 flex items-center gap-2 text-lg font-bold">
                                            <span className="bg-blue-100 p-1.5 rounded-lg text-[#1D4ED8]"><MapPin className="w-5 h-5" /></span>
                                            {property.location.address}, {property.location.city}
                                        </p>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-md p-4 rounded-4xl border border-slate-300 shadow-xl flex flex-col items-start md:items-end group hover:border-[#1D4ED8] transition-all">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Investment Guide</p>
                                        <div className="text-[#1D4ED8] text-2xl md:text-3xl font-black tracking-tighter group-hover:scale-105 transition-transform">
                                            {property.price}
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Bar/Metadata - High Contrast Mobile */}
                                <div className="flex flex-wrap items-center gap-4 md:gap-10 py-2 mt-3 md:px-0 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2">
                                    <div className="flex items-center group gap-1 hover:text-slate-900 transition-colors">
                                        <div className="bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors"><Eye className="w-4 h-4 text-[#1D4ED8]" /></div>
                                        <span>{property.views} Views</span>
                                    </div>
                                    <div className="flex items-center gap-1 group hover:text-slate-900 transition-colors">
                                        <div className="bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors"><CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" /></div>
                                        <span>Verified</span>
                                    </div>
                                    <button
                                        onClick={handleShare}
                                        className="flex items-center gap-1 hover:text-[#1D4ED8] text-[13px] cursor-pointer transition-all ml-auto group active:scale-95"
                                    >
                                        <div className="bg-slate-50 rounded-xl group-hover:bg-blue-100 transition-colors"><Share2 className="w-4 h-4 text-[#1D4ED8]" /></div>
                                        <span>Share Listing</span>
                                    </button>
                                </div>
                            </div>

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
                            <div
                                key={prop.id}
                                onClick={() => router.push(`/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`)}
                                className="group bg-white rounded-4xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-sm cursor-pointer"
                            >
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
                                        <h3 className="text-[10px] md:text-xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-[#1D4ED8] transition-colors uppercase italic line-clamp-1 ">
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
                                        <div className="flex-1 bg-[#1D4ED8] hover:bg-blue-800 text-white font-black uppercase tracking-widest py-2 px-1  rounded-xl transition-all flex items-center justify-center gap-1 shadow-md text-[8px] md:text-[12px] active:scale-95 cursor-pointer">
                                            Details
                                        </div>
                                        <a
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
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
                </section>
            </div>
            <Footer />
        </main>
    );
}
