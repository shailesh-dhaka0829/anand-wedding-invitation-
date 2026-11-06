import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes, Joyfully Attending!");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  // Target WhatsApp phone number (replace with your family's number)
  const whatsappNumber = "919876543210"; 

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name!");
      return;
    }

    const text = `*Wedding RSVP & Blessings for Anand & Suman* 💍\n\n` +
      `*Guest Name:* ${name}\n` +
      `*Status:* ${attending}\n` +
      `*Number of Guests:* ${guests}\n` +
      (message ? `*Message / Blessings:* ${message}\n` : "") +
      `\n_Sent via Wedding Invitation Card_`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #F5ECE0 0%, #FFF9EF 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>
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
          Confirm Your Presence
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#7D1F2E",
            marginBottom: "1rem",
          }}
        >
          RSVP & Blessings
        </h2>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.88rem",
            color: "#666",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
          }}
        >
          Please let us know if you will be able to join us in our celebrations.
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSendWhatsApp}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(201, 168, 76, 0.4)",
            borderRadius: "20px",
            padding: "2.5rem 1.8rem",
            boxShadow: "0 10px 30px rgba(125, 31, 46, 0.08)",
            textAlign: "left",
          }}
        >
          {/* Guest Name */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#7D1F2E",
                marginBottom: "0.4rem",
              }}
            >
              YOUR FULL NAME *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma & Family"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "10px",
                border: "1px solid rgba(125, 31, 46, 0.2)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: "#FFFDF9",
              }}
            />
          </div>

          {/* Attendance Selection */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#7D1F2E",
                marginBottom: "0.4rem",
              }}
            >
              WILL YOU ATTEND?
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "10px",
                border: "1px solid rgba(125, 31, 46, 0.2)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: "#FFFDF9",
              }}
            >
              <option value="Yes, Joyfully Attending!">🎉 Yes, Joyfully Attending!</option>
              <option value="Attending with Family">👨‍👩‍👧 Attending with Family</option>
              <option value="Warm Wishes from Afar">🌸 Unable to attend, sending warm blessings</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#7D1F2E",
                marginBottom: "0.4rem",
              }}
            >
              NUMBER OF GUESTS
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "10px",
                border: "1px solid rgba(125, 31, 46, 0.2)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: "#FFFDF9",
              }}
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3 to 5">3 - 5 Persons</option>
              <option value="Family (5+)">Entire Family (5+)</option>
            </select>
          </div>

          {/* Blessings Message */}
          <div style={{ marginBottom: "1.8rem" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#7D1F2E",
                marginBottom: "0.4rem",
              }}
            >
              MESSAGE OR BLESSINGS (OPTIONAL)
            </label>
            <textarea
              rows="3"
              placeholder="Write your heartfelt wishes for the couple..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "10px",
                border: "1px solid rgba(125, 31, 46, 0.2)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: "#FFFDF9",
                resize: "vertical",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "#FFFFFF",
              border: "none",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span>💬 SEND RSVP VIA WHATSAPP</span>
          </button>
        </form>
      </div>
    </section>
  );
}