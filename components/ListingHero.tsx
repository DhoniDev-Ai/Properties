"use client";

import { useState } from "react";
import { Search, MapPin, Home, BedDouble, IndianRupee } from "lucide-react";

interface ListingHeroProps {
    totalCount: number;
    initialType: string;
    onSearch: (filters: any) => void;
}

export default function ListingHero({ totalCount, initialType, onSearch }: ListingHeroProps) {
    const [listingType, setListingType] = useState(initialType || "all");
    const [keyword, setKeyword] = useState("");
    const [city, setCity] = useState("jaipur");
    const [propertyType, setPropertyType] = useState("");
    const [bhk, setBhk] = useState("");
    const [budget, setBudget] = useState("");

    const handleSearch = () => {
        onSearch({ type: listingType, keyword, city, propertyType, bhk, budget });
    };

    const tabs = ["all", "sale", "rent"];

    return (
        <section className="bg-[#1E3A8A] pt-36 pb-20 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#f1f1f1] tracking-tight mb-3">
                        Find Your Dream Property in Jaipur
                    </h1>
                    <p className="text-lg text-slate-400 font-medium">
                        Browse {totalCount} properties available for sale and rent
                    </p>
                </div>

                {/* Search Container */}
                <div className="max-w-[1050px] mx-auto relative z-10">

                    {/* Tabs & Login */}
                    <div className="flex justify-between items-center mb-3 px-1">
                        <div className="flex justify-start space-x-2 md:space-x-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setListingType(tab)}
                                    className={`px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-[14px] md:text-[15px] capitalize cursor-pointer transition-all duration-300 md:backdrop-blur-md active:scale-95 ${listingType === tab
                                        ? "bg-white text-[#1E3A8A] shadow-md md:shadow-lg"
                                        : "bg-black/20 hover:bg-black/30 text-white shadow-sm border border-white/10 md:border-white/10 backdrop-blur-md"
                                        }`}
                                >
                                    {tab === "all" ? "All Properties" : `For ${tab}`}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Search Inputs area */}
                    <div className="bg-white border border-slate-200 rounded-3xl md:rounded-3xl p-2 md:p-3 shadow-xl">
                        <div className="flex flex-row md:flex-row gap-2 md:gap-0 items-center">

                            {/* City Dropdown — desktop only, moves to grid on mobile */}
                            <div className="hidden md:flex md:w-[15%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">CITY</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <MapPin className="h-[17px] w-[17px] text-blue-600 mr-1.5 shrink-0" strokeWidth={1.5} />
                                    <select
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    >
                                        <option value="jaipur">Jaipur</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="mumbai">Mumbai</option>
                                    </select>
                                </div>
                            </div>

                            {/* Location/Search — always visible */}
                            <div className="flex-1 md:w-[22%] relative border border-slate-200 md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-3 md:px-4 py-2 flex flex-col items-start justify-center">
                                <label className="block text-[10px] md:text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">SEARCH</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <Search className="h-[17px] w-[17px] text-blue-600 mr-1.5 shrink-0" strokeWidth={1.5} />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[14px] md:text-[15px] font-medium placeholder-slate-400"
                                        style={{ fontSize: '16px' }}
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    />
                                </div>
                            </div>

                            {/* Property Type Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[15%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">PROPERTY TYPE</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <Home className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer"
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    >
                                        <option value="">Any Type</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa / House</option>
                                        <option value="plot">Plot</option>
                                        <option value="commercial">Commercial</option>
                                    </select>
                                </div>
                            </div>

                            {/* BHK Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[14%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">BHK</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <BedDouble className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer"
                                        value={bhk}
                                        onChange={(e) => setBhk(e.target.value)}
                                    >
                                        <option value="">Any</option>
                                        <option value="1">1 BHK</option>
                                        <option value="2">2 BHK</option>
                                        <option value="3">3 BHK</option>
                                        <option value="4+">4+ BHK</option>
                                    </select>
                                </div>
                            </div>

                            {/* Budget Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[16%] relative md:border-0 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">BUDGET</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <IndianRupee className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    >
                                        <option value="">Max Budget</option>
                                        {listingType === "rent" ? (
                                            <>
                                                <option value="20000">₹20,000</option>
                                                <option value="50000">₹50,000</option>
                                                <option value="100000">₹1 Lac</option>
                                                <option value="200000">₹2 Lacs+</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="5000000">₹50 Lacs</option>
                                                <option value="10000000">₹1 Cr</option>
                                                <option value="25000000">₹2.5 Cr</option>
                                                <option value="50000000">₹5 Cr+</option>
                                            </>
                                        )}
                                    </select>
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="md:w-[18%] w-auto md:ml-auto flex justify-center items-center shrink-0">
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#1D4ED8] hover:bg-blue-800 px-2 md:w-full text-white font-medium py-3 md:py-4 rounded-2xl md:rounded-xl cursor-pointer transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(29,78,216,0.39)]"
                                >
                                    <Search className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                                    <span className="font-semibold text-[14px] md:text-base whitespace-nowrap hidden md:inline">Search Property</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* ── MOBILE ONLY: 2×2 filter grid ── */}
                    <div className="grid md:hidden grid-cols-2 gap-2 mt-3">

                        {/* City — full width */}
                        <div className="col-span-2 flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-3 shadow-sm">
                            <MapPin className="h-[16px] w-[16px] text-blue-500 shrink-0" strokeWidth={2} />
                            <select
                                className="bg-transparent border-none outline-none text-slate-800 text-[14px] font-semibold appearance-none cursor-pointer w-full"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value="jaipur">Jaipur</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* Property Type */}
                        <div className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-3 shadow-sm">
                            <Home className="h-[16px] w-[16px] text-blue-500 shrink-0" strokeWidth={2} />
                            <select
                                className="bg-transparent border-none outline-none text-slate-800 text-[14px] font-semibold appearance-none cursor-pointer w-full"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
                                <option value="">Any Type</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa / House</option>
                                <option value="plot">Plot</option>
                                <option value="commercial">Commercial</option>
                            </select>
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* BHK */}
                        <div className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-3 shadow-sm">
                            <BedDouble className="h-[16px] w-[16px] text-blue-500 shrink-0" strokeWidth={2} />
                            <select
                                className="bg-transparent border-none outline-none text-slate-800 text-[14px] font-semibold appearance-none cursor-pointer w-full"
                                value={bhk}
                                onChange={(e) => setBhk(e.target.value)}
                            >
                                <option value="">Any BHK</option>
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="4+">4+ BHK</option>
                            </select>
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* Budget — full width */}
                        <div className="col-span-2 flex items-center gap-2 bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-3 shadow-sm">
                            <IndianRupee className="h-[16px] w-[16px] text-blue-500 shrink-0" strokeWidth={2} />
                            <select
                                className="bg-transparent border-none outline-none text-slate-800 text-[14px] font-semibold appearance-none cursor-pointer w-full"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                            >
                                <option value="">Max Budget</option>
                                {listingType === "rent" ? (
                                    <>
                                        <option value="20000">₹20,000</option>
                                        <option value="50000">₹50,000</option>
                                        <option value="100000">₹1 Lac</option>
                                        <option value="200000">₹2 Lacs+</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="5000000">₹50 Lacs</option>
                                        <option value="10000000">₹1 Cr</option>
                                        <option value="25000000">₹2.5 Cr</option>
                                        <option value="50000000">₹5 Cr+</option>
                                    </>
                                )}
                            </select>
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
