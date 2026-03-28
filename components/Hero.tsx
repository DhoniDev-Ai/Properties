"use client";

import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
    const router = useRouter();

    const handleSearch = (filters: any) => {
        const query = new URLSearchParams({
            type: filters.type || "all",
            ...(filters.keyword && { q: filters.keyword }),
            ...(filters.city && { city: filters.city }),
            ...(filters.propertyType && { propertyType: filters.propertyType }),
            ...(filters.bhk && { bhk: filters.bhk }),
            ...(filters.budget && { budget: filters.budget })
        }).toString();

        router.push(`/properties?${query}`);
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center">
            {/* Background Image — next/image with priority for fastest LCP */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/image.png"
                    alt="Hero background"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA//EACMQAAICAgIBBQAAAAAAAAAAAAECAxEABBIhMUFRYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ag2VsPK5Gfl3xMhEcqJO7MV7VR1YkdKo9Aap8HGiLYpbUQTd2T9Gam6aBDmtQnGOfEE//2Q=="
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Elite Gradient Overlay for maximum text pop on mobile */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/60 md:bg-black/45 backdrop-blur-[0.5px]" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col justify-center h-full z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 md:mt-24">
                <div className="mb-8 md:mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl uppercase italic"
                    >
                        Find A Place <br className="md:hidden" /> You Will Call <br className="md:hidden" /> <span className="text-orange-400">HOME</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15px] md:text-2xl lg:text-3xl text-white/90 mb-8 font-bold drop-shadow-md max-w-2xl mx-auto border-l-4 border-orange-400 pl-4 text-left md:text-center md:border-none md:pl-0 uppercase tracking-tight"
                    >
                        Premium Residential, Commercial & <span className="text-orange-400 font-black">Agriculture Land</span>
                    </motion.p>
                </div>

                {/* Unified Search Bar Integration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                >
                    <SearchBar
                        onSearch={handleSearch}
                        variant="hero"
                    />
                </motion.div>

                {/* Trust Indicators - Repositioned for impact */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 hidden md:flex flex-wrap w-full justify-center items-center gap-x-6 gap-y-3 px-4"
                >
                    {[
                        "500+ Verified Properties",
                        "Premium Locations",
                        "Direct Owner Connect",
                        "Expert Guidance"
                    ].map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/90 text-sm md:text-base font-black uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-xl">
                            <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" strokeWidth={3} />
                            <span>{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
