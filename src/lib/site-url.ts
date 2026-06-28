function normalizeUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `https://${normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL)}`;
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${normalizeUrl(process.env.VERCEL_URL)}`;
  }

  return "http://localhost:3000";
}

export function buildOgImagePath(params: {
  title: string;
  page: string;
  metric?: string;
}): string {
  const searchParams = new URLSearchParams({
    title: params.title,
    page: params.page,
  });

  if (params.metric) {
    searchParams.set("metric", params.metric);
  }

  return `/api/og?${searchParams.toString()}`;
}
