import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = "https://truecleansolutionsga.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TrueClean Solutions | Exterior Cleaning in Lyons, GA",
    template: "%s | TrueClean Solutions",
  },

  description:
    "TrueClean Solutions provides soft washing, house washing, spiderweb removal, storefront cleaning, concrete cleaning, and exterior cleaning for homes and businesses in Lyons, Vidalia, Toombs County, and South Georgia.",

  keywords: [
    "TrueClean Solutions",
    "exterior cleaning Lyons GA",
    "soft washing Lyons GA",
    "house washing Lyons GA",
    "pressure washing Lyons GA",
    "concrete cleaning Lyons GA",
    "storefront cleaning Lyons GA",
    "spiderweb removal Lyons GA",
    "commercial exterior cleaning South Georgia",
    "residential exterior cleaning South Georgia",
    "soft washing Vidalia GA",
    "pressure washing Vidalia GA",
    "Toombs County exterior cleaning",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "TrueClean Solutions | Exterior Cleaning in Lyons, GA",
    description:
      "Soft washing, house washing, spiderweb removal, storefront cleaning, concrete cleaning, and exterior cleaning for homes and businesses across South Georgia.",
    url: siteUrl,
    siteName: "TrueClean Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/trueclean-og.png",
        width: 1200,
        height: 630,
        alt: "TrueClean Solutions exterior cleaning in Lyons, Georgia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TrueClean Solutions | Exterior Cleaning in Lyons, GA",
    description:
      "Residential and commercial exterior cleaning, soft washing, house washing, concrete cleaning, and storefront cleaning across South Georgia.",
    images: ["/images/trueclean-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}