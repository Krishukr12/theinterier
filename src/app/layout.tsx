import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { brand } from "@/content/site";
import { absoluteUrl, getSiteUrl, pageTitle } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: pageTitle(),
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "The Interier",
    "interior design platform India",
    "interior firms Bengaluru",
    "find interior designer",
    "interior project enquiry",
  ],
  icons: {
    icon: "/brand/the-interier-logo.svg",
    apple: "/brand/the-interier-logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName: brand.name,
    title: pageTitle(),
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle(),
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: absoluteUrl("/"),
    description: brand.description,
    slogan: brand.tagline,
    logo: absoluteUrl("/brand/the-interier-logo.svg"),
    areaServed: "IN",
  };

  return (
    <html lang="en-IN">
      <body className={`${manrope.variable} ${fraunces.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
