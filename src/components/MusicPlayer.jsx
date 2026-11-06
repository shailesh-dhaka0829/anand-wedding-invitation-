import { useState, useRef, useEffect } from "react";

export default function MusicPlayer({ autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Reliable Indian classical flute / shehnai melody stream
  const musicUrl = "/wedding.mp3";
  // TIP: If you have your own MP3, place it in public/wedding.mp3 and change this to: "/wedding.mp3"

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser policy requires direct interaction on the button
          setIsPlaying(false);
        });
    }
  }, [autoPlay]);

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />

      {/* Floating Music Button in bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={toggleMusic}
          aria-label="Toggle Music"
          style={{
            padding: "10px 16px",
            borderRadius: "30px",
            background: "linear-gradient(135deg, #7D1F2E, #4A0E17)",
            border: "2px solid #C9A84C",
            color: "#FFF9EF",
            fontSize: "0.85rem",
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(110, 31, 46, 0.4)",
          }}
        >
          <span>{isPlaying ? "🎵" : "🔇"}</span>
          <span>{isPlaying ? "MUSIC ON" : "PLAY MUSIC"}</span>
        </button>
      </div>
    </>
  );
}