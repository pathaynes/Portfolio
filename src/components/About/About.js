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
        <div className={styles.TechStack} data-aos="zoom-out">
          <p>tech mountain</p>
          <section className={styles.Graph}>
            <div className={styles.JavaScript}><p>Javascript</p><div></div><div><p>85%</p></div></div>
            <div className={styles.Html}><p>HTML</p><div></div><div><p>93%</p></div></div>
            <div className={styles.Css}><p>CSS</p><div></div><div><p>88%</p></div></div>
            <div className={styles.React}><p>React</p><div></div><div><p>83%</p></div></div>
            <div className={styles.Redux}><p>Redux</p><div></div><div><p>70%</p></div></div>
            <div className={styles.Jest}><p>Jest</p><div>100%</div></div>
            <div className={styles.Qunit}><p>QUnit</p><div>100%</div></div>
            <div className={styles.Node}><p>Node.js</p><div></div><div><p>70%</p></div></div>
            <div className={styles.Express}><p>Express</p><div></div><div><p>75%</p></div></div>
            <div className={styles.Illustrator}><p>Illustrator</p><div></div><div><p>95%</p></div></div>
            <div className={styles.Photoshop}><p>Photoshop</p><div></div><div><p>90%</p></div></div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default About;
