"use client";

import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Smooth fade in after 1.5 seconds so it doesn't pop in immediately on load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const phoneNumber = "918271310911";
    const message = encodeURIComponent("Hi! I'm interested in properties in Jaipur. Can you help me?");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-700 transform flex flex-col items-end ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
                }`}
        >
            {/* Tooltip (Visible on hover of parent) */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-700 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 w-max invisible group-hover:visible origin-right scale-95 group-hover:scale-100">
                Chat with us on WhatsApp
                {/* Arrow pointer */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-slate-100 rotate-45"></div>
            </div>

            {/* Main Button Container relative for absolute badge/rings */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="relative group flex items-center justify-center outline-none"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Continuous Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>

                {/* Secondary Pulse Ring for layered depth */}
                <span className="absolute inset-[-6px] rounded-full bg-[#25D366] opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></span>

                {/* Actual Button */}
                <div className="relative z-10 w-[60px] h-[60px] bg-[#25D366] hover:bg-[#20BE5A] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                </div>


            </a>
        </div>
    );
}
