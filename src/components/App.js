import React from 'react';
import Header from './Header';
import Main from './Main';
import styles from './App.css';

export default function App() {
  return (
    <section className={styles.App}>
      <Header />
      <Main />
    </section>
  );
}
