import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Inruuts | Personalized Hair Care", template: "%s" },
  description: "Build a personalized hair-care routine around your pattern, scalp, habits and goals.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Inruuts | Personalized Hair Care",
    description: "Personalized hair care, built around you.",
    images: [{ url: "/og-inruuts.png", width: 1200, height: 630, alt: "Inruuts personalized hair care" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inruuts | Personalized Hair Care",
    description: "Personalized hair care, built around you.",
    images: ["/og-inruuts.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
