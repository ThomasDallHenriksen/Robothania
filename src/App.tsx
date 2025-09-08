import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './pages/frontpage';
import Medtech from './pages/medtech';
import Industrial from './pages/industrial';
import Defence from './pages/defence';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/medtech" element={<Medtech />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/defence" element={<Defence />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
