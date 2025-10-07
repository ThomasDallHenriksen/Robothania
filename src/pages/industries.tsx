import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/industries.css';

const Industries: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      
      <main className="main">
        <div className="hero">
          <img
            className="heroLogo"
            src="/Robothania_logo_Green.svg"
            alt="Robothania logo"
          />
        </div>

        <section className="introWrapper">
          <div className="intro">
            <p className="kicker">Our technology is a specialized, single-purpose systems — built to perform each task perfectly.</p>
            <blockquote className="statement">
              <span className="quoteMark">"</span>
              <span className="kicker">
                At Robothania, we bring the future to you. Our technology isn't just a product — it's a platform, fully adaptable to medtech, defense, or industrial workflows.
              </span>
              <br />
              <strong>Precision. Efficiency. Innovation. Accessibility.</strong>
              <span className="quoteMark">"</span>
            </blockquote>
          </div>
        </section>

        <section className="cards">
          <Link to="/medtech" className="card" aria-label="Medtech">
            <img src="/medtechGreenTint.png" alt="Medtech" className="cardImg" />
            <div className="cardOverlay">MEDTECH</div>
          </Link>
          <Link to="/industrial" className="card" aria-label="Industrial">
            <img src="/industrialGreenTint.png" alt="Industrial" className="cardImg" />
            <div className="cardOverlay">INDUSTRIAL</div>
          </Link>
          <Link to="/defense" className="card" aria-label="Defence">
            <img src="/defence_green_brighter.png" alt="Defence" className="cardImg" />
            <div className="cardOverlay">DEFENCE</div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Industries;