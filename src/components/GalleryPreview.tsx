import Image from "next/image";
import Link from "next/link";

const previewItems = [
  {
    type: "image",
    title: "Equipment Cleaning",
    category: "Equipment",
    src: "/images/equipment-clean-bay.jpg",
    alt: "Heavy equipment cleaning by TrueClean Solutions",
  },
  {
    type: "image",
    title: "Work Equipment Wash Down",
    category: "Equipment",
    src: "/images/equipment-clean-engine2.jpg",
    alt: "Work equipment being washed by TrueClean Solutions",
  },
  {
    type: "video",
    title: "Equipment Cleaning Video",
    category: "Video",
    src: "/videos/equipment-cleaning-1.mp4",
    poster: "/images/video-thumb-equipment.jpg",
    alt: "Equipment cleaning video by TrueClean Solutions",
  },
  {
    type: "image",
    title: "Commercial Building Washing",
    category: "Commercial",
    src: "/images/trueclean-after1.jpg",
    alt: "Commercial building after exterior cleaning",
  },
  {
    type: "image",
    title: "Sidewalk & Concrete Cleaning",
    category: "Concrete",
    src: "/images/trueclean-after2.jpg",
    alt: "Sidewalk after concrete cleaning",
  },
  {
    type: "image",
    title: "Spiderweb Removal",
    category: "Residential",
    src: "/images/house-after.jpg",
    alt: "Spiderwebs removed from home exterior",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section gallery-preview-section water-bg water-bg-right">
      <div className="container">
        <div className="split-heading">
          <div>
            <p className="section-kicker">Recent Work</p>
            <h2>Real cleaning results from the field.</h2>
          </div>

          <p>
            A look at equipment cleaning, commercial washing, concrete cleaning,
            spiderweb removal, and exterior cleaning work from TrueClean
            Solutions.
          </p>
        </div>

        <div className="gallery-preview-grid">
          {previewItems.map((item) => (
            <article key={item.src} className="gallery-preview-card">
              <div className="gallery-media-wrap">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    controls
                    className="gallery-video"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="gallery-image"
                  />
                )}

                <span>{item.category}</span>
              </div>

              <h3>{item.title}</h3>
            </article>
          ))}
        </div>

        <div className="gallery-preview-actions">
          <Link href="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}