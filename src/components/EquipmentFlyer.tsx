import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function EquipmentFlyer() {
  return (
    <section className="section equipment-flyer-section water-bg water-bg-left">
      <div className="container equipment-flyer-card">
        <div className="equipment-flyer-copy">
          <p className="section-kicker">Heavy Equipment Cleaning</p>
          <h2>Dirt, grime, and buildup cleaned all the way down.</h2>
          <p>
            Work machines collect more than surface dirt. TrueClean Solutions
            helps clean heavy equipment, trailers, and jobsite machinery so it
            looks better, runs cleaner, and is easier to inspect and maintain.
          </p>

          <div className="equipment-flyer-points" aria-label="Equipment cleaning benefits">
            <span>Better performance</span>
            <span>Longer equipment life</span>
            <span>Maximum reliability</span>
          </div>

          <div className="equipment-flyer-actions">
            <a href={site.phoneHref} className="btn btn-primary">
              Call {site.phone}
            </a>
            <Link href="#quote" className="btn btn-secondary">
              Request Equipment Cleaning
            </Link>
          </div>
        </div>

        <div className="equipment-flyer-image-wrap">
          <Image
            src="/images/equipment-cleaning-flyer.png"
            alt="TrueClean Solutions flyer showing before and after heavy equipment cleaning results"
            width={1023}
            height={1537}
            className="equipment-flyer-image"
            sizes="(max-width: 980px) 100vw, 46vw"
          />
        </div>
      </div>
    </section>
  );
}
