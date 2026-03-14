import { useState, useEffect } from 'react';
import './December2025Card.css';
import bellImg from './images/christmas-bell.png';
import snowmanImg from './images/snowman.png';
import giftBoxImg from './images/gift-box.png';
import sockImg from './images/christmas-sock.png';
import wreathImg from './images/christmas-wreath.png';
import sleighImg from './images/sleigh.png';
import photo1 from './images/ảnh_của_em_1.jpg';
import photo2 from './images/ảnh_của_em_2.jpg';
import photo3 from './images/ảnh_của_em_3.jpg';
import photo4 from './images/ảnh_của_em_4.jpg';
import photo5 from './images/ảnh_của_em_5.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5];


export default function December2025Card() {
  const [snowflakes, setSnowflakes] = useState<any[]>([]);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  useEffect(() => {
    // Generate snowflakes
    const snowIcons = ["❄", "❅", "❆", "✻"];
    const newSnowflakes = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      icon: snowIcons[Math.floor(Math.random() * snowIcons.length)],
      size: `${Math.random() * 15 + 10}px`,
      opacity: Math.random() * 0.5 + 0.5,
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * 5}s`,
      left: `${Math.random() * 100}vw`
    }));
    setSnowflakes(newSnowflakes);

    // Auto open letter after 2 seconds
    const timer = setTimeout(() => {
      setIsLetterOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleLetter = () => {
    setIsLetterOpen(!isLetterOpen);
  };

  return (
    <div className="december-card-container">
      {/* Snow Container */}
      <div id="snow-container" className="fixed inset-0 pointer-events-none z-0">
        {snowflakes.map(snow => (
          <div 
            key={snow.id} 
            className="snowflake"
            style={{
              left: snow.left,
              animationDelay: snow.delay,
              '--size': snow.size,
              '--opacity': snow.opacity,
              '--duration': snow.duration
            } as any}
          >
            {snow.icon}
          </div>
        ))}
      </div>

      <div className="min-h-screen grid grid-rows-[auto_auto_auto_auto] gap-8 pb-20 relative z-10 w-full max-w-7xl mx-auto">
        {/* Christmas bells */}
        <div className="flex justify-between p-4 px-10">
          <div className="animate-swing-bell">
            <img src={bellImg} alt="bell" className="w-20 h-20" />
          </div>
          <div className="animate-swing-bell">
            <img src={bellImg} alt="bell" className="w-20 h-20" />
          </div>
        </div>

        {/* Gallery Configuration */}
        <div className="gallery-wrapper overflow-x-auto overflow-y-hidden pb-10">
          <div className="grid-image mx-auto w-max min-w-full">
            {photos.map((src, idx) => (
              <div key={idx} className="grid-item p-4">
                <img src={src} alt={`em ${idx + 1}`} className="rounded-lg shadow-lg w-full animate-swing-bell object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Letter Container */}
        <div className="flex justify-center items-center p-4 mt-10">
          <div 
            className={`relative cursor-pointer group ${isLetterOpen ? 'letter-open' : ''}`}
            onClick={toggleLetter}
          >
            {/* Envelope */}
            <div className="bg-linear-to-b from-red-100 to-red-300 h-[200px] w-[300px] rounded-lg shadow-lg relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
              {/* Envelope flap */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-red-400 to-red-300 rounded-t-lg transform origin-top transition-all duration-500 group-hover:rotate-x-180 group-hover:opacity-0 z-20">
                <div className="absolute top-2 right-2 bg-yellow-100 w-12 h-12 rounded-full border-2 border-dashed border-red-400 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600 font-imperial">NDT</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-red-700 font-bold text-lg mb-1">Gửi Em ❤️</div>
                  <div className="text-red-600 text-sm">Tháng 12 yêu thương</div>
                </div>
              </div>

              {/* Envelope body */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-red-200 to-red-300 rounded-b-lg z-30">
                <div className="absolute top-0 left-0 w-full h-1 border-t-2 border-dashed border-red-400"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <div className="text-white text-2xl">❤️</div>
                </div>
              </div>
            </div>

            {/* Letter Content */}
            <div 
              id="letterContent"
              className="absolute top-1/2 left-1/2 w-[300px] bg-linear-to-b from-yellow-50 to-yellow-100 rounded-lg shadow-xl p-6 transition-all duration-700 pointer-events-none z-50 transform"
              style={{
                opacity: isLetterOpen ? 1 : 0,
                transform: isLetterOpen ? 'translate(-50%, -120%)' : 'translate(-50%, -50%) scale(0.8) translateY(50px)',
                pointerEvents: isLetterOpen ? 'auto' : 'none'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-2 left-4 w-[280px] h-4 bg-linear-to-b from-yellow-200 to-yellow-100 rounded-t-lg"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-red-700 mb-2">Tháng 12 Gửi Em</div>
                  <div className="text-red-600 italic">Những lời yêu thương...</div>
                </div>
                
                <div className="text-gray-700 leading-relaxed mb-4 font-handwriting text-[1.1rem]">
                  <p className={isLetterOpen ? "typing-effect typing-delay-1" : "opacity-0"}>Em yêu,</p>
                  <p className={isLetterOpen ? "typing-effect typing-delay-2" : "opacity-0"}>Tháng 12 đến mang theo cái lạnh se sắt, nhưng trái tim anh lại ấm áp vì nghĩ về em.</p>
                  <p className={isLetterOpen ? "typing-effect typing-delay-3" : "opacity-0"}>Mỗi bông tuyết rơi là một lời nhắn nhủ yêu thương gửi đến em.</p>
                  <p className={isLetterOpen ? "typing-effect typing-delay-4" : "opacity-0"}>Cầu chúc em một mùa Giáng Sinh an lành và hạnh phúc!</p>
                </div>
                
                <div className="text-right mt-6">
                  <div className={`font-handwriting text-xl text-red-600 mb-1 ${isLetterOpen ? "typing-effect typing-delay-5" : "opacity-0"}`}>Mãi yêu em</div>
                  <div className="text-gray-600 font-imperial text-xl mt-2">Mr. Nguyễn Duy Tây</div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 text-red-300 text-3xl opacity-30">❄️</div>
              <div className="absolute top-2 left-2 text-red-300 text-3xl opacity-30">❄️</div>
              
              {isLetterOpen && (
                <button 
                  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-600"
                  onClick={(e) => { e.stopPropagation(); setIsLetterOpen(false); }}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Animated fixed footer items */}
        <div className="fixed bottom-5 left-0 w-full flex flex-row justify-start gap-4 items-end px-8 z-20 pointer-events-none">
          <div className="w-24 h-24 fly-down-3 drop-shadow-lg">
            <img src={snowmanImg} className="w-full h-full object-contain" alt="snowman" />
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-2 mb-2 pl-7 drop-shadow-md">
              <div className="w-12 h-12 fly-down-4">
                <img src={giftBoxImg} className="w-full h-full object-contain" alt="gift" />
              </div>
              <div className="w-12 h-12 fly-down-3">
                <img src={sockImg} className="w-full h-full object-contain" alt="sock" />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 drop-shadow-md">
              <div className="w-12 h-12 fly-down-1">
                <img src={giftBoxImg} className="w-full h-full object-contain" alt="gift" />
              </div>
              <div className="w-12 h-12 pb-2 fly-down-2">
                <img src={giftBoxImg} className="w-full h-full object-contain" alt="gift" />
              </div>
            </div>
          </div>
          
          <div className="w-24 h-24 fly-down-2 ml-4 drop-shadow-lg">
            <img src={wreathImg} className="w-full h-full object-contain" alt="wreath" />
          </div>
          
          <div className="ml-auto w-24 h-24 fly-curve drop-shadow-lg">
            <img src={sleighImg} className="w-full h-full object-contain" alt="sleigh" />
          </div>
        </div>
      </div>
    </div>
  );
}
