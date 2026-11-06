export default function Family() {
  return (
    <section
      id="family"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #FFF9EF 0%, #F5ECE0 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            color: "#7D1F2E",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          With The Blessings Of Elders
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#7D1F2E",
            marginBottom: "2rem",
          }}
        >
          Family & Well Wishers
        </h2>

        {/* Royal Parchment Card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "2px solid rgba(201, 168, 76, 0.4)",
            borderRadius: "24px",
            padding: "3rem 2rem",
            boxShadow: "0 15px 40px rgba(125, 31, 46, 0.08)",
            position: "relative",
          }}
        >
          {/* Top Traditional Motif */}
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🪷</div>

          <p
            style={{
              fontFamily: "'Rozha One', serif",
              fontSize: "1.2rem",
              color: "#C9A84C",
              marginBottom: "1rem",
            }}
          >
            दर्शनाभिलाषी एवं स्वागतकर्ता
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              lineHeight: "1.6",
            }}
          >
            "Your gracious presence and heartfelt blessings on this auspicious occasion will make our joy complete."
          </p>

          <div
            style={{
              width: "80px",
              height: "1px",
              background: "#C9A84C",
              margin: "1.5rem auto",
              opacity: 0.6,
            }}
          />

          {/* Parents Card */}
          <div style={{ marginTop: "1.5rem" }}>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "#7D1F2E",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Proud Parents
            </p>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 3.2vw, 1.8rem)",
                color: "#7D1F2E",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Smt. Mala Dhaka &amp; Shri Vishnu Dutt Dhaka
            </h3>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                color: "#888",
                marginTop: "0.4rem",
              }}
            >
              &amp; Entire Dhaka Family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}