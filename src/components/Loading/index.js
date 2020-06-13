import React from 'react';
import i18next from 'i18next';
import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loaderRadar} />
      <h2 className='base-text'>{i18next.t('HOME:LOADING')}</h2>
    </div>
  );
}

export default Loading;
