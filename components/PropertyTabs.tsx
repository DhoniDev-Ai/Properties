"use client";

import { useState } from "react";
import { CheckCircle2, MapPin, Calculator, Info } from "lucide-react";

interface PropertyTabsProps {
    property: any; // Using any for brevity in this mock, would use Property interface in real app
}

export default function PropertyTabs({ property }: PropertyTabsProps) {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: <Info className="w-4 h-4" /> },
        { id: "amenities", label: "Amenities", icon: <CheckCircle2 className="w-4 h-4" /> },
        { id: "location", label: "Location", icon: <MapPin className="w-4 h-4" /> },
        { id: "emi", label: "EMI Calculator", icon: <Calculator className="w-4 h-4" /> },
    ];

    return (
        <div className="mb-12">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-200 mb-8 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 flex items-center gap-2 font-bold whitespace-nowrap transition-all border-b-2 ${
                            activeTab === tab.id 
                            ? "border-[#1D4ED8] text-[#1D4ED8]" 
                            : "border-transparent text-slate-500 hover:text-slate-700"
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white">
                {activeTab === "overview" && (
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {Object.entries(property.specs)
                            .filter(([_, value]) => value !== 0 && value !== null && value !== 'N/A' && value !== '0' && value !== '')
                            .map(([key, value]) => (
                            <div key={key} className="flex justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500 font-medium capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-slate-900 font-bold">{value as string}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "amenities" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {property.amenities.map((amenity: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2.5 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                                <span className="text-slate-700 font-semibold text-sm">{amenity}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "location" && (
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                         {/* Placeholder for Map or Link */}
                         <div className="h-[400px] bg-slate-100 flex items-center justify-center flex-col text-slate-400 p-8 text-center">
                            <MapPin className="w-12 h-12 mb-4 opacity-50" />
                            <p className="font-bold text-slate-600 mb-1">Property Location</p>
                            <p className="text-sm">Location: {property.location.address}, {property.location.city}</p>
                            {property.location.googleMapLink ? (
                                <a 
                                    href={property.location.googleMapLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-6 px-6 py-2 bg-[#1D4ED8] text-white rounded-lg border border-slate-200 font-bold shadow-sm hover:bg-blue-800 transition-all"
                                >
                                    View on Google Maps
                                </a>
                            ) : (
                                <div className="mt-6 px-6 py-2 bg-white rounded-lg border border-slate-200 text-[#1D4ED8] font-bold shadow-sm">
                                    Map Pin Available on Request
                                </div>
                            )}
                         </div>
                    </div>
                )}

                {activeTab === "emi" && (
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 max-w-2xl">
                        <h3 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-[#F59E0B]" />
                            Home Loan EMI Calculator
                        </h3>
                        {/* Simplified EMI Preview */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 mb-2">Loan Amount (₹)</label>
                                        <div className="text-2xl font-bold text-slate-800">₹{(property.numericPrice * 0.8).toLocaleString('en-IN')}</div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full mt-2">
                                            <div className="h-full bg-[#1D4ED8] rounded-full w-4/5"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 mb-2">Tenure (Years)</label>
                                        <div className="text-xl font-bold text-slate-800">20 Years</div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 flex flex-col justify-center text-center">
                                    <p className="text-sm font-bold text-slate-400 mb-1">Monthly EMI</p>
                                    <p className="text-3xl font-black text-[#F59E0B]">₹{Math.round((property.numericPrice * 0.8) * 0.008).toLocaleString('en-IN')}</p>
                                    <button className="mt-6 py-2.5 px-6 bg-[#1D4ED8] text-white rounded-xl font-bold text-sm shadow-md hover:bg-blue-800 transition-all">
                                        Get Loan Assistance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
