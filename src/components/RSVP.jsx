import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes, Joyfully Attending!");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  // Target WhatsApp phone number
  const whatsappNumber = "918619189005"; 

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
      className="py-20 px-4 bg-gradient-to-b from-[#F5ECE0] to-[#FFF9EF] text-center"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#7D1F2E] uppercase font-bold mb-2">
          Confirm Your Presence
        </p>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#7D1F2E] mb-2">
          RSVP &amp; Blessings
        </h2>

        <p className="font-sans-body text-xs sm:text-sm text-[#666] mb-8 max-w-md mx-auto">
          Please let us know if you will be able to join us in our celebrations.
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSendWhatsApp}
          className="bg-white border border-[#C9A84C]/40 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-4"
        >
          {/* Guest Name */}
          <div>
            <label className="block font-cinzel text-xs tracking-wider text-[#7D1F2E] font-bold mb-1">
              YOUR FULL NAME *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma &amp; Family"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#7D1F2E]/20 font-sans-body text-sm outline-none bg-[#FFFDF9] focus:border-[#C9A84C]"
            />
          </div>

          {/* Attendance Selection */}
          <div>
            <label className="block font-cinzel text-xs tracking-wider text-[#7D1F2E] font-bold mb-1">
              WILL YOU ATTEND?
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#7D1F2E]/20 font-sans-body text-sm outline-none bg-[#FFFDF9] focus:border-[#C9A84C]"
            >
              <option value="Yes, Joyfully Attending!">🎉 Yes, Joyfully Attending!</option>
              <option value="Attending with Family">👨‍👩‍👧 Attending with Family</option>
              <option value="Warm Wishes from Afar">🌸 Unable to attend, sending warm blessings</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block font-cinzel text-xs tracking-wider text-[#7D1F2E] font-bold mb-1">
              NUMBER OF GUESTS
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#7D1F2E]/20 font-sans-body text-sm outline-none bg-[#FFFDF9] focus:border-[#C9A84C]"
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3 to 5">3 - 5 Persons</option>
              <option value="Family (5+)">Entire Family (5+)</option>
            </select>
          </div>

          {/* Blessings Message */}
          <div>
            <label className="block font-cinzel text-xs tracking-wider text-[#7D1F2E] font-bold mb-1">
              MESSAGE OR BLESSINGS (OPTIONAL)
            </label>
            <textarea
              rows="3"
              placeholder="Write your heartfelt wishes for Anand &amp; Suman..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#7D1F2E]/20 font-sans-body text-sm outline-none bg-[#FFFDF9] focus:border-[#C9A84C] resize-vertical"
            />
          </div>

          {/* Contact Display */}
          <div className="text-center py-1">
            <span className="font-sans-body text-xs text-[#666]">
              RSVP Contact: <strong className="text-[#7D1F2E] font-bold">+91 86191 89005</strong>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-cinzel font-bold text-xs sm:text-sm tracking-widest shadow-lg hover:scale-102 active:scale-98 transition-transform cursor-pointer flex items-center justify-center gap-2"
          >
            <span>💬 SEND RSVP VIA WHATSAPP</span>
          </button>
        </form>
      </div>
    </section>
  );
}
