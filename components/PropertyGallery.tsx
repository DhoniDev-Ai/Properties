"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface PropertyGalleryProps {
    images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
    const hasImages = images && images.length > 0 && images[0] && !images[0].includes("unsplash.com/photo-154532441") && !images[0].includes("unsplash.com/photo-1613490493") && !images[0].includes("unsplash.com/photo-150038201");
    
    // Actually, check if the image matches any of our category fallbacks
    // But it's easier to just pass a 'isFallback' prop if we want to be precise.
    // For now, if we have only 1 image and it's our known fallback, show badge.
    const isFallback = images.length === 1 && (
        images[0].includes("unsplash.com/photo-1545324418-cc1a3fa10c00") ||
        images[0].includes("unsplash.com/photo-1613490493576-7fde63acd811") ||
        images[0].includes("unsplash.com/photo-1500382017468-9049fed747ef") ||
        images[0].includes("unsplash.com/photo-1497366216548-37526070297c") ||
        images[0] === "/hero.png"
    );

    const mainImage = images[0];
    const imageCount = images.length;

    return (
        <section className="pt-28 relative">
            <div className=" px-4 absolute sm:px-6 lg:px-8 py-4">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-slate-200  z-500 bg-[#1D4ED8] hover:text-[#1D4ED8] font-bold text-sm   hover:bg-blue-50 px-4 py-2 rounded-xl transition-all cursor-pointer border border-slate-100 w-fit active:scale-95 shadow-sm"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Listings
                </button>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid gap-3 grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden shadow-md`}>
                    {/* Main Image - Spans 2 cols and 2 rows to force 3:2 among neighbors */}
                    <div className={`${imageCount > 1 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-4'} relative group overflow-hidden cursor-pointer aspect-3/2`}>
                        <Image
                            src={mainImage}
                            alt="Property main"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {isFallback && (
                             <div className="absolute inset-x-0 bottom-0 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] text-center">
                                Representative Image
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </div>

                    {/* Secondary Images Grid */}
                    {imageCount > 1 && (
                        <>
                            {images.slice(1, 5).map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`relative group overflow-hidden cursor-pointer aspect-3/2 ${imageCount === 2 ? 'md:col-span-2 md:row-span-2' :
                                        imageCount === 3 ? 'md:col-span-2' : ''
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Property ${idx + 2}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                    {idx === 3 && imageCount > 5 && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm md:text-xl">+{imageCount - 5} photos</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

        </section>


    );
}
