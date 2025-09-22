import React from 'react';
import Navbar from '../components/Navbar';
import Carousel, { type CarouselItem } from '../components/Carousel';
import '../css/frontpage.css';

const Frontpage: React.FC = () => {
  const cards: CarouselItem[] = [
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
        <Carousel items={cards} />
      </main>
    </div>
  );
};

export default Frontpage;