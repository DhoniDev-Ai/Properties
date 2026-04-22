"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobilePropertiesOpen, setIsMobilePropertiesOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About Us", href: "/about" },
        {
            name: "Properties",
            href: "#",
            dropdown: [
                { id: "properties/Apartment", label: "Apartments / Flats" },
                { id: "properties/Plot", label: "Plots" },
                { id: "properties/project?approval=Gated%20Society", label: "Gated Society" },
                { id: "properties/hb", label: "Housing Board Homes" },
                { id: "properties/project?approval=Society%20Patta", label: "Society Patta" },
                { id: "properties/project?approval=JDA%20Scheme", label: "JDA Scheme" },
                { id: "properties/Villa", label: "Duplex Villas" },
                { id: "properties/Farmhouse", label: "Farm House" },
                { id: "properties/Commercial", label: "Commercial" },
                { id: "properties/Agriculture-Land", label: "Agriculture Land" }
            ]
        },
        {
            name: "Other Services",
            href: "#",
            dropdown: [
                { label: "ITR Filing", id: "services/itr-filing" },
                { label: "GST Filing", id: "services/gst-registration" },
                { label: "House Loan", id: "services/loan-housing" },
                { label: "Liaison with JDA | HB", id: "services/license-jda-hb" },
            ]
        },
        { name: "Post Property", href: "/sell" },

        { name: "Contact us", href: "/#contact" },
    ];

    const isSolidText = isScrolled || theme === "light";

    return (
        <motion.nav
            initial={false}
            animate={{
                top: isScrolled ? 16 : 0,
                width: isScrolled ? "95%" : "100%",
                maxWidth: isScrolled ? "1152px" : "100%",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : (theme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"),
                borderRadius: isScrolled ? "9999px" : "0px",
                paddingTop: isScrolled ? "12px" : "20px",
                paddingBottom: isScrolled ? "12px" : "20px",
                boxShadow: isScrolled ? "0 8px 30px rgba(0,0,0,0.08)" : (theme === "light" ? "0 4px 20px rgba(0,0,0,0.05)" : "0 0 0 rgba(0,0,0,0)"),
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
            }}
            className="fixed z-50 left-0 right-0 mx-auto px-6 md:px-8"
        >
            <div className={`${isScrolled ? "w-full" : "max-w-7xl mx-auto"}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="shrink cursor-pointer  flex items-center">
                        <Link href="/" className="flex flex-col justify-center items-start group cursor-pointer pl-1">
                            <span className={`font-black text-[22px] tracking-tight leading-none font-heading ${isSolidText ? "text-[#0F172A]" : "text-white"}`}>
                                Agarwal
                            </span>
                            <span className={`text-[9.5px] font-bold tracking-widest md:tracking-[0.22em]  ${isSolidText ? "text-slate-500" : "text-white/80"}`}>
                                PROPERTIES
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center items-center  space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group/nav"
                                onMouseEnter={() => {
                                    if (link.name === "Properties") setIsPropertiesOpen(true);
                                    if (link.name === "Other Services") setIsServicesOpen(true);
                                }}
                                onMouseLeave={() => {
                                    if (link.name === "Properties") setIsPropertiesOpen(false);
                                    if (link.name === "Other Services") setIsServicesOpen(false);
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className={`font-medium text-[15px] cursor-pointer transition-colors duration-200 relative py-2 flex items-center gap-1 ${isSolidText ? "text-slate-600 hover:text-[#0F172A]" : "text-white/90 hover:text-white"}`}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${link.name === "Properties" ? (isPropertiesOpen ? 'rotate-180' : '') : (isServicesOpen ? 'rotate-180' : '')}`} />}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/nav:scale-x-100"></span>
                                </Link>

                                {link.dropdown && (
                                    <AnimatePresence>
                                        {((link.name === "Properties" && isPropertiesOpen) || (link.name === "Other Services" && isServicesOpen)) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                                            >
                                                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-2">
                                                    {link.dropdown.map((sub) => (
                                                        <Link
                                                            key={sub.id}
                                                            href={`/${sub.id}`}
                                                            className="block px-4 py-2 rounded-xl text-[14px] font-bold text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50 transition-all uppercase tracking-tight"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="tel:+918426022000"
                            className={`flex items-center gap-2 font-bold cursor-pointer transition-colors duration-200 ${isSolidText ? "text-[#0F172A] hover:text-blue-600" : "text-white hover:text-blue-200"}`}
                        >
                            <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                            <span className="text-[15px]">Call Now</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none cursor-pointer focus:ring-2 focus:ring-inset focus:ring-slate-500 transition-colors ${isSolidText ? "text-slate-500 hover:text-[#0F172A] hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full bg-white border-b border-slate-100 shadow-lg origin-top left-0 w-full transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? "opacity-100 scale-y-100 pb-4"
                    : "opacity-0 scale-y-0 h-0 overflow-hidden"
                    }`}
            >
                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.dropdown ? (
                                <>
                                    <button
                                        onClick={() => {
                                            if (link.name === "Properties") setIsMobilePropertiesOpen(!isMobilePropertiesOpen);
                                            if (link.name === "Other Services") setIsMobileServicesOpen(!isMobileServicesOpen);
                                        }}
                                        className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium cursor-pointer text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${(link.name === "Properties" ? isMobilePropertiesOpen : isMobileServicesOpen) ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${(link.name === "Properties" ? isMobilePropertiesOpen : isMobileServicesOpen) ? 'max-h-64 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {link.dropdown.map((sub) => (
                                            <Link
                                                key={sub.id}
                                                href={`/${sub.id}`}
                                                className="block px-3 py-2 rounded-md text-sm font-bold text-slate-500 hover:text-[#1D4ED8] uppercase tracking-tight"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="block px-3 py-3 rounded-md text-base font-medium cursor-pointer text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 pb-2 px-3">
                        <a
                            href="tel:+918426022000"
                            className="w-full flex justify-center items-center gap-2 bg-[#0F172A] hover:bg-slate-800 cursor-pointer text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm"
                        >
                            <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                            <span>Call Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
