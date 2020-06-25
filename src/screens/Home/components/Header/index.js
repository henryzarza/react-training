import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={`m-bottom-6 ${styles.header}`}>
      <h2 className='small-title'>{i18next.t('HOME:HOME_TITLE')}</h2>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.input}
          type='radio'
          name='content'
          id='card'
          value='card'
        />
        <label className='big-text m-right-1' htmlFor='card'>
          <i className='icofont-ui-v-card' />
        </label>
        <input
          className={styles.input}
          type='radio'
          name='content'
          id='map'
          value='map'
        />
        <label className='big-text' htmlFor='map'>
          <i className='icofont-ui-map' />
        </label>
      </div>
    </header>
  );
}

export default Header;
