import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/medtech.module.css';

const Medtech: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay works on supported browsers
    video.muted = true;
    const tryPlay = () => {
      video.play().catch(() => {/* ignore */});
    };

    // Intersection observer to play when visible, pause when not
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    // Attempt to start if already in view
    tryPlay();

    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.sectionBanner} aria-labelledby="medtechHeading">
          <div className={styles.bannerParallax} role="img" aria-label="Medtech banner" />
          <h1 id="medtechHeading" className={styles.sectionBannerTitle}>
            <span className={styles.titleGlow}>MEDTECH</span>
            <span className={styles.titleShine} aria-hidden="true" />
          </h1>
        </section>

        <section className={`${styles.introWrapper} ${styles.reveal}`}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Our technology is a specialized, single-purpose systems — built to perform each task perfectly.</p>
            <blockquote className={styles.statement}>
              <span className={styles.quoteMark}>“</span>
              <span>
                At Robothania, we bring the future to you. Our technology isn’t just a product — it’s a platform, fully adaptable to medtech, defense, or industrial workflows.
              </span>
              <br />
              <strong>Precision. Efficiency. Innovation. Accessibility.</strong>
              <span className={styles.quoteMark}>”</span>
            </blockquote>
          </div>
        </section>

        <section className={`${styles.benefitsGrid} ${styles.reveal}`}>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2a1 1 0 0 1 1 1v1.055A8.002 8.002 0 0 1 19.945 11H21a1 1 0 1 1 0 2h-1.055A8.002 8.002 0 0 1 13 19.945V21a1 1 0 1 1-2 0v-1.055A8.002 8.002 0 0 1 4.055 13H3a1 1 0 1 1 0-2h1.055A8.002 8.002 0 0 1 11 4.055V3a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 0 12A6 6 0 0 0 12 6Zm0 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V10a1 1 0 0 1 1-1Z"/>
                </svg>
              </span>
              Unmatched Precision
            </div>
            <p className={styles.benefitText}>Reduce errors and improve patient outcomes.</p>
            <video ref={videoRef} className={styles.benefitVideo} controls muted loop playsInline autoPlay preload="auto">
              <source src="/Robot%20medtech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2l7 4v6c0 5.25-3.438 10.063-7 11-3.562-.937-7-5.75-7-11V6l7-4Zm0 3.236L7 7.382v4.618c0 4.145 2.676 8.18 5 8.975 2.324-.795 5-4.83 5-8.975V7.382l-5-2.146ZM11 13l5-5 1.414 1.414L11 15.828l-3.707-3.707L8.707 10 11 12.293Z"/>
                </svg>
              </span>
              Regulatory Confidence
            </div>
            <p className={styles.benefitText}>Built for compliance in a constantly changing landscape.</p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 3a9 9 0 1 1-6.364 2.636A8.964 8.964 0 0 1 12 3Zm0 2a7 7 0 1 0 4.95 2.05A6.964 6.964 0 0 0 12 5Zm1 2v4.586l3.293 3.293-1.414 1.414L11 12.414V7h2Z"/>
                </svg>
              </span>
              Operational Excellence
            </div>
            <p className={styles.benefitText}>Boost efficiency and scalability.</p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 1 1 14 0v1H5Zm13-9a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-12 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"/>
                </svg>
              </span>
              Empowered Workforce
            </div>
            <p className={styles.benefitText}>Free up your experts to focus on what matters most.</p>
        </div>
        </section>
      </main>
    </div>
  );
};

export default Medtech;