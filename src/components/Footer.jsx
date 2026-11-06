const C = {
  maroon: "#7D1F2E",
  cream: "#FFF8F0",
  pgreen: "#8FBC8F",
  ppink: "#F4A7B9",
  gold: "#C9A84C",
};

export default function Footer() {
  return (
    <footer
      style={{
        padding: "4rem 1.5rem 3rem",
        background: "#1A060A",
        textAlign: "center",
        color: C.cream,
        position: "relative",
      }}
    >
      {/* Royal Gradient Divider */}
      <div
        style={{
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          marginBottom: "2.5rem",
        }}
      />

      {/* Couple Name */}
      <div
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
          color: C.cream,
          marginBottom: "0.4rem",
        }}
      >
        Anand &amp; Suman
      </div>

      {/* Wedding Date */}
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          color: C.gold,
          marginBottom: "2rem",
        }}
      >
        15 · NOVEMBER · 2026 · JODHPUR
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
        <span style={{ color: C.ppink, fontSize: "1.2rem" }}>🪷</span>
        <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
      </div>

      {/* 💻 Developer Credit Badge */}
      <div
        style={{
          display: "inline-block",
          padding: "0.6rem 1.5rem",
          borderRadius: "30px",
          background: "rgba(255, 248, 240, 0.05)",
          border: "1px solid rgba(201, 168, 76, 0.25)",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "rgba(255, 248, 240, 0.8)",
            margin: 0,
          }}
        >
          Designed &amp; Developed by{" "}
          <span style={{ color: C.gold, fontWeight: 600 }}>Shailesh Dhaka</span>
        </p>
      </div>

      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          color: "rgba(255,248,240,0.3)",
          marginTop: "0.5rem",
        }}
      >
        CELEBRATING LOVE &amp; TOGETHERNESS · 2026
      </p>
    </footer>
  );
}