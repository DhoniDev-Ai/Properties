import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Agarwal Properties",
    description: "Privacy policy and data protection practices for Agarwal Properties Jaipur.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light" />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-[#0F172A] mb-8 tracking-tight">Privacy Policy</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                        <p className="font-medium text-slate-800">Last Updated: March 26, 2026</p>

                        <p>
                            At Agarwal Properties, reachable from Agarwalproperties.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Agarwal Properties and how we use it.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">1. Information We Collect</h2>
                        <p>
                            If you contact us directly via WhatsApp, phone, or email, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide, operate, and maintain our website.</li>
                            <li>To improve, personalize, and expand our website.</li>
                            <li>To understand and analyze how you use our website.</li>
                            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website.</li>
                            <li>To find and prevent fraud.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">3. Log Files</h2>
                        <p>
                            Agarwal Properties follows a standard procedure of using log files. These files log visitors when they visit websites. Every hosting company does this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">4. Third Party Privacy Policies</h2>
                        <p>
                            Agarwal Properties's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0F172A] pt-4">5. Contact Us</h2>
                        <p>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at aggrawalpropertys@gmail.com.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
