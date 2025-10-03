import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Frontpage from './pages/frontpage';
import Medtech from './pages/medtech';
import Industrial from './pages/industrial';
import Defense from './pages/defense';
import Technologies from './pages/technologies';
import Industries from './pages/industries';
import About from './pages/about';
import PrivacyPolicies from './pages/privacyPolicies';
import Footer from './components/Footer';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/medtech" element={<Medtech />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
