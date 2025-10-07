import React from 'react';
import Navbar from '../components/Navbar';
import CardsRow, { type CardsRowItem } from '../components/CardsRow';
import '../css/industries.css';

const Industries: React.FC = () => {
  const cardsRow: CardsRowItem[] = [
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
      title: 'DEFENCE',
      image: '/defence_green_brighter.png',
      link: '/defense'
    }
  ];
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
            <span className="kicker">
              <h3 >Our technology is a specialized, single-purpose systems — built to perform each task perfectly.</h3>
            </span>
            <span className="kicker">
              <h3>"At Robothania, we bring the future to you. Our technology isn't just a product — it's a platform, fully adaptable to medtech, defense, or industrial workflows.</h3>
            </span>
            <span className="kicker">
              <h3><strong>Precision. Efficiency. Innovation. Accessibility."</strong></h3>
            </span>
          </div>
        </section>
        <CardsRow items={cardsRow} />
      </main>
    </div>
  );
};

export default Industries;