import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/frontpage.css';

const Frontpage: React.FC = () => {
  return (
    <div className="frontpage">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Main content area */}
      <main className="frontpage-main">
        {/* Interactive menu section - placeholder for future implementation */}
        <section className="interactive-menu-section">
          <div className="nodes-placeholder">
            <img src="/logoNodes.png" alt="Nodes" />
          </div>
          <div className="gear-placeholder">
            <img src="/robothaniaGear2.svg" alt="Gear" />
          </div>
          
          <div className="title">
            <h1>ROBOTHANIA</h1>
          </div>
        </section>
        
        {/* Navigation cards */}
        <section className="navigation-cards-section">
          <div className="navigation-grid">
            <Link to="/medtech" className="nav-card medtech-card">
              <div className="nav-card-content">
                <h2>MEDTECH</h2>
                <img src="/medtechGreenTint.png" alt="Medtech" />
              </div>
            </Link>
            
            <Link to="/industrial" className="nav-card industrial-card">
              <div className="nav-card-content">
                <h2>INDUSTRIAL</h2>
                <img src="/industrialGreenTint.png" alt="Industrial" />
              </div>
            </Link>
            
            <Link to="/defence" className="nav-card defence-card">
              <div className="nav-card-content">
                <h2>DEFENSE</h2>
                <img src="/defence_green_brighter.png" alt="Defence" />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Frontpage;