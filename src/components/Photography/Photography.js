import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Photography.css';
import kyle from '../../assets/kyle.jpg';
import jabbaDice from '../../assets/JABBA-DICE.png';
import canada from '../../assets/Canada.jpg';

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
            src={canada}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.Second}>
          <img
            className="d-block w-100"
            src={kyle}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
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
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Photography;
