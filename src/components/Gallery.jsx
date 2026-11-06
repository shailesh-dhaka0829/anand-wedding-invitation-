const galleryItems = [
  {
    title: "The Auspicious Beginning",
    subtitle: "Two souls, one sacred journey",
    image: "/images/photo1.jpeg", // your photo 1
  },
  {
    title: "Together Forever",
    subtitle: "Hand in hand towards tomorrow",
    image: "/images/photo2.jpeg", // your photo 2
  },
  {
    title: "Cherished Moments",
    subtitle: "Surrounded by love and blessings",
    image: "/images/photo3.jpeg", // your photo 3
  },
];
export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "6rem 1.5rem",
        background: "#FFF9EF",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        {/* Header */}
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
          Cherished Moments
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#7D1F2E",
            marginBottom: "1rem",
          }}
        >
          Glimpses of Love
        </h2>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: "#C9A84C",
            margin: "0 auto 3rem",
          }}
        />

        {/* 3-Photo Royal Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid rgba(201, 168, 76, 0.4)",
                boxShadow: "0 10px 25px rgba(125, 31, 46, 0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(125, 31, 46, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(125, 31, 46, 0.08)";
              }}
            >
              {/* Photo Frame */}
              <div style={{ height: "320px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Caption */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    color: "#7D1F2E",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    color: "#777",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}