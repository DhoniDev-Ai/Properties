"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import SpecsBar from "@/components/SpecsBar";
import ContactCard from "@/components/ContactCard";
import DescriptionSection from "@/components/DescriptionSection";
import PropertyTabs from "@/components/PropertyTabs";
import { Share2, Heart, Eye, Clock, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function PropertyPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Find regular property
    const property = properties.find((p) => p.slug === slug);

    if (!property) {
        notFound();
    }

    // Similar properties logic: exclude current, same listing type
    const similarProperties = properties.filter(p => p.id !== property.id && p.listingType === property.listingType);

    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />


            {/* Image Gallery */}
            <PropertyGallery images={property.images} />

            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:w-[68%]">
                        {/* Header Info */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className={`px-3 py-1 rounded-full text-[13px] font-semibold ${property.listingType === "For Sale" ? "bg-blue-100 text-[#1E3A8A]" : "bg-green-100 text-green-700"}`}>
                                        {property.listingType}
                                    </span>
                                    {property.isFeatured && (
                                        <span className="px-3 py-1 rounded-full text-[13px] font-semibold bg-orange-100 text-orange-700">
                                            Featured
                                        </span>
                                    )}
                                    {property.isNew && (
                                        <span className="px-3 py-1 rounded-full text-[13px] font-semibold bg-blue-600 text-white">
                                            New Listing
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-2">
                                    {property.title}
                                </h1>
                                <p className="text-slate-600 flex items-center gap-1.5 text-lg">
                                    <span className="text-[#F59E0B]"><MapPin className="w-5 h-5" /></span> {property.location.address}, {property.location.city}
                                </p>
                            </div>

                            <div className="text-left md:text-right">
                                <div className="text-[#F59E0B] text-4xl font-bold mb-1">
                                    {property.price}
                                </div>
                                <div className="text-slate-500 text-sm font-medium">
                                    Property ID: #{property.id}00{property.id}
                                </div>
                            </div>
                        </div>

                        {/* Stats Bar/Metadata */}
                        <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 text-slate-500 text-sm mb-8">
                            <div className="flex items-center gap-1.5 font-bold">
                                <Eye className="w-4 h-4" />
                                <span>{property.views} views</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-bold">
                                <Clock className="w-4 h-4" />
                                <span>Updated {property.updatedAt}</span>
                            </div>
                            <button className="flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors ml-auto font-bold">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors font-bold">
                                <Heart className="w-4 h-4" />
                                <span>Save</span>
                            </button>
                        </div>

                        {/* Quick Specs Bar */}
                        <SpecsBar specs={property.specs} amenities={property.amenities} />

                        {/* Description Section */}
                        <DescriptionSection description={property.description} />

                        {/* Tabbed Details */}
                        <PropertyTabs property={property} />
                    </div>

                    {/* Right Column: Sticky Contact Card */}
                    <div className="lg:w-[32%]">
                        <ContactCard propertyTitle={property.title} />
                    </div>

                </div>

                {/* Similar Properties Section */}
                <section className="mt-20 pt-20 border-t border-slate-100">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-2">Similar Properties</h2>
                            <p className="text-slate-500 font-medium text-lg">Based on location and price range</p>
                        </div>
                        <Link href="/#properties" className="text-[#1D4ED8] font-bold flex items-center gap-1.5 hover:underline decoration-2">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {similarProperties.map((prop) => (
                            <Link
                                key={prop.id}
                                href={`/properties/${prop.slug}`}
                                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                            >
                                <div className="h-60 overflow-hidden relative">
                                    <img
                                        src={prop.images[0]}
                                        alt={prop.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#1E3A8A]">
                                        {prop.listingType}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#1D4ED8] transition-colors leading-tight">
                                        {prop.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /> {prop.location.address}, {prop.location.city}
                                    </p>
                                    <div className="mt-auto flex justify-between items-center border-t border-slate-50 pt-4">
                                        <div className="text-[#F59E0B] font-bold text-xl">{prop.price}</div>
                                        <div className="text-slate-500 text-sm font-semibold">{prop.specs.bhk}</div>
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
