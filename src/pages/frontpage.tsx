import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/frontpage.css';

const Frontpage: React.FC = () => {

const [currentCard, setCurrentCard] = useState(0);

const cards = [
  {
    id: 'medtech',
    title: 'MEDTECH',
    image: '/medtechGreenTint.png',
    link: '/medtech'
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL',
    image: '/industrialGreenTint.png',
    link: '/industrial'
  },
  {
    id: 'defense',
    title: 'DEFENSE',
    image: '/defence_green_brighter.png',
    link: '/defense'
  }
];

// Auto-scroll to the next card every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 8000);
  
  return () => clearInterval(timer);
  }, [cards.length]);

  const goToCard = (index:number) => {
    setCurrentCard(index);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

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
            <img src="/robothaniaGear.svg" alt="Gear" />
          </div>
          
          <div className="title">
            <h1>ROBOTHANIA</h1>
          </div>
        </section>
        
        {/* Carousel section */}
        <section className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentCard * 33.33}%)` }}
              >
                {cards.map((card) => (
                  <div key={card.id} className="carousel-slide">
                    <Link to={card.link} className="carousel-card">
                      <div className="carousel-card-content">
                        <h2>{card.title}</h2>
                        <img src={card.image} alt={card.title} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button className="carousel-arrow carousel-arrow-left" onClick={prevCard}>
              ‹
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={nextCard}>
              ›
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="carousel-dots">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentCard ? 'active' : ''}`}
                onClick={() => goToCard(index)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Frontpage;