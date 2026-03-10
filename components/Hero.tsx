"use client";

import { useState } from "react";
import { Search, MapPin, Home, IndianRupee, BedDouble, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "For Rent", "For Sale"];

    return (
        <div className="relative h-screen w-full flex items-center justify-center">
            {/* Background Image — next/image with priority for fastest LCP */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/image.png"
                    alt="Hero background"
                    fill
                    priority
                    fetchPriority="high"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA//EACMQAAICAgIBBQAAAAAAAAAAAAECAxEABBIhMUFRYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ag2VsPK5Gfl3xMhEcqJO7MV7VR1YkdKo9Aap8HGiLYpbUQTd2T9Gam6aBDmtQnGOfEE//2Q=="
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content text-center mt-20 md:mt-10*/}
            <div className="relative flex flex-col justify-between h-[75vh] z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-28 md:mt-12">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 tracking-tight  md:mb-4  md:leading-tight drop-shadow-xl px-1"
                    >
                        Find A Place You Will Call <span className=" text-[#F59E0B] capitaliz  ">HOME</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg font-cursive md:text-2xl lg:text-4xl text-white/95 mb-10 md:mb-16 font-medium drop-shadow-md max-w-2xl mx-auto"
                    >
                        Premium Residential & Commercial Properties
                    </motion.p>
                </div>
                {/* Search Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1050px] max-md:pt-6 mx-auto"
                >
                    {/* Tabs */}
                    <div className="flex justify-start space-x-2 md:space-x-3 mb-3 max-sm:mb-[5] px-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-[14px] md:text-[15px] cursor-pointer transition-all duration-300 md:backdrop-blur-md active:scale-95 ${activeTab === tab
                                    ? "bg-white text-slate-800 shadow-md md:shadow-lg"
                                    : "bg-black/40 md:bg-black/30 hover:bg-black/40 text-white shadow-sm border border-white/10 md:border-white/10 backdrop-blur-md"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search Inputs area */}
                    <div className="bg-slate-50 border border-white/30 rounded-3xl md:rounded-3xl p-2 md:p-3 shadow-2xl">
                        <div className="flex flex-row md:flex-row gap-2 md:gap-0 items-center">

                            {/* City Dropdown — desktop only, moves to grid on mobile */}
                            <div className="hidden md:flex md:w-[15%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">CITY</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <MapPin className="h-[17px] w-[17px] text-blue-600 mr-1.5 shrink-0" strokeWidth={1.5} />
                                    <select className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer">
                                        <option value="jaipur">Jaipur</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="mumbai">Mumbai</option>
                                    </select>
                                </div>
                            </div>

                            {/* Location/Search — always visible */}
                            <div className="flex-1 md:w-[22%] relative border border-slate-200 md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-3 md:px-4 py-2 flex flex-col items-start justify-center">
                                <label className="block text-[10px] md:text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">SEARCH</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <Search className="h-[17px] w-[17px] text-blue-600 mr-1.5 shrink-0" strokeWidth={1.5} />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-transparent border-none outline-none focus:ring-0 text-[14px] md:text-[15px] font-medium placeholder-slate-400"
                                        style={{ fontSize: '16px' }}
                                    />
                                </div>
                            </div>

                            {/* Property Type Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[15%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">PROPERTY TYPE</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <Home className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer">
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa</option>
                                        <option value="commercial">Commercial</option>
                                    </select>
                                </div>
                            </div>

                            {/* BHK Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[14%] relative md:border-0 md:border-r md:border-slate-200 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">BHK</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <BedDouble className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer">
                                        <option value="any">Any</option>
                                        <option value="1">1 BHK</option>
                                        <option value="2">2 BHK</option>
                                        <option value="3">3 BHK</option>
                                        <option value="4+">4+ BHK</option>
                                    </select>
                                </div>
                            </div>

                            {/* Budget Dropdown — desktop only */}
                            <div className="hidden md:flex w-full md:w-[16%] relative md:border-0 rounded-xl md:rounded-none px-4 py-2 flex-col items-start justify-center">
                                <label className="block text-[11px] font-bold text-slate-500 mb-[2px] tracking-wider">BUDGET</label>
                                <div className="flex items-center text-slate-700 w-full">
                                    <IndianRupee className="h-[18px] w-[18px] text-blue-600 mr-2 shrink-0" strokeWidth={1.5} />
                                    <select className="w-full bg-transparent border-none outline-none focus:ring-0 text-[15px] font-medium appearance-none cursor-pointer">
                                        <option value="10-30">From ₹10L</option>
                                        <option value="30-50">From ₹30L</option>
                                        <option value="50-100">From ₹50L</option>
                                        <option value="100+">From ₹1Cr</option>
                                    </select>
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="md:w-[18%] w-auto md:ml-auto flex justify-center items-center shrink-0">
                                <button className="bg-[#1D4ED8] hover:bg-blue-800 px-2  md:w-full text-white font-medium py-3 md:py-4 rounded-2xl md:rounded-xl cursor-pointer transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(29,78,216,0.39)]">
                                    <Search className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                                    <span className="font-semibold text-[14px] md:text-base whitespace-nowrap hidden md:inline">Search Property</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* ── MOBILE ONLY: 2×2 filter grid ── */}
                    <div className="grid md:hidden grid-cols-2 gap-2 mt-3">

                        {/* City — full width */}
                        <div className="col-span-2 flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/15 text-white rounded-xl px-3 py-2.5">
                            <MapPin className="h-[14px] w-[14px] text-white/80 shrink-0" strokeWidth={1.8} />
                            <select className="bg-transparent border-none outline-none text-white text-[13px] font-semibold appearance-none cursor-pointer w-full">
                                <option value="jaipur" className="text-slate-800">Jaipur</option>
                                <option value="delhi" className="text-slate-800">Delhi</option>
                                <option value="mumbai" className="text-slate-800">Mumbai</option>
                            </select>
                            <svg className="w-3 h-3 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* Property Type */}
                        <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md border border-white/15 text-white rounded-xl px-3 py-2.5">
                            <Home className="h-[14px] w-[14px] text-white/80 shrink-0" strokeWidth={1.8} />
                            <select className="bg-transparent border-none outline-none text-white text-[13px] font-semibold appearance-none cursor-pointer w-full">
                                <option value="apartment" className="text-slate-800">Apartment</option>
                                <option value="villa" className="text-slate-800">Villa</option>
                                <option value="commercial" className="text-slate-800">Commercial</option>
                            </select>
                            <svg className="w-3 h-3 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* BHK */}
                        <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md border border-white/15 text-white rounded-xl px-3 py-2.5">
                            <BedDouble className="h-[14px] w-[14px] text-white/80 shrink-0" strokeWidth={1.8} />
                            <select className="bg-transparent border-none outline-none text-white text-[13px] font-semibold appearance-none cursor-pointer w-full">
                                <option value="any" className="text-slate-800">Any BHK</option>
                                <option value="1" className="text-slate-800">1 BHK</option>
                                <option value="2" className="text-slate-800">2 BHK</option>
                                <option value="3" className="text-slate-800">3 BHK</option>
                                <option value="4+" className="text-slate-800">4+ BHK</option>
                            </select>
                            <svg className="w-3 h-3 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                        {/* Budget — full width */}
                        <div className="col-span-2 flex items-center gap-1.5 bg-black/35 backdrop-blur-md border border-white/15 text-white rounded-xl px-3 py-2.5">
                            <IndianRupee className="h-[14px] w-[14px] text-white/80 shrink-0" strokeWidth={1.8} />
                            <select className="bg-transparent border-none outline-none text-white text-[13px] font-semibold appearance-none cursor-pointer w-full">
                                <option value="10-30" className="text-slate-800">Budget: From ₹10L</option>
                                <option value="30-50" className="text-slate-800">Budget: From ₹30L</option>
                                <option value="50-100" className="text-slate-800">Budget: From ₹50L</option>
                                <option value="100+" className="text-slate-800">Budget: From ₹1Cr</option>
                            </select>
                            <svg className="w-3 h-3 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                        </div>

                    </div>

                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-sm:hidden md:mt-8 flex flex-wrap w-full justify-center items-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 px-2 md:px-4"
                >
                    {[
                        "500+ Properties",
                        "Verified Listings",
                        "No Hidden Charges",
                        "Free Consultation"
                    ].map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-white/90 text-[12px] sm:text-sm md:text-[15px] font-medium bg-black/30 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none">
                            <CheckCircle className="h-[14px] w-[14px] md:h-[18px] md:w-[18px] text-green-400 shrink-0" strokeWidth={2.5} />
                            <span>{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
