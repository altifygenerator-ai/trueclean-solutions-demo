import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="section services-section water-bg water-bg-right">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">What We Clean</p>
          <h2>Exterior cleaning services for homes and businesses.</h2>
          <p>
            From house washing and spiderweb removal to storefronts, walkways,
            and commercial properties, TrueClean Solutions helps keep exterior
            spaces clean and presentable.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}