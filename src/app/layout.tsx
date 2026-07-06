import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteName, siteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,
  referrer: "origin-when-cross-origin",

  title: {
    default: "TrueClean Solutions | Exterior Cleaning in Lyons, GA",
    template: "%s | TrueClean Solutions",
  },

  description:
    "TrueClean Solutions provides exterior cleaning, pressure washing, soft washing, house washing, spiderweb removal, sidewalk and concrete cleaning, equipment cleaning, storefront cleaning, minor repairs, turnover services, property maintenance, and commercial washing in Lyons, Vidalia, Toombs County, and South Georgia.",

  keywords: [
    "TrueClean Solutions",
    "TrueClean Solutions Lyons GA",
    "exterior cleaning Lyons GA",
    "exterior cleaning Vidalia GA",
    "exterior cleaning Toombs County GA",
    "pressure washing Lyons GA",
    "pressure washing Vidalia GA",
    "pressure washing Toombs County GA",
    "soft washing Lyons GA",
    "soft washing Vidalia GA",
    "house washing Lyons GA",
    "house washing Vidalia GA",
    "concrete cleaning Lyons GA",
    "concrete cleaning Vidalia GA",
    "sidewalk cleaning Lyons GA",
    "storefront cleaning Lyons GA",
    "commercial pressure washing Lyons GA",
    "commercial exterior cleaning Vidalia GA",
    "spiderweb removal Lyons GA",
    "equipment cleaning Lyons GA",
    "heavy equipment cleaning Georgia",
    "logging equipment cleaning Georgia",
    "minor repairs Lyons GA",
    "move out repairs Lyons GA",
    "turnover services Lyons GA",
    "property maintenance Lyons GA",
    "property maintenance Vidalia GA",
    "commercial washing South Georgia",
    "commercial exterior cleaning South Georgia",
    "residential exterior cleaning South Georgia",
    "Toombs County exterior cleaning",
    "South Georgia exterior cleaning",
  ],

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  verification: {
    google: "fYxdXJEy7PHpObyf25rm3wcY5xgB4h2N-rMbhSO1foo",
  },

  openGraph: {
    title: "TrueClean Solutions | Exterior Cleaning in Lyons, GA",
    description:
      "Exterior cleaning, pressure washing, soft washing, house washing, spiderweb removal, sidewalk and concrete cleaning, equipment cleaning, minor repairs, turnover services, property maintenance, storefront cleaning, and commercial washing for homes and businesses across South Georgia.",
    url: siteUrl,
    siteName,
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
      "Residential and commercial exterior cleaning, pressure washing, soft washing, house washing, concrete cleaning, equipment cleaning, minor repairs, turnover services, property maintenance, storefront cleaning, and spiderweb removal across South Georgia.",
    images: ["/images/trueclean-og.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Exterior Cleaning",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
