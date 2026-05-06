"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
    {
        id: 1,
        name: "Ramchandra Jat",
        property: "Bought 3BHK in Malviya Nagar",
        text: " The buying process was incredibly smooth. They understood exactly what my family needed and handled all the complex paperwork effortlessly. ",
        image: "/rm.png",
    },
    {
        id: 2,
        name: "Gajendra Singh",
        property: "Rented Villa in Vaishali Nagar",
        text: "Excellent service and guidance throughout our search. We moved from out of state and their team made finding a premium rental completely stress-free.",
        image: "/gj.png",
    },
    {
        id: 3,
        name: "Kunal Agrawal",
        property: "Bought Plot in Jagatpura",
        text: "Found our dream property within just two weeks! Their vast network and transparent dealings gave us complete peace of mind.",
        image: "/kn.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header & Google Integration */}
                <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            What Our Clients Say
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Don&apos;t just take our word for it
                        </p>
                    </div>

                    {/* Google Reviews Badge */}
                    <Link target="_blank" href={"https://www.google.com/search?sca_esv=df25ec6ca4037ad0&cs=1&sxsrf=ANbL-n72eT6lGhjWOimQMBgwyF3YgZdsbw:1775031116153&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXPXZsKuBa7AOj5EBlsKPxy0wqbE57ZDGIsfZKJ3OysPXlTS1nMm9XL66GzAt8-m3EGq08_3Z-aqgXTjKMRdUSEeEfTF5HfsisXoVxFiG_EjeePfGw%3D%3D&q=Agrawal+Properties+Reviews&sa=X&ved=2ahUKEwjs2ZKZmsyTAxXd-zgGHUexDUMQ0bkNegQIKBAH&biw=1470&bih=835&dpr=2"} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 flex items-center shrink-0 hover:shadow-md transition-shadow  group">
                        <div className="mr-5 border-r border-slate-100 pr-5">
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-xl font-bold text-slate-900">4.8</span>
                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium whitespace-nowrap">
                                Based on 10+ reviews
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* Simple CSS Google Logo */}
                            <div className="flex gap-1 items-center font-bold text-lg tracking-tighter">
                                <span className="text-blue-500">G</span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-500">g</span>
                                <span className="text-green-500">l</span>
                                <span className="text-red-500">e</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium mt-0.5 group-hover:text-blue-600 flex items-center transition-colors">
                                Review us <ExternalLink className="w-2.5 h-2.5 ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="bg-white rounded-4xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 relative group"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors duration-300 z-0" />

                            <div className="relative h-[250] z-10">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-8 text-[15px] italic">
                                    &quot;{testimonial.text}&quot;
                                </p>

                                <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 shrink-0 border-2 border-slate-100">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-[15px]">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 font-medium">
                                            {testimonial.property}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
