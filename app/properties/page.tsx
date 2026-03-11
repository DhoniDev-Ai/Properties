"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ListingHero from "@/components/ListingHero";
import ResultsHeader from "@/components/ResultsHeader";
import PropertyGrid from "@/components/PropertyGrid";
import { SlidersHorizontal } from "lucide-react";

function PropertiesContent() {
    const searchParams = useSearchParams();

    // UI State
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("relevance");

    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;

    // Read initial filters from URL params
    const initialType = searchParams.get("type") || "all";
    const initialCity = searchParams.get("city") || "jaipur";
    const initialKeyword = searchParams.get("q") || "";

    // Filter State
    const [filters, setFilters] = useState({
        type: initialType,
        keyword: initialKeyword,
        city: initialCity,
        location: [] as string[],
        propertyType: [] as string[],
        bhk: [] as string[],
        budget: "",
        furnishing: [] as string[]
    });

    // Handle Search from Hero
    const handleHeroSearch = (heroFilters: any) => {
        setFilters(prev => ({
            ...prev,
            type: heroFilters.type,
            keyword: heroFilters.keyword,
            city: heroFilters.city,
            propertyType: heroFilters.propertyType ? [heroFilters.propertyType] : [],
            bhk: heroFilters.bhk ? [heroFilters.bhk] : [],
            budget: heroFilters.budget
        }));
        setCurrentPage(1);
    };

    // Filter Logic
    const filteredProperties = useMemo(() => {
        let result = [...properties];

        // Type Filter (Sale/Rent)
        if (filters.type !== "all") {
            const matchType = filters.type === "sale" ? "For Sale" : "For Rent";
            result = result.filter(p => p.listingType === matchType);
        }

        // Keyword Filter
        if (filters.keyword) {
            const kw = filters.keyword.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(kw) ||
                p.location.address.toLowerCase().includes(kw) ||
                p.location.city.toLowerCase().includes(kw)
            );
        }

        // City Filter
        if (filters.city) {
            result = result.filter(p => p.location.city.toLowerCase() === filters.city.toLowerCase());
        }

        // Advanced Filters
        if (filters.location.length > 0) {
            result = result.filter(p => filters.location.includes(p.location.address));
        }

        if (filters.propertyType.length > 0) {
            // Map our UI labels back to data labels if needed or just direct match
            const typeMatch = (t: string) => {
                if (t.includes('Villa')) return ['Villa', 'Independent House', 'Farmhouse'];
                if (t.includes('Commercial')) return ['Commercial Office', 'Commercial Shop', 'Warehouse'];
                return [t];
            };
            const allowedTypes = filters.propertyType.flatMap(typeMatch);
            result = result.filter(p => allowedTypes.includes(p.type));
        }

        if (filters.bhk.length > 0) {
            result = result.filter(p => {
                // simple matching logic for the mock
                return filters.bhk.some(val => p.specs.bhk.includes(val.split(' ')[0]));
            });
        }

        if (filters.budget) {
            const maxBudget = parseInt(filters.budget);
            result = result.filter(p => p.numericPrice <= maxBudget);
        }

        // Sort Logic
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.numericPrice - b.numericPrice);
                break;
            case "price-high":
                result.sort((a, b) => b.numericPrice - a.numericPrice);
                break;
            case "newest":
                // In real app, sort by date. Here we use 'isNew' flag or ID
                result.sort((a, b) => a.id - b.id);
                break;
            case "relevance":
            default:
                // Keep default order (which has some mix of featured etc)
                break;
        }

        return result;
    }, [filters, sortBy]);

    // Pagination Logic
    const indexOfLastProp = currentPage * propertiesPerPage;
    const indexOfFirstProp = indexOfLastProp - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProp, indexOfLastProp);
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />


            <ListingHero
                totalCount={properties.length}
                initialType={filters.type}
                onSearch={handleHeroSearch}
            />

            <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">

                {/* Mobile Filters Toggle & Sort Bar (Visible only on mobile/tablet) */}


                <div className="flex flex-col lg:flex-row gap-8 items-start relative">


                    {/* Main Content Area */}
                    <div className="flex-1 w-full min-w-0">
                        <ResultsHeader
                            count={filteredProperties.length}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        <PropertyGrid
                            properties={currentProperties}
                            viewMode={viewMode}
                        />

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12 bg-white py-4 px-6 rounded-2xl border border-slate-200 shadow-sm mx-auto w-fit">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 font-bold rounded-xl transition-all ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                                >
                                    Prev
                                </button>

                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-10 h-10 rounded-xl font-bold transition-all ${currentPage === i + 1
                                            ? 'bg-[#1D4ED8] text-white shadow-lg shadow-blue-500/30'
                                            : 'text-slate-600 hover:bg-slate-100'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 font-bold rounded-xl transition-all ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex text-xl font-bold items-center justify-center text-slate-400">Loading Properties...</div>}>
            <PropertiesContent />
        </Suspense>
    );
}
