"use client";

import { useState } from "react";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";

interface ContactCardProps {
    propertyTitle: string;
    owner: {
        name: string;
        photo: string;
        phone: string;
        type: string;
    };
}

export default function ContactCard({ propertyTitle, owner }: ContactCardProps) {
    const [showNumber, setShowNumber] = useState(false);

    const whatsappLink = `https://wa.me/${owner.phone.replace(/\D/g, '')}?text=Hi, I'm interested in "${propertyTitle}"`;

    return (
        <div className="sticky top-24 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
            {/* Owner Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                    <img 
                        src={owner.photo} 
                        alt={owner.name} 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 shadow-sm"
                    />
                    <div>
                        <h3 className="text-lg font-bold text-[#1E3A8A]">{owner.name}</h3>
                        <p className="text-slate-500 text-sm font-medium">{owner.type}</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <button 
                        onClick={() => setShowNumber(true)}
                        className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                    >
                        <Phone className="w-4 h-4 text-[#1D4ED8]" />
                        {showNumber ? owner.phone : `${owner.phone.slice(0, 7)} XXX XX`}
                    </button>
                    {!showNumber && (
                        <p className="text-center text-[11px] text-slate-400 font-medium">Click to reveal phone number</p>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 space-y-3">
                <a 
                    href={`tel:${owner.phone}`}
                    className="w-full py-3.5 bg-[#1E3A8A] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors shadow-blue-100 shadow-lg cursor-pointer"
                >
                    <Phone className="w-4 h-4" /> Call Now
                </a>
                <a 
                    href={whatsappLink}
                    target="_blank"
                    className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-green-100 shadow-lg cursor-pointer"
                >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
                <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Consultant
                </div>
            </div>
        </div>
    );
}
