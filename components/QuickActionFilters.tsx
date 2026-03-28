"use client";

import { BadgeCheck, LayoutGrid, Ruler, Building, Map } from "lucide-react";

interface QuickActionFiltersProps {
    activeCategory: string[];
    activeApprovalType: string;
    onToggleApprovalType: (type: string) => void;
    sortBy: string;
    onSortChange: (sort: string) => void;
}

export default function QuickActionFilters({
    activeCategory,
    activeApprovalType,
    onToggleApprovalType,
    sortBy,
    onSortChange
}: QuickActionFiltersProps) {
    if (activeCategory.length === 0) return null;

    // Determine which "Sub-Filters" to show based on category
    const isPlot = activeCategory.includes("Plot");
    const isFlat = activeCategory.includes("Apartment") || activeCategory.includes("Penthouse");
    const isVilla = activeCategory.includes("Villa") || activeCategory.includes("Independent House");

    return (
        <div className="w-full mb-6 pb-2 border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mr-2">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    Refine Selection:
                </span>

                {/* Always show JDA/HB for common types */}
                {(isPlot || isFlat || isVilla) && (
                    <>
                        <button
                            onClick={() => {
                                onToggleApprovalType("JDA");
                                if (activeApprovalType !== "JDA") onSortChange("approval-jda");
                            }}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
                                ${activeApprovalType === "JDA" 
                                    ? 'bg-amber-100 text-amber-800 border-amber-200 shadow-sm' 
                                    : 'bg-white border text-slate-600 hover:border-amber-200 hover:bg-amber-50'
                                }
                                border
                            `}
                        >
                            <BadgeCheck className={`w-4 h-4 ${activeApprovalType === "JDA" ? 'text-amber-600' : 'text-slate-400'}`} />
                            JDA Approved
                        </button>

                        <button
                            onClick={() => {
                                onToggleApprovalType("HB");
                                if (activeApprovalType !== "HB") onSortChange("approval-hb");
                            }}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
                                ${activeApprovalType === "HB" 
                                    ? 'bg-blue-100 text-blue-800 border-blue-200 shadow-sm' 
                                    : 'bg-white border text-slate-600 hover:border-blue-200 hover:bg-blue-50'
                                }
                                border
                            `}
                        >
                            <Building className={`w-4 h-4 ${activeApprovalType === "HB" ? 'text-blue-600' : 'text-slate-400'}`} />
                            HB Approved
                        </button>
                    </>
                )}

                {/* Plot Specifics */}
                {isPlot && (
                    <button
                        onClick={() => onSortChange("price-low")}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border
                            ${sortBy === "price-low" ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-white text-slate-600 hover:bg-emerald-50'}
                        `}
                    >
                        <Map className="w-4 h-4 text-emerald-600" />
                        Budget Plots
                    </button>
                )}

                {/* Flat Specifics */}
                {isFlat && (
                    <button
                        onClick={() => onSortChange("newest")}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border
                            ${sortBy === "newest" ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-white text-slate-600 hover:bg-purple-50'}
                        `}
                    >
                        <Ruler className="w-4 h-4 text-purple-600" />
                        Latest Societies
                    </button>
                )}

                {/* Clear Type Action */}
                <button
                    onClick={() => {
                        onToggleApprovalType("");
                        onSortChange("relevance");
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors ml-auto uppercase tracking-tighter"
                >
                    Reset Sub-Filters
                </button>
            </div>
        </div>
    );
}
