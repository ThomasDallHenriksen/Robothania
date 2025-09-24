import React, { useState, useEffect, useRef } from 'react';
import '../css/videoCarousel.css';

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  description?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  autoScrollInterval?: number; // in milliseconds, 0 to disable
  className?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ 
  videos, 
  autoScrollInterval = 10000,
  className = ''
}) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-scroll to the next video
  useEffect(() => {
    if (autoScrollInterval > 0 && !isPlaying && !showVideoPlayer) {
      const timer = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, autoScrollInterval);
    
      return () => clearInterval(timer);
    }
  }, [videos.length, autoScrollInterval, isPlaying, showVideoPlayer]);

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
    setShowVideoPlayer(false);
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setShowVideoPlayer(false);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setShowVideoPlayer(false);
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    if (showVideoPlayer) {
      // Hvis video player allerede er vist, toggle play/pause
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    } else {
      // Vis video player og start afspilning
      setShowVideoPlayer(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowVideoPlayer(false);
  };

  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (!videos || videos.length === 0) {
    return null;
  }

  const currentVideoData = videos[currentVideo];

  return (
    <div className={`video-carousel ${className}`}>
      <div className="video-carousel-container">
        <div className="video-carousel-wrapper">
          <div 
            className="video-carousel-track"
            style={{ 
              height: `${videos.length * 100}%`,
              transform: `translateY(-${currentVideo * (100 / videos.length)}%)` 
            }}
          >
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="video-carousel-slide"
                style={{ height: `${100 / videos.length}%` }}
              >
                <div className="video-card" onClick={handleVideoClick}>
                  {showVideoPlayer && video.id === currentVideoData.id ? (
                    <div className="video-player-container">
                      <video
                        ref={videoRef}
                        className="video-player"
                        controls
                        onEnded={handleVideoEnded}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Din browser understøtter ikke video elementet.
                      </video>
                      <button className="close-video-btn" onClick={(e) => {
                        e.stopPropagation();
                        closeVideoPlayer();
                      }}>
                        <img src="/close.svg" alt="Close video" className="close-icon" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="video-thumbnail">
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="video-play-overlay">
                        <div className="play-button">
                            <img 
                              src="/playButtonWhite.svg" 
                              alt="Play"
                              className="play-icon"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="video-info">
                        <h3>{video.title}</h3>
                        {video.description && <p>{video.description}</p>}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows */}
        <div className="video-arrow-up" onClick={prevVideo}>
          <img src="/arrowUp.svg" alt="Previous video" className="arrow-icon" />
        </div>
        <div className="video-arrow-down" onClick={nextVideo}>
          <img src="/arrowDown.svg" alt="Next video" className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;