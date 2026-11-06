import { useMemo } from "react";

export default function Petals() {
  // Generate random petals with varying sizes, speeds, and positions
  const petals = useMemo(() => {
    const symbols = ["🌸", "💮", "✨", "🌺"];
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${Math.random() * 96}%`,
      animationDuration: `${7 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 6}s`,
      fontSize: `${14 + Math.random() * 14}px`,
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
        overflow: "hidden",
      }}
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            position: "absolute",
            top: "-40px",
            left: petal.left,
            fontSize: petal.fontSize,
            opacity: petal.opacity,
            animation: `fall ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay,
            userSelect: "none",
          }}
        >
          {petal.symbol}
        </span>
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(25px);
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
          }
        }
      `}</style>
    </div>
  );
}