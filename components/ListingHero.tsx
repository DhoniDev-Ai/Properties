"use client";

import SearchBar from "./SearchBar";

interface ListingHeroProps {
    totalCount: number;
    initialType: string;
    onSearch: (filters: any) => void;
}

export default function ListingHero({ totalCount, initialType, onSearch }: ListingHeroProps) {
    return (
        <section className="bg-[#0E172A] pt-44 pb-20 border-b border-slate-200 relative overflow-hidden">
            {/* Background elements for premium feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-sm">
                        Find Your Dream <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">Property in Rajasthan</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto opacity-80">
                        Explore <span className="text-white font-black">{totalCount}</span> premium listings verified and ready for your next move.
                    </p>
                </div>

                {/* The Universal Search Bar */}
                <SearchBar
                    onSearch={onSearch}
                    initialFilters={{ type: initialType }}
                    variant="hero"
                    autoSearch={true}
                />

            </div>
        </section>
    );
}
