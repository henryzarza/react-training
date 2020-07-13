import React, { useCallback, useContext } from 'react';
import i18next from 'i18next';
import { Link } from '@reach/router';

import { NAVBAR_ROUTES } from '@constants/routes';
import { AuthContext } from '../ProtectedRoute';
import styles from './styles.module.scss';

function Navbar() {
  const { handleSetIsAuth } = useContext(AuthContext);

  const isLinkActive = useCallback(
    ({ isCurrent }) =>
      // eslint-disable-next-line no-useless-computed-key
      isCurrent ? { ['data-active']: true } : {},
    []
  );

  const handleLogout = useCallback(() => handleSetIsAuth(false), [
    handleSetIsAuth,
  ]);

  return (
    <>
      <section className={styles.content} tabIndex='-1'>
        <h2 className={`title m-bottom-3 ${styles.title}`}>
          {i18next.t('LOGIN:TITLE')}
        </h2>
        <p className={`base-text m-bottom-6 ${styles.paragraph}`}>
          {i18next.t('NAVBAR:DESCRIPTION')}
        </p>
        <a
          rel='nofollow external'
          target='blank'
          href='https://github.com/lennertVanSever/graphcountries'
          className='small-text link m-bottom-2 fw-bold'
        >
          {i18next.t('NAVBAR:REPOSITORY')} lennertVanSever/graphcountries
        </a>
        <small className='small-text m-bottom-1'>
          {i18next.t('NAVBAR:MADE_TEXT')}
          <span className='m-left-1' role='img' aria-label='love'>
            ♥️
          </span>
          {i18next.t('NAVBAR:MADE_BY')}
        </small>
      </section>
      <nav className={styles.navbar}>
        {NAVBAR_ROUTES.map((el) => (
          <Link
            key={el.route}
            to={el.route}
            className={`big-text fw-thin uppercase-text text-center ${styles.navbarItem}`}
            getProps={isLinkActive}
          >
            {i18next.t(el.text)}
          </Link>
        ))}
        <button
          type='button'
          className={`big-text fw-thin uppercase-text text-center ${styles.navbarItem}`}
          onClick={handleLogout}
        >
          {i18next.t('NAVBAR:LOGOUT')}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
