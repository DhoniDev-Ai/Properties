"use client";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t-4 border-[#1D4ED8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

                    {/* Column 1 - ABOUT */}
                    <div>
                        <Link href="/" className="flex flex-col justify-center items-start group cursor-pointer mb-6">
                            <span className="font-black text-[22px] tracking-tight leading-none font-heading text-white">
                                AGRWAL
                            </span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#3b82f6] uppercase mt-1">
                                Real Estate
                            </span>
                        </Link>

                        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
                            Your trusted partner in finding the perfect home in Jaipur. We bring transparency, expertise, and a premium experience to your property search.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1D4ED8] transition-all transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all transform hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500 transition-all transform hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all transform hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - QUICK LINKS */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 font-heading">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group">
                                    About Us
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?type=rent" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group">
                                    For Rent
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?type=sale" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group">
                                    For Sale
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group">
                                    Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group mt-2">
                                    Privacy Policy
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-slate-400 hover:text-[#3b82f6] transition-colors inline-block relative group">
                                    Terms & Conditions
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - CONTACT INFO */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 font-heading">Contact Info</h3>
                        <div className="space-y-5">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0 mt-0.5" />
                                <p className="text-slate-400 leading-relaxed">
                                    123 Platinum Tower, JLN Marg,<br />
                                    Malviya Nagar, Jaipur, RJ 302017
                                </p>
                            </div>

                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0" />
                                <a href="tel:+918426022000" className="text-slate-400 hover:text-white transition-colors">
                                    +91 84260 22000
                                </a>
                            </div>

                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0" />
                                <a href="mailto:anilgoyal@propdesk.com" className="text-slate-400 hover:text-white transition-colors">
                                    anilgoyal@propdesk.com
                                </a>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-slate-400">Mon - Sat: 9:00 AM - 9:00 PM</p>
                                    <p className="text-slate-400">Sunday: 10:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; 2026 AGRWAL Real Estate. All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-sm text-center md:text-right">
                        Designed & Developed by <span className="text-white font-medium">DhoniDev-ai</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
