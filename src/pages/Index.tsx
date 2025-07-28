import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import TrackingCTA from "@/components/TrackingCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Industries />
        <TrackingCTA />
        <Testimonials />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
};

export default Index;