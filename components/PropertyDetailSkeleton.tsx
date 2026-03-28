import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PropertyDetailSkeleton() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />

            {/* Gallery Skeleton */}
            <div className="w-full aspect-21/9 bg-slate-100 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
                    {/* Left Column */}
                    <div className="lg:w-[68%]">
                        {/* Header Block Skeleton */}
                        <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 mb-10 animate-pulse">
                            <div className="flex gap-3 mb-6">
                                <div className="w-24 h-8 bg-slate-200 rounded-2xl" />
                                <div className="w-32 h-8 bg-slate-200 rounded-2xl" />
                            </div>
                            
                            <div className="h-12 bg-slate-200 rounded-xl w-3/4 mb-4" />
                            <div className="h-10 bg-slate-200 rounded-xl w-1/2 mb-8" />
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-slate-200/60">
                                <div className="space-y-2">
                                    <div className="h-2 bg-slate-100 rounded-full w-20" />
                                    <div className="h-6 bg-slate-200 rounded-lg w-48" />
                                </div>
                                <div className="w-48 h-16 bg-white rounded-4xl border border-white shadow-sm" />
                            </div>
                        </div>

                        {/* Stats Bar Skeleton */}
                        <div className="flex gap-10 py-6 border-y border-slate-100 mb-10 animate-pulse">
                            <div className="w-32 h-4 bg-slate-100 rounded-full" />
                            <div className="w-32 h-4 bg-slate-100 rounded-full" />
                            <div className="w-32 h-4 bg-slate-100 rounded-full ml-auto" />
                        </div>

                        {/* Specs Bar Skeleton */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-24 bg-slate-50 rounded-3xl animate-pulse" />
                            ))}
                        </div>

                        {/* Content Blocks */}
                        <div className="space-y-4 animate-pulse">
                            <div className="h-4 bg-slate-100 rounded-full w-full" />
                            <div className="h-4 bg-slate-100 rounded-full w-full" />
                            <div className="h-4 bg-slate-100 rounded-full w-3/4" />
                        </div>
                    </div>

                    {/* Right Column: Sticky Card Skeleton */}
                    <div className="lg:w-[32%]">
                        <div className="sticky top-24 bg-white rounded-4xl border border-slate-100 p-8 shadow-xl animate-pulse">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-slate-200 rounded-full" />
                                <div className="space-y-2">
                                    <div className="h-5 bg-slate-200 rounded-md w-32" />
                                    <div className="h-3 bg-slate-100 rounded-md w-24" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-14 bg-slate-100 rounded-2xl w-full" />
                                <div className="h-14 bg-slate-900/5 rounded-2xl w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
