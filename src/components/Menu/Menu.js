import React from 'react';
import styles from './Menu.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ open }) => {

  return (
    <ul className={`${styles.Menu} ${open ? styles.open : styles.closed} `}>
      <div className={styles.Links}>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>who</Link></li>
        <li><Link to='/photography'>what</Link></li>
        <li><Link to='/contact'>how</Link></li>
      </div>
    </ul>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Menu;

