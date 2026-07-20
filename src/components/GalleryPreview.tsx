import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/site";

const previewSources = [
  "/images/residential-brick-home-after.jpeg",
  "/images/residential-covered-patio-after.jpeg",
  "/images/residential-brick-chimney-after.jpeg",
  "/images/trueclean-after1.jpg",
  "/images/trueclean-after2.jpg",
  "/images/shovel-2.png",
];

const previewItems = previewSources.flatMap((src) => {
  const item = galleryItems.find((galleryItem) => galleryItem.src === src);
  return item ? [item] : [];
});

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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw"
                  className="gallery-image"
                />

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
