import React, { useState } from 'react';
import Navbar from '../components/Navbar';
{/*import Carousel, { type CarouselItem } from '../components/Carousel'; //uncomment the <Carousel items={cards} /> further down to enable industry carousel*/ }
import VideoCarousel, { type VideoItem } from '../components/VideoCarousel';
import AnimatedRobothaniaLogo from '../components/AnimatedRobothaniaLogo';
import CardsRow, { type CardsRowItem } from '../components/CardsRow';
import TechnologyGear from '../components/TechnologyGear';
import '../css/frontpage.css';

const Frontpage: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

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
      title: 'DEFENSE',
      image: '/defence_green_brighter.png',
      link: '/defense'
    }
  ];
  {/*const cards: CarouselItem[] = [ //cards for industry carousel
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
  ];*/}

  const videos: VideoItem[] = [
    {
      id: 'video1',
      title: 'Applikation 1',
      videoUrl: '/videos/demo.mp4',
      thumbnail: '/video-thumbnails/demo-thumb.png',
      description: 'Se vores seneste robotteknologi inde for sikkerhedssektoren  '
    },
    {
      id: 'video2',
      title: 'applikation 2',
      videoUrl: '/videos/industrial.mp4',
      thumbnail: '/video-thumbnails/industrial-thumb.png',
      description: 'Vi udvikler robuste robotløsninger, der styrker produktiviteten og skaber værdi i industrien'
    },
    {
      id: 'video3',
      title: 'Applikation 3',
      videoUrl: '/videos/medtech.mp4',
      thumbnail: '/video-thumbnails/medtech-thumb.png',
      description: 'Med avanceret robotteknologi kan vi hjælpe medtech-industrien med at skabe bedre behandlingsmuligheder for patienter'
    }
  ];

  // Define which nodes should light up for each video
  const ActiveNodesForVideo = (videoId: string): string[] => {
    switch (videoId) {
      case 'video1':
        return ['node1', 'node7', 'node5', 'node3'];
      case 'video2':
        return ['node2', 'node4', 'node5', 'node7'];
      case 'video3':
        return ['node1', 'node4', 'node2', 'node6'];
      default:
        return [];
    }
  };

  const handleVideoChange = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="frontpage">
      {/* Navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main className="frontpage-main">
        {/* Interactive menu section - placeholder for future implementation */}
        <section className="interactive-menu-section">
          <div className="gear-placeholder">
            <AnimatedRobothaniaLogo animated={true} />
          </div>
          <div className="title">
            <h1>ROBOTHANIA</h1>
          </div>
        </section>

        <div className="world-no1-heading">
          <h1>world's NO. 1 robotics design house</h1>
        </div>

        {/* Content section between existing sections */}
        <section className="fp-content-section">
          {/* Tagline */}
          <div className="fp-tagline-inner">
            <div className="fp-tagline-title">Your vision - our robots</div>
            <div className="fp-tagline-sub">Specialized robotic solutions designed to match the precision of your industry.</div>
          </div>

          {/* Quotes */}
          <div className="fp-quotes">
            <p className="fp-quote-strong">"Redefining Efficiency. Empowering Vision."</p>
            <p className="fp-quote-sub">Robotics designed for tomorrow – built for you.</p>
          </div>

          {/* Benefits list */}
          <div className="fp-benefits-list">
            <div className="fp-benefit-video-showcase">
              <h3 className="fp-video-headline">Full Adaptability</h3>
              <video className="fp-benefit-video" controls muted loop playsInline autoPlay preload="auto">
                <source src="/front.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="fp-video-cta">Built to match your way of working.</p>
            </div>
            <div className="fp-benefit-item">
              <div className="fp-benefit-title">Precision</div>
              <div className="fp-benefit-text">Mastering the most delicate tasks.</div>
            </div>
            <div className="fp-benefit-item">
              <div className="fp-benefit-title">Reliability</div>
              <div className="fp-benefit-text">Ensuring peak performance.</div>
            </div>
            <div className="fp-benefit-item">
              <div className="fp-benefit-title">Innovation in Practice</div>
              <div className="fp-benefit-text">Shaping tomorrow with your knowledge and our innovation.</div>
            </div>
          </div>
        </section>

        {/* Video Carousel section */}
        <section className="interactive-menu-section">
          <div className="application-presentation-container">
            {/* Application Presentation */}
            <div className="application-presentation">
              <VideoCarousel 
                videos={videos} 
                autoScrollInterval={0} 
                onVideoChange={handleVideoChange}
              />
            </div>

            <div className="gear-container">
              <TechnologyGear 
                activeNodes={ActiveNodesForVideo(selectedVideoId || '')}
              />
            </div>
          </div>
        </section>

        {/* Cards row section */}
        <CardsRow items={cardsRow} />
      </main>
    </div>
  );
};

export default Frontpage;