import React from 'react';
import styles from './About.css';
import Pat from '../../assets/Pat.png';

const About = () => (
  <>
    <div className={styles.About} >
      <div className={styles.HeadShot} data-aos="zoom-in">
        <img src={Pat}></img>
        <div className={styles.Employment}>
          <p> employment status:</p><p> LOOKING FOR WORK</p>
        </div>
      </div>
      <div className={styles.Stats}>
        <div className={styles.Intro}>
          <p>PORTLAND BASED</p>
          <p>SOFTWARE DEVELOPER</p>
          <p>GRAPHIC DESIGNER -- PHOTOGRAPHER</p>
          <p>DOG DAD</p>
          <p>OUTDOOR ENTHUSIAST</p>
        </div>
        <div className={styles.TechStack}>
          <p>tech mountain</p>
          <section className={styles.Graph}>
            <div><p>Javascript</p><p>85%</p></div>
            <div><p>HTML</p><p>85%</p></div>
            <div><p>CSS</p><p>85%</p></div>
            <div><p>React</p><p>85%</p></div>
            <div><p>Redux</p><p>85%</p></div>
            <div><p>Jest</p><p>85%</p></div>
            <div><p>QUnit</p><p>85%</p></div>
            <div><p>Node.js</p><p>85%</p></div>
            <div><p>Express</p><p>85%</p></div>
            <div><p>Illustrator</p><p>85%</p></div>
            <div><p>Photoshop</p><p>85%</p></div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default About;
