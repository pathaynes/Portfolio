import React from 'react';
import styles from './Menu.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ open }) => {

  return (
    <ul className={`${styles.Menu} ${open ? styles.open : styles.closed} `}>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/about'>ABOUT</Link></li>
      <li><Link to='/photography'>PHOTOGRAPHY</Link></li>
      <li><Link to='/contact'>CONTACT</Link></li>
    </ul>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Menu;

