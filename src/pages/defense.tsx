import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/defense.module.css';

const Defense: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.sectionBanner} aria-labelledby="defenseHeading">
          <div className={styles.bannerParallax} role="img" aria-label="Defence banner" />
          <h1 id="defenseHeading" className={styles.sectionBannerTitle}>
            <span className={styles.titleGlow}>DEFENCE</span>
            <span className={styles.titleShine} aria-hidden="true" />
          </h1>
        </section>

        <section className={styles.introWrapper}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Mission-ready automation — reliable, adaptive, and secure.</p>
            <blockquote className={styles.statement}>
              <span className={styles.quoteMark}>“</span>
              <span>
                Designed for operational excellence across complex environments, our defence solutions enhance precision, protect personnel, and improve decision speed.
              </span>
              <br />
              <strong>Precision. Safety. Adaptability. Advantage.</strong>
              <span className={styles.quoteMark}>”</span>
            </blockquote>
          </div>
        </section>

        <section className={styles.benefitsGrid}>
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 1 1-7.07 2.93A9.99 9.99 0 0 1 12 2Zm1 5-5 5 1.414 1.414L13 9.828l3.586 3.586L18 12l-5-5Z"/></svg>
              </span>
              Uncompromising Precision
            </div>
            <p className={styles.benefitText}>Execute every mission with absolute accuracy and reliability.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2l7 4v6c0 5.25-3.438 10.063-7 11-3.562-.937-7-5.75-7-11V6l7-4Zm0 3.236L7 7.382v4.618c0 4.145 2.676 8.18 5 8.975 2.324-.795 5-4.83 5-8.975V7.382l-5-2.146ZM11 13l5-5 1.414 1.414L11 15.828l-3.707-3.707L8.707 10 11 12.293Z"/></svg>
              </span>
              Reduced Risk
            </div>
            <p className={styles.benefitText}>Eliminate human exposure to dangerous or hazardous environments.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 3a9 9 0 1 1-6.364 2.636A8.964 8.964 0 0 1 12 3Zm0 2a7 7 0 1 0 4.95 2.05A6.964 6.964 0 0 0 12 5Zm1 2v4.586l3.293 3.293-1.414 1.414L11 12.414V7h2Z"/></svg>
              </span>
              Rapid Adaptability
            </div>
            <p className={styles.benefitText}>Deploy and reconfigure quickly to meet changing mission parameters.</p>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z"/></svg>
              </span>
              Tactical Advantage
            </div>
            <p className={styles.benefitText}>Gain a decisive edge with custom-engineered solutions.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Defense;