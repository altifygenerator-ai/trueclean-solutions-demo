import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import { services, site } from "@/data/site";
import IntroLogo from "@/components/IntroLogo";
import GalleryPreview from "@/components/GalleryPreview";
const siteUrl = "https://truecleansolutionsga.com";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    name: site.name,
    url: siteUrl,
    telephone: site.phone,
    image: `${siteUrl}/images/trueclean-og.png`,
    logo: `${siteUrl}/images/trueclean-logo.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyons",
      addressRegion: "GA",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Lyons",
      },
      {
        "@type": "City",
        name: "Vidalia",
      },
      {
        "@type": "AdministrativeArea",
        name: "Toombs County",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Georgia",
      },
    ],
    serviceType: services.map((service) => service.title),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main>
        <IntroLogo />
        <Header />
        <Hero />
        <Services />
      <BeforeAfter />
<GalleryPreview />
<ResidentialCommercial />
        <About />
        <FAQ />
        <ServiceArea />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}