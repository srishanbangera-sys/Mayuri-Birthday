export function BackgroundFX() {
  const sparkles = Array.from({ length: 50 });
  const hearts = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100" />

      {/* Aurora Layer */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-400/20 blur-[150px] animate-orb-glow" />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-violet-400/20 blur-[170px] animate-orb-glow"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-rose-300/15 blur-[140px] animate-orb-glow"
        style={{ animationDelay: "4s" }}
      />

      {/* Radial Light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.4), transparent 60%)",
        }}
      />

      {/* Floating Glass Orbs */}
      <div className="absolute top-[15%] left-[10%] w-44 h-44 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 animate-float-orb hidden md:block" />

      <div
        className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 animate-float-orb hidden md:block"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute top-[55%] left-[65%] w-24 h-24 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 animate-float-orb hidden md:block"
        style={{ animationDelay: "4s" }}
      />

      {/* Sparkles */}
      {sparkles.map((_, i) => {
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const size = (i % 4) + 2;

        return (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full animate-sparkle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: "white",
              boxShadow:
                "0 0 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,192,203,0.7)",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        );
      })}

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-pink-300/30 animate-float-orb"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            fontSize: `${16 + (i % 4) * 6}px`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          ❤
        </div>
      ))}

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </div>
  );
}