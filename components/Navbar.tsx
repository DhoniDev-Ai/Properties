"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        { name: "Properties", href: "/properties" },
        { name: "EMI Calculator", href: "/#Emicalculator" },
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
                                AGRWAL
                            </span>
                            <span className={`text-[9.5px] font-bold tracking-widest md:tracking-[0.22em]  ${isSolidText ? "text-slate-500" : "text-white/80"}`}>
                                PROPERTIES
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium text-[15px] cursor-pointer transition-colors duration-200 relative group py-2 ${isSolidText ? "text-slate-600 hover:text-[#0F172A]" : "text-white/90 hover:text-white"}`}
                            >
                                {link.name}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                            </Link>
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
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 rounded-md text-base font-medium cursor-pointer text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
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
