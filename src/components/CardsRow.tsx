import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cardsRow.css';

export interface CardsRowItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CardsRowProps {
  items: CardsRowItem[];
  className?: string;
}

const CardsRow: React.FC<CardsRowProps> = ({ 
  items, 
  className = '' 
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`cards-row-section ${className}`}>
      <div className="cards-row-container">
        {items.map((item) => (
          <Link key={item.id} to={item.link} className="card-row-item">
            <div className="card-row-content">
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsRow;