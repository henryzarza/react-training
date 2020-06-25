import React from 'react';
// import i18next from 'i18next';

import Header from './components/Header';
import Card from './components/Card';
import styles from './styles.module.scss';

function Home() {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Home;
