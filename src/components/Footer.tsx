import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <Image
              src="/images/trueclean-logo.png"
              alt="TrueClean Solutions logo"
              width={58}
              height={58}
              className="footer-logo"
            />
            <div>
              <strong>{site.name}</strong>
              <span>{site.location}</span>
            </div>
          </Link>

          <p>
            Soft washing, house washing, spiderweb removal, storefront cleaning,
            concrete cleaning, and exterior cleaning for homes and businesses
            across South Georgia.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <a href="#services">Soft Washing</a>
          <a href="#services">House Washing</a>
          <a href="#services">Spiderweb Removal</a>
          <a href="#services">Commercial Cleaning</a>
        </div>

        <div>
          <h3>Contact</h3>
          <a href={site.phoneHref}>{site.phone}</a>
          <span>{site.serviceArea}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TrueClean Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}