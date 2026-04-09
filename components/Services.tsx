"use client";

import { FileText, Briefcase, Landmark, ShieldCheck, ArrowRight, Phone, MessageSquareCode } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceList = [
    {
        id: "itr-filing",
        title: "ITR Filing",
        desc: "Expert tax assistance for individual & commercial property owners in Rajasthan.",
        icon: FileText,
        color: "bg-blue-500",
        path: "/services/itr-filing"
    },
    {
        id: "gst-registration",
        title: "GST Filing",
        desc: "Smooth business registration and compliance for commercial ventures and retailers.",
        icon: Briefcase,
        color: "bg-indigo-600",
        path: "/services/gst-registration"
    },
    {
        id: "loan-housing",
        title: "Home Loan",
        desc: "Best home loan rates and financing from top public & private sector banks.",
        icon: Landmark,
        color: "bg-emerald-600",
        path: "/services/loan-housing"
    },
    {
        id: "license-jda-hb",
        title: "Liaison with JDA | HB",
        desc: "Expert government approvals, JDA/HB documentation, and hassle-free liaison.",
        icon: ShieldCheck,
        color: "bg-orange-500",
        path: "/services/license-jda-hb"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-4">Other Services</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight italic uppercase">
                            Legal & <span className="text-blue-400">Financial Excellence</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium border-l-4 border-blue-500 pl-6">
                            Beyond real estate: Seamlessly manage your ITR, GST, Home Loans, and JDA Liaison under one expert roof.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Expert Consultant</p>
                            <p className="text-lg font-black text-white">Anil Goyal</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden shrink-0">
                            <img src="/AG.png?auto=format&fit=crop&w=100&q=80" alt="Anil Goyal" />
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {serviceList.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:bg-slate-800/60 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-700`} />

                            <div className={`${service.color} p-4 rounded-2xl w-fit mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>

                            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight leading-tight italic">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                {service.desc}
                            </p>

                            <Link
                                href={service.path}
                                className="inline-flex absolute bottom-5 items-center gap-2 text-blue-400 font-black uppercase tracking-widest text-[11px] group-hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1"
                            >
                                Detailed Overview <ArrowRight className="w-3.5 h-3.5 translate-x-1 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Global Services CTA */}
                <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:max-w-md">
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight uppercase italic mb-2">Need Direct <span className="text-[#1D4ED8]">Expertise?</span></h4>
                        <p className="text-slate-500 font-medium leading-snug">Connect directly with Anil Goyal for expert advice on ITR, GST, and Liaison today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <a
                            href="tel:+918426022000"
                            className="bg-[#1D4ED8] hover:bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20 active:scale-95 transition-all text-center flex items-center justify-center gap-3"
                        >
                            <Phone className="w-4 h-4" /> 84260 22000
                        </a>
                        <a
                            href="https://wa.me/918426022000?text=Hi, I'm interested in your Professional Services (ITR/GST/Loans). Please call me back."
                            target="_blank"
                            className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs active:scale-95 transition-all text-center flex items-center justify-center gap-3 shadow-md"
                        >
                            <MessageSquareCode className="w-4 h-4" /> WhatsApp Enquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
