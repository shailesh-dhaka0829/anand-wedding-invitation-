import { useRef, useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

export default function CinematicVideoHero({ onExploreClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play safely across iOS Safari & Android mobile WebKit
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const startPlay = () => {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    startPlay();

    const handleInteraction = () => startPlay();
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("pointerdown", handleInteraction, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-black text-white flex flex-col justify-between items-center select-none">
      
      {/* 1. FULL FRAME VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/videos/hero_video.mp4"
          poster="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Cinematic Dark & Royal Maroon Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#42131E]/95" />
      </div>

      {/* 2. TOP FLOATING AUDIO & PLAY CONTROLS */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 pt-6 flex items-center justify-end pointer-events-auto">
        <div className="flex items-center gap-2">
          {/* Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg cursor-pointer"
            aria-label="Sound Toggle"
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg cursor-pointer"
            aria-label="Play/Pause Video"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </div>

      {/* 3. HERO CALLIGRAPHIC TYPOGRAPHY */}
      <div className="relative z-20 px-4 text-center flex flex-col items-center max-w-3xl mx-auto my-auto">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-lg mb-3">
          <span className="text-amber-300">✨</span>
          <span className="text-xs sm:text-sm font-sans-body tracking-[0.25em] uppercase font-semibold">
            WEDDING CELEBRATIONS
          </span>
          <span className="text-amber-300">✨</span>
        </div>

        {/* Large Elegant Heading */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-serif-luxury font-bold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)] my-2 leading-none">
          {weddingData.groom.name} &amp; {weddingData.bride.name}
        </h1>

        {/* Date Callout */}
        <p className="text-lg sm:text-3xl font-cinzel font-semibold tracking-widest text-amber-100 drop-shadow-lg mt-2">
          SUNDAY · 15 NOVEMBER 2026
        </p>

        {/* City Location */}
        <p className="text-xs sm:text-base font-sans-body font-light tracking-wider text-sky-100 opacity-90 mt-1">
          JODHPUR, RAJASTHAN
        </p>
      </div>

      {/* 4. ANIMATED SCROLL DOWN CUE */}
      <div
        className="relative z-20 pb-8 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        onClick={() => {
          const el = document.getElementById("invitation");
          if (el) el.scrollIntoView({ behavior: "smooth" });
          else window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/95 font-sans-body font-semibold drop-shadow">
          Scroll down to explore invitation
        </span>
        <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center animate-bounce">
          ↓
        </div>
      </div>

      {/* Soft Bottom Transition Gradient into Celestial Background */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#E8F3F8] via-[#E8F3F8]/40 to-transparent z-10 pointer-events-none" />
    </div>
  );
}