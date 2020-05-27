import React from 'react';
import i18next from 'i18next';

import logo from '@assets/logo.svg';
import BlueCircle from '@components/BlueCircle';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <img src={logo} className={styles['app-logo']} alt='logo' />
        <h2>{i18next.t('HOME:HOME_TITLE')}</h2>
        <p>{i18next.t('HOME:HOME_DESCRIPTION')}</p>
        <a
          className={styles['app-link']}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {i18next.t('HOME:BUTTON_TEXT')}
        </a>
        <BlueCircle />
      </header>
    </div>
  );
}

export default Home;
