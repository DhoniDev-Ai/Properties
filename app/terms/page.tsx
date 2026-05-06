import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms & Conditions | Agrawal Properties",
    description: "Terms and conditions for using the Agrawal Properties real estate platform.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-[#0F172A] mb-8 tracking-tight">Terms & Conditions</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                        <p className="font-medium text-slate-800">Effective Date: March 26, 2026</p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">1. Introduction</h2>
                        <p>
                            Welcome to Agrawal Properties. By accessing this website (Agrawalproperties.com) and using our real estate services, you agree to comply with and be bound by the following terms and conditions of use.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">2. Listing Accuracy</h2>
                        <p>
                            While we strive for 100% accuracy in all property details including prices, areas, and amenities, Agrawal Properties and its agents do not guarantee the completeness or reliability of the information. Users are strongly encouraged to verify all details before making a purchase or rental decision.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">3. Intellectual Property</h2>
                        <p>
                            The content, layout, design, data, and graphics on this website are protected by intellectual property laws. You may not reproduce, download, or distribute any part of the site without our prior written consent.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">4. User Responsibility</h2>
                        <p>
                            You agree to use this website only for lawful purposes in Jaipur, Rajasthan, and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">5. Limitation of Liability</h2>
                        <p>
                            Agrawal Properties shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising out of your access to, or use of, this website or your reliance on its content.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">6. Amendments</h2>
                        <p>
                            We reserve the right to revise these terms and conditions at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">7. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of Rajasthan, India, and you irrevocably submit to the exclusive jurisdiction of the courts in Jaipur.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
