import { weddingData } from "../data/weddingData";

export default function Hero() {
  const { groom, bride, venue } = weddingData;

  return (
    <section
      id="invitation"
      className="relative py-16 px-3 sm:px-6 md:px-12 bg-gradient-to-b from-[#E8F3F8] via-[#EFF7FA] to-[#E3F0F6] text-[#291C1A] overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      {/* 🏮 Background Hanging Gold Lantern Left */}
      <div className="absolute top-0 left-2 sm:left-6 md:left-12 w-12 sm:w-16 md:w-24 opacity-90 pointer-events-none z-10">
        <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          <line x1="50" y1="0" x2="50" y2="100" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M35 100 Q50 90 65 100 L60 110 L40 110 Z" fill="#C59B27" />
          <path d="M30 110 Q50 105 70 110 L78 150 Q50 165 22 150 Z" fill="#D4AF37" stroke="#B5965A" strokeWidth="1.5" />
          <ellipse cx="50" cy="130" rx="14" ry="18" fill="#FFF2B2" opacity="0.9" />
          <path d="M40 150 L60 150 L55 160 L45 160 Z" fill="#C59B27" />
          <line x1="50" y1="160" x2="50" y2="185" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="187" r="3" fill="#D4AF37" />
        </svg>
      </div>

      {/* 🏮 Background Hanging Gold Lantern Right */}
      <div className="absolute top-0 right-2 sm:right-6 md:right-12 w-12 sm:w-16 md:w-24 opacity-90 pointer-events-none z-10">
        <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          <line x1="50" y1="0" x2="50" y2="90" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M35 90 Q50 80 65 90 L60 100 L40 100 Z" fill="#C59B27" />
          <path d="M30 100 Q50 95 70 100 L78 140 Q50 155 22 140 Z" fill="#D4AF37" stroke="#B5965A" strokeWidth="1.5" />
          <ellipse cx="50" cy="120" rx="14" ry="18" fill="#FFF2B2" opacity="0.9" />
          <path d="M40 140 L60 140 L55 150 L45 150 Z" fill="#C59B27" />
          <line x1="50" y1="150" x2="50" y2="175" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="177" r="3" fill="#D4AF37" />
        </svg>
      </div>

      <div className="w-full max-w-2xl mx-auto relative z-20 my-4">
        
        {/* Divine Maroon Shloka Box (Exact to Screenshot 2) */}
        <div className="mb-6 text-center px-2">
          <div className="inline-flex flex-col items-center justify-center gap-1 px-6 sm:px-10 py-3 rounded-2xl bg-[#6E1F2E] text-[#FFF9EF] shadow-xl border-2 border-[#D4AF37]/70 max-w-xl mx-auto w-full">
            <span className="text-[#D4AF37] font-bold text-base sm:text-lg">॥ श्री गणेशाय नमः ॥</span>
            <p className="text-sm sm:text-base font-serif-luxury font-bold tracking-wide text-[#FDE68A]">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
            </p>
            <p className="text-xs sm:text-sm font-cormorant italic text-[#FFF9EF]/90">
              "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
            </p>
          </div>
        </div>

        {/* Cathedral Arch Inner Invitation Card (Exact to Screenshot 2 & 3) */}
        <div className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFBF4] border-2 border-[#D4AF37]/70 rounded-t-[100px] sm:rounded-t-[140px] rounded-b-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(30,50,70,0.15)] text-center overflow-hidden">
          
          {/* Inner Golden Arch Border Line */}
          <div className="absolute inset-2 sm:inset-3 border border-[#B5965A]/40 rounded-t-[90px] sm:rounded-t-[130px] rounded-b-2xl pointer-events-none" />

          {/* Top Royal Monogram Emblem (AS) */}
          <div className="flex flex-col items-center justify-center mt-2 mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-br from-[#F5E5C0] via-[#D4AF37] to-[#9A7B3E] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#FFFDF9] flex items-center justify-center border border-[#B5965A]/40 shadow-inner">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#6E1F2E] tracking-tighter">
                  AS
                </span>
              </div>
            </div>
            <span className="text-xs font-cinzel text-[#B5965A] mt-2 tracking-widest font-bold">॥ श्री गणेशाय नमः ॥</span>
          </div>

          <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.25em] text-[#B5965A] uppercase font-bold mb-2">
            WITH THE CELESTIAL BLESSINGS OF ALMIGHTY
          </p>

          <p className="text-xs sm:text-sm font-cormorant italic text-[#291C1A]/80 mb-2">
            Together with their families,
          </p>

          {/* Parents in Gold Calligraphy Script (Screenshot 2) */}
          <div className="my-3">
            <h2 className="font-alex-brush text-3xl sm:text-4xl md:text-5xl text-[#B5965A] font-normal leading-tight">
              Smt. Mala Dhaka &amp; Shri Vishnu Dutt Dhaka
            </h2>
          </div>

          <p className="text-[11px] sm:text-xs font-cinzel uppercase tracking-[0.18em] text-[#291C1A] font-semibold my-3">
            REQUEST THE HONOUR OF YOUR PRESENCE AT THE
          </p>

          <h3 className="text-lg sm:text-2xl font-serif-luxury font-bold text-[#B5965A] tracking-wide my-1">
            "WEDDING CELEBRATIONS"
          </h3>

          <p className="text-xs font-cormorant italic text-[#291C1A]/70 my-2">
            of their Beloved Son
          </p>

          {/* Couple Names in Royal Crimson Cursive Script (Screenshot 3) */}
          <div className="my-5 space-y-1">
            <h1 className="font-alex-brush text-4xl sm:text-6xl text-[#6E1F2E] font-bold tracking-wide">
              {groom.name}
            </h1>

            <p className="text-xs font-sans-body text-[#291C1A]/70">
              (S/o. Smt. Mala Dhaka &amp; Shri Vishnu Dutt Dhaka)
            </p>

            <div className="py-1">
              <span className="font-alex-brush text-2xl sm:text-3xl text-[#B5965A]">with</span>
            </div>

            <h1 className="font-alex-brush text-4xl sm:text-6xl text-[#6E1F2E] font-bold tracking-wide">
              {bride.name}
            </h1>

            <p className="text-xs font-sans-body text-[#291C1A]/70">
              (D/o. Proud Parents &amp; Family)
            </p>
          </div>

          <div className="w-48 h-px bg-[#B5965A]/40 mx-auto my-6" />

          {/* Ceremony Date & Venue (Screenshot 4) */}
          <div className="space-y-1 my-4">
            <p className="text-xs font-cormorant italic text-[#291C1A]/70">for the auspicious</p>
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#6E1F2E] tracking-wider">
              RECEPTION &amp; WEDDING
            </h4>

            <p className="text-xs font-cormorant italic text-[#291C1A]/70 pt-2">on</p>
            <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#B5965A] tracking-wide">
              SUNDAY, 15 NOVEMBER 2026
            </h4>

            <p className="text-xs font-cormorant italic text-[#291C1A]/70 pt-2">at</p>
            <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#B5965A] tracking-wide">
              {venue.name.toUpperCase()}
            </h4>
            <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/80">
              {venue.address}, {venue.city} (Raj.)
            </p>
          </div>

          {/* Bottom Royal Hashtag & Lanterns Motif */}
          <div className="mt-8 pt-4 flex items-center justify-center gap-3 text-[#B5965A]">
            <span>🏮</span>
            <span className="font-cinzel text-xs tracking-widest font-bold uppercase">
              #ANANDWEDSSUMAN
            </span>
            <span>🏮</span>
          </div>

        </div>
      </div>
    </section>
  );
}
