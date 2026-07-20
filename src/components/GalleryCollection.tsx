"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/data/site";

type GalleryCollectionProps = {
  items: GalleryItem[];
};

const allWork = "All Work";
const categoryOrder: Array<GalleryItem["category"]> = [
  "Residential",
  "Commercial",
  "Concrete",
  "Equipment",
  "Team",
  "Videos",
];

export default function GalleryCollection({ items }: GalleryCollectionProps) {
  const [activeCategory, setActiveCategory] = useState(allWork);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const categories = useMemo(() => {
    const available = new Set(items.map((item) => item.category));
    return [allWork, ...categoryOrder.filter((category) => available.has(category))];
  }, [items]);

  const filteredItems = useMemo(
    () =>
      activeCategory === allWork
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  const filteredImages = useMemo(
    () => filteredItems.filter((item) => item.type === "image"),
    [filteredItems],
  );

  const activeIndex = activeSrc
    ? filteredImages.findIndex((item) => item.src === activeSrc)
    : -1;
  const activeImage = activeIndex >= 0 ? filteredImages[activeIndex] : null;

  const closeLightbox = useCallback(() => setActiveSrc(null), []);

  const showPrevious = useCallback(() => {
    if (filteredImages.length < 2 || activeIndex < 0) return;
    const previousIndex =
      activeIndex === 0 ? filteredImages.length - 1 : activeIndex - 1;
    setActiveSrc(filteredImages[previousIndex].src);
  }, [activeIndex, filteredImages]);

  const showNext = useCallback(() => {
    if (filteredImages.length < 2 || activeIndex < 0) return;
    const nextIndex =
      activeIndex === filteredImages.length - 1 ? 0 : activeIndex + 1;
    setActiveSrc(filteredImages[nextIndex].src);
  }, [activeIndex, filteredImages]);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeLightbox, showNext, showPrevious]);

  return (
    <>
      <div className="gallery-controls">
        <div className="gallery-filter-buttons" aria-label="Filter work gallery">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter-button${
                activeCategory === category ? " is-active" : ""
              }`}
              aria-pressed={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                closeLightbox();
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="gallery-result-count" aria-live="polite">
          {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="gallery-page-grid gallery-complete-grid">
        {filteredItems.map((item) => (
          <article key={`${item.type}-${item.src}`} className="gallery-page-card">
            {item.type === "video" ? (
              <div className="gallery-card-video-wrap">
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="gallery-card-video"
                />
              </div>
            ) : (
              <button
                type="button"
                className="gallery-image-button"
                onClick={() => setActiveSrc(item.src)}
                aria-label={`View ${item.title}${
                  item.label ? ` ${item.label.toLowerCase()}` : ""
                } photo`}
              >
                <div className="gallery-page-image-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </div>
              </button>
            )}

            <div className="gallery-card-copy">
              <p>
                {item.category}
                {item.label ? <span>{item.label}</span> : null}
              </p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {activeImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} enlarged photo`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeLightbox();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close enlarged photo"
          >
            ×
          </button>

          {filteredImages.length > 1 ? (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-previous"
              onClick={showPrevious}
              aria-label="Previous photo"
            >
              ‹
            </button>
          ) : null}

          <div className="gallery-lightbox-inner">
            <div className="gallery-lightbox-image-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="96vw"
                className="gallery-lightbox-image"
                priority
              />
            </div>

            <div className="gallery-lightbox-caption">
              <div>
                <p>
                  {activeImage.category}
                  {activeImage.label ? <span>{activeImage.label}</span> : null}
                </p>
                <h2>{activeImage.title}</h2>
              </div>
              <small>
                {activeIndex + 1} of {filteredImages.length}
              </small>
            </div>
          </div>

          {filteredImages.length > 1 ? (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={showNext}
              aria-label="Next photo"
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
