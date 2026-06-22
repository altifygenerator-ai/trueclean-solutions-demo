import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <span>{site.tagline}</span>
          <span>{site.serviceArea}</span>
          <a href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </div>

      <div className="container header-main">
        <Link href="/" className="main-brand" aria-label="TrueClean Solutions home">
          <Image
            src="/images/trueclean-logo.jpg"
            alt="TrueClean Solutions logo"
            width={82}
            height={82}
            className="main-brand-logo"
            priority
          />

          <div>
            <strong>{site.name}</strong>
            <span>{site.location}</span>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href={site.phoneHref} className="header-phone">
            {site.phone}
          </a>
          <Link href="#quote" className="header-quote">
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}