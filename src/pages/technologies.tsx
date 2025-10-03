import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/technologies.module.css';

const Technologies: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
      <div className={styles.content}>
        <h1>Technologies</h1>
          <div className={styles.placeholder}>
            <h2>comming soon...</h2>
            <p>This page is under construction. Content will be added soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technologies;