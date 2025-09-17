import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './pages/frontpage';
import Medtech from './pages/medtech';
import Industrial from './pages/industrial';
import Defense from './pages/defense';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/medtech" element={<Medtech />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/defense" element={<Defense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
