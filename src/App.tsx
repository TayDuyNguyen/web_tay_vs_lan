import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GiftCard from './pages/GiftCard';
import WomenDay2025Card from './pages/WomenDay2025Card';
import October2025Card from './pages/October2025Card';
import November2025Card from './pages/November2025Card';
import December2025Card from './pages/December2025Card';
import January2026Card from './pages/January2026Card';
import February2026Card from './pages/February2026Card';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tan-em" element={<GiftCard />} />
      
      {/* Invitation Card Routes */}
      <Route path="/thiep-20-10" element={<WomenDay2025Card />} />
      <Route path="/thiep-10" element={<October2025Card />} />
      <Route path="/thiep-11" element={<November2025Card />} />
      <Route path="/thiep-12" element={<December2025Card />} />
      <Route path="/thiep-1-2026" element={<January2026Card />} />
      <Route path="/thiep-2-2026" element={<February2026Card />} />
    </Routes>
  );
}

export default App;
