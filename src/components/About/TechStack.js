import React from 'react';
import styles from './TechStack.css';


const TechStack = () => (
  <div className={styles.TechStack}>
    <ul>
      <li className="animated bounceInDown">Tech Stack</li>
      <p>Languages: javascript, html, css, sql</p>
      <p>Front-end: react, redux</p>
      <p>Back-end: node.js, express</p>
      <p>Databases: firebase, mongodb, mongoose</p>
      <p>Practices: agile development, ttd, ddd, mob/pair programming, clean code</p>
      <p>Design: illustrator, photoshop</p>
    </ul>
  </div>
);

export default TechStack;
