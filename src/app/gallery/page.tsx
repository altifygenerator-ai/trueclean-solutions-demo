import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryCollection from "@/components/GalleryCollection";
import Header from "@/components/Header";
import { galleryItems, site } from "@/data/site";
import { siteName, siteUrl } from "@/lib/site";

const galleryTitle = "Exterior Cleaning Work Gallery in Lyons & South Georgia";
const galleryDescription =
  "View exterior cleaning work from TrueClean Solutions, including house washing, porch and deck cleaning, equipment cleaning, commercial washing, concrete cleaning, and before-and-after results in Lyons, Vidalia, Toombs County, and South Georgia.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  keywords: [
    "TrueClean Solutions gallery",
    "exterior cleaning gallery Lyons GA",
    "pressure washing photos Lyons GA",
    "commercial washing photos Vidalia GA",
    "equipment cleaning photos South Georgia",
    "house washing before and after Lyons GA",
    "deck cleaning South Georgia",
    "concrete cleaning before and after Lyons GA",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `${galleryTitle} | ${siteName}`,
    description: galleryDescription,
    url: `${siteUrl}/gallery`,
    type: "website",
    images: [
      {
        url: "/images/trueclean-og.png",
        width: 1200,
        height: 630,
        alt: "TrueClean Solutions exterior cleaning gallery in South Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${galleryTitle} | ${siteName}`,
    description: galleryDescription,
    images: ["/images/trueclean-og.png"],
  },
};

const galleryImages = galleryItems.filter((item) => item.type === "image");
const galleryVideos = galleryItems.filter((item) => item.type === "video");

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/gallery#webpage`,
      url: `${siteUrl}/gallery`,
      name: galleryTitle,
      description: galleryDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#business`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/residential-brick-home-after.jpeg`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/gallery#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work Gallery",
          item: `${siteUrl}/gallery`,
        },
      ],
    },
    {
      "@type": "ImageGallery",
      "@id": `${siteUrl}/gallery#image-gallery`,
      name: "TrueClean Solutions Work Photos",
      image: galleryImages.map((image) => ({
        "@type": "ImageObject",
        name: `${image.title}${image.label ? ` - ${image.label}` : ""}`,
        caption: image.alt,
        contentUrl: `${siteUrl}${image.src}`,
        representativeOfPage: image.featured ?? false,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/gallery#media-list`,
      name: "TrueClean Solutions Gallery Media",
      numberOfItems: galleryItems.length,
      itemListElement: [
        ...galleryImages.map((image, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            name: `${image.title}${image.label ? ` - ${image.label}` : ""}`,
            caption: image.alt,
            contentUrl: `${siteUrl}${image.src}`,
          },
        })),
        ...galleryVideos.map((video, index) => ({
          "@type": "ListItem",
          position: galleryImages.length + index + 1,
          item: {
            "@type": "VideoObject",
            name: video.title,
            description: video.alt,
            thumbnailUrl: `${siteUrl}${video.poster}`,
            contentUrl: `${siteUrl}${video.src}`,
          },
        })),
      ],
    },
  ],
};

export default function GalleryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryStructuredData),
        }}
      />
      <Header />

      <section className="gallery-page-hero water-bg water-bg-center">
        <div className="container gallery-page-hero-inner">
          <p className="section-kicker">TrueClean Solutions Gallery</p>

          <h1>Exterior cleaning work across South Georgia.</h1>

          <p>
            Photos and videos from equipment cleaning, commercial washing,
            spiderweb removal, concrete cleaning, sidewalk cleaning, and house
            washing work.
          </p>

          <div className="gallery-page-actions">
            <a href={site.phoneHref} className="btn btn-primary">
              Call {site.phone}
            </a>

            <Link href="/#quote" className="btn btn-secondary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-page-section water-bg water-bg-right">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Work Gallery</p>
            <h2>Before, after, and jobsite photos.</h2>
            <p>
              A collection of work from homes, commercial properties,
              sidewalks, concrete areas, decks, and heavy equipment.
            </p>
          </div>

          <GalleryCollection items={galleryItems} />
        </div>
      </section>

      <section className="gallery-page-cta water-bg water-bg-center">
        <div className="container gallery-page-cta-inner">
          <p className="section-kicker">Need Exterior Cleaning?</p>

          <h2>Send over what needs cleaned.</h2>

          <p>
            Call, text, or send photos to get the quote process started with
            TrueClean Solutions.
          </p>

          <div className="gallery-page-actions">
            <a href={site.phoneHref} className="btn btn-primary">
              Call {site.phone}
            </a>

            <Link href="/#quote" className="btn btn-secondary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
