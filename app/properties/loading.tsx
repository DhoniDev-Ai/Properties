import { PropertyGridSkeleton } from "@/components/PropertySkeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Loading() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="h-12 bg-slate-100 rounded-xl w-64 mb-10 animate-pulse" />
                <PropertyGridSkeleton count={4} />
            </div>
            <Footer />
        </main>
    );
}
