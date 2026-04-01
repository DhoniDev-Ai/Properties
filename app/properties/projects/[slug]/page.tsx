import { getPropertiesByProject } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyListingClient from "@/components/PropertyListingClient";
import { Suspense } from "react";
import { Building2 } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

async function ProjectListingContent({ params }: Props) {
    const { slug } = await params;
    const projectName = decodeURIComponent(slug);
    const properties = await getPropertiesByProject(projectName);

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar theme="light" />
            
            <div className="bg-white border-b border-slate-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
                            Society Inventory
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight uppercase italic">
                        {projectName}
                    </h1>
                    <p className="text-slate-500 text-lg font-medium border-l-4 border-orange-500 pl-6 max-w-2xl">
                        Exploring available properties within the prestigious {projectName} development. Carefully verified for legal approval and high investment potential.
                    </p>
                </div>
            </div>

            <div className="flex-1">
                <PropertyListingClient 
                    initialFilters={{}} 
                    initialProperties={properties}
                    hideHero={true}
                    hideCategoryCards={true}
                    showBackButton={true}
                    title={projectName}
                    description={`Exclusive collection of properties in ${projectName}.`}
                />
            </div>

            <Footer />
        </main>
    );
}

export default function ProjectListingPage({ params }: Props) {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400 font-black tracking-tighter uppercase italic">Loading Society Catalog...</div>}>
            <ProjectListingContent params={params} />
        </Suspense>
    );
}
