import { useNavigate } from 'react-router-dom';
import './Libary.css';

export default function Libary() {
  const navigate = useNavigate();

  const cards = [
    { title: 'Tháng 3/2026', path: '/thiep-3-2026', desc: 'Thiệp nồng nàn' },
    { title: 'Tháng 2/2026', path: '/thiep-2-2026', desc: 'Thiệp nồng nàn' },
    { title: 'Tháng 1/2026', path: '/thiep-1-2026', desc: 'Thiệp nồng nàn' },
    { title: 'Tháng 12/2025', path: '/thiep-12', desc: 'Thiệp chúc' },
    { title: 'Tháng 11/2025', path: '/thiep-11', desc: 'Thiệp chúc' },
    { title: 'Tháng 10/2025', path: '/thiep-10', desc: 'Điều bất ngờ' },
    { title: 'Ngày 20/10', path: '/thiep-20-10', desc: 'Món quà đặc biệt' },
  ];

  return (
    <div className="libary-container bg-[#0f0f13] min-h-screen text-white p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold gold-glow mb-2">Thư Viện Thiệp</h1>
        <p className="text-gray-400">Nơi lưu giữ những kỷ niệm của chúng mình</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="libary-card glass-panel p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer border border-white/10"
            onClick={() => navigate(card.path)}
          >
            <h3 className="text-xl font-bold mb-2 text-[#d4af37]">{card.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{card.desc}</p>
            <button className="text-xs uppercase tracking-widest text-[#ec5b13] font-bold">Mở xem →</button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
        >
          ← Quay lại trang chủ
        </button>
      </div>
    </div>
  );
}
