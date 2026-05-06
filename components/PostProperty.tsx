"use client";

import { useState } from "react";
import { Send, Building2, MapPin, IndianRupee, User, MessageSquare } from "lucide-react";

export default function PostProperty() {
    const [formData, setFormData] = useState({
        name: "",
        propertyType: "Plot",
        location: "",
        price: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hi, I want to sell my property. Here are the details:
- *Owner Name:* ${formData.name}
- *Property Type:* ${formData.propertyType}
- *Location:* ${formData.location}
- *Expected Price:* ${formData.price}
- *Message:* ${formData.message || 'N/A'}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/918426022000?text=${encodedText}`, "_blank");
    };

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Owner Direct Channel</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
                            Sell with <span className="text-blue-500">Agrawal Properties</span> <br />
                            Faster Than Ever.
                        </h2>

                        <p className="text-xl text-slate-400 font-bold leading-relaxed mb-10 max-w-xl">
                            List your property directly with Agrawal Properties. Get your JDA Plots, Villas, or Apartments in front of high-intent buyers instantly via WhatsApp.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Verified Listings", desc: "Gain trust with our professional badge." },
                                { title: "Instant Reach", desc: "Broadcast to 10k+ active investors." },
                                { title: "Direct Lead Gen", desc: "Receive inquiries straight to your phone." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <div>
                                        <h4 className="font-black text-lg uppercase tracking-tight leading-none mb-1">{item.title}</h4>
                                        <p className="text-slate-500 font-bold text-sm tracking-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100">
                        <form onSubmit={handleWhatsAppSend} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Property Type</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <select
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none"
                                        >
                                            <option>Plot</option>
                                            <option>Flat / Apartment</option>
                                            <option>Independent House</option>
                                            <option>Commercial</option>
                                            <option>Duplex Villa</option>
                                            <option>Agriculture Land</option>
                                            <option>Farm House</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            required
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Area / Colony Name"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Expected Price</label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="e.g. 85 Lacs or 1.2 Cr"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us more about your property..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-6 rounded-3xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm group active:scale-[0.98]"
                            >
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                Post on WhatsApp
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
