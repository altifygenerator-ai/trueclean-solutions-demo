import Link from "next/link";
import { site } from "@/data/site";

export default function FinalCTA() {
  return (
    <section id="quote" className="final-cta">
      <div className="container final-cta-inner">
        <p className="section-kicker">Request a Quote</p>
        <h2>Need exterior cleaning?</h2>
        <p>
          Call TrueClean Solutions or send a few photos of what needs cleaned to
          get started.
        </p>

        <div className="final-actions">
          <a href={site.phoneHref} className="btn btn-primary">
            Call {site.phone}
          </a>
          <Link href="#before-after" className="btn btn-secondary">
            View Before & After
          </Link>
        </div>
      </div>
    </section>
  );
}