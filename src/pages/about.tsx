import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
      <div className={styles.content}>
        <h1>ABOUT</h1>
          <div className={styles.placeholder}>
            <h2>coming soon...</h2>
            <p>This page is under construction. Content will be added soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;