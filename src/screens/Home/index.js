import React from 'react';
import logo from '@assets/logo.svg';
import BlueCircle from '@components/BlueCircle';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          nihil totam, voluptate facilis excepturi corporis magnam, dolores non
          odit libero incidunt voluptatibus ducimus aperiam expedita reiciendis
          debitis sequi sunt! Laborum?
        </p>
        <a
          className={styles.appLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <BlueCircle />
      </header>
    </div>
  );
}

export default Home;
