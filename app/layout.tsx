import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    template: `%s | ${siteConfig.name}`,
    default:  `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  keywords: [
    "care services UK", "domiciliary care", "live-in care", "supported living",
    "complex care", "companionship care", "respite care", "home care",
    "regulated care", "care provider", "Badwi Care",
  ],
  openGraph: {
    type:        "website",
    locale:      "en_GB",
    url:         `https://${siteConfig.domain}`,
    siteName:    siteConfig.name,
    title:       `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logo.src,
        width: siteConfig.logo.width,
        height: siteConfig.logo.height,
        alt: siteConfig.logo.alt,
      },
    ],
  },
  twitter: {
    card:  "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.logo.src],
  },
  icons: {
    icon: "/badwi-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased font-sans" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
