export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FFF9EF] text-[#291C1A] border-t-2 border-[#B5965A]/40 pt-16 pb-20 px-4 md:px-8 overflow-hidden text-center select-none">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Invocation */}
        <div className="inline-flex flex-col items-center">
          <span className="text-2xl font-serif text-[#6E1F2E] font-bold tracking-widest mb-1">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="text-[10px] font-cinzel font-semibold tracking-widest text-[#B5965A] uppercase">
            Dhaka Family Celebrations
          </span>
        </div>

        {/* Couple Heading */}
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
          Anand weds Suman
        </h2>

        <p className="text-sm font-cormorant italic text-[#291C1A]/80 max-w-md mx-auto">
          "With gratitude in our hearts and blessings from our elders, we look forward to celebrating our special day with you."
        </p>

        {/* 🌟 MAGICAL CREATOR CARD (Exact to Screenshot 2026-11-04 000248.png) */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#42131E] via-[#6E1F2E] to-[#290B13] border-2 border-[#D4AF37]/60 text-[#FFF9EF] shadow-2xl relative overflow-hidden max-w-xl mx-auto text-center">
          
          <div className="relative z-10 space-y-4">
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-amber-200 text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.2em]">
              <span>✨</span>
              <span>Crafted With Magic &amp; Devotion</span>
            </div>

            {/* Title */}
            <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-amber-100">
              Want something magical like this for your special day?
            </h4>

            {/* Developer Name */}
            <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/85 max-w-md mx-auto">
              Designed &amp; Developed by{" "}
              <strong className="text-amber-300 font-bold">Shailesh Dhaka</strong>
            </p>

            {/* Contact Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:8619189005"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#291C1A] text-xs sm:text-sm font-bold font-sans-body shadow-lg hover:bg-amber-200 hover:scale-105 transition-all border border-[#D4AF37]"
              >
                <span>📞</span>
                <span>+91 86191 89005</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-amber-200 text-xs sm:text-sm font-semibold font-sans-body">
                <span>📍</span>
                <span>Jodhpur, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] hover:bg-[#42131E] text-xs font-sans-body font-semibold shadow-md transition-all border border-[#B5965A]/40 cursor-pointer"
          >
            <span>Back To Top Cover ↑</span>
          </button>
        </div>

        <p className="text-[10px] font-sans-body tracking-widest text-[#291C1A]/40 pt-4 uppercase">
          CELEBRATING LOVE &amp; TOGETHERNESS · 2026
        </p>

      </div>
    </footer>
  );
}
