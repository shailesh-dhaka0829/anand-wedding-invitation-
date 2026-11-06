import { useState, useEffect } from "react";

const C = { maroon: "#7D1F2E", gold: "#C9A84C", cream: "#FFF8F0" };

const links = [
  { label: "Home",       href: "#home" },
  { label: "Ceremonies", href: "#events" },
  { label: "Venue",      href: "#venue" },
  { label: "Moments",    href: "#gallery" },
  { label: "RSVP",       href: "#rsvp" },
  { label: "Family",     href: "#family" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      padding: scrolled ? "0.6rem 2rem" : "1rem 2rem",
      background: scrolled ? "rgba(125,31,46,0.97)" : "rgba(125,31,46,0.15)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "none",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.4s ease",
    }}>
      {/* Logo */}
      <div style={{ fontFamily: "Great Vibes, cursive", fontSize: "1.6rem", color: C.cream, letterSpacing: "0.02em" }}>
        Anand & Suman
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
        {links.map(link => (
          <a key={link.label} href={link.href} style={{
            fontFamily: "Cinzel, serif", fontSize: "0.65rem",
            letterSpacing: "0.18em", color: "rgba(255,248,240,0.85)",
            textDecoration: "none", transition: "color 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,248,240,0.85)")}
          onClick={() => setMenuOpen(false)}
          >
            {link.label.toUpperCase()}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
        className="hamburger"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <div key={i} style={{ width: "22px", height: "2px", background: C.cream, borderRadius: "2px",
            transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "opacity:0") : "none",
            opacity: menuOpen && i === 1 ? 0 : 1,
            transition: "all 0.3s",
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(125,31,46,0.98)", backdropFilter: "blur(12px)",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}>
          {links.map(link => (
            <a key={link.label} href={link.href}
              style={{ fontFamily: "Cinzel, serif", fontSize: "0.72rem", letterSpacing: "0.18em", color: C.cream, textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}