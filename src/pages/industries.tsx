import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../css/industries.module.css';

const Industries: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            className={styles.heroLogo}
            src="/Robothania_logo_White.png"
            alt="Robothania logo"
          />
        </div>

        <section className={styles.introWrapper}>
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

        <section className={styles.cards}>
          <Link to="/medtech" className={styles.card} aria-label="Medtech">
            <img src="/medtechGreenTint.png" alt="Medtech" className={styles.cardImg} />
            <div className={styles.cardOverlay}>MEDTECH</div>
          </Link>
          <Link to="/industrial" className={styles.card} aria-label="Industrial">
            <img src="/industrialGreenTint.png" alt="Industrial" className={styles.cardImg} />
            <div className={styles.cardOverlay}>INDUSTRIAL</div>
          </Link>
          <Link to="/defense" className={styles.card} aria-label="Defence">
            <img src="/defence_green_brighter.png" alt="Defence" className={styles.cardImg} />
            <div className={styles.cardOverlay}>DEFENCE</div>
          </Link>
        </section>

        
      </main>
    </div>
  );
};

export default Industries;