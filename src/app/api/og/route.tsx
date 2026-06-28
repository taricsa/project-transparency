import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Project-Transparency";
  const metric = searchParams.get("metric") ?? "Open source guide";
  const page = searchParams.get("page") ?? "home";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#FDFBF7",
          color: "#2C3630",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#A3B899",
            }}
          />
          <p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>
            [Project-Transparency]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 900,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#D98A6C",
              margin: 0,
            }}
          >
            {metric}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#2C3630",
            opacity: 0.75,
          }}
        >
          <span>Canadian teen product safety · v1.0.0</span>
          <span>{page}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
