import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import monkeyShow from './image/monkey_show.png';
import monkeyClose from './image/monkey_close.png';
import founderImg from './image/founder.jpg';

const passwords: Record<string, string> = {
  thang2_2026: '23072004',
  thang3_2026: '23072004',
  libary: '23072004',
  thang1_2026: '23072004',
  thang12: '23072004',
  thang11: '23072004',
  thang10: '23072004',
  ngay_20_10: '23072004',
};

const routeMapping: Record<string, string> = {
  thang2_2026: '/thiep-2-2026',
  thang3_2026: '/thiep-3-2026',
  libary: '/libary',
  thang1_2026: '/thiep-1-2026',
  thang12: '/thiep-12',
  thang11: '/thiep-11',
  thang10: '/thiep-10',
  ngay_20_10: '/thiep-20-10',
};

export default function Home() {
  const navigate = useNavigate();

  // Profile Card States
  const [profileOpen, setProfileOpen] = useState(false);

  // Month Checker States
  const [typingText, setTypingText] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [visibleMonths, setVisibleMonths] = useState<string[]>([]);

  // Password Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState({ text: '', isError: false, shake: false });

  // Typing Effect
  useEffect(() => {
    const text = "Nhập tháng và năm\n(ví dụ: 11/2025)\nđể mở thiệp 💌";
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setTypingText(text.slice(0, i));
        i++;
      } else {
        setTimeout(() => (i = 0), 2000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleCheckMonth = () => {
    const val = monthInput.trim();
    if (!val) return;
    const available = ['03/2026', '02/2026', '01/2026', '12/2025', '11/2025', '10/2025', '20/10/2025', 'libary'];
    if (available.includes(val)) {
      setVisibleMonths([...visibleMonths, val]);
    } else {
      alert('Không có thiệp cho thời gian này 💔');
    }
  };

  const handleOpenCard = (cardType: string) => {
    setCurrentCard(cardType);
    setPasswordInput('');
    setPasswordError({ text: '', isError: false, shake: false });
    setModalOpen(true);
  };

  const handleCheckPassword = () => {
    if (passwordInput === passwords[currentCard]) {
      setPasswordError({ text: '✅ Mật khẩu đúng! Đang chuyển hướng...', isError: false, shake: false });
      setTimeout(() => {
        setModalOpen(false);
        navigate(routeMapping[currentCard]);
      }, 1000);
    } else {
      setPasswordError({ text: '❌ Mật khẩu không đúng! Vui lòng thử lại.', isError: true, shake: true });
      setPasswordInput('');
      setTimeout(() => setPasswordError(prev => ({ ...prev, shake: false })), 500);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center">
      {/* MARQUEE HEADER */}
      <header className="marquee">
        <h1>✨ Góc nhỏ của Tây – nơi chứa đầy yêu thương ✨</h1>
      </header>

      {/* PROFILE SECTION */}
      <section className="profile-container w-full flex flex-col items-center">
        <a href="#" id="profileLink" title="Xem thông tin của mình" onClick={(e) => { e.preventDefault(); setProfileOpen(!profileOpen); }}>
          <img
            src={profileOpen ? monkeyShow : monkeyClose}
            alt="avatar"
            width="60"
            height="60"
            className="rounded-full shadow-lg"
          />
        </a>

        {profileOpen && (
          <div id="profileCard" className="glass-panel" style={{ display: 'block' }}>
            <button id="closeProfile" aria-label="Đóng" onClick={() => setProfileOpen(false)}>✕</button>
            <div className="flex flex-col items-center text-center">
              <img src={founderImg} alt="avatar" className="shadow-xl" />
              <div className="profile-info">
                <strong className="gold-glow">Nguyễn Duy Tây</strong>
                <div className="profile-role">Web Developer • Đà Nẵng</div>
                <div className="mt-4 space-y-3">
                  <p>
                    Chào cậu! Mình là <strong>Xử Nữ ♍</strong> (02/09/2004). Một người luôn hướng tới sự chỉn chu và tỉ mỉ.
                  </p>
                  <p>
                    Cung Xử Nữ giúp mình luôn trách nhiệm và ngăn nắp. Mình yêu lập trình và thích tạo ra những điều ý nghĩa
                    qua code. 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* LOTTIE ANIMATION */}
      <div className="lottie-container">
        <Player
          autoplay
          loop
          src="/json/Couple.json"
          style={{ width: '100%', maxWidth: '500px', height: '300px' }}
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="w-full flex flex-col items-center px-4 mb-20">

        {/* MONTH CHECKER */}
        <div className="checker-wrapper glass-panel">
          <span id="typing-label" className="italic" style={{ whiteSpace: 'pre-line' }}>{typingText}</span>

          <div className="input-group">
            <input
              type="text"
              id="check_month"
              placeholder="VD: 01/2026"
              autoComplete="off"
              value={monthInput}
              onChange={(e) => setMonthInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheckMonth()}
            />
            <button onClick={handleCheckMonth} className="btn-check">Kiểm tra</button>
          </div>
        </div>

        {/* INVITATION CARDS */}
        <div className="invitations w-full">
          {visibleMonths.includes('libary') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Mở <strong>Thư viện</strong> để xem lại tất cả các món quà nhé 📚</p>
              <button onClick={() => handleOpenCard('libary')}>Mở thư viện</button>
            </div>
          )}
          {visibleMonths.includes('03/2026') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Gửi cậu một món quà nhỏ cho <strong>Tháng 3/2026</strong> nồng nàn 💌</p>
              <button onClick={() => handleOpenCard('thang3_2026')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('02/2026') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Gửi cậu một món quà nhỏ cho <strong>Tháng 2/2026</strong> nồng nàn 💌</p>
              <button onClick={() => handleOpenCard('thang2_2026')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('01/2026') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Gửi cậu một món quà nhỏ cho <strong>Tháng 1/2026</strong> nồng nàn 💌</p>
              <button onClick={() => handleOpenCard('thang1_2026')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('12/2025') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Mời người đẹp mở thiệp chúc <strong>Tháng 12/2025</strong> nhé 💌</p>
              <button onClick={() => handleOpenCard('thang12')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('11/2025') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Thiệp chúc <strong>Tháng 11/2025</strong> đã sẵn sàng dành cho cậu 💌</p>
              <button onClick={() => handleOpenCard('thang11')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('10/2025') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Nhấn để xem điều bất ngờ trong <strong>Tháng 10/2025</strong> nhé 💌</p>
              <button onClick={() => handleOpenCard('thang10')}>Mở thiệp ngay</button>
            </div>
          )}
          {visibleMonths.includes('20/10/2025') && (
            <div className="card-invitation" style={{ display: 'block' }}>
              <p>Món quà đặc biệt dành riêng cho <strong>Ngày 20/10</strong> 🌹</p>
              <button onClick={() => handleOpenCard('ngay_20_10')}>Mở thiệp ngay</button>
            </div>
          )}
        </div>

        {/* PASSWORD MODAL */}
        {modalOpen && (
          <div id="passwordModal" className="password-modal" style={{ display: 'flex' }}>
            <div className="password-modal-content">
              <div className="password-modal-header">
                <h3>🔐 Bảo mật thiệp</h3>
                <button className="close-password-modal" onClick={() => setModalOpen(false)}>&times;</button>
              </div>
              <div className="password-modal-body text-black">
                <div className="flex justify-center mb-6">
                  <Player
                    autoplay
                    loop
                    src="/json/Juggling Monkey.json"
                    style={{ width: '150px', height: '100px' }}
                  />
                </div>
                <p className="text-center mb-4 text-white">Nhập mật khẩu để mở thiệp của cậu:</p>
                <input
                  type="password"
                  id="passwordInput"
                  placeholder="Mật khẩu của chúng mình..."
                  autoComplete="off"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCheckPassword()}
                  style={{ animation: passwordError.shake ? 'shake 0.5s ease-in-out' : 'none' }}
                />
                <div className="password-actions">
                  <button onClick={() => setModalOpen(false)} className="btn-cancel">Hủy</button>
                  <button onClick={handleCheckPassword} className="btn-submit">Xác nhận</button>
                </div>
                {passwordError.text && (
                  <div id="passwordError" className={`mt-4 text-center text-sm ${passwordError.isError ? 'text-[#e74c3c]' : 'text-[#27ae60]'}`}>
                    {passwordError.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
        }
      `}</style>
    </div>
  );
}
