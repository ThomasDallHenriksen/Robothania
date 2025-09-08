import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/defence.module.css';

const Defence: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>DEFENCE</h1>
          <div className={styles.placeholder}>
            <h2>Kommer snart...</h2>
            <p>Denne side er under udvikling. Indhold vil blive tilføjet snart.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Defence;