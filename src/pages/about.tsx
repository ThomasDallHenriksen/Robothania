import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Robothania</h1>
            <p className={styles.heroSubtitle}>
              Meet the innovative minds behind our cutting-edge robotic solutions
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p className={styles.sectionDescription}>
              We are passionate engineers and innovators dedicated to revolutionizing 
              automation across industries.
            </p>
            
            <div className={styles.teamGrid}>
              {/* Employee 1 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img 
                    src="/Esben.png" 
                    alt="Esben" 
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Esben</h3>
                  <p className={styles.employeeRole}>Lead Engineer</p>
                  <p className={styles.employeeDescription}>
                    Esben brings over 10 years of experience in robotics and automation. 
                    His expertise in mechanical design and system integration has been 
                    instrumental in developing our cutting-edge robotic solutions.
                  </p>
                </div>
              </div>

              {/* Employee 2 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img 
                    src="/Søren.png" 
                    alt="Søren" 
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Søren</h3>
                  <p className={styles.employeeRole}>Technical Director</p>
                  <p className={styles.employeeDescription}>
                    Søren leads our technical vision with a focus on innovation and 
                    quality. His background in advanced manufacturing and robotics 
                    drives our commitment to delivering exceptional automation solutions.
                  </p>
                </div>
              </div>

              {/* Employee 3 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img 
                    src="/Bilge.png" 
                    alt="Bilge" 
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Bilge</h3>
                  <p className={styles.employeeRole}>Designing and development engineer</p>
                  <p className={styles.employeeDescription}>
                    Søren leads our technical vision with a focus on innovation and 
                    quality. His background in advanced manufacturing and robotics 
                    drives our commitment to delivering exceptional automation solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Innovation</h3>
                <p className={styles.valueDescription}>
                  We continuously push the boundaries of what's possible in robotics and automation.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Quality</h3>
                <p className={styles.valueDescription}>
                  Every solution we deliver meets the highest standards of precision and reliability.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Partnership</h3>
                <p className={styles.valueDescription}>
                  We work closely with our clients to understand their unique challenges and goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;