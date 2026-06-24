import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";

export const metadata = {
  title: "Work Gallery | TrueClean Solutions",
  description:
    "View exterior cleaning work from TrueClean Solutions, including equipment cleaning, commercial washing, spiderweb removal, concrete cleaning, sidewalk cleaning, and house washing in South Georgia.",
};

const videos = [
  {
    title: "Equipment Cleaning Video",
    category: "Equipment",
    src: "/videos/equipment-cleaning-1.mp4",
    poster: "/images/video-thumb-equipment.jpg",
  },
{
    title: "Residential Pressure washing",
    category: "Residential",
    src: "/videos/residential-pressure-washing.mp4",
    poster: "/images/video-thumb-residential.jpg",
}
];
const images = [
  {
    title: "Equipment Cleaning",
    category: "Equipment",
    src: "/images/equipment-clean-pump.jpg",
    alt: "Heavy equipment cleaning by TrueClean Solutions",
  },
  {
    title: "Work Equipment Wash Down",
    category: "Equipment",
    src: "/images/equipment-clean-bay.jpg",
    alt: "Work equipment being washed by TrueClean Solutions",
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

export default function GalleryPage() {
  return (
    <main>
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