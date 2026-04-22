"use client";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    ShieldCheck,
    FileText,
    PieChart,
    Landmark
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t-4 border-[#1D4ED8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 4-Column Layout for Elite Professionalism */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1 - ABOUT */}
                    <div>
                        <Link href="/" className="flex items-center group cursor-pointer mb-6">
                            <div className="relative h-14 aspect-3/1 overflow-hidden">
                                <img
                                    src="/logodrk.png"
                                    alt="Agrawal Real Estate Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
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
                        <h3 className="text-white text-[15px] font-black uppercase tracking-[0.2em] mb-8 font-heading">Sitemap</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-[#3b82f6] transition-all flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-0.5 group-hover:bg-[#3b82f6]" />
                                    Company Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?type=rent" className="text-slate-400 hover:text-[#3b82f6] transition-all flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-0.5 group-hover:bg-[#3b82f6]" />
                                    Rental Inventory
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?type=sale" className="text-slate-400 hover:text-[#3b82f6] transition-all flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-0.5 group-hover:bg-[#3b82f6]" />
                                    Sales Catalog
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-400 hover:text-[#3b82f6] transition-all flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-0.5 group-hover:bg-[#3b82f6]" />
                                    Property Inquiry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - ELITE SERVICES (SEO Focused) */}
                    <div>
                        <h3 className="text-white text-[15px] font-black uppercase tracking-[0.2em] mb-8 font-heading">Other Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="services/itr-filing"
                                    className="text-slate-400 hover:text-[#3b82f6] transition-all group flex flex-col"
                                    title="Income Tax Return Services for Real Estate Investors"
                                >
                                    <span className="flex items-center gap-2">
                                        <FileText className="w-3.5 h-3.5 text-blue-500" />
                                        ITR Filing
                                    </span>
                                    <span className="text-[10px] text-slate-600 ml-5">Tax optimization for investors</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/gst-registration"
                                    className="text-slate-400 hover:text-[#3b82f6] transition-all group flex flex-col"
                                    title="GST Registration and Compliance for Commercial Properties"
                                >
                                    <span className="flex items-center gap-2">
                                        <PieChart className="w-3.5 h-3.5 text-orange-500" />
                                        GST Filing
                                    </span>
                                    <span className="text-[10px] text-slate-600 ml-5">Commercial property compliance</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/loan-housing"
                                    className="text-slate-400 hover:text-[#3b82f6] transition-all group flex flex-col"
                                    title="Home and Commercial Loan Approvals"
                                >
                                    <span className="flex items-center gap-2">
                                        <Landmark className="w-3.5 h-3.5 text-green-500" />
                                        Home Loan
                                    </span>
                                    <span className="text-[10px] text-slate-600 ml-5">Home & business financing</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/license-jda-hb"
                                    className="text-slate-400 hover:text-[#3b82f6] transition-all group flex flex-col"
                                    title="JDA HB and Property Liaison Assistance"
                                >
                                    <span className="flex items-center gap-2">
                                        <ShieldCheck className="w-3.5 h-3.5 text-purple-500" />
                                        Liaison with JDA & HB
                                    </span>
                                    <span className="text-[10px] text-slate-600 ml-5">Legal & approval support</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - CONTACT INFO */}
                    <div>
                        <h3 className="text-white text-[15px] font-black uppercase tracking-[0.2em] mb-8 font-heading">Contact</h3>
                        <div className="space-y-5">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0 mt-0.5" />
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    117/349, Sector 12,<br />
                                    Mansarovar, Jaipur, RJ 302020
                                </p>
                            </div>

                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0" />
                                <a href="tel:+918426022000" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    +91 84260 22000
                                </a>
                            </div>

                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0" />
                                <a href="mailto:anilgoyal@propdesk.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    anilgoyal@propdesk.com
                                </a>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-5 h-5 text-[#3b82f6] mr-3 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-slate-400 text-sm italic mb-1 uppercase tracking-tighter">Business Hours</p>
                                    <p className="text-slate-400 text-[12px]">Mon - Sun: 9:00 AM - 7:00 PM</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; 2026 Agrawal Real Estate. All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-sm text-center md:text-right">
                        Designed & Developed by <span className="text-white font-medium">DhoniDev-ai</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
