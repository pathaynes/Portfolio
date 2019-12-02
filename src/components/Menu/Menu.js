import React from 'react';
import styles from './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <ul className={styles.Menu}>
    <li><Link to='/'>HOME</Link></li>
    <li><Link to='/about'>ABOUT</Link></li>
    <li><Link to='/projects'>PROJECTS</Link></li>
    <li><Link to='/contact'>CONTACT</Link></li>
  </ul>

);

export default Menu;

