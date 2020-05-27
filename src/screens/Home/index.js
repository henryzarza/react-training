import React, { useCallback, useState } from 'react';
import i18next from 'i18next';

import logo from '@assets/logo.svg';
import BlueCircle from '@components/BlueCircle';
import styles from './styles.module.scss';

function Home() {
  const [lng, setLng] = useState('en');

  const changeLng = useCallback(() => {
    const newLng = lng === 'es' ? 'en' : 'es';
    i18next.changeLanguage(newLng);
    setLng(newLng);
  }, [lng]);

  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <img src={logo} className={styles['app-logo']} alt='logo' />
        <h2>{i18next.t('HOME:HOME_TITLE')}</h2>
        <h2>Language: {lng}</h2>
        <p>{i18next.t('HOME:HOME_DESCRIPTION')}</p>
        <button
          type='button'
          className={styles['app-link']}
          onClick={changeLng}
        >
          {i18next.t('HOME:BUTTON_TEXT')}
        </button>
        <BlueCircle />
      </header>
    </div>
  );
}

export default Home;
