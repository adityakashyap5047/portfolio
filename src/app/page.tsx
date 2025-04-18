export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white px-4">
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-40 h-40 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Glass Panel */}
      <div className="relative z-10 max-w-lg w-full bg-white/10 border border-white/30 rounded-2xl p-8 backdrop-blur-md shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">GLASSMORPHISM</h1>
        <p className="text-white/80 text-lg">
          Portfolio meets aesthetic. A frosted UI for a modern web presence.
        </p>
      </div>
    </main>
  );
}
