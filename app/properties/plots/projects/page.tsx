import { getAllProjects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LayoutGrid, ArrowRight, Building2, MapPin } from "lucide-react";

export const metadata = {
    title: "Gated Societies & Projects | Premium Living in Jaipur",
    description: "Explore the most prestigious gated societies and residential projects in Jaipur. Curated collections of premium plots and luxury apartments."
};

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />

            {/* Header Section */}
            <div className="bg-white border-b border-slate-100 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-100 p-2 rounded-xl text-[#1D4ED8]">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-black text-[#1D4ED8] uppercase tracking-[0.2em]">
                                Exclusive Neighborhoods
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase italic">
                            Discover <br />
                            <span className="text-[#1D4ED8] bg-slate-50 px-4 py-1 shadow-sm border border-slate-200 inline-block mt-2">Gated Societies</span>
                        </h1>
                        <p className="text-slate-500 text-lg font-medium border-l-4 border-blue-500 pl-6 leading-relaxed">
                            Browse properties within curated developmental projects. From luxury townships to premium residential enclaves, find your place in Jaipur's most sought-after societies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {projects.length === 0 ? (
                        <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
                            <LayoutGrid className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-2">No Projects Found</h3>
                            <p className="text-slate-500 font-medium max-w-sm mx-auto">
                                We're currently curating new premium societies. Check back soon for exclusive updates.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project: any) => (
                                <Link 
                                    key={project}
                                    href={`/properties/plots/projects/${encodeURIComponent(project)}`}
                                    className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors" />
                                    
                                    <div className="relative z-10">
                                        <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all transform group-hover:scale-110">
                                            <LayoutGrid className="w-8 h-8" />
                                        </div>
                                        
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-[#1D4ED8] transition-colors italic">
                                            {project}
                                        </h3>
                                        
                                        <div className="flex items-center text-slate-400 text-sm font-bold mb-8 uppercase tracking-widest gap-2">
                                            <MapPin className="w-4 h-4 text-orange-500" />
                                            Active Developmental Group
                                        </div>
                                        
                                        <div className="mt-auto flex items-center gap-3 text-[#1D4ED8] font-black uppercase tracking-widest text-xs group-hover:gap-5 transition-all">
                                            Browse Inventory
                                            <ArrowRight className="w-5 h-5 text-orange-500" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
