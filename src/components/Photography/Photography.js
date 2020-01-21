import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import styles from './Photography.css';
import kyle from '../../assets/kyle.jpg';
import jennica from '../../assets/Jennica.jpg';
import canada from '../../assets/Canada.jpg';

const Photography = () => (
  <>
    <Carousel data-aos="zoom-in">
      <Carousel.Item>
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
      <Carousel.Item>
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jennica}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </>
);

export default Photography;
