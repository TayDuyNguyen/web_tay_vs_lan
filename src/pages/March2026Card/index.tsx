import { useState, useRef, useEffect } from 'react';
import './March2026Card.css';

export default function March2026Card() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const images = []; // Add images here later

  const handlePlayToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <div className="font-public-sans bg-[#f8f6f6] text-slate-900 overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#221610]/90 z-10" />
          <div className="w-full h-full bg-slate-800" /> {/* Placeholder background */}
        </div>

        {/* Content Layout */}
        <main className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-6 py-12 text-center">

          {/* Top Header */}
          <header className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-[#d4af37]/50"></div>
              <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold">Tháng của đôi ta</span>
              <div className="h-px w-12 bg-[#d4af37]/50"></div>
            </div>
            <h2 className="text-white text-xl md:text-2xl font-light italic opacity-90">Gửi Em, Lời Chúc Yêu Thương</h2>
          </header>

          {/* Message Card */}
          <div className="glass-panel rounded-xl p-8 md:p-12 shadow-2xl border-t border-[#d4af37]/20">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-gradient-gold tracking-tight">
              Chào Tháng 3 Yêu Thương của năm 2026
            </h1>
            <div className="space-y-6 text-slate-100/90 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              <p>
                Tháng 3 gõ cửa với những tia nắng dịu dàng và làn gió mới. Anh muốn dành tặng em những lời chúc tốt đẹp nhất.
              </p>
              <p>
                Hy vọng tháng mới sẽ mang lại cho em thật nhiều niềm vui, sự tự tin và những thành công rực rỡ.
              </p>
              <p className="italic text-[#d4af37]/90">
                "Chúc em một tháng 3 rạng rỡ như chính nụ cười của em."
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                onClick={handlePlayToggle}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#ec5b13] hover:bg-[#ec5b13]/90 text-white rounded-full transition-all duration-300 shadow-lg shadow-[#ec5b13]/20 overflow-hidden"
              >
                <span className="material-icons">{isPlaying ? 'pause' : 'play_arrow'}</span>
                <span className="font-bold tracking-wide uppercase text-sm">
                  {isPlaying ? 'Pause Music' : 'Play Our Song'}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </main>
      </div>

      <audio ref={audioRef} src="" loop />
    </div>
  );
}
