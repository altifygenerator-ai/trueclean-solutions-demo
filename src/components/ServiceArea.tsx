import { site } from "@/data/site";

export default function ServiceArea() {
  return (
    <section className="service-area-section">
      <div className="container service-area-card">
        <p className="section-kicker">Service Area</p>
        <h2>{site.serviceArea}</h2>
        <p>
          Based out of Lyons, Georgia, TrueClean Solutions provides residential
          and commercial exterior cleaning across the surrounding South Georgia
          area.
        </p>
      </div>
    </section>
  );
}