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