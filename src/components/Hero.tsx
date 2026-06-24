import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { site, trustItems } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/trueclean-hero2.jpg"
        alt="TrueClean Solutions trailer and exterior cleaning equipment"
        fill
        priority
        className="hero-image"
      />

      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="hero-water-effect" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
        

          <p className="eyebrow">{site.tagline}</p>

          <h1>Residential & Commercial Exterior Cleaning in South Georgia.</h1>

          <p className="hero-copy">{site.description}</p>

          <div className="hero-actions">
            <a href={site.phoneHref} className="btn btn-primary">
              Call {site.phone}
            </a>
            <Link href="#quote" className="btn btn-secondary">
              Request a Quote
            </Link>
          </div>

          <div className="hero-proof">
            <span>Family Owned</span>
            <span>Soft Washing</span>
            <span>Equipment Cleaning</span>
            <span>Lyons, Georgia</span>
          </div>
        </div>

        <QuoteForm />
      </div>

      <div className="trust-marquee" aria-label="TrueClean Solutions services">
        <div className="trust-track">
          {[...trustItems, ...trustItems].map((item, index) => (
            <span key={`${item}-${index}`} className="trust-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}