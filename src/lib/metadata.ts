import type { Metadata } from "next";
import type { PageMeta } from "@/lib/types";

const SITE_NAME = "[Project-Transparency]";

export function buildPageMetadata(page: PageMeta): Metadata {
  const ogParams = new URLSearchParams({
    title: page.ogTitle,
    page: page.path.replace("/", "") || "home",
  });

  if (page.ogMetric) {
    ogParams.set("metric", page.ogMetric);
  }

  const ogImage = `/api/og?${ogParams.toString()}`;

  return {
    title: `${page.title} | ${SITE_NAME}`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  };
}

export const siteConfig = {
  name: SITE_NAME,
  description:
    "An open-source, mobile-first educational platform for Canadian teens navigating menstrual product safety.",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/science", label: "Science" },
    { href: "/regulations", label: "Regulations" },
    { href: "/guide", label: "Guide" },
  ],
};

export const homePageMeta: PageMeta = {
  title: "Home & Lexicon",
  description:
    "Peer-to-peer guide for Canadian teens — understand pads, pods, cups, and what product contact means for your body.",
  ogTitle: "Pad/Pod Lexicon",
  ogMetric: "11,000–17,000 products",
  path: "/",
};
