"use client";

interface PropertyGalleryProps {
    images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
    // We expect at least 5 images for the grid layout
    const mainImage = images[0];
    const sideImages = images.slice(1, 5);

    return (
        <section className="pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-md">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 relative group overflow-hidden cursor-pointer">
                        <img
                            src={mainImage}
                            alt="Property main"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </div>

                    {/* Side Grid */}
                    <div className="hidden md:grid grid-cols-2 col-span-2 gap-2">
                        {sideImages.map((img, idx) => (
                            <div key={idx} className="relative group overflow-hidden cursor-pointer">
                                <img
                                    src={img}
                                    alt={`Property ${idx + 2}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                {idx === 3 && images.length > 5 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">View all {images.length} photos</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
