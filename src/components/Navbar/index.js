import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <section className={styles.navbarContainer}>
      <div className={styles.content}>
        <h2 className='subtitle m-bottom-3'>{i18next.t('LOGIN:TITLE')}</h2>
        <p className='base-text m-bottom-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          harum vel distinctio nobis fuga unde. Dolorem, facilis earum? Numquam,
          corrupti officiis? Corrupti, obcaecati voluptatem cumque quidem quam
          enim voluptatibus?
        </p>
        <a
          rel='nofollow external'
          target='blank'
          href='https://github.com/lennertVanSever/graphcountries'
          className='small-text link m-bottom-1'
        >
          lennertVanSever/graphcountries repository
        </a>
        <small className='small-text m-bottom-1'>
          Made with love ♥️ by Henry Zarza
        </small>
      </div>
      <nav className={styles.navbar}></nav>
    </section>
  );
}

export default Navbar;
