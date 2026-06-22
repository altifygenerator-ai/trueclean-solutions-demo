export default function ResidentialCommercial() {
  return (
    <section className="section split-section">
      <div className="container split-card-grid">
        <article className="large-card home-card">
          <p className="section-kicker">Residential Cleaning</p>
          <h2>Clean exterior spaces around the home.</h2>
          <p>
            Cleaning for homes, porches, siding, walkways, entry areas, and
            exterior surfaces that need freshened up.
          </p>

          <ul>
            <li>House washing</li>
            <li>Spiderweb removal</li>
            <li>Porches and entry areas</li>
            <li>Walkways and concrete</li>
          </ul>
        </article>

        <article className="large-card business-card">
          <p className="section-kicker">Commercial Cleaning</p>
          <h2>Cleaner first impressions for local businesses.</h2>
          <p>
            Cleaning for storefronts, business entrances, sidewalks, commercial
            buildings, and customer-facing exterior areas.
          </p>

          <ul>
            <li>Storefront cleaning</li>
            <li>Business entryways</li>
            <li>Concrete and sidewalks</li>
            <li>Routine exterior cleaning</li>
          </ul>
        </article>
      </div>
    </section>
  );
}