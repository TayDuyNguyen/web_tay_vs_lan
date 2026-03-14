import { useState, useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './October2025Card.css';

export default function October2025Card() {
  const [showFortune, setShowFortune] = useState(false);
  const [fortuneStage, setFortuneStage] = useState<'initial' | 'loading' | 'result'>('initial');
  const [selectedFortune, setSelectedFortune] = useState<any>(null);
  
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const [leaves, setLeaves] = useState<any[]>([]);
  const [balloons, setBalloons] = useState<any[]>([]);
  
  const [surpriseClicked, setSurpriseClicked] = useState(false);
  const [surpriseMessage, setSurpriseMessage] = useState(false);
  
  const skyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fortuneMessages = [
    {
      title: "💘 Quẻ Được Yêu",
      image: new URL('./images/fortune_0.jpg', import.meta.url).href,
      message: "Tháng 10 này, bạn sẽ được một người cực kỳ lãng mạn để ý! Hãy chuẩn bị tinh thần cho những lời tỏ tình siêu ngọt ngào."
    },
    {
      title: "🌟 Quẻ Được Thương",
      image: new URL('./images/fortune_1.jpg', import.meta.url).href,
      message: "Một người đặc biệt sẽ 'fall in love' với bạn ngay từ cái nhìn đầu tiên. Tình yêu đẹp đang chờ đợi!"
    },
    {
      title: "💫 Quẻ Say Đắm",
      image: new URL('./images/fortune_2.jpg', import.meta.url).href,
      message: "Bạn sẽ khiến ai đó hoàn toàn say đắm bởi sự duyên dáng và thông minh. Họ sẽ không ngừng khen bạn 'so beautiful' và 'so amazing'!"
    },
    {
      title: "🌸 Quẻ Theo Đuổi",
      image: new URL('./images/fortune_3.jpg', import.meta.url).href,
      message: "Một người sẽ theo đuổi bạn nhiệt tình với những cử chỉ lãng mạn. Hãy sẵn sàng cho những bó hoa lớn và những lời khen ngợi!"
    },
    {
      title: "🎯 Quẻ Lãng Mạn",
      image: new URL('./images/fortune_4.jpg', import.meta.url).href,
      message: "Bạn sắp trải nghiệm sự lãng mạn đích thực! Từ những buổi hẹn hò candlelit dinner đến những lời thì thầm ngọt ngào."
    },
    {
      title: "🌈 Quẻ Tán Tỉnh",
      image: new URL('./images/fortune_5.jpg', import.meta.url).href,
      message: "Bạn sẽ nhận được sự tán tỉnh từ nhiều người khác nhau. Hãy chọn người khiến trái tim bạn rung động nhất!"
    },
    {
      title: "✨ Quẻ Yêu Thầm",
      image: new URL('./images/fortune_6.jpg', import.meta.url).href,
      message: "Một người đang yêu thầm bạn từ xa. Họ sẽ tìm cách tiếp cận và bày tỏ tình cảm vào tháng 10 này."
    }
  ];


  useEffect(() => {
    // Generate leaves
    const newLeaves = Array.from({ length: 15 }).map((_, i) => {
      const colors = ["linear-gradient(45deg, #ff8c00, #ff4500)", "linear-gradient(45deg, #ff4500, #8b4513)", "linear-gradient(45deg, #8b4513, #a0522d)"];
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${8 + Math.random() * 7}s`,
        size: `${20 + Math.random() * 20}px`,
        bg: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    setLeaves(newLeaves);

    // Countdown
    const countDate = new Date();
    countDate.setDate(countDate.getDate() + 30);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSkyClick = (e: React.MouseEvent) => {
    if (!skyRef.current) return;
    const rect = skyRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#6A0572", "#1A535C"];
    const balloonId = Date.now();
    const size = 30 + Math.random() * 40;
    
    const newBalloon = {
      id: balloonId,
      left: x,
      bg: colors[Math.floor(Math.random() * colors.length)],
      width: size,
      height: size * 1.2,
      duration: 10 + Math.random() * 10
    };
    
    setBalloons(prev => [...prev, newBalloon]);
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== balloonId));
    }, newBalloon.duration * 1000);
  };

  const drawConfettiEffect = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let pieces: any[] = [];
    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#6A0572", "#1A535C", "#FF9A9E", "#FAD0C4"];
    
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
      });
    }
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
        
        p.y += p.speed;
        p.angle += p.rotationSpeed;
        if (p.y > canvas.height) {
          p.y = -p.size;
          p.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(render);
    };
    render();
  };

  const handleSurpriseClick = () => {
    setSurpriseClicked(true);
    drawConfettiEffect();
    setSurpriseMessage(true);
    document.body.style.background = "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)";
    setShowFortune(true);
  };

  const handleDrawFortune = () => {
    setFortuneStage('loading');
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
      setSelectedFortune(fortuneMessages[randomIndex]);
      setFortuneStage('result');
      drawConfettiEffect();
    }, 2000);
  };

  const closeFortune = () => {
    setShowFortune(false);
    setFortuneStage('initial');
    setSelectedFortune(null);
  };

  return (
    <div className="october-card-container">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50"></canvas>
      
      <div className="container max-w-6xl mx-auto p-5 relative z-10">
        <header className="text-center py-10 relative">
          <h1 className="title font-dancing text-5xl text-[#8b4513] drop-shadow-md mb-2 animate-fadeIn">Tháng Mười Yêu Thương</h1>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero bg-white/70 rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center mb-16 relative overflow-hidden">
            <div className="hero-content flex-1 pr-0 md:pr-10 z-10 text-center md:text-left">
              <h2 className="text-4xl text-[#8b4513] font-bold mb-5">Bạn sẽ vượt qua!</h2>
              <p className="text-xl text-[#5a3e2b] mb-8 leading-relaxed">
                Tháng 10 mang đến những thay đổi và thử thách mới. Hãy nhớ rằng
                bạn không đơn độc trên hành trình này. Mình sẽ đồng hành cùng bạn
                trên chặng đường dài sắp tới.
              </p>
              <button 
                className="cta-button"
                onClick={handleSurpriseClick}
                disabled={surpriseClicked}
              >
                {surpriseClicked ? "Cảm ơn vì đã khám phá!" : "Khám phá điều bất ngờ"}
              </button>
            </div>
            
            <div className="lottie-container flex-1 mt-8 md:mt-0 flex justify-center translate-y-6">
              <Player
                src={new URL('./json/Cat feeling love emotionsexpression. Emojisticker animation.json', import.meta.url).href}
                background="transparent"
                speed={1}
                style={{ width: '400px', height: '250px' }}
                loop
                autoplay
              />
            </div>
          </section>

          {/* Message Section */}
          <section className="message-section flex justify-center mb-16">
            <div className="message-box bg-white/80 p-10 rounded-2xl shadow-xl max-w-3xl text-center relative overflow-hidden border-t-4 border-[#ff9a9e]">
              <h3 className="text-3xl font-dancing text-[#8b4513] mb-5">Gửi đến Bạn!</h3>
              <p className="text-lg text-[#5a3e2b] mb-5 leading-relaxed">
                Dù tháng 10 có mang đến những ngày mưa gió, hãy nhớ rằng sau cơn
                mưa trời lại sáng. Mọi khó khăn rồi sẽ qua, và bạn sẽ trở nên mạnh
                mẽ hơn bao giờ hết. Hãy tin vào chính mình!
              </p>
              <div className="italic text-xl text-[#a0522d] mt-5 p-4 border-l-4 border-[#ff9a9e] bg-white/50 rounded-r-lg">
                "Mỗi ngày mới là một trang sách mới, hãy viết nên câu chuyện tuyệt vời nhất"
              </div>
              
              {surpriseMessage && (
                <div className="mt-8 pt-6 border-t border-[#ff9a9e]/30 animate-fadeIn">
                  <h3 className="text-2xl text-[#ff6b6b] mb-3">Bất ngờ dành cho cô!</h3>
                  <p className="text-lg text-[#5a3e2b]">Hãy luôn nhớ rằng cô xứng đáng với mọi điều tốt đẹp nhất. Tháng 10 này sẽ mang đến cho cô nhiều niềm vui và hạnh phúc!</p>
                </div>
              )}
            </div>
          </section>

          {/* Interactive Sky Section */}
          <section className="interactive-section bg-white/70 p-10 rounded-2xl shadow-lg mb-16 text-center">
            <h2 className="text-3xl text-[#8b4513] mb-3 font-bold">Thả Hồn Lên Mây</h2>
            <p className="text-lg text-[#5a3e2b] mb-8">Nhấn vào bầu trời để thả bóng bay nhé!</p>
            <div 
              ref={skyRef}
              className="sky h-72 bg-linear-to-b from-[#87CEEB] to-[#E0F7FF] rounded-xl relative overflow-hidden cursor-pointer shadow-inner"
              onClick={handleSkyClick}
            >
              {balloons.map(b => (
                <div 
                  key={b.id} 
                  className="balloon absolute rounded-full before:content-[''] before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-[30px] before:bg-white"
                  style={{
                    left: `${b.left}px`,
                    background: b.bg,
                    width: `${b.width}px`,
                    height: `${b.height}px`,
                    bottom: '-70px',
                    animation: `floatUp ${b.duration}s ease-in forwards`
                  }}
                />
              ))}
            </div>
          </section>

          {/* Countdown Section */}
          <section className="countdown-section bg-white/70 p-10 rounded-2xl shadow-lg text-center mb-16">
            <h2 className="text-3xl text-[#8b4513] mb-8 font-bold">Sự Kiện Đặc Biệt</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[ { l: 'Ngày', v: days }, { l: 'Giờ', v: hours }, { l: 'Phút', v: minutes }, { l: 'Giây', v: seconds } ].map((item, idx) => (
                <div key={idx} className="bg-linear-to-br from-[#ff9a9e] to-[#fad0c4] p-5 rounded-xl min-w-[120px] shadow-lg">
                  <div className="text-5xl font-bold text-white drop-shadow-md">{item.v}</div>
                  <div className="text-lg text-[#8b4513] font-semibold mt-2">{item.l}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Falling Leaves Background */}
      <div className="falling-leaves fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {leaves.map((leaf) => (
          <div 
            key={leaf.id} 
            className="absolute rounded-br-full opacity-80"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              width: leaf.size,
              height: leaf.size,
              background: leaf.bg,
              animationName: 'fallingLeaf',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>

      {/* Fortune Modal */}
      {showFortune && (
        <div className="fixed inset-0 z-2000 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => closeFortune()}></div>
          <div className="bg-linear-to-br from-[#1a1a3a] to-[#0a0a1f] border border-[#f9f506]/50 rounded-2xl w-full max-w-md p-6 relative shadow-[0_0_30px_rgba(249,245,6,0.2)] z-10 animate-scale-in">
            <div className="bg-linear-to-br from-[#ff6b9d] to-[#c44569] p-6 text-center relative text-white">
              <h2 className="text-2xl font-bold drop-shadow-md">🔮 Quẻ Bói Tháng 10</h2>
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 hover:scale-110 transition-all w-8 h-8 rounded-full flex items-center justify-center"
                onClick={closeFortune}
              >&times;</button>
            </div>
            
            <div className="bg-linear-to-br from-[#f8f9fa] to-[#e9ecef] p-8 text-center min-h-[250px] flex flex-col items-center justify-center">
              {fortuneStage === 'initial' && (
                <div className="mb-6 animate-pulse">
                  <h3 className="text-2xl text-[#2c3e50] font-bold mb-3">Sẵn sàng nào!</h3>
                  <p className="text-[#7f8c8d]">Hãy tập trung và nghĩ về điều bạn muốn biết...</p>
                </div>
              )}
              
              {fortuneStage === 'loading' && (
                <div className="mb-6">
                  <div className="crystal-ball mb-6 mx-auto"></div>
                  <h3 className="text-2xl text-[#2c3e50] font-bold mb-3">🔮 Đang rút quẻ...</h3>
                  <p className="text-[#7f8c8d] animate-pulse">Vũ trụ đang lắng nghe thông điệp của bạn...</p>
                </div>
              )}
              
              {fortuneStage === 'result' && selectedFortune && (
                <div className="mb-6 animate-fadeIn w-full flex flex-col items-center">
                  <h3 className="text-2xl text-[#ff4081] font-bold mb-4">{selectedFortune.title}</h3>
                  <img src={selectedFortune.image} alt="Fortune" className="w-48 h-auto rounded-xl shadow-lg mb-4 object-cover" />
                  <p className="text-[#5a3e2b] text-lg leading-relaxed px-4">{selectedFortune.message}</p>
                </div>
              )}
              
              <div className="flex gap-4 mt-4 w-full justify-center">
                {fortuneStage !== 'loading' && (
                  <button 
                    onClick={handleDrawFortune}
                    className="bg-linear-to-br from-[#ff6b9d] to-[#c44569] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_15px_rgba(255,107,157,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,107,157,0.6)] transition-all min-w-[120px]"
                  >
                    {fortuneStage === 'initial' ? 'Rút Quẻ' : 'Rút Lại'}
                  </button>
                )}
                <button 
                  onClick={closeFortune}
                  className="bg-[#95a5a6] hover:bg-[#7f8c8d] text-white px-6 py-3 rounded-full font-bold transition-all min-w-[120px] hover:-translate-y-1"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
