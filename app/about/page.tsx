"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Phone, ArrowRight, FileText, Landmark, ShieldCheck, PieChart } from "lucide-react";

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
                                    src="/AG.webp?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
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

            {/* Professional Services Integration */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Comprehensive Solutions</p>
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                            Elite <span className="text-blue-600">Professional</span> Services
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
                        <p className="max-w-2xl mx-auto text-slate-500 font-bold text-lg">
                            We go beyond property matching to provide a full-spectrum financial and legal ecosystem for our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "ITR Services",
                                desc: "Expert Income Tax Return filing and optimization for property owners and investors.",
                                icon: FileText,
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "GST Filing",
                                desc: "Comprehensive GST registration and compliance management for commercial real estate.",
                                icon: PieChart,
                                color: "bg-orange-50 text-orange-600"
                            },
                            {
                                title: "Housing Loan",
                                desc: "Elite tie-ups with leading banks for seamless home and commercial loan approvals.",
                                icon: Landmark,
                                color: "bg-green-50 text-green-600"
                            },
                            {
                                title: "JDA Liaison",
                                desc: "Professional assistance with JDA, HB, and other essential land-use Liaison.",
                                icon: ShieldCheck,
                                color: "bg-purple-50 text-purple-600"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-4xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-50 transition-colors" />
                                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight italic">{service.title}</h3>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <Link
                                    href="https://wa.me/918426022000"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
                                >
                                    Enquire Now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Unified Support CTA */}
                    <div className="mt-20 bg-[#0F172A] rounded-4xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Need Professional Guidance?</h3>
                                <p className="text-slate-400 font-bold max-w-xl">
                                    Our experts are ready to handle your legal and financial complexities while you focus on your property goals.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    href="tel:+918426022000"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                                >
                                    Call Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
