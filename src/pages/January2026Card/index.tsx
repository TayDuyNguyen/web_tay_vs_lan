import { useState, useRef, useEffect } from 'react';
import './January2026Card.css';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';
import img5 from './images/image5.jpg';
import img6 from './images/image6.jpg';
import img7 from './images/image7.jpg';
import img8 from './images/image8.jpg';
import img9 from './images/image9.jpg';

export default function January2026Card() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Music play error:", err);
      });
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

  // Drag to scroll logic
  useEffect(() => {
    const slider = galleryRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      slider.style.cursor = 'grab';
    };

    const onMouseUp = () => {
      isDown = false;
      slider.style.cursor = 'grab';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#0a0a1f] font-spline min-h-screen w-full flex flex-col items-center overflow-x-hidden selection:bg-[#f9f506]/30">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 31, 0.85), rgba(10, 10, 31, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJOxNadv5vIOhAJt17wDq7wMjTby8D-4uZEuJfAw4mJXfbPYUETHNWqhsgBXlwdEXEZRfQhQVvycJ_Tp5pTYscEPh4lM6KNh9NNV76rSokIEotoxEWCOwDsFhRlIN7T_4U7uHVzKCSSfSrqgDNQS41CLXdXMh4bjknotrWMLYGwyyC5clvQiOoFDC01DdjWsx5A1mb2UI9VOOIMHzw0A0udSQUl-miZraiFYzqnfzsQk7HCkf_QpLS1veMPgb_FU7iXhEopKIFUYk")' }}
      />

      {/* Snow particles & background decorations */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-10 left-[10%] text-[#f9f506]/40 animate-pulse text-4xl">✨</div>
        <div className="absolute top-1/4 right-[15%] text-pink-300/40 animate-bounce duration-3000 text-3xl">❤️</div>
        <div className="absolute bottom-1/4 left-[20%] text-[#e6e6fa]/30 text-5xl">❄️</div>
        <div className="snow-particle text-xs" style={{ left: '5%', animationDuration: '10s' }}>❅</div>
        <div className="snow-particle text-sm" style={{ left: '25%', animationDuration: '15s', animationDelay: '2s' }}>❆</div>
        <div className="snow-particle text-xs" style={{ left: '45%', animationDuration: '12s', animationDelay: '5s' }}>❅</div>
        <div className="snow-particle text-lg" style={{ left: '65%', animationDuration: '18s', animationDelay: '1s' }}>❆</div>
        <div className="snow-particle text-sm" style={{ left: '85%', animationDuration: '14s', animationDelay: '3s' }}>❅</div>
      </div>

      {/* Audio Player */}
      <audio ref={audioRef} loop src={new URL('./audio/audio.mp3', import.meta.url).href} />

      {/* Floating Music Controller */}
      <div className="music-float-bar">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f9f506]/10 text-[#f9f506]">
            <span className={`text-xl ${isPlaying ? 'animate-spin' : ''}`}>🎵</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs font-bold tracking-wide">PHÁT NHẠC</span>
            <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">Giai điệu tình yêu</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className={`music-bars ${isPlaying ? 'playing' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <button 
            onClick={toggleMusic}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f9f506] text-[#0a0a1f] hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(249,245,6,0.3)]"
          >
            <span className="font-bold">{isPlaying ? '⏸' : '▶'}</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full z-50 px-6 py-6 md:px-20 lg:px-40 flex items-center justify-between glass-card border-none rounded-none">
        <div className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f9f506]/20 text-[#f9f506]">
            <span className="text-xl">❤️</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Tháng 1 Nồng Nàn</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 px-4 w-full max-w-[1000px] flex flex-col items-center py-20 gap-24">
        {/* Story Section */}
        <section className="w-full">
          <div className="glass-card w-full rounded-xl p-8 md:p-16 text-center flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[#e6e6fa] text-xs font-semibold tracking-widest uppercase">
              <span className="text-sm">✨</span>
              Gửi Người Thương Của Anh
            </div>
            
            <div className="flex flex-col gap-4">
              <h1 className="text-[#f9f506] text-4xl md:text-6xl font-black leading-tight tracking-tight gold-glow italic">
                Chào Tháng 1 Năm 2026
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-transparent via-[#f9f506] to-transparent mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl space-y-6">
              <p className="text-white/95 text-lg md:text-xl font-light leading-relaxed italic">
                "Gửi tới người con gái anh thương 😍."
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Tháng Giêng này, anh mong rằng nụ cười của em sẽ luôn rạng rỡ trên đôi môi của em. Dù thời
                gian có trôi đi, tình yêu này vẫn sẽ mãi vẹn nguyên và không đổi thay. Chúc cho
                hành trình của chúng ta trong năm 2026 sẽ thuận lợi, thành công và đặc biệt nhất là anh mong sẽ
                nhanh đến bên cạnh em để bù đắp sự thiều vắng của anh trong thời gian qua.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-white text-3xl font-bold tracking-tight pb-2">Khoảnh Khắc Lấp Lánh</h2>
                <p className="text-white/60 text-base">Từng giây phút anh đều nhớ về em.</p>
              </div>
            </div>
            
            <div className="image-container-scroll w-full" ref={galleryRef}>
              {images.map((src, index) => (
                <div 
                  key={index}
                  className="gallery-image"
                  style={{ backgroundImage: `url(${src})`, animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a1f] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
