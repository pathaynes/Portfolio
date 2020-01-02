import React from 'react';
import styles from './About.css';
import Pat from '../../assets/Pat.jpg';

const About = () => (
  <>
    <div className={styles.About} >
      <img src={Pat} data-aos="zoom-in"></img>
      <p data-aos="zoom-out">Full stack software developer with a passion for coding. Creative at heart, lover of people, I am here on this planet to bring smiles to everyone I encounter. From 2012 to 2018 I helped build a successful brewery from the ground up. In five years we went from concept to receiving entrepreneur of the year in 2017 from the WA business association. My business experience from hands on work and my ability to see the larger picture with projects makes me a teammate worth working with. Since leaving Aslan Brewing Company in the beginning of 2018 I have focused my energy towards digital content and marketing, building a portfolio of photography, graphic design and JavaScript. I am a software developer with a focus in UX and front-end design. </p>
      
    </div>
  </>
);

export default About;
