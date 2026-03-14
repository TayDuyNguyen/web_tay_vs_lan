import { useState, useRef, useEffect } from 'react';
import './February2026Card.css';
import img1 from './images/image_1.jpg';
import img2 from './images/image_2.jpg';
import img3 from './images/image_3.jpg';
import img4 from './images/image_4.jpg';
import img5 from './images/image_5.jpg';

export default function February2026Card() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const images = [img1, img2, img3, img4, img5];

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

        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#221610]/90 z-10" />
          <img alt="Love Background" className="w-full h-full object-cover scale-105" src={new URL('./images/love.jpg', import.meta.url).href} />
        </div>

        {/* Image Slider Section */}
        <div className={`slider-container ${isPlaying ? 'active' : ''}`}>
          <div className="slider-track" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
            {/* Double the images for infinite scroll effect */}
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt={`Memory ${index}`} className="slide-img" />
            ))}
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <span className="material-icons absolute text-[#ec5b13]/40 top-10 left-[10%] text-4xl">favorite</span>
          <span className="material-icons absolute text-[#d4af37]/30 top-1/4 right-[15%] text-2xl">✨</span>
          <span className="material-icons absolute text-[#ec5b13]/30 bottom-1/4 left-[20%] text-3xl">favorite</span>
          <span className="material-icons absolute text-[#d4af37]/20 top-20 right-[5%] text-5xl">🌟</span>
          <span className="material-icons absolute text-[#ec5b13]/20 bottom-10 right-[25%] text-4xl">favorite</span>
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
              Chào Tháng 2 Yêu Thương của năm 2026
            </h1>
            <div className="space-y-6 text-slate-100/90 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              <p>
                Trong những ngày cuối tháng 2, anh muốn gửi đến em những lời yêu thương nồng nàn
                nhất từ tận đáy lòng mình. Thế giới ngoài kia có thể ồn ào và lạnh lẽo, nhưng chỉ cần có em, mọi
                thứ đều trở nên bình yên và ấm áp lạ thường.
              </p>
              <p>
                Cảm ơn em đã luôn là mảnh ghép hoàn hảo, là tia nắng dịu dàng sưởi ấm trái tim anh qua những mùa
                đông dài. Mỗi khoảnh khắc bên em đều là một món quà vô giá mà anh luôn trân trọng.
              </p>
              <p className="italic text-[#d4af37]/90">
                "Chúc cô gái của anh một tháng mới tràn ngập niềm vui, tiếng cười và những điều ngọt ngào nhất.
                Anh sẽ luôn ở đây, yêu em và che chở cho em, dù là mùa đông lạnh giá hay mùa hạ nắng vàng."
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
              <p className="text-[#d4af37]/60 text-xs uppercase tracking-widest font-medium">Bản tình ca dành riêng cho em</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-2">
              <span className="material-icons text-[#d4af37] text-xl">favorite_border</span>
            </div>
            <p className="text-[#d4af37]/80 font-serif italic text-lg">Yêu em mãi mãi,</p>
            <p className="text-white font-bold tracking-widest uppercase text-sm">Người thương của em</p>
          </footer>
        </main>

        {/* Sidebar Decorative Elements */}
        <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 text-[#d4af37]/20 [writing-mode:vertical-lr] tracking-[0.5em] uppercase text-sm font-bold">
          Memories • Together • Forever
        </div>
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-[#d4af37]/20 [writing-mode:vertical-lr] rotate-180 tracking-[0.5em] uppercase text-sm font-bold">
          Love Story • February 2026
        </div>
      </div>

      <audio ref={audioRef} src={new URL('./audio/tiktok_video_1.mp4', import.meta.url).href} loop />
    </div>
  );
}
