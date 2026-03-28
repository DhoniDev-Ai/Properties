import React from "react";

export const PropertySkeleton = () => {
    return (
        <div className="bg-white rounded-4xl border border-slate-100 overflow-hidden shadow-sm animate-pulse flex flex-col h-full">
            {/* Image Skeleton */}
            <div className="aspect-4/3 bg-slate-100 relative">
                <div className="absolute top-4 left-4 w-24 h-8 bg-slate-200 rounded-xl" />
            </div>
            
            {/* Content Skeleton */}
            <div className="p-6 space-y-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                    <div className="h-7 bg-slate-200 rounded-lg w-3/4" />
                    <div className="h-6 bg-slate-200 rounded-lg w-12" />
                </div>
                
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-100 rounded-md" />
                    <div className="h-4 bg-slate-200 rounded-md w-1/2" />
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-50 mt-auto">
                    <div className="h-8 bg-slate-100 rounded-xl w-1/3" />
                    <div className="flex flex-col items-end gap-1">
                        <div className="h-2 bg-slate-100 rounded-full w-12" />
                        <div className="h-3 bg-slate-200 rounded-md w-16" />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="h-12 bg-slate-100 rounded-xl flex-1" />
                    <div className="h-12 bg-slate-50 rounded-xl w-12" />
                </div>
            </div>
        </div>
    );
};

export const PropertyGridSkeleton = ({ count = 6 }: { count?: number }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <PropertySkeleton key={i} />
            ))}
        </div>
    );
};
