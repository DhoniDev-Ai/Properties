import React from "react";

export const PropertySkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-3/2 bg-slate-200" />
      <div className="p-5 space-y-4">
        <div className="h-6 bg-slate-200 rounded-md w-3/4" />
        <div className="h-4 bg-slate-200 rounded-md w-1/2" />
        <div className="flex justify-between items-center py-2 border-y border-slate-50">
          <div className="h-4 bg-slate-200 rounded-md w-1/4" />
          <div className="h-4 bg-slate-200 rounded-md w-1/4" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-8 bg-slate-200 rounded-md w-1/3" />
          <div className="h-8 bg-slate-200 rounded-md w-1/3" />
        </div>
      </div>
    </div>
  );
};

export const PropertyGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PropertySkeleton key={i} />
      ))}
    </div>
  );
};
