"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Phone, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0F172A] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                            Redefining Real Estate In <span className="text-blue-500">Jaipur</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-medium">
                            Agarwal Properties is more than just a real estate agency; we are your dedicated partners in find the perfect space to call home. With decades of experience and a commitment to transparency, we bring premium properties and expertise together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-3/2">
                                <Image
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
                                    alt="Modern Office"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8 tracking-tight">
                                Our Legacy of Trust
                            </h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                Founded on the principles of integrity and excellence, Agarwal Properties has grown to become Jaipur's most trusted name in real estate. We specialize in luxury apartments, independent villas, and prime commercial spaces.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Transparent property evaluations",
                                    "Expert legal and documentation support",
                                    "Customized search for your unique needs",
                                    "Post-purchase assistance and management"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-1 rounded-full">
                                            <CheckCircle className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-slate-800 font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Owner */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
                            Meet the Visionary
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                {/* OWNER PHOTO PLACEHOLDER */}
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                    alt="Anil Goyal - Owner"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                                <div className="absolute bottom-8 left-8 text-white lg:hidden">
                                    <h3 className="text-2xl font-bold">Anil Goyal</h3>
                                    <p className="text-blue-400 font-medium">Founder & Managing Director</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                <div className="hidden lg:block mb-8">
                                    <h3 className="text-4xl font-bold text-[#0F172A] mb-2">Anil Goyal</h3>
                                    <p className="text-blue-600 font-bold text-lg uppercase tracking-wider">Founder & Managing Director</p>
                                </div>
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-8">
                                    "Our mission is simple: to make property buying a premium, stress-free experience for everyone in Jaipur. We treat every client's dream as our own responsibility."
                                </p>
                                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                                    With over 20 years of experience in the Rajasthan real estate market, Anil Goyal has built a reputation for unmatched expertise and unwavering integrity. Under his leadership, Agarwal Properties has closed over 1,000 successful deals.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link 
                                        href="https://wa.me/918426022000" 
                                        target="_blank"
                                        className="bg-[#0F172A] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg shadow-black/10"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Contact Directly
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: Users, label: "Happy Clients", value: "2,500+" },
                            { icon: Award, label: "Years of Experience", value: "20+" },
                            { icon: CheckCircle, label: "Properties Sold", value: "1,200+" },
                            { icon: Users, label: "Agent Experts", value: "15+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <stat.icon className="w-10 h-10 mb-4 opacity-80" />
                                <div className="text-4xl font-black mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
