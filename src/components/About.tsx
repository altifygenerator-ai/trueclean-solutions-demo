import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <Image
            src="/images/trueclean-crew.jpg"
            alt="TrueClean Solutions local family owned cleaning business"
            fill
            className="about-image"
          />
        </div>

        <div className="about-content">
          <p className="section-kicker">Local & Family Owned</p>
          <h2>Local, family owned, and ready to work.</h2>

          <p>
            TrueClean Solutions is a local cleaning business based in Lyons,
            Georgia, serving homes and businesses across South Georgia.
          </p>

          <p>
            The work is hands-on, detail-focused, and built around helping
            properties look clean, cared for, and ready for customers, guests,
            and family.
          </p>

          <div className="about-stats">
            <div>
              <strong>Homes</strong>
              <span>House washing, porches, walkways, and exterior surfaces</span>
            </div>
            <div>
              <strong>Businesses</strong>
              <span>Storefronts, sidewalks, entries, and commercial exteriors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}