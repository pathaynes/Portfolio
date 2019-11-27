import React from 'react';
import styles from './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <header>
    <nav className={styles.Menu}>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </nav>
  </header>
);

export default Menu;

