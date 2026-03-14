import { useState, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './WomenDay2025Card.css';

export default function WomenDay2025Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string }[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    // Create random hearts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 2}s`
    }));
    setHearts(newHearts);
    
    // Clear hearts after animation
    setTimeout(() => {
      setHearts([]);
    }, 4000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="thiep-20-10-container text-black">
      <div className="background" id="background"></div>
      
      <div className="lottie-container" id="mainLottie">
        <Player
          src={new URL('./json/Love dog.json', import.meta.url).href}
          background="transparent"
          speed={1}
          style={{ width: '600px', height: '300px' }}
          loop
          autoplay
        />
      </div>
      
      {/* Phong bì thư */}
      <div className={`envelope ${isOpen ? 'open' : ''}`} id="envelope" onClick={handleOpen}>
        <div className="envelope-body">
          <div className="envelope-flap">
            <p>Nhấn để mở thiệp</p>
          </div>
          <div className="envelope-content">
            <p className="envelope-content-body">
              Chúc mừng ngày Phụ nữ Việt Nam 20/10
            </p>
          </div>
        </div>
      </div>

      {/* Hiệu ứng trái tim */}
      <div className="hearts" id="hearts">
        {hearts.map(h => (
          <div 
            key={h.id} 
            className="heart" 
            style={{ left: h.left, animation: `heartFloat ${h.duration} ease-in-out forwards` }} 
          />
        ))}
      </div>

      {/* Thiệp chúc */}
      <div className={`card ${isOpen ? 'show' : ''}`} id="card">
        <button className="close-btn" onClick={(e) => { e.stopPropagation(); handleClose(); }}>×</button>
        <div className="card-header">
          <h1>Chúc Mừng 20/10</h1>
        </div>
        <div className="card-content">
          <p>Gửi đến người con gái tuyệt vời,</p>
          <p>
            Nhân ngày Phụ nữ Việt Nam 20/10, xin gửi đến bạn những lời chúc tốt
            đẹp nhất. Chúc bạn luôn xinh đẹp, rạng rỡ, thành công trong công việc
            và hạnh phúc trong cuộc sống.
          </p>
          <p>
            Bạn xứng đáng nhận được tất cả những điều tuyệt vời nhất trên đời. Hãy
            luôn yêu thương và trân trọng bản thân mình!
          </p>
        </div>
        <div className="card-footer">
          <p>Thân ái!</p>
        </div>

        {/* Nút phát nhạc */}
        <div className={`music-player ${isPlaying ? 'active' : ''}`}>
          <button onClick={(e) => { e.stopPropagation(); toggleMusic(); }} className="play-btn">
            {isPlaying ? '⏸ Tạm dừng' : '🎵 Phát nhạc'}
          </button>
          <audio ref={audioRef} src={new URL('./music/nhumotvitinhtu.mp3', import.meta.url).href} loop></audio>
        </div>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={handleClose}></div>
    </div>
  );
}
