import React from 'react';
import styles from './Header.css';


const Header = () => (
  <header className={styles.Header}>
    <h1>Portfolio Page</h1>
    <nav>
      <a>HOME</a>
      <a>ABOUT</a>
      <a>PROJECTS</a>
      <a>CONTACT</a>
    </nav>
  </header>
);

export default Header;

