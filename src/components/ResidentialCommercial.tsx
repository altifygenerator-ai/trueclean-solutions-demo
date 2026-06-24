export default function ResidentialCommercial() {
  return (
    <section className="section split-section">
      <div className="container split-card-grid">
        <article className="large-card home-card">
          <div className="large-card-content">
            <p className="section-kicker">Residential Cleaning</p>
            <h2>Clean exterior spaces around the home.</h2>
            <p>
              Cleaning for homes, porches, siding, walkways, entry areas, and
              exterior surfaces that need freshened up.
            </p>
          </div>

          <ul>
            <li>House washing</li>
            <li>Spiderweb removal</li>
            <li>Porches and entry areas</li>
            <li>Walkways and concrete</li>
          </ul>
        </article>

        <article className="large-card business-card">
          <div className="large-card-content">
            <p className="section-kicker">Commercial & Equipment</p>
            <h2>Cleaning for businesses and work equipment.</h2>
            <p>
              Cleaning for storefronts, business entrances, sidewalks,
              commercial buildings, heavy equipment, trailers, and
              customer-facing exterior areas.
            </p>
          </div>

          <ul>
            <li>Storefront cleaning</li>
            <li>Business entryways</li>
            <li>Concrete and sidewalks</li>
            <li>Equipment cleaning</li>
          </ul>
        </article>
      </div>
    </section>
  );
}