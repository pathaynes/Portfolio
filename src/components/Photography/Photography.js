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
    < div className={styles.Photography}>
      <Carousel data-aos="zoom-in" activeIndex={index} direction={direction} onSelect={handleSelect} className={styles.Carousel}>
        <Carousel.Item className={styles.First}>
          <img
            className="d-block w-100"
            src={CryptoTrades}
            alt="First slide"
          />
          <Carousel.Caption>
            <a href='https://crypto-trades-2020.netlify.com/login'><h3>Launch App</h3></a>
            <p>Crypto currency trading app, built with React, Redux, Node.js, MongoDB</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Second}>
          <img
            className="d-block w-100"
            src={heartbot}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://github.com/Healing-HeartBot/healing-heart-bot'><h3>Launch App</h3></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Third}>
          <img
            className="d-block w-100"
            src={jabbaDice}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://team-jabba.github.io/html/coverpage.html'><h3>Launch App</h3></a>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Fourth}>
          <img
            className="d-block w-100"
            src={chroma}
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href='https://chroma-game.herokuapp.com/index.html?redirect=%2F'><h3>Launch App</h3></a>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Photography;
