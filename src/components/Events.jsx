import { useState } from "react";

const eventsList = [
    {
    id: "dhratpaan",
    number: "1",
    name: "Ghratpaan",
    hindiName: "घृतपान",
    date: "Thursday, 12th Nov 2026",
    time: "7:15 PM",
    icon: "🪔",
    venue: "145, Ashapurna Valley, Jhalamand, Jodhpur",
    image: "/images/ghratpaan.jpg",
    description: "The sacred pre-wedding ritual invoking ancestral blessings, prosperity, and joyous family beginnings.",
  },
    {
    id: "bandoli",
    number: "2",
    name: "Bandoli & Sangeet",
    hindiName: "बिन्दोली एवं संगीत",
    date: "Friday, 13th Nov 2026",
    time: "7:15 PM",
    icon: "🥁",
    venue: "145, Ashapurna Valley, Jhalamand, Jodhpur",
    image: "https://images.squarespace-cdn.com/content/v1/614d2b3f6bb36e4e7402ba67/53a008ef-32fb-43b2-ae30-6985ff9d5a87/The+couples+dance+at+a+Sangeet",
    description: "Joyous musical night, couple dance, and celebrations with near and dear ones.",
  },
     {
    id: "baraat",
    number: "3",
    name: "Baraat Prasthan",
    hindiName: "बारात प्रस्थान",
    date: "Saturday, 14th Nov 2026",
    time: "7:30 PM",
    icon: "🐎",
    venue: "145, Ashapurna Valley, Jhalamand, Jodhpur",
    image: "https://i.pinimg.com/736x/0f/5c/a5/0f5ca5c1748a774be40b8adee004f19f.jpg",
    description: "The royal wedding procession accompanied by band, fanfare, and celebratory enthusiasm.",
  },
    {
    id: "reception",
    number: "4",
    name: "Reception & Blessings",
    hindiName: "प्रतिभोज",
    date: "Sunday, 15th Nov 2026",
    time: "11:00 AM",
    icon: "🍽️",
    venue: "145, Ashapurna Valley, Jhalamand, Jodhpur",
    image: "/images/reception.jpg",
    description: "Grand celebration feast and warm gathering to welcome and bless the newlyweds Anand & Suman.",
  },
   {
    id: "maayra",
    number: "5",
    name: "Maayra",
    hindiName: "मायरा",
    date: "Sunday, 15th Nov 2026",
    time: "4:00 PM",
    icon: "🪙",
    venue: "145, Ashapurna Valley, Jhalamand, Jodhpur",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    description: "Traditional Maayra ritual celebrating family love and blessings.",
  },
];

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = eventsList[activeIndex];

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % eventsList.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev - 1 + eventsList.length) % eventsList.length);
  };

  return (
    <section
      id="events"
      className="relative py-16 sm:py-24 px-4 bg-gradient-to-b from-[#42131E] via-[#5C1A27] to-[#42131E] text-[#FFF9EF] overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* Section Header (Exact to Screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
            <span>✨</span>
            <span className="text-[10px] sm:text-xs uppercase font-sans-body tracking-[0.25em] font-bold">
              WEDDING CELEBRATION PROGRAMME
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 tracking-tight">
            Events &amp; Ceremonies
          </h2>
          <p className="text-xs sm:text-sm font-cormorant italic text-[#FFF9EF]/80">
            Interactive programme of all wedding dates, timings &amp; venues.
          </p>
        </div>

        {/* 🏷️ Horizontal Category Tabs (Exact to Screenshot) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar justify-start sm:justify-center">
          {eventsList.map((ev, index) => (
            <button
              key={ev.id}
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans-body font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B5965A] text-[#291C1A] shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-amber-200"
                  : "bg-black/30 text-[#FFF9EF]/80 border border-white/10 hover:border-[#B5965A]/40"
              }`}
            >
              <span>{ev.icon}</span>
              <span>{ev.name}</span>
            </button>
          ))}
        </div>

        {/* 🖼️ Main Carousel Card */}
        <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black/60 aspect-[4/5] sm:aspect-[16/11]">
          
          {/* Background Image */}
          <img
            src={activeEvent.image}
            alt={activeEvent.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Top Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/50 text-[10px] font-cinzel text-amber-200 tracking-widest uppercase">
              #ANANDWEDSSUMAN
            </span>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevEvent}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            aria-label="Previous Ceremony"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextEvent}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            aria-label="Next Ceremony"
          >
            ›
          </button>

          {/* Bottom Event Information Overlay Box (Exact to Screenshot) */}
          <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2">
            
            {/* Maroon Ceremony Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#6E1F2E] border border-[#D4AF37]/50 text-[#FFF9EF] text-xs sm:text-sm font-sans-body font-bold shadow-md">
              <span>{activeEvent.number} • {activeEvent.name.toUpperCase()} ({activeEvent.hindiName})</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/90 font-sans-body leading-relaxed max-w-xl">
              {activeEvent.description}
            </p>

            {/* Date, Time & Venue Bar */}
            <div className="pt-2 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200 font-sans-body font-semibold">
              <div className="flex items-center gap-1.5">
                <span>📅 {activeEvent.date}</span>
                <span className="text-white/50">•</span>
                <span>⏰ {activeEvent.time}</span>
              </div>
              <div className="text-[11px] text-white/80">
                📍 {activeEvent.venue}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
