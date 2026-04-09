"use client";

import { Phone, MessageSquareCode } from "lucide-react";

interface EnquiryCTAProps {
    title?: string;
    subtitle?: string;
    variant?: "horizontal" | "vertical" | "compact";
    propertyTitle?: string;
    serviceName?: string;
}

export default function EnquiryCTA({
    title = "Need Expert Guidance?",
    subtitle = "Connect with Anil Goyal for a personalized consultation.",
    variant = "horizontal",
    propertyTitle,
    serviceName
}: EnquiryCTAProps) {
    const phoneNumber = "8426022000";
    const formattedPhone = "84260 22000";
    const agentName = "Anil Goyal";

    const context = propertyTitle ? `property: "${propertyTitle}"` : serviceName ? `service: "${serviceName}"` : "your services";
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in ${context}. Please provide more details.`;

    if (variant === "compact") {
        return (
            <div className="grid grid-cols-2 gap-3 w-full">
                <a
                    href={`tel:+91${phoneNumber}`}
                    className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-black py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-500/20 uppercase tracking-widest"
                >
                    <Phone className="w-4 h-4" /> Call
                </a>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-black py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                >
                    <MessageSquareCode className="w-4 h-4" /> WhatsApp
                </a>
            </div>
        );
    }

    return (
        <div className={`
            bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl
            ${variant === "vertical" ? "flex flex-col text-center" : "flex flex-col md:flex-row items-center justify-between gap-6"}
        `}>
            <div className={variant === "vertical" ? "mb-6" : "md:flex-1"}>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">{title}</h3>
                <p className="text-slate-500 font-medium">{subtitle}</p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                        <img
                            src="/AG.png?auto=format&fit=crop&w=100&q=80"
                            alt={agentName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Property Advisor</p>
                        <p className="text-lg font-black text-slate-900 tracking-tight">{agentName}</p>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 ${variant === "vertical" ? "w-full" : "shrink-0 lg:w-[40%]"}`}>
                <a
                    href={`tel:+91${phoneNumber}`}
                    className="flex-1 bg-[#1D4ED8] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 uppercase tracking-widest text-sm"
                >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span>Call {formattedPhone}</span>
                </a>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-black py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 shadow-md uppercase tracking-widest text-sm"
                >
                    <MessageSquareCode className="w-5 h-5" />
                    <span>WhatsApp Enquiry</span>
                </a>
            </div>
        </div>
    );
}
