import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmiCalculator from "@/components/EmiCalculator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <Services />
      <WhyChooseUs />
      <EmiCalculator />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
