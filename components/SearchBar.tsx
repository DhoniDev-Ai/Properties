"use client";

import { useState, useEffect, useRef } from "react";
import { Search, MapPin, Home, BedDouble, IndianRupee, Loader2, ChevronRight } from "lucide-react";

interface SearchBarProps {
    initialFilters?: any;
    onSearch: (filters: any) => void;
    variant?: "hero" | "compact";
    autoSearch?: boolean; // New prop to control automatic triggering
}

export default function SearchBar({
    initialFilters = {},
    onSearch,
    variant = "hero",
    autoSearch = false // Default to false to prevent accidental redirects
}: SearchBarProps) {
    const [listingType, setListingType] = useState(initialFilters.type || "all");
    const [keyword, setKeyword] = useState(initialFilters.keyword || "");
    const [city, setCity] = useState(initialFilters.city || "jaipur");
    const [propertyType, setPropertyType] = useState(initialFilters.propertyType?.[0] || "");
    const [bhk, setBhk] = useState(initialFilters.bhk?.[0] || "");
    const [budget, setBudget] = useState(initialFilters.budget || "");
    const [isSearching, setIsSearching] = useState(false);

    const isFirstRender = useRef(true);

    // Dynamic cities across Rajasthan
    const rajasthanCities = [
        "Jaipur", "Jodhpur", "Bikaner", "Udaipur", "Ajmer",
        "Kota", "Sikar", "Alwar", "Bhilwara", "Pali",
        "Ganganagar", "Jalore"
    ];

    // Auto-search trigger with debounce for keyword
    useEffect(() => {
        if (!autoSearch || isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const timeoutId = setTimeout(() => {
            setIsSearching(true);
            onSearch({
                type: listingType,
                keyword,
                city,
                propertyType,
                bhk,
                budget
            });
            setTimeout(() => setIsSearching(false), 300);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [listingType, keyword, city, propertyType, bhk, budget, onSearch, autoSearch]);

    const tabs = ["all", "sale", "rent"];

    const budgetOptions = listingType === "rent"
        ? [
            { label: "₹10,000", value: "10000" },
            { label: "₹20,000", value: "20000" },
            { label: "₹30,000", value: "30000" },
            { label: "₹40,000", value: "40000" },
            { label: "₹50,000", value: "50000" },
            { label: "₹1 Lac", value: "100000" },
            { label: "₹2 Lacs+", value: "200000" }
        ]
        : [
            { label: "₹50 Lacs", value: "5000000" },
            { label: "₹1 Cr", value: "10000000" },
            { label: "₹2 Cr", value: "20000000" },
            { label: "₹5 Cr", value: "50000000" },
            { label: "₹10 Cr+", value: "100000000" }
        ];

    const propertyTypes = [
        { label: "Apartment / Flat", value: "Apartment" },
        { label: "Plot", value: "Plot" },
        { label: "Duplex Villa", value: "Duplex Villa" },
        { label: "Independent House", value: "Independent House" },
        { label: "Penthouse", value: "Penthouse" },
        { label: "Farmhouse", value: "Farmhouse" },
        { label: "Agriculture Land", value: "Agriculture-Land" },
        { label: "Commercial", value: "Commercial" }
    ];

    return (
        <div className={`max-w-[1050px] mx-auto relative z-10 ${variant === "hero" ? "" : "my-4"}`}>

            {/* Tabs & Search Action Mobile */}
            <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex justify-start space-x-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setListingType(tab)}
                            className={`px-6 sm:px-8 py-2.5 rounded-2xl font-bold text-sm capitalize transition-all duration-300 active:scale-95 ${listingType === tab
                                ? variant === "hero"
                                    ? "bg-white text-[#1E3A8A] shadow-lg shadow-white/10"
                                    : "bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20"
                                : variant === "hero"
                                    ? "bg-black/10 hover:bg-black/20 text-white shadow-sm border border-white/20 backdrop-blur-md"
                                    : "bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Mobile Search Now Button */}
                <button
                    onClick={() => onSearch({ type: listingType, keyword, city, propertyType, bhk, budget })}
                    className="md:hidden flex items-center gap-2 bg-[#1D4ED8] text-white px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95"
                >
                    <Search className="h-3.5 w-3.5" />
                    Search
                </button>
            </div>

            {/* Inputs Container */}
            <div className={`
                bg-white border rounded-3xl p-2 md:p-2.5 shadow-2xl transition-all duration-500
                ${variant === "hero" ? "border-slate-100" : "border-slate-200 shadow-xl"}
            `}>
                <div className="flex flex-col md:flex-row gap-0.5 items-stretch md:items-center">

                    {/* City Dropdown */}
                    <div className="md:w-[20%] relative border-slate-100 border-b md:border-b-0 md:border-r px-4 py-2.5 flex flex-col items-start justify-center group">
                        <label className="block text-[10px] font-black text-slate-400 mb-0.5 tracking-widest uppercase">CITY</label>
                        <div className="flex items-center text-slate-700 w-full">
                            <MapPin className="h-4 w-4 text-[#1D4ED8] mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                            <select
                                className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-bold appearance-none cursor-pointer text-slate-800"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {rajasthanCities.map((c) => (
                                    <option key={c} value={c.toLowerCase()}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Search/Keyword */}
                    <div className="flex-1 relative border-slate-100 border-b md:border-b-0 md:border-r px-4 py-3 flex flex-col items-start justify-center group min-w-[200px]">
                        <label className="block text-[10px] font-black text-slate-400 mb-0.5 tracking-widest uppercase">LOCATION</label>
                        <div className="flex items-center text-slate-700 w-full">
                            {isSearching ? <Loader2 className="h-4 w-4 text-[#1D4ED8] mr-2 shrink-0 animate-spin" /> : <Search className="h-4 w-4 text-[#1D4ED8] mr-2 shrink-0 group-hover:rotate-12 transition-transform" />}
                            <input
                                type="text"
                                placeholder="Typing searches..."
                                className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-bold placeholder-slate-300 text-slate-800"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Property Type */}
                    <div className="flex w-full md:w-[18%] relative border-slate-100 border-b md:border-b-0 md:border-r px-4 py-3 flex-col items-start justify-center group">
                        <label className="block text-[10px] font-black text-slate-400 mb-0.5 tracking-widest uppercase">TYPE</label>
                        <div className="flex items-center text-slate-700 w-full">
                            <Home className="h-4 w-4 text-[#1D4ED8] mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                            <select
                                className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-bold appearance-none cursor-pointer text-slate-800"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
                                <option value="">Any Type</option>
                                {propertyTypes.map((t) => (
                                    <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="flex w-full md:w-[18%] relative px-4 py-3 flex flex-col items-start justify-center group">
                        <label className="block text-[10px] font-black text-slate-400 mb-0.5 tracking-widest uppercase">BUDGET</label>
                        <div className="flex items-center text-slate-700 w-full">
                            <IndianRupee className="h-4 w-4 text-[#1D4ED8] mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                            <select
                                className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-bold appearance-none cursor-pointer text-slate-800"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                            >
                                <option value="">No Limit</option>
                                {budgetOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Desktop Search CTA */}
                    <div className="md:w-[15%] hidden md:flex justify-center items-center px-1.5 py-1">
                        <button
                            onClick={() => onSearch({ type: listingType, keyword, city, propertyType, bhk, budget })}
                            className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Search className="h-4 w-4" />
                            Go
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile quick chips */}
            {/* <div className="md:hidden flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
                <div className="shrink-0 bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-100 text-[#1D4ED8] text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {city}
                </div>
                <div className="shrink-0 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 text-slate-900 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    {propertyType || "Any Type"}
                </div>
                <div className="shrink-0 bg-slate-100/50 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-black flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5" />
                    {listingType}
                </div>
            </div> */}

        </div>
    );
}
