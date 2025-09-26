import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/industrial.module.css';

const Industrial: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.sectionBanner} aria-labelledby="industrialHeading">
          <div className={styles.bannerParallax} role="img" aria-label="Industrial banner" />
          <h1 id="industrialHeading" className={styles.sectionBannerTitle}>
            <span className={styles.titleGlow}>INDUSTRIAL</span>
            <span className={styles.titleShine} aria-hidden="true" />
          </h1>
        </section>

        <section className={styles.introWrapper}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Built for demanding production environments — reliable, scalable, and precise.</p>
            <blockquote className={styles.statement}>
              <span className={styles.quoteMark}>“</span>
              <span>
                Industrial automation from Robothania delivers consistent quality and throughput, optimized for safety and uptime across flexible manufacturing lines.
              </span>
              <br />
              <strong>Throughput. Quality. Flexibility. Uptime.</strong>
              <span className={styles.quoteMark}>”</span>
            </blockquote>
          </div>
        </section>

        <section className={styles.benefitsGrid}>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3 6h18v2H3V6Zm2 4h14v2H5v-2Zm-2 4h18v2H3v-2Zm2 4h10v2H5v-2Z"/></svg>
              </span>
              Unrivaled Agility
            </div>
            <p className={styles.benefitText}>Adapt instantly to new demands and unforeseen disruptions.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 1 1-7.07 2.93A9.99 9.99 0 0 1 12 2Zm1 5-5 5 1.414 1.414L13 9.828l3.586 3.586L18 12l-5-5Z"/></svg>
              </span>
              Peak Efficiency
            </div>
            <p className={styles.benefitText}>Reduce waste and lower operational costs with perfect precision.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 3l4 7H8l4-7Zm0 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/></svg>
              </span>
              Workplace Safety
            </div>
            <p className={styles.benefitText}>Eliminate human exposure to dangerous or repetitive tasks.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z"/></svg>
              </span>
              Empowered Workforce
            </div>
            <p className={styles.benefitText}>Free your team to focus on high-value, complex problem-solving.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industrial;