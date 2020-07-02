import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Searcher() {
  return (
    <div className={`m-bottom-8 m-top-3 ${styles.container}`}>
      <input
        type='text'
        className={`big-text ${styles.input}`}
        placeholder={i18next.t('HOME:SEARCHER')}
      />
      <i className={`big-text icofont-search ${styles.icon}`} />
    </div>
  );
}

export default Searcher;
