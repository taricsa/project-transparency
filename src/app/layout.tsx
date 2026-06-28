import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: `${getSiteUrl()}/api/og?title=Project-Transparency&page=home&metric=Open%20source%20guide`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${dmSans.className} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
