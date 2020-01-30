import React from 'react';
import styles from './TechStack.css';


const TechStack = () => (
  <div className={styles.TechStack}>
    <ul className="animated bounceInDown">
      <h2>Tech Stack</h2>
      <div>
        <li>Languages<span>JavaScript, HTML, CSS, Sql</span></li>
        <li>Front-end<span>React, Redux</span></li>
        <li>Back-end<span>Node.js, Express</span></li>
        <li>Databases<span>Firebase, Mongodb, Mongoose</span></li>
        <li>Practices<span>Agile Development, Ttd, Ddd, Mob/Pair Programming, Clean Code</span></li>
        <li>Design<span>Illustrator, Photoshop</span></li>
      </div>
    </ul>
  </div>
);

export default TechStack;
