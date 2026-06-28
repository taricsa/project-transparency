function normalizeHost(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function withHttps(hostOrUrl: string): string {
  return `https://${normalizeHost(hostOrUrl)}`;
}

function resolvePublicSiteUrl(raw: string): string {
  const trimmed = raw.replace(/\/$/, "");
  return /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return resolvePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return withHttps(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  }

  if (process.env.VERCEL_URL) {
    return withHttps(process.env.VERCEL_URL);
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
