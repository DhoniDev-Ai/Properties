"use client";

import { LayoutGrid, List } from "lucide-react";

interface ResultsHeaderProps {
    count: number;
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
}

export default function ResultsHeader({ count, viewMode, setViewMode, sortBy, setSortBy }: ResultsHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4  py-4 border-b border-slate-100 mb-6">

            <div className="text-slate-700 font-medium">
                Showing <span className="font-bold text-[#1E3A8A]">{count}</span> properties
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto w-full sm:w-auto justify-between sm:justify-end">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-500">Sort by:</span>
                    <select
                        className="bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-[#1D4ED8] focus:border-[#1D4ED8] block p-2 cursor-pointer font-medium outline-none"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest First</option>
                        <option value="approval-jda">JDA Approved First</option>
                        <option value="approval-hb">HB Approved First</option>
                    </select>
                </div>

                {/* View Toggles */}
                <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1.5 rounded-md transition-all ${viewMode === "grid"
                                ? "bg-white text-[#1D4ED8] shadow-sm transform scale-105"
                                : "text-slate-400 hover:text-slate-600"
                            }`}
                        title="Grid View"
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-1.5 rounded-md transition-all ${viewMode === "list"
                                ? "bg-white text-[#1D4ED8] shadow-sm transform scale-105"
                                : "text-slate-400 hover:text-slate-600"
                            }`}
                        title="List View"
                    >
                        <List className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </div>
    );
}
