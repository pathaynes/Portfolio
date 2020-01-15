import React from 'react';
import styles from './Photography.css';
import kyle from '../../assets/kyle.jpg';
import jennica from '../../assets/Jennica.jpg';
import canada from '../../assets/Canada.jpg';

const Photography = () => (
  <>
    <div className={styles.Photography} data-aos="zoom-in">

      <div className={styles.mySlides}>
        <div className={styles.numberText}>1 / 3</div>
        <img src={kyle} />
        <div className={styles.text}>Caption Text</div>
      </div>

      <div className={styles.mySlides}>
        <div className={styles.numberText}>2 / 3</div>
        <img src={jennica}  />
        <div className={styles.text}>Caption Two</div>
      </div>

      <div className={styles.mySlides}>
        <div className={styles.numberText}>3 / 3</div>
        <img src={canada} />
        <div className={styles.text}>Caption Three</div>
      </div>

      <a className={styles.prev} >&#10094;</a>
      <a className={styles.next} >&#10095;</a>
    </div>

    {/* <div>
      <span className={styles.dot} onClick={currentSlide(1)}></span>
      <span className={styles.dot} onClick={currentSlide(2)}></span>
      <span className={styles.dot} onClick={currentSlide(3)}></span>
    </div> */}
  </>
);

export default Photography;
