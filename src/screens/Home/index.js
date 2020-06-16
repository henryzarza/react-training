import React, { useContext, useCallback } from 'react';
import i18next from 'i18next';

import { AuthContext } from '@components/ProtectedRoute';
import logo from '@assets/logo.svg';
import styles from './styles.module.scss';

function Home() {
  const { handleSetIsAuth } = useContext(AuthContext);

  const handleLogout = useCallback(() => handleSetIsAuth(false), [
    handleSetIsAuth,
  ]);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h2 className='title'>{i18next.t('HOME:HOME_TITLE')}</h2>
        <p className='base-text'>{i18next.t('HOME:HOME_DESCRIPTION')}</p>
        <button
          type='button'
          className='button primary base-text fw-bold m-bottom-4'
          onClick={handleLogout}
        >
          {i18next.t('HOME:BUTTON_TEXT')}
        </button>
      </header>
    </div>
  );
}

export default Home;
