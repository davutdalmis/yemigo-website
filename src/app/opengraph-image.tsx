import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const alt = "YemiGO — Restoran Yönetim Platformu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #FAF5FF 0%, #ffffff 50%, #F3E8FF 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 42,
            fontWeight: 800,
            color: "#171717",
          }}
        >
          <span>Yemi</span>
          <span
            style={{
              background: "linear-gradient(135deg, #A855F7, #7C3AED)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            GO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              background: "rgba(168, 85, 247, 0.12)",
              borderRadius: 999,
              color: "#7C3AED",
              fontSize: 22,
              fontWeight: 600,
              alignSelf: "flex-start",
            }}
          >
            Restoran Yönetim Platformu
          </div>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#171717",
              margin: 0,
            }}
          >
            Restoranınızı{"\n"}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              tek platformdan
            </span>{" "}
            yönetin.
          </h1>
          <div
            style={{
              display: "flex",
              gap: 32,
              fontSize: 24,
              color: "#525252",
              fontWeight: 500,
            }}
          >
            <span>POS</span>
            <span style={{ color: "#A855F7" }}>•</span>
            <span>Kurye Takip</span>
            <span style={{ color: "#A855F7" }}>•</span>
            <span>Online Sipariş</span>
            <span style={{ color: "#A855F7" }}>•</span>
            <span>Entegrasyon</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
