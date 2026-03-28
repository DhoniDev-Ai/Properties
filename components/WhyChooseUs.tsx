"use client";

import { Home, Users, Award, ShieldCheck, Scale, History, Handshake, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

const highValueProps = [
    {
        icon: Scale,
        title: "Legal Transparency",
        desc: "100% verified JDA/HB approvals for every listing, ensuring risk-free ownership."
    },
    {
        icon: History,
        title: "45+ Years Trust",
        desc: "Over a decade of dominance in the Rajasthan real estate market with proven integrity."
    },
    {
        icon: Handshake,
        title: "Direct Connect",
        desc: "Direct-to-owner deals with zero hidden commissions and total documentation support."
    },
    {
        icon: Globe,
        title: "Local Mastery",
        desc: "Deep expertise in Jaipur and 12 major Rajasthan regions for high-yield investments."
    }
];

const counters = [
    { value: 500, suffix: "+", label: "PROPERTIES" },
    { value: 1000, suffix: "+", label: "HAPPY CLIENTS" },
    { value: 15, suffix: "+", label: "YEARS EXP" },
    { value: 100, suffix: "%", label: "VERIFIED" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 40,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Grid Paper Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#1D4ED8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Branding & Value Props */}
                    <div className="lg:w-1/2">
                        <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">The PropDesk Difference</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight italic">
                            Why the Best Investors <br /><span className="text-[#1D4ED8]">Choose Anil Goyal?</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {highValueProps.map((prop, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-blue-50 p-3 rounded-2xl w-fit mb-4 group-hover:bg-[#1D4ED8] transition-colors duration-500">
                                        <prop.icon className="w-5 h-5 text-[#1D4ED8] group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{prop.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{prop.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: High Impact Counters */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {counters.map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900 rounded-4xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl relative group overflow-hidden"
                                >
                                    {/* Subtle Gradient Glow */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#1D4ED8] group-hover:h-full transition-all duration-700 opacity-20" />

                                    <h3 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter drop-shadow-xl z-10 transition-transform duration-500 group-hover:scale-110">
                                        <Counter value={c.value} suffix={c.suffix} />
                                    </h3>
                                    <p className="text-blue-400 font-black text-[10px] md:text-xs tracking-[0.2em] relative z-10 opacity-80 uppercase">
                                        {c.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Trust Bar */}
                        <div className="mt-12 bg-blue-50/50 border border-blue-100/50 rounded-2xl p-6 flex items-center justify-center gap-6">
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Premium Partner</span>
                            <div className="h-4 w-px bg-slate-200" />
                            <span className="text-sm font-black text-[#1D4ED8] italic uppercase">Authentic | Direct | Guaranteed</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
