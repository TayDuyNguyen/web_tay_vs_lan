import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const prizes = [
  { title: "Trời xanh mây trắng nắng vàng <br> Hỏi em đây đã sẵn sàng yêu chưa?", image: new URL('./images/anh-meme-1.webp', import.meta.url).href },
  { title: "Gặp em anh bỗng muốn thờ <br> Vừa thờ ích thích vừa thờ ương thương.", image: new URL('./images/anh-meme-2.webp', import.meta.url).href },
  { title: "Cho anh liều thuốc an thần <br> Giữ tim ổn định khi gần bên em.", image: new URL('./images/anh-meme-3.webp', import.meta.url).href },
  { title: "Hè về nắng nóng cháy da <br> Bên ai cũng nóng hay là bên anh", image: new URL('./images/anh-meme-4.webp', import.meta.url).href },
  { title: "Anh đây vốn chẳng nhớ đường <br> Năm lần bảy lượt phượt vào tim em.", image: new URL('./images/anh-meme-6.webp', import.meta.url).href },
  { title: "Anh đây chẳng thích la cà <br> Anh đây chỉ thích mặn mà bên em.", image: new URL('./images/anh-meme-7.webp', import.meta.url).href },
  { title: "Em ơi gió lạnh gần kề <br> Mau mau thu xếp mà về bên anh.", image: new URL('./images/anh-meme-8.webp', import.meta.url).href },
  { title: "Đố ai quét sạch lá rừng <br> Đố ai bảo được anh ngừng yêu em.", image: new URL('./images/anh-meme-9.webp', import.meta.url).href },
  { title: "Mặt tròn như cái quạt mo <br> Anh nào vớ được ấm no cả đời.", image: new URL('./images/anh-meme-10.webp', import.meta.url).href },
  { title: "Người ta vá áo bằng kim <br> Em cho anh hỏi vá tim bằng gì?", image: new URL('./images/anh-meme-11.webp', import.meta.url).href },
  { title: "Nhìn em anh thấy lờ mờ <br> Tưởng là say rượu ai ngờ say em.", image: new URL('./images/anh-meme-13.webp', import.meta.url).href },
  { title: "Anh mua một cốc trà đào <br> Tiện thể anh hỏi lối vào tim em.", image: new URL('./images/anh-meme-14.webp', import.meta.url).href },
  { title: "Đâu cần phải tặng đóa hồng <br> Yêu em dẫu có xương rồng cũng cam.", image: new URL('./images/anh-meme-15.webp', import.meta.url).href },
  { title: "Anh đây chẳng thích hoa đào <br> Anh đây chỉ thích ngọt ngào với em.", image: new URL('./images/anh-meme-16.webp', import.meta.url).href },
  { title: "Anh đây vốn chẳng thích thơ <br> Thương em nên mới ngẩn ngơ đợi chờ.", image: new URL('./images/anh-meme-17.webp', import.meta.url).href },
  { title: "Mời em ngồi xuống uống trà <br> Dạo này ế quá hay là yêu nhau?", image: new URL('./images/anh-meme-.webp', import.meta.url).href },
  { title: "Nhân gian vốn lắm bộn bề <br> Thôi thì bỏ hết mà về bên anh.", image: new URL('./images/anh-meme-1.webp', import.meta.url).href },
  { title: "Thiếu 500 thì tròn 1 củ <br> Thêm em nữa là ta đủ 1 đôi.", image: new URL('./images/anh-meme-3.webp', import.meta.url).href },
  { title: "Cá chép là để om dưa <br> Tim anh là để đón đưa em vào.", image: new URL('./images/anh-meme-4.webp', import.meta.url).href },
  { title: "Bắc Đẩu đã có Nam Tào <br> Còn em đã có anh hay chưa?", image: new URL('./images/anh-meme-5.webp', import.meta.url).href },
  { title: "Em ơi, anh bảo cái này <br> Yêu ai cũng vậy hay là yêu anh?", image: new URL('./images/anh-meme-6.webp', import.meta.url).href },
  { title: "Ba mươi cùng đón giao thừa <br> Ra giêng mình cưới là vừa em ha.", image: new URL('./images/anh-meme-7.webp', import.meta.url).href },
  { title: "Ngày tháng đẹp biết bao nhiêu <br> Hẹn nhau một tách trà chiều đi em.", image: new URL('./images/anh-meme-9.webp', import.meta.url).href },
  { title: "Thời tiết trái gió trở trời <br> Trái tim lỡ nhịp cả đời thương em.", image: new URL('./images/anh-meme-10.webp', import.meta.url).href },
  { title: "Đố ai đếm được lá rừng <br> Đố ai khuyên được anh ngừng yêu em.", image: new URL('./images/anh-meme-11.webp', import.meta.url).href },
  { title: "Em ơi nắng gió tại trời <br> Thương em là chuyện cả đời của anh.", image: new URL('./images/anh-meme-12.webp', import.meta.url).href }
];

export default function November2025Card() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<{ title: string; image: string } | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    const randomSpin = 360 * (3 + Math.floor(Math.random() * 3)) + Math.floor(Math.random() * 360);
    const newRotation = rotation + randomSpin;
    setRotation(newRotation);

    setTimeout(() => {
      const index = Math.floor(Math.random() * prizes.length);
      setResult(prizes[index]);
      setIsSpinning(false);
    }, 4200);
  };

  return (
    <div className="bg-[#906e73]/50 min-h-screen flex flex-col items-center justify-center px-6 py-10 text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .font-dancing { font-family: 'Dancing Script', cursive; }
        .spin { transition: transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67); }
      `}</style>
      
      <div className="w-full flex justify-center h-[150px] mb-[-20px] z-10">
        <Player 
          src={new URL('./json/Christmas wind chimes.json', import.meta.url).href} 
          background="transparent" 
          speed={1} 
          loop 
          autoplay 
          className="scale-x-[-1] w-[200px]" 
        />
        <Player 
          src={new URL('./json/Christmas wind chimes.json', import.meta.url).href} 
          background="transparent" 
          speed={1} 
          loop 
          autoplay 
          className="w-[200px]" 
        />
      </div>

      <header className="text-center text-white bg-rose-400 py-5 px-10 rounded-2xl shadow-lg mb-10 transform hover:scale-110 transition-transform duration-300 z-20">
        <h1 className="text-4xl font-dancing">Tháng Mười Một Ấm Áp</h1>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-4 text-xl md:text-2xl text-white font-bold max-w-5xl mx-auto w-full mb-10">
        <div className="flex flex-col justify-between w-full md:w-1/4 h-32 overflow-hidden italic text-rose-300 drop-shadow-md">
          {/* @ts-expect-error tag marquee is deprecated and not supported in react typings */}
          <marquee behavior="scroll" direction="left" scrollamount="5">Không chê anh nghèo lên xe anh đèo</marquee>
          <br/>
          {/* @ts-expect-error tag marquee is deprecated and not supported in react typings */}
          <marquee behavior="scroll" direction="right" scrollamount="5">Không chê anh nghèo lên xe anh đèo</marquee>
        </div>
        <img src={new URL('./images/background.png', import.meta.url).href} className="w-full md:w-[50%] rounded-2xl shadow-xl border-4 border-white/50" alt="background" />
        <div className="flex flex-col justify-between w-full md:w-1/4 h-32 overflow-hidden italic text-rose-300 drop-shadow-md">
          {/* @ts-expect-error tag marquee is deprecated and not supported in react typings */}
          <marquee behavior="scroll" direction="left" scrollamount="5">Không chê anh nghèo lên xe anh đèo</marquee>
          <br/>
          {/* @ts-expect-error tag marquee is deprecated and not supported in react typings */}
          <marquee behavior="scroll" direction="right" scrollamount="5">Không chê anh nghèo lên xe anh đèo</marquee>
        </div>
      </div>

      <main className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center border-t-4 border-rose-400">
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-rose-500 font-dancing">Chào đón tháng mới!</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Tháng 11 mang đến những khoảnh khắc ấm áp và yêu thương.
            Hãy cùng nhau tận hưởng những ngày cuối năm đầy ý nghĩa và hạnh phúc.
          </p>
        </section>
      </main>

      <div className="relative w-64 h-64 mt-10">
        <div 
          id="wheel" 
          className="absolute w-full h-full rounded-full border-8 border-yellow-400 spin shadow-xl" 
          style={{
            background: `conic-gradient(
               #f87171 0deg 60deg,
               #facc15 60deg 120deg,
               #4ade80 120deg 180deg,
               #60a5fa 180deg 240deg,
               #a78bfa 240deg 300deg,
               #fb923c 300deg 360deg
             )`,
             transform: `rotate(${rotation}deg)`
          }}
        ></div>

        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-red-600 z-10 drop-shadow-md"></div>
        
        <button 
          className="absolute inset-0 m-auto w-20 h-20 bg-white text-blue-700 font-bold rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform active:scale-95 z-20 text-xl"
          onClick={handleSpin}
        >
          Quay
        </button>
      </div>

      <div className="min-h-[250px] w-full max-w-md mt-6 bg-white/50 rounded-xl p-4 flex items-center justify-center">
        {result ? (
          <div className="text-xl font-semibold text-center animate-fadeIn text-gray-800">
            <strong className="block text-center text-rose-600 mb-3 text-2xl font-dancing" dangerouslySetInnerHTML={{ __html: result.title }}></strong>
            <img src={result.image} alt="meme" className="mx-auto mt-2 w-full max-h-[300px] object-contain rounded-lg shadow-md border-2 border-white/50 bg-white/30" />
          </div>
        ) : (
          <p className="text-gray-500 italic">Nhấn "Quay" để xem thông điệp tháng này...</p>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
      `}</style>
    </div>
  );
}
