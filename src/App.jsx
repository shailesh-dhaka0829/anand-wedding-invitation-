import { useState, useEffect, useRef } from "react";
import CinematicVideoHero from "./components/CinematicVideoHero";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Family from "./components/Family";
import Footer from "./components/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicUrl = "/bg_music.mp3";

  // Lock scrolling while on the cover screen
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleReveal = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerPetalsBurst = () => {
    alert("🌸 Showering divine love and blessings upon Anand & Suman! 🌸");
  };

  return (
    <div className="relative min-h-screen font-sans-body">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />

      {/* 👑 1. STANDALONE ROYAL COVER SCREEN (Shown ONLY until clicked) */}
      {!isOpen ? (
        <div className="fixed inset-0 z-[10000] bg-gradient-to-b from-[#6E1F2E] via-[#3B0E17] to-[#1A060A] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
          
          {/* Background Damask Pattern */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: "url('/images/royal_sikh_preloader_bg_pattern.png')" }}
          />

          <div className="relative z-10 max-w-sm w-full mx-auto flex flex-col items-center space-y-4">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
              <span className="text-base font-serif">🪷</span>
              <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase font-semibold">
                ॥ श्री गणेशाय नमः ॥
              </span>
            </div>

            {/* Circular Couple Portrait */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-[#D4AF37] p-1 bg-gradient-to-b from-[#D4AF37] via-[#B5965A] to-[#6E1F2E] shadow-[0_0_35px_rgba(212,175,55,0.4)] overflow-hidden shrink-0">
              <img
                src="/images/cover_couple.jpg"
                alt="Anand & Suman"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100 tracking-wide">
                Dhaka's Invitation
              </h1>
              <p className="text-xs font-cormorant italic text-[#FFF9EF]/85">
                "Two souls, one sacred path — Wedding Celebrations"
              </p>
            </div>

            {/* Reveal Button */}
            <div className="pt-3 w-full">
              <button
                onClick={handleReveal}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B5965A] to-[#8C6D32] text-[#291C1A] font-bold text-xs sm:text-sm tracking-widest uppercase font-sans-body shadow-[0_0_25px_rgba(212,175,55,0.5)] border border-amber-200 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <span>✉️ TAP TO REVEAL INVITATION</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* 🌸 2. REAL WEBSITE (Loads ONLY after clicking Reveal) */
        <div className="bg-gradient-to-b from-[#E8F3F8] via-[#EFF7FA] to-[#E3F0F6] min-h-screen relative animate-fadeIn">
          <CinematicVideoHero />
          <Hero />
          <Countdown />
          <Events />
          <Venue />
          <Gallery />
          <RSVP />
          <Family />
          <Footer />

          {/* 🌟 PERSISTENT FLOATING CONTROLS */}
          <div className="fixed bottom-4 left-4 right-4 z-[9999] flex justify-between items-center pointer-events-none">
            {/* Left Button */}
            <button
              onClick={triggerPetalsBurst}
              className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#6E1F2E] to-[#B5965A] border border-white/30 text-white font-sans-body font-bold text-xs shadow-lg cursor-pointer hover:scale-105 transition-transform"
            >
              <span>🌸</span>
              <span>Shower Blessings</span>
            </button>

            {/* Right Controls [ 🔊 | ⏸ | ↑ ] */}
            <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#291C1A] border border-[#B5965A]/40 text-[#FFF9EF] shadow-xl">
              <span className="text-xs opacity-80">🔊</span>
              <button
                onClick={toggleMusic}
                className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#291C1A] flex items-center justify-center font-bold text-xs cursor-pointer hover:scale-105 transition-transform"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                onClick={scrollToTop}
                className="text-sm px-1 opacity-80 hover:opacity-100 cursor-pointer"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}