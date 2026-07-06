import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

const galleryTitle = "Exterior Cleaning Work Gallery in Lyons & South Georgia";
const galleryDescription =
  "View exterior cleaning work from TrueClean Solutions, including equipment cleaning, commercial washing, spiderweb removal, concrete cleaning, sidewalk cleaning, and house washing in Lyons, Vidalia, Toombs County, and South Georgia.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  keywords: [
    "TrueClean Solutions gallery",
    "exterior cleaning gallery Lyons GA",
    "pressure washing photos Lyons GA",
    "commercial washing photos Vidalia GA",
    "equipment cleaning photos South Georgia",
    "spiderweb removal Lyons GA",
    "concrete cleaning before and after Lyons GA",
    "sidewalk cleaning South Georgia",
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

const videos = [
  {
    title: "Equipment Cleaning Video",
    category: "Equipment",
    src: "/videos/equipment-cleaning-1.mp4",
    poster: "/images/shovel-1.png",
  },
  {
    title: "Residential Pressure washing",
    category: "Residential",
    src: "/videos/residential-pressure-washing.mp4",
    poster: "/images/trueclean-before2.jpg",
  },
];

const images = [
  {
    title: "Equipment Cleaning",
    category: "Equipment",
    src: "/images/shovel-2.png",
    alt: "Excavator equipment cleaning by TrueClean Solutions",
  },
  {
    title: "Equipment Exterior Cleaning",
    category: "Equipment",
    src: "/images/shovel-1.png",
    alt: "Heavy equipment exterior cleaning and property maintenance support",
  },
  {
    title: "Engine Bay Cleaning",
    category: "Equipment",
    src: "/images/shovel-engine.jpeg",
    alt: "Clean heavy equipment engine bay",
  },
  {
    title: "Pump & Engine Area",
    category: "Equipment",
    src: "/images/shovel-pump-engine.jpeg",
    alt: "Heavy equipment pump and engine area cleaning",
  },
  {
    title: "Cab Interior Cleaning",
    category: "Equipment",
    src: "/images/shovel-cab.jpeg",
    alt: "Heavy equipment cab interior cleaning",
  },
  {
    title: "Side Bay Cleaning",
    category: "Equipment",
    src: "/images/shovel-bay.jpeg",
    alt: "Heavy equipment side bay cleaned by TrueClean Solutions",
  },
  {
    title: "Pump Area Cleaning",
    category: "Equipment",
    src: "/images/shovel-pump.jpeg",
    alt: "Heavy equipment pump area cleaned by TrueClean Solutions",
  },
  {
    title: "Commercial Building Washing",
    category: "Commercial",
    src: "/images/trueclean-before1.jpg",
    alt: "Commercial building before exterior cleaning",
  },
  {
    title: "Commercial Building After",
    category: "Commercial",
    src: "/images/trueclean-after1.jpg",
    alt: "Commercial building after exterior cleaning",
  },
  {
    title: "Sidewalk Cleaning Before",
    category: "Concrete",
    src: "/images/trueclean-before2.jpg",
    alt: "Sidewalk before concrete cleaning",
  },
  {
    title: "Sidewalk Cleaning After",
    category: "Concrete",
    src: "/images/trueclean-after2.jpg",
    alt: "Sidewalk after concrete cleaning",
  },
  {
    title: "Spiderweb Removal Before",
    category: "Residential",
    src: "/images/house-before.jpg",
    alt: "Spiderweb buildup before exterior cleaning",
  },
  {
    title: "Spiderweb Removal After",
    category: "Residential",
    src: "/images/house-after.jpg",
    alt: "Spiderwebs removed from home exterior",
  },
];

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
        url: `${siteUrl}/images/trueclean-og.png`,
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
      image: images.map((image) => ({
        "@type": "ImageObject",
        name: image.title,
        caption: image.alt,
        contentUrl: `${siteUrl}${image.src}`,
        representativeOfPage: false,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/gallery#media-list`,
      name: "TrueClean Solutions Gallery Media",
      itemListElement: [
        ...images.map((image, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            name: image.title,
            caption: image.alt,
            contentUrl: `${siteUrl}${image.src}`,
          },
        })),
        ...videos.map((video, index) => ({
          "@type": "ListItem",
          position: images.length + index + 1,
          item: {
            "@type": "VideoObject",
            name: video.title,
            description: `${video.title} by TrueClean Solutions in South Georgia.`,
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

      <section className="section gallery-video-section water-bg water-bg-left">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Cleaning Videos</p>
            <h2>See the work in motion.</h2>
            <p>
              Short clips showing the cleaning process, water action, and real
              jobsite work from TrueClean Solutions.
            </p>
          </div>

          <div className="gallery-video-grid">
            {videos.map((video) => (
              <article key={video.src} className="gallery-video-card">
                <video
                  src={video.src}
                  poster={video.poster}
                  muted
                  loop
                  playsInline
                  controls
                  className="gallery-video"
                />

                <div className="gallery-video-content">
                  <span>{video.category}</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-page-section water-bg water-bg-right">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Work Photos</p>
            <h2>Before, after, and jobsite photos.</h2>
            <p>
              A collection of work images from homes, commercial properties,
              sidewalks, concrete areas, and equipment cleaning.
            </p>
          </div>

          <div className="gallery-page-grid">
            {images.map((item) => (
              <article key={item.src} className="gallery-page-card">
                <div className="gallery-page-image-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="gallery-image"
                  />

                  <span>{item.category}</span>
                </div>

                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
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
