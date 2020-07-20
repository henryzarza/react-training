import React from 'react';
import { bool } from 'prop-types';
import i18next from 'i18next';
import clsx from 'clsx';

import styles from './styles.module.scss';

function Loading({ isSmall }) {
  return (
    <div className={clsx(styles.container, { [styles.small]: isSmall })}>
      <div className={styles.loaderRadar} />
      <h2 className='base-text'>{i18next.t('HOME:LOADING')}</h2>
    </div>
  );
}

Loading.propTypes = {
  isSmall: bool,
};

export default Loading;
