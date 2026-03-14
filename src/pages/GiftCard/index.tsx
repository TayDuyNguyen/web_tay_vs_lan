import { useState, useEffect, useRef } from 'react';
import './GiftCard.css';

export default function GiftCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; opacity: number; size: string }[]>([]);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const createHearts = (count: number) => {
    const newHearts: any[] = [];
    for (let i = 0; i < count; i++) {
        newHearts.push({
            id: Date.now() + i,
            left: Math.random() * 100 + 'vw',
            duration: Math.random() * 3 + 2 + 's',
            opacity: Math.random() * 0.5 + 0.3,
            size: Math.random() * 20 + 10 + 'px'
        });
    }
    setHearts(prev => [...prev.slice(-30), ...newHearts]); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createHearts(5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      setShowQuestion(true);
    }, 500);
  };

  const handleYes = () => {
    setShowQuestion(false);
    setShowLoveMessage(true);
    createHearts(50);
  };

  const handleNoHover = () => {
    if (noBtnRef.current) {
        const x = Math.random() * (window.innerWidth - noBtnRef.current.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtnRef.current.offsetHeight);
        noBtnRef.current.style.position = 'absolute';
        noBtnRef.current.style.left = x + 'px';
        noBtnRef.current.style.top = y + 'px';
    }
  };

  return (
    <div className="tan-em-container flex flex-col items-center justify-center min-h-screen text-center p-5 overflow-hidden">
      <div className="hearts" id="hearts">
        {hearts.map(h => (
          <div 
            key={h.id} 
            className="heart" 
            style={{ 
              left: h.left, 
              animationDuration: h.duration, 
              opacity: h.opacity, 
              width: h.size, 
              height: h.size 
            }} 
          />
        ))}
      </div>

      <div className="z-10 bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-4xl text-[#ff4081] mb-8 drop-shadow-md animate-pulse">💝 Một món quà dành cho em 💝</h1>
        <div className="instruction text-[#ff6b9d] text-xl mt-5">Nhấn vào hộp quà để mở nhé!</div>

        <div className={`gift-container ${isOpen ? 'open' : ''}`} onClick={handleOpenGift}>
          <div className="gift-lid"></div>
          <div className="gift-bow"></div>
          <div className="gift-box"></div>
        </div>

        {showQuestion && (
          <div className="question bg-white p-8 rounded-2xl shadow-xl mt-8 animate-fadeIn">
            <h2 className="text-2xl text-[#ff4081] mb-5">Làm người yêu tớ nha? 💖</h2>
            <div className="buttons flex justify-center gap-5 mt-5">
              <button 
                className="bg-[#4CAF50] text-white px-8 py-3 rounded-full text-xl font-bold transition-all hover:scale-110 hover:shadow-lg" 
                onClick={handleYes}
              >
                Có ❤️
              </button>
              <button 
                ref={noBtnRef}
                className="bg-[#f44336] text-white px-8 py-3 rounded-full text-xl font-bold transition-all hover:scale-110 hover:shadow-lg" 
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
              >
                Không 😢
              </button>
            </div>
          </div>
        )}

        {showLoveMessage && (
          <div className="message mt-8 text-3xl text-[#ff4081] animate-bounce">
            Yêu em nhiều lắm! 💕
          </div>
        )}
      </div>
    </div>
  );
}
