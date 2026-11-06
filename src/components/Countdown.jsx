import { useState, useRef, useEffect } from "react";
import { weddingData } from "../data/weddingData";

export default function Countdown() {
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 15 November 2026 Live Countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-11-15T11:00:00").getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initialize Metallic Gold Scratch Foil Canvas
  useEffect(() => {
    if (isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;

    // Royal Velvet Maroon & Metallic Gold Foil Gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#6E1F2E");
    grad.addColorStop(0.3, "#D4AF37");
    grad.addColorStop(0.6, "#B5965A");
    grad.addColorStop(1, "#42131E");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Callout text on the golden scratch surface
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 4;
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch Here With Your Finger ✨", w / 2, h / 2 - 6);
    ctx.font = "12px sans-serif";
    ctx.fillText("to reveal our wedding date", w / 2, h / 2 + 14);
  }, [isScratched]);

  const triggerReveal = () => {
    setIsScratched(true);
  };

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    // Check scratch progress
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imgData.data.length; i += 16) {
      if (imgData.data[i] === 0) transparent++;
    }
    if (transparent > (imgData.data.length / 16) * 0.4) {
      triggerReveal();
    }
  };

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-[#F8F0E3] text-[#291C1A] overflow-hidden select-none">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Pill Badge (Exact to Screenshot 5) */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E] mb-3">
          <span className="text-[#B5965A]">✨</span>
          <span className="text-xs font-sans-body uppercase tracking-[0.25em] font-semibold">
            Interactive Scratch Card
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E] mb-2">
          Scratch To Unlock The Date
        </h2>
        <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/75 mb-8 max-w-md mx-auto">
          Rub your finger across the golden foil card to unveil our wedding date and start the live countdown!
        </p>

        {/* Main Card Container */}
        <div className="relative max-w-lg mx-auto bg-[#FFF9EF] border-2 border-[#B5965A]/50 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Unrevealed State: Golden Scratch Foil Overlay */}
          {!isScratched && (
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 mx-auto rounded-3xl shadow-[0_10px_35px_rgba(181,150,90,0.45)] group cursor-pointer border-4 border-[#D4AF37] overflow-hidden">
              {/* Underlying Teaser */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6E1F2E] via-[#521722] to-[#42131E] flex flex-col items-center justify-center p-6 text-[#FFF9EF] text-center">
                <span className="text-[10px] font-cinzel text-[#D4AF37] uppercase tracking-widest block mb-1 font-semibold">
                  Save The Date
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-amber-100 leading-tight">
                  15 November 2026
                </h3>
                <p className="text-xs font-sans-body text-amber-200 mt-1">Jodhpur, Rajasthan</p>
              </div>

              {/* Scratch Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full touch-none select-none"
                onMouseDown={() => setIsDrawing(true)}
                onMouseMove={(e) => isDrawing && scratch(e.clientX, e.clientY)}
                onMouseUp={() => setIsDrawing(false)}
                onMouseLeave={() => setIsDrawing(false)}
                onTouchStart={(e) => {
                  setIsDrawing(true);
                  scratch(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchMove={(e) => {
                  if (isDrawing) scratch(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchEnd={() => setIsDrawing(false)}
              />
            </div>
          )}

          {/* Quick Reveal Button */}
          {!isScratched && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={triggerReveal}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6E1F2E]/10 hover:bg-[#6E1F2E]/20 text-[#6E1F2E] text-xs font-sans-body font-semibold transition-colors cursor-pointer"
              >
                <span>✨ Quick Reveal Date</span>
              </button>
            </div>
          )}

          {/* Revealed Date & Live Countdown Timer (Exact to Screenshot 5) */}
          {isScratched && (
            <div className="space-y-6 animate-fadeIn">
              {/* Unveiled Maroon Date Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#6E1F2E] to-[#42131E] border-2 border-[#B5965A] text-[#FFF9EF] shadow-xl relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] mb-2 uppercase">
                  <span>✓</span> DATE UNLOCKED
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 my-1">
                  15 November 2026
                </h3>

                <p className="text-xs sm:text-sm font-cinzel font-semibold text-[#B5965A] tracking-widest uppercase mt-2">
                  SUNDAY • RECEPTION &amp; WEDDING
                </p>

                <p className="text-xs font-sans-body text-[#FFF9EF]/80 mt-2">
                  Jodhpur, Rajasthan • #AnandWedsSuman
                </p>
              </div>

              {/* Live Ticking Countdown Timer */}
              <div className="pt-4 border-t border-[#B5965A]/25">
                <div className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold uppercase tracking-wider text-[#6E1F2E] mb-4">
                  <span>⏱</span> LIVE COUNTDOWN TO NUPTIALS
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {timeBlocks.map((block) => (
                    <div
                      key={block.label}
                      className="bg-[#F8F0E3] border border-[#B5965A]/40 rounded-xl p-3 sm:p-4 text-center shadow-sm"
                    >
                      <div className="text-2xl sm:text-4xl font-serif-luxury font-bold text-[#6E1F2E]">
                        {String(block.value).padStart(2, "0")}
                      </div>
                      <span className="text-[10px] sm:text-xs font-cinzel font-semibold uppercase tracking-wider text-[#B5965A]">
                        {block.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}