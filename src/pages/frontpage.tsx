import React from 'react';
import Navbar from '../components/Navbar';
import Carousel, { type CarouselItem } from '../components/Carousel';
import VideoCarousel, { type VideoItem } from '../components/VideoCarousel';
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

  const videos: VideoItem[] = [
    {
      id: 'video1',
      title: 'Robothania Demo',
      videoUrl: '/videos/demo.mp4',
      thumbnail: '/video-thumbnails/demo-thumb.png',
      description: 'Se vores seneste robot teknologi i aktion'
    },
    {
      id: 'video2',
      title: 'Industrielle Løsninger',
      videoUrl: '/videos/industrial.mp4',
      thumbnail: '/video-thumbnails/industrial-thumb.png',
      description: 'Automatisering til moderne produktion'
    },
    {
      id: 'video3',
      title: 'Medtech Innovation',
      videoUrl: '/videos/medtech.mp4',
      thumbnail: '/video-thumbnails/medtech-thumb.png',
      description: 'Fremtidens medicinsk teknologi'
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

        <section className="interactive-menu-section">
          {/* Application Presentation */}
          <div className="application-presentation">
            <VideoCarousel videos={videos} autoScrollInterval={0} /> {/* if you want to disable auto scroll, set autoScrollInterval to 0 */}
          </div>
          <div className="nodes-placeholder">
            <img src="/logoNodes.png" alt="Nodes" />
          </div>
          <div className="gear-placeholder-without-animation">
            <img src="/robothaniaGear.svg" alt="Gear" />
          </div>
        </section>
        
        {/* Carousel section */}
        <Carousel items={cards} />
      </main>
    </div>
  );
};

export default Frontpage;