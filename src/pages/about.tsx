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
                    My name is Bilge. I have been involved in shaping the global development of robotics. As a design engineer at Universal Robots, I was a central part of the team that developed the first UR10 robot – a robot that has since helped define the industry.
                    Since then, I have founded OnRobot, where we refined the art of developing collaborative robot applications.

                    Now I am ready for my next chapter, where I will focus all my knowledge, experience, and know-how on designing and building the next generation of robot arms.
                    My mission with Robothania is simple: to take my technical insight and aesthetic sense and turn it into concrete, targeted robotic solutions that give our customers a qualitative advantage.

                    A slogan running on the picture or something "The designer in a funny manner”

                  </p>
                </div>
              </div>

              {/* Employee 4 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img
                    src="/user.png"
                    alt="Mads"
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Mads</h3>
                  <p className={styles.employeeRole}>Programmer</p>
                  <p className={styles.employeeDescription}>
                    As a civil engineer in drones and autonomous systems, I have a strong passion for developing complex embedded systems completely from scratch.
                    My specialization has given me a solid understanding of both hardware and software, which I convert into practical and innovative solutions.
                    I have a particular interest in advanced motor control solutions, where the interaction between hardware and software is crucial. My competencies span widely and include, among other things, PCB design, optimized embedded programming, digital signal processing and control systems.
                    Curiosity and professionalism are the foundation in my work and constitute the basis for the robot arms I develop. The hardware and software I develop are designed with focus on efficiency, reliability and precision.

                  </p>
                </div>
              </div>

              {/* Employee 5 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img
                    src="/user.png"
                    alt="Victor"
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Victor</h3>
                  <p className={styles.employeeRole}>Programmer</p>
                  <p className={styles.employeeComingSoon}>
                   Comming soon
                  </p>
                </div>
              </div>

              {/* Employee 6 */}
              <div className={styles.employeeCard}>
                <div className={styles.portraitContainer}>
                  <img
                    src="user.png"
                    alt="Rasha"
                    className={styles.portrait}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <h3 className={styles.employeeName}>Rasha</h3>
                  <p className={styles.employeeRole}>Project Coordinator</p>
                  <p className={styles.employeeComingSoon}>
                   comming soon
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