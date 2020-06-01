import React from 'react';
import i18next from 'i18next';

import logo from '@assets/logo.svg';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h2>{i18next.t('HOME:HOME_TITLE')}</h2>
        <p>{i18next.t('HOME:HOME_DESCRIPTION')}</p>
        <a
          className={styles.appLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {i18next.t('HOME:BUTTON_TEXT')}
        </a>
      </header>
    </div>
  );
}

export default Home;
