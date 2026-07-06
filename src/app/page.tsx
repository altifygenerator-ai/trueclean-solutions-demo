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
import { beforeAfter, faqs, services, site } from "@/data/site";
import IntroLogo from "@/components/IntroLogo";
import GalleryPreview from "@/components/GalleryPreview";
import type { Metadata } from "next";
import { siteName, sitePhone, sitePhoneHref, siteUrl } from "@/lib/site";

const homeTitle = "Exterior Cleaning, Pressure Washing & Property Care in Lyons, GA";
const homeDescription =
  "TrueClean Solutions provides exterior cleaning, pressure washing, soft washing, equipment cleaning, minor repairs, turnover help, and property maintenance in Lyons, Vidalia, Toombs County, and South Georgia.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${homeTitle} | ${siteName}`,
    description: homeDescription,
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "/images/trueclean-og.png",
        width: 1200,
        height: 630,
        alt: "TrueClean Solutions exterior cleaning in Lyons, Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | ${siteName}`,
    description: homeDescription,
    images: ["/images/trueclean-og.png"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "CleaningService", "HomeAndConstructionBusiness"],
        "@id": `${siteUrl}/#business`,
        name: site.name,
        legalName: site.name,
        url: siteUrl,
        telephone: sitePhone,
        image: `${siteUrl}/images/trueclean-og.png`,
        logo: `${siteUrl}/images/trueclean-logo.jpg`,
        description: site.description,
        slogan: site.tagline,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lyons",
          addressRegion: "GA",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: sitePhoneHref.replace("tel:", ""),
          contactType: "customer service",
          areaServed: "South Georgia",
          availableLanguage: "English",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Lyons",
            containedInPlace: {
              "@type": "State",
              name: "Georgia",
            },
          },
          {
            "@type": "City",
            name: "Vidalia",
            containedInPlace: {
              "@type": "State",
              name: "Georgia",
            },
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
        knowsAbout: [
          "Exterior cleaning",
          "Pressure washing",
          "Soft washing",
          "House washing",
          "Spiderweb removal",
          "Concrete cleaning",
          "Sidewalk cleaning",
          "Storefront cleaning",
          "Equipment cleaning",
          "Minor repairs",
          "Move-out repairs",
          "Turnover services",
          "Property maintenance",
        ],
        serviceType: services.map((service) => service.title),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            provider: {
              "@id": `${siteUrl}/#business`,
            },
            areaServed: ["Lyons", "Vidalia", "Toombs County", "South Georgia"],
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: site.name,
        url: siteUrl,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: homeTitle,
        description: homeDescription,
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#business`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/trueclean-og.png`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#services-list`,
        name: "TrueClean Solutions Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            "@id": `${siteUrl}/#service-${index + 1}`,
            name: service.title,
            description: service.text,
            provider: {
              "@id": `${siteUrl}/#business`,
            },
            areaServed: ["Lyons", "Vidalia", "Toombs County", "South Georgia"],
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ImageGallery",
        "@id": `${siteUrl}/#before-after-gallery`,
        name: "TrueClean Solutions Before and After Work",
        image: beforeAfter.map((item) => `${siteUrl}${item.after}`),
        about: beforeAfter.map((item) => item.title),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
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
