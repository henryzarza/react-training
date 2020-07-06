import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.img404}>404</div>
      <h2 className={`title m-bottom-3 ${styles.textShadow}`}>
        {i18next.t('NOT_FOUND:TITLE')}
      </h2>
      <p className='base-text m-bottom-5'>{i18next.t('NOT_FOUND:MESSAGE')}</p>
    </div>
  );
}

export default NotFound;
