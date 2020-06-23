import React from 'react';
import i18next from 'i18next';
import { Link } from '@reach/router';

import { ROUTES } from '@constants/routes';
import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.img404}>404</div>
      <h2 className={`title m-bottom-3 ${styles.textShadow}`}>
        {i18next.t('NOT_FOUND:TITLE')}
      </h2>
      <p className='base-text m-bottom-5'>{i18next.t('NOT_FOUND:MESSAGE')}</p>
      <Link to={ROUTES.HOME} className='button primary'>
        {i18next.t('NOT_FOUND:BTN_COME_BACK')}
      </Link>
    </div>
  );
}

export default NotFound;
