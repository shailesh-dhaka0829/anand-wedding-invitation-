import { weddingData } from "../data/weddingData";

export default function Hero() {
  const { groom, bride, weddingDate, venue } = weddingData;

  // Google Calendar one-click add URL
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Wedding: Anand Dhaka & Suman"
  )}&dates=20261115T053000Z/20261115T103000Z&details=${encodeURIComponent(
    "Reception & Wedding of Anand Dhaka (RPr) and Suman (CHO)"
  )}&location=${encodeURIComponent(
    "145, Ashapurna Valley, Jhalamand, Jodhpur, Rajasthan"
  )}`;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #50121C 0%, #7D1F2E 65%, #3E0C15 100%)",
        color: "#FFF9EF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Royal Subtle Gold Background Mandala Motif */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(600px, 90vw)",
          height: "min(600px, 90vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Royal Card Frame */}
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          border: "2px solid rgba(201, 168, 76, 0.4)",
          borderRadius: "24px",
          background: "rgba(30, 6, 10, 0.45)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(201, 168, 76, 0.15)",
          position: "relative",
        }}
      >
        {/* Corner Ornaments */}
        <span style={{ position: "absolute", top: "10px", left: "15px", color: "#C9A84C", fontSize: "1rem" }}>❖</span>
        <span style={{ position: "absolute", top: "10px", right: "15px", color: "#C9A84C", fontSize: "1rem" }}>❖</span>
        <span style={{ position: "absolute", bottom: "10px", left: "15px", color: "#C9A84C", fontSize: "1rem" }}>❖</span>
        <span style={{ position: "absolute", bottom: "10px", right: "15px", color: "#C9A84C", fontSize: "1rem" }}>❖</span>

        {/* Auspicious Invocation */}
        <div style={{ marginBottom: "1.2rem" }}>
          <p
            style={{
              fontFamily: "'Rozha One', serif",
              fontSize: "clamp(1.1rem, 2.8vw, 1.6rem)",
              color: "#C9A84C",
              letterSpacing: "0.08em",
              marginBottom: "0.3rem",
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
              color: "rgba(255, 249, 239, 0.8)",
              letterSpacing: "0.05em",
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>
        </div>

        <div style={{ width: "80px", height: "1px", background: "#C9A84C", margin: "1.2rem auto", opacity: 0.6 }} />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Together With Their Families Cordially Invite You
        </p>

        {/* Couple Names in Grand Luxury Typography */}
        <div style={{ margin: "1rem 0" }}>
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
              color: "#FFF9EF",
              lineHeight: 1.1,
              textShadow: "0 2px 15px rgba(201, 168, 76, 0.4)",
              margin: 0,
            }}
          >
            {groom.name}
          </h1>

          <div
            style={{
              fontFamily: "'Alex Brush', cursive",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#C9A84C",
              margin: "0.2rem 0",
            }}
          >
            &
          </div>

          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
              color: "#FFF9EF",
              lineHeight: 1.1,
              textShadow: "0 2px 15px rgba(201, 168, 76, 0.4)",
              margin: 0,
            }}
          >
            {bride.name}
          </h1>
        </div>

        {/* Wedding Date Pill */}
        <div
          style={{
            display: "inline-block",
            margin: "2rem auto 1.5rem",
            padding: "0.7rem 1.8rem",
            background: "rgba(201, 168, 76, 0.12)",
            border: "1px solid #C9A84C",
            borderRadius: "50px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
              letterSpacing: "0.22em",
              color: "#FFF9EF",
              fontWeight: 600,
            }}
          >
            SUNDAY · 15 NOVEMBER 2026
          </div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#C9A84C",
              marginTop: "0.2rem",
            }}
          >
            11:00 AM · JODHPUR, RAJASTHAN
          </div>
        </div>

        {/* Buttons: Add to Calendar & View Events */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.75rem 1.6rem",
              background: "#C9A84C",
              color: "#4A0E17",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              fontWeight: 700,
              borderRadius: "30px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(201, 168, 76, 0.4)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📅 ADD TO GOOGLE CALENDAR
          </a>

          <a
            href="#events"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.75rem 1.6rem",
              background: "transparent",
              color: "#FFF9EF",
              border: "1px solid rgba(255, 249, 239, 0.4)",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              borderRadius: "30px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,249,239,0.1)";
              e.currentTarget.style.borderColor = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255, 249, 239, 0.4)";
            }}
          >
            VIEW CEREMONIES ↓
          </a>
        </div>
      </div>
    </section>
  );
}