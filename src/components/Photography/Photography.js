import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Photography.css';
import heartbot from '../../assets/heartbot.png';
import jabbaDice from '../../assets/JABBA-DICE.png';
import CryptoTrades from '../../assets/CryptoTrades.png';
import chroma from '../../assets/CHROMA.png';

const Photography = () => {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className={styles.Photography}>
      <Carousel data-aos="zoom-in" activeIndex={index} direction={direction} onSelect={handleSelect} className={styles.Carousel}>
        <Carousel.Item className={styles.First}>
          <img
            className="d-block w-100"
            src={CryptoTrades}
            alt="First slide"
          />
          <Carousel.Caption className={styles.FirstCaption}>
            <a href='https://crypto-trades-2020.netlify.com/login' target='blank' rel="noopener noreferrer"><h3>Launch</h3></a>
            <p>Full Stack application, Fantasy crypto currency trading app, built with React, Redux, Node.js, MongoDB</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Second}>
          <img
            className="d-block w-100"
            src={heartbot}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://github.com/Healing-HeartBot/healing-heart-bot' target='blank' rel="noopener noreferrer"><h3>Launch</h3></a>
            <p>Twitter Bot back-end project.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Third}>
          <img
            className="d-block w-100"
            src={jabbaDice}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://team-jabba.github.io/html/coverpage.html' target='blank' rel="noopener noreferrer"><h3>Launch</h3></a>
            <p>Vanilla JavaScript dice game, beat all the bosses to win!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Fourth}>
          <img
            className="d-block w-100"
            src={chroma}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://chroma-game.herokuapp.com/index.html?redirect=%2F' target='blank' rel="noopener noreferrer"><h3>Launch</h3></a>
            <p>Full-Stack Vanilla JavaScript color matching game to relax you when stressed.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Photography;
