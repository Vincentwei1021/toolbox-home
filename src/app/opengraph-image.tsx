import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Toolbox Lite — Free AI-Powered Online Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          color: "#fafafa",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -2, display: "flex", alignItems: "center", gap: 16 }}>
          <span>⚡</span>
          <span>Toolbox Lite</span>
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 16 }}>
          14+ Free AI-Powered Online Tools
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", justifyContent: "center", maxWidth: 800 }}>
          {["🔲 QR Forge", "✉️ MailCheck", "📄 SummarizeIt", "📸 ScreenSnap", "📑 PDFPull", "🌍 TranslateNow", "🌐 IP Geek"].map((t) => (
            <div
              key={t}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 18,
                color: "#e2e8f0",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 18, color: "#64748b", marginTop: 24 }}>
          toolboxlite.com
        </div>
      </div>
    ),
    { ...size }
  );
}
