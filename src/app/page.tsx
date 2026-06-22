import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <ResidentialCommercial />
      <About />
      <ServiceArea />
      <FinalCTA />
      <Footer />
    </main>
  );
}