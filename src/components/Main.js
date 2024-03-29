import React from 'react';
import SnowStorm from 'react-snowstorm';
import styles from './Main.css';

const Main = () => (
  <>
    <div className={styles.Background} >
      <SnowStorm />
      <div className={styles.Main} data-aos="zoom-in">
        <div className={styles.Container} >
          <h1>
            <span>p</span>
            <span>a</span>
            <span>t</span>
          </h1>
          <h1>
            <span>H</span>
            <span>a</span>
            <span>y</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
          </h1>
        </div>
      </div>
    </div>
  </>
);

export default Main;
