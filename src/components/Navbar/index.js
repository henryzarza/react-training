import React, { useCallback } from 'react';
import i18next from 'i18next';
import { Link } from '@reach/router';

import { NAVBAR_ROUTES } from '../../constants/routes';
import styles from './styles.module.scss';

function Navbar() {
  const isLinkActive = useCallback(
    ({ isCurrent }) =>
      // eslint-disable-next-line no-useless-computed-key
      isCurrent ? { ['data-active']: true } : {},
    []
  );

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={`title m-bottom-3 ${styles.title}`}>
          {i18next.t('LOGIN:TITLE')}
        </h2>
        <p className={`base-text m-bottom-6 ${styles.paragraph}`}>
          A simple application using React (with hooks, portals, context, and
          between other interesting things), this app is just a demo becasue I
          wanna learn to connect GraphQL APIs to React apps.
        </p>
        <a
          rel='nofollow external'
          target='blank'
          href='https://github.com/lennertVanSever/graphcountries'
          className='small-text link m-bottom-2 fw-bold'
        >
          Repository: lennertVanSever/graphcountries
        </a>
        <small className='small-text m-bottom-1'>
          Made with love
          <span className='m-left-1' role='img' aria-label='love'>
            ♥️
          </span>
          by Henry Zarza
        </small>
      </div>
      <nav className={styles.navbar}>
        {NAVBAR_ROUTES.map((el) => (
          <Link
            key={el.route}
            to={el.route}
            className={`big-text fw-thin uppercase-text text-center ${styles.navbarItem}`}
            getProps={isLinkActive}
          >
            {el.text}
          </Link>
        ))}
        <button
          type='button'
          className={`big-text fw-thin uppercase-text text-center ${styles.navbarItem}`}
        >
          Logout
        </button>
      </nav>
    </section>
  );
}

export default Navbar;
