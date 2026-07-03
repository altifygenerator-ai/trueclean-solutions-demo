import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link href="/" className="footer-brand">
            <Image
              src="/images/trueclean-logo.jpg"
              alt="TrueClean Solutions logo"
              width={62}
              height={62}
              className="footer-logo"
            />

            <div>
              <strong>{site.name}</strong>
              <span>{site.location}</span>
            </div>
          </Link>

          <p>
            Residential and commercial exterior cleaning, soft washing, house
            washing, spiderweb removal, storefront cleaning, and concrete
            cleaning across South Georgia.
          </p>

          <a href={site.phoneHref} className="footer-call">
            Call or Text {site.phone}
          </a>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <Link href="/#services">Soft Washing</Link>
          <Link href="/#services">House Washing</Link>
          <Link href="/#services">Spiderweb Removal</Link>
          <Link href="/#services">Concrete & Walkways</Link>
          <Link href="/#services">Commercial Cleaning</Link>
        </div>

        <div className="footer-col">
          <h3>Service Area</h3>
          <span>{site.serviceArea}</span>

          <a href={site.phoneHref} className="footer-area-call">
            {site.phone}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <p className="site-credit">
            Website by{" "}
            <a
              href="https://www.hometownwebservicesar.com"
              target="_blank"
              rel="noreferrer"
            >
              Hometown Web Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}