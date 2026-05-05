"use client";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Facebook,
    Instagram,
    Linkedin
} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Get In Touch With Us
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        We&apos;re here to help you find your dream home
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* LEFT COLUMN - CONTACT INFO */}
                    <div className="flex-1 flex flex-col h-full">
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 h-full shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mr-5 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors pointer-events-none">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-base font-bold text-slate-900 mb-1">Office Address</p>
                                        <p className="text-slate-600 text-base leading-relaxed">
                                            117/349 Sector 12,<br />
                                            Mansarovar, Jaipur, Rajasthan 302020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mr-5 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors pointer-events-none">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-base font-bold text-slate-900 mb-1">Phone Number</p>
                                        <a href="tel:+918426022000" className="text-slate-600 text-base hover:text-blue-600 transition-colors block">
                                            +91 84260 22000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mr-5 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors pointer-events-none">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-base font-bold text-slate-900 mb-1">Email Address</p>
                                        <a href="mailto:aggrawalpropertys@gmail.com" className="text-slate-600 text-base hover:text-blue-600 transition-colors">
                                            aggrawalpropertys@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mr-5 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors pointer-events-none">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-base font-bold text-slate-900 mb-1">Working Hours</p>
                                        <p className="text-slate-600 text-base">Mon - Sun: 9:00 AM - 7:00 PM</p>

                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="mt-10 pt-8 border-t border-slate-200">
                                <a
                                    href="https://wa.me/918426022000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full bg-[#25D366] hover:bg-[#20BE5A] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-[#25D366]/30 text-lg"
                                >
                                    <MessageCircle className="w-6 h-6 mr-3" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - MAP & SOCIALS */}
                    <div className="flex-1 flex flex-col space-y-8">
                        {/* Map Embedded */}
                        <div className="w-full h-full min-h-[450px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-100 relative shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.910696369501!2d75.77079107543707!3d26.84279257668886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzM0LjEiTiA3NcKwNDYnMjQuMSJF!5e0!3m2!1sen!2sin!4v1776832963627!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location Jaipur"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                        {/* Social Media Link Icons */}
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 m-0 leading-none">Connect With Us:</h3>
                            <div className="flex justify-center gap-4">
                                <a href="https://www.facebook.com/jaipurestate" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-white transition-all shadow-sm group">
                                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-200 hover:bg-white transition-all shadow-sm group">
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/in/agrawal-property-5540a5408/" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-700 hover:bg-white transition-all shadow-sm group">
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
