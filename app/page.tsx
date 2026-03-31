import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmiCalculator from "@/components/EmiCalculator";
import PostProperty from "@/components/PostProperty";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {


  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Category Discovery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryCards />
        </div>
      </section>

      <FeaturedProperties />
      <Services />
      <WhyChooseUs />
      <EmiCalculator />
      <PostProperty />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
