import React from 'react';
import '../css/ourVision.css';

const OurVision: React.FC = () => {
  return (
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
  );
};

export default OurVision;