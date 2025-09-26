import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/carousel.css';

export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoScrollInterval?: number; // in milliseconds, 0 to disable
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoScrollInterval = 8000,
  className = ''
}) => {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-scroll to the next card
  useEffect(() => {
    if (autoScrollInterval > 0) {
      const timer = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % items.length);
      }, autoScrollInterval);
    
      return () => clearInterval(timer);
    }
  }, [items.length, autoScrollInterval]);

  const goToCard = (index: number) => {
    setCurrentCard(index);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % items.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`carousel-section ${className}`}>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div 
            className="carousel-track"
            style={{ 
              width: `${items.length * 100}%`,
              transform: `translateX(-${currentCard * (100 / items.length)}%)` 
            }}
          >
            {items.map((item) => (
              <div 
                key={item.id} 
                className="carousel-slide"
                style={{ width: `${100 / items.length}%` }}
              >
                <Link to={item.link} className="carousel-card">
                  <div className="carousel-card-content">
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
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
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentCard ? 'active' : ''}`}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;

