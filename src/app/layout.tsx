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
    default: "TrueClean Solutions | Pressure Washing in Lyons, GA",
    template: "%s | TrueClean Solutions",
  },

  description:
    "Pressure washing, exterior cleaning, equipment cleaning, minor repairs, turnover services, and property care in Lyons, Vidalia, Toombs County, and South Georgia.",

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  verification: {
    google: "fYxdXJEy7PHpObyf25rm3wcY5xgB4h2N-rMbhSO1foo",
  },

  openGraph: {
    title: "TrueClean Solutions | Pressure Washing in Lyons, GA",
    description:
      "Pressure washing, exterior cleaning, equipment cleaning, minor repairs, turnover services, and property care in Lyons, Vidalia, Toombs County, and South Georgia.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/trueclean-og.png",
        width: 1200,
        height: 630,
        alt: "TrueClean Solutions pressure washing and exterior cleaning in Lyons, Georgia",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TrueClean Solutions | Pressure Washing in Lyons, GA",
    description:
      "Pressure washing, exterior cleaning, equipment cleaning, minor repairs, turnover services, and property care in Lyons, Vidalia, Toombs County, and South Georgia.",
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
