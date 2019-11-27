import React from 'react';
import { bool, func } from 'prop-types';
import styles from './Burger.css';

const Burger = ({ open, setOpen }) => (
  <>
    <div className={styles.Burger} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </div>
  </>
);

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger;
