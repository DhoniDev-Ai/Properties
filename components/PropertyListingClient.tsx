"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getProperties } from "@/lib/data";
import { PropertyGridSkeleton } from "@/components/PropertySkeleton";
import ListingHero from "@/components/ListingHero";
import ResultsHeader from "@/components/ResultsHeader";
import PropertyGrid from "@/components/PropertyGrid";
import CategoryCards from "@/components/CategoryCards";
import QuickActionFilters from "@/components/QuickActionFilters";
import SearchBar from "@/components/SearchBar";
import { ChevronLeft } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyListingClientProps {
    initialFilters?: any;
    hideHero?: boolean;
    hideCategoryCards?: boolean;
    showBackButton?: boolean;
    title?: string;
    description?: string;
}

export default function PropertyListingClient({
    initialFilters = {},
    hideHero = false,
    hideCategoryCards = false,
    showBackButton = false,
    title,
    description = "Discover premium listings verified and ready for your next move."
}: PropertyListingClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // UI State
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("relevance");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const propertiesPerPage = 6;

    // Filter State
    const [filters, setFilters] = useState({
        type: initialFilters.type || searchParams.get("type") || "all",
        keyword: initialFilters.keyword || searchParams.get("q") || "",
        city: initialFilters.city || searchParams.get("city") || "jaipur",
        location: [] as string[],
        propertyType: initialFilters.propertyType || [],
        bhk: [] as string[],
        budget: "",
        furnishing: [] as string[],
        approvalType: ""
    });

    // Handle URL param changes for Rent discovery
    useEffect(() => {
        const typeParam = searchParams.get("type");
        if (typeParam === "rent" || typeParam === "sale") {
            setFilters(prev => ({ ...prev, type: typeParam }));
            setCurrentPage(1);
        }
    }, [searchParams]);

    // Fetch properties from Supabase
    useEffect(() => {
        const fetchProps = async () => {
            setLoading(true);
            try {
                // Fetch with current filters
                const data = await getProperties(filters);

                let result = [...data];

                if (filters.keyword) {
                    const kw = filters.keyword.toLowerCase();
                    result = result.filter(p =>
                        p.title.toLowerCase().includes(kw) ||
                        p.location.address.toLowerCase().includes(kw) ||
                        p.location.city.toLowerCase().includes(kw)
                    );
                }

                // Global Best Sorting Logic - Prioritizing JDA for Plots
                switch (sortBy) {
                    case "price-low":
                        result.sort((a, b) => a.numericPrice - b.numericPrice);
                        break;
                    case "price-high":
                        result.sort((a, b) => b.numericPrice - a.numericPrice);
                        break;
                    case "newest":
                        result.sort((a, b) => {
                            const dateA = new Date(a.id).getTime();
                            const dateB = new Date(b.id).getTime();
                            return isNaN(dateA) ? 0 : dateB - dateA;
                        });
                        break;
                    case "approval-jda":
                        result.sort((a, b) => {
                            if (a.approvalType === "JDA" && b.approvalType !== "JDA") return -1;
                            if (a.approvalType !== "JDA" && b.approvalType === "JDA") return 1;
                            return 0;
                        });
                        break;
                }

                setFilteredProperties(result);
            } finally {
                setLoading(false);
            }
        };

        fetchProps();
    }, [filters, sortBy]);

    // Use Callback to stabilize the identity of handleSearch for SearchBar's useEffect
    const handleSearch = useCallback((newFilters: any) => {
        setFilters(prev => ({
            ...prev,
            ...newFilters,
            propertyType: newFilters.propertyType ? [newFilters.propertyType] : prev.propertyType,
            bhk: newFilters.bhk ? [newFilters.bhk] : [],
        }));
        setCurrentPage(1);
    }, []);

    const handleTogglePropertyType = (type: string) => {
        setFilters(prev => ({
            ...prev,
            propertyType: prev.propertyType.includes(type)
                ? prev.propertyType.filter((t: string) => t !== type)
                : [...prev.propertyType, type]
        }));
        setCurrentPage(1);
    };

    const handleToggleApprovalType = (type: string) => {
        setFilters(prev => ({
            ...prev,
            approvalType: prev.approvalType === type ? "" : type
        }));
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const currentProperties = filteredProperties.slice((currentPage - 1) * propertiesPerPage, currentPage * propertiesPerPage);

    return (
        <div className="flex flex-col mt-20 min-h-[600px] animate-in fade-in duration-700">
            {!hideHero && (
                <ListingHero
                    totalCount={filteredProperties.length}
                    initialType={filters.type}
                    onSearch={handleSearch}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">

                {/* Authoritative Header Section */}
                {(title || showBackButton) && (
                    <div className="mb-12 flex flex-col items-start gap-6">
                        {showBackButton && (
                            <button
                                onClick={() => router.push('/properties')}
                                className="flex items-center gap-2 text-slate-500 font-black hover:text-[#1D4ED8] transition-all group text-[11px] uppercase tracking-[0.2em] active:scale-95 bg-white px-5 py-2.5 rounded-xl border border-slate-100 shadow-sm"
                            >
                                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Return to Inventory
                            </button>
                        )}
                        {title && (
                            <div className="w-full bg-slate-50/50 rounded-4xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Market Discovery</p>
                                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase italic mb-6">
                                        {title}
                                    </h1>
                                    <div className="flex items-start gap-4 max-w-3xl">
                                        <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0 mt-1" />
                                        <p className="text-lg md:text-xl text-slate-500 font-bold leading-tight">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Search Bar for Listing View */}
                {hideHero && (
                    <div className="mb-12">
                        <SearchBar
                            onSearch={handleSearch}
                            initialFilters={filters}
                            variant="compact"
                            autoSearch={true}
                        />
                    </div>
                )}

                {!hideCategoryCards && (
                    <CategoryCards
                        activePropertyTypes={filters.propertyType}
                        onTogglePropertyType={handleTogglePropertyType}
                    />
                )}

                <QuickActionFilters
                    activeCategory={filters.propertyType}
                    activeApprovalType={filters.approvalType}
                    onToggleApprovalType={handleToggleApprovalType}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                />

                <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start relative">
                    <div className="flex-1 w-full min-w-0">
                        <ResultsHeader
                            count={filteredProperties.length}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        {loading ? (
                            <PropertyGridSkeleton count={propertiesPerPage} />
                        ) : (
                            <PropertyGrid
                                properties={currentProperties}
                                viewMode={viewMode}
                            />
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-16 py-6 border-t border-slate-50">
                                <button
                                    onClick={() => {
                                        setCurrentPage(p => Math.max(1, p - 1));
                                        window.scrollTo({ top: 300, behavior: 'smooth' });
                                    }}
                                    disabled={currentPage === 1}
                                    className={`px-4 sm:px-6 py-3 font-black rounded-2xl transition-all border-2 ${currentPage === 1 ? 'text-slate-200 border-slate-50' : 'text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                                >
                                    Prev
                                </button>
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setCurrentPage(i + 1);
                                            window.scrollTo({ top: 300, behavior: 'smooth' });
                                        }}
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl font-black transition-all border-2 ${currentPage === i + 1
                                            ? 'bg-[#1D4ED8] text-white border-blue-600 shadow-xl shadow-blue-500/30 scale-110'
                                            : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => {
                                        setCurrentPage(p => Math.min(totalPages, p + 1));
                                        window.scrollTo({ top: 300, behavior: 'smooth' });
                                    }}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 sm:px-6 py-3 font-black rounded-2xl transition-all border-2 ${currentPage === totalPages ? 'text-slate-200 border-slate-50' : 'text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
