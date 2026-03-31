"use client";

import { BadgeCheck, LayoutGrid, Ruler, Building, Map } from "lucide-react";

interface QuickActionFiltersProps {
    activeCategory: string[];
    activeApprovalType: string;
    isGated?: boolean;
    onToggleApprovalType: (type: string) => void;
    onToggleGated: () => void;
    sortBy: string;
    onSortChange: (sort: string) => void;
}

export default function QuickActionFilters({
    activeCategory,
    activeApprovalType,
    isGated = false,
    onToggleApprovalType,
    onToggleGated,
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

                {/* Plot Specifics - Smart Category Toggles */}
                {isPlot && (
                    <>
                        <button
                            onClick={() => {
                                onToggleApprovalType("JDA");
                                if (activeApprovalType !== "JDA") onSortChange("approval-jda");
                            }}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2
                                ${activeApprovalType === "JDA"
                                    ? 'bg-amber-500 text-white border-amber-600 shadow-lg scale-[1.02]'
                                    : 'bg-white text-slate-600 border-slate-100 hover:border-amber-200 hover:bg-amber-50'
                                }
                            `}
                        >
                            <BadgeCheck className={`w-4 h-4 ${activeApprovalType === "JDA" ? 'text-white' : 'text-amber-500'}`} />
                            JDA
                        </button>

                        <button
                            onClick={() => {
                                onToggleApprovalType("HB");
                                if (activeApprovalType !== "HB") onSortChange("relevance");
                            }}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2
                                ${activeApprovalType === "HB"
                                    ? 'bg-blue-600 text-white border-blue-700 shadow-lg scale-[1.02]'
                                    : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:bg-blue-50'
                                }
                            `}
                        >
                            <Building className={`w-4 h-4 ${activeApprovalType === "HB" ? 'text-white' : 'text-blue-600'}`} />
                            HB
                        </button>

                        <button
                            onClick={() => {
                                onToggleApprovalType("90B");
                                if (activeApprovalType !== "90B") onSortChange("relevance");
                            }}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2
                                ${activeApprovalType === "90B"
                                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-lg scale-[1.02]'
                                    : 'bg-white text-slate-600 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50'
                                }
                            `}
                        >
                            <Map className={`w-4 h-4 ${activeApprovalType === "90B" ? 'text-white' : 'text-emerald-600'}`} />
                            90B
                        </button>

                        <button
                            onClick={onToggleGated}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2
                                ${isGated
                                    ? 'bg-[#1D4ED8] text-white border-blue-700 shadow-lg scale-[1.02]'
                                    : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:bg-blue-50'
                                }
                            `}
                        >
                            <LayoutGrid className={`w-4 h-4 ${isGated ? 'text-white' : 'text-[#1D4ED8]'}`} />
                            Gated Society
                        </button>
                    </>
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
                        if (isGated) onToggleGated();
                        onSortChange("relevance");
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors ml-auto uppercase tracking-tighter"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
}
