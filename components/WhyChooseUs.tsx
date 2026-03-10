"use client";

import { Home, Users, Award, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const features = [
    {
        id: 1,
        value: 500,
        suffix: "+",
        label: "Properties Listed",
        icon: Home,
    },
    {
        id: 2,
        value: 1000,
        suffix: "+",
        label: "Happy Clients",
        icon: Users,
    },
    {
        id: 3,
        value: 15,
        suffix: "+",
        label: "Years Experience",
        icon: Award,
    },
    {
        id: 4,
        value: 100,
        suffix: "%",
        label: "Verified Listings",
        icon: ShieldCheck,
    },
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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Why Choose Us?
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Your Trusted Partner in Finding Perfect Homes
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-3 lg:gap-6 max-w-4xl mx-auto">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-slate-50 border border-slate-100 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                        >
                            <div className="bg-blue-100/50 p-2.5 md:p-3 rounded-full mb-3 group-hover:bg-[#1D4ED8] transition-colors duration-300">
                                <feature.icon className="w-5 h-5 md:w-8 md:h-8 text-[#1D4ED8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 font-heading tracking-tight">
                                <Counter value={feature.value} suffix={feature.suffix} />
                            </h3>
                            <p className="text-slate-600 font-medium text-[11px] sm:text-[13px] md:text-base leading-tight">
                                {feature.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
