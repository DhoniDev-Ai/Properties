"use client";

import { use } from "react";
import { FileText, Briefcase, Landmark, ShieldCheck, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import EnquiryCTA from "@/components/EnquiryCTA";
import Navbar from "@/components/Navbar";

const serviceData: Record<string, any> = {
    "itr-filing": {
        title: "ITR Filing Services",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        description: "Professional Income Tax Return filing for property owners, individuals, and businesses in Rajasthan. We ensure maximum compliance and optimized tax savings.",
        features: [
            "Expert Tax Audit & Consultation",
            "Capital Gains Calculation for Property Sales",
            "TDS Refund Assistance",
            "Error-free digital filing with e-verification",
            "Year-round documentation support"
        ]
    },
    "gst-registration": {
        title: "GST Registration & Filing",
        icon: Briefcase,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        description: "Complete GST solutions for commercial property owners and businesses. From registration to monthly filing, we handle the legal complexities while you focus on growth.",
        features: [
            "New GST Registration (Fresh & Migration)",
            "Monthly & Quarterly GSTR Filing",
            "GST Input Tax Credit (ITC) Optimization",
            "Compliance for Commercial Rentals",
            "Response to GST Notices & Audits"
        ]
    },
    "loan-housing": {
        title: "Loan & Housing Finance",
        icon: Landmark,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        description: "Hassle-free housing loans and property financing from India's top banks. We help you secure the lowest interest rates with minimal documentation and fast approvals.",
        features: [
            "Home Loans for New & Resale Properties",
            "Loan Against Property (LAP)",
            "Balance Transfer with Top-up Facility",
            "Commercial Property Financing",
            "PMAY Subsidy Assistance & Documentation"
        ]
    },
    "license-jda-hb": {
        title: "JDA | HB Licensing & Approvals",
        icon: ShieldCheck,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        description: "Specialized assistance for Jaipur Development Authority (JDA) and Housing Board (HB) licensing. We navigate the government bureaucracy to get your property perfectly documented.",
        features: [
            "JDA Patta & Documentation Support",
            "Housing Board Transfer & Licensing",
            "Building Plan Approvals (Maps)",
            "Mutation & Name Transfer Services",
            "Conversion of Land (Agriculture to Residential)"
        ]
    }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = serviceData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
                <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Service Not Found</h1>
                <p className="text-slate-500 mb-8 font-medium">The service you're looking for doesn't exist or has been moved.</p>
                <Link href="/" className="bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-black transition-all">
                    Return Home
                </Link>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-24">
            <Navbar theme="light" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-12 transition-colors group">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Back to All Services
                </Link>

                {/* Header Section */}
                <div className="bg-white rounded-4xl p-8 md:p-16 shadow-2xl border border-slate-100 mb-12 relative overflow-hidden">
                    {/* Decorative Background Icon */}
                    <div className="absolute -top-10 -right-10 opacity-5">
                        <Icon className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`${service.bgColor} p-6 rounded-4xl mb-8 inline-block shadow-sm`}>
                            <Icon className={`w-12 h-12 ${service.color}`} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight uppercase italic mb-6">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl border-y border-slate-100 py-8">
                            {service.description}
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {service.features.map((feature: string, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors group"
                        >
                            <div className="bg-green-50 p-1.5 rounded-full mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-slate-700 font-black uppercase tracking-tight text-sm leading-snug group-hover:text-[#1D4ED8] transition-colors">{feature}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA Section */}
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
                    <EnquiryCTA
                        title={`Ready for ${service.title.split(' ')[0]}?`}
                        subtitle="Consult directly with Anil Goyal for immediate professional assistance."
                        variant="vertical"
                        serviceName={service.title}
                    />
                </div>

                {/* Simple Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Trusted Across Rajasthan</p>
                    <div className="h-px w-20 bg-slate-200 mx-auto" />
                </div>

            </div>
        </main>
    );
}
