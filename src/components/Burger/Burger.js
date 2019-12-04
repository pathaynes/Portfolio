import React from 'react';
import styles from './Burger.css';
import PropTypes from 'prop-types';

const Burger = ({ open, setOpen }) => {


  return (
    <div className={styles.Burger} >
      <button
        className={`${styles.Button} ${open ? styles.up : styles.down} `}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
        id='drop-button'>
        <div />
        <div />
        <div />
      </button>
    </div >
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Burger;
