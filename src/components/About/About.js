import React from 'react';
import Bio from './Bio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './About.css';
import 'animate.css/animate.css';
import Pat from '../../assets/Pat.png';

const About = () => (
  <>
    <div className={styles.About} >
      <div className={styles.HeadShot} data-aos="zoom-in">
        <img src={Pat}></img>
        <ul className={styles.Social} data-aos="fade-right">
          <li><a href='http://www.linkedin.com/in/pat-haynes/' target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href='https://github.com/pathaynes' target='blank'><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href='https://www.instagram.com/pat_haynes_/' target='blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href='mailto:pathaynes32@gmail.com' target='blank'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href='https://drive.google.com/file/d/1odQB2uj4L6_D96U9cvZZVHjUDQdZH9Nk/view?usp=sharing' target='blank'><FontAwesomeIcon icon={faFileAlt} /></a></li>
        </ul>
      </div>
      <div className={styles.Stats}>
        <div className={styles.Intro} data-aos="fade-left">
          <div>
            <div className="animated bounceInDown">
              <h1>HI,</h1>
            </div>
            <div className="animated bounceInDown">
              <h1>Im</h1>
            </div>
            <div className="animated bounceInDown">
              <h1>PAT</h1>
            </div>
          </div>
          <Bio />
        </div>
      </div>
    </div>
  </>
);

export default About;
