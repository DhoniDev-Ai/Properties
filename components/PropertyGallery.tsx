"use client";

import Image from "next/image";

interface PropertyGalleryProps {
    images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
    // We expect at least 5 images for the grid layout
    const mainImage = images[0];
    const imageCount = images.length;

    return (
        <section className="pt-28">
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
