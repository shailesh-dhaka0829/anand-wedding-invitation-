import { weddingData } from "../data/weddingData";

const C = {
  maroon: "#7D1F2E",
  cream: "#FFF8F0",
  gold: "#C9A84C",
};

export default function Venue() {
  const { venue } = weddingData;

  // Exact Google Maps location link provided by user
  const directionsUrl = "https://maps.app.goo.gl/TSsZfHpfaH37j4nPA?g_st=iw";

  return (
    <section id="venue" style={{ padding: "5rem 1.5rem", background: "#FFFFFF", textAlign: "center" }}>
      <p style={{ fontFamily: "Cinzel, serif", fontSize: "0.75rem", letterSpacing: "0.25em", color: C.maroon, marginBottom: "0.5rem" }}>
        CELEBRATION VENUE
      </p>
      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.maroon, marginBottom: "1rem" }}>
        {venue.name}
      </h2>
      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: "#555", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
        {venue.address}, {venue.city}
      </p>

      {/* Action Button */}
      <div style={{ marginBottom: "2.5rem" }}>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: C.maroon,
            color: C.cream,
            padding: "0.8rem 1.8rem",
            borderRadius: "30px",
            fontFamily: "Cinzel, serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(125,31,46,0.25)",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📍 GET DIRECTIONS ON GOOGLE MAPS
        </a>
      </div>

      {/* Map Embed Frame */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          border: `1px solid rgba(125,31,46,0.15)`,
          height: "380px",
        }}
      >
        <iframe
          title="Wedding Venue Location"
          src={"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3579.5912372242396!2d73.0522778!3d26.2099722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEyJzM1LjkiTiA3M8KwMDMnMDguMiJF!5e0!3m2!1sen!2sin!4v1793640223670!5m2!1sen!2sin"}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
