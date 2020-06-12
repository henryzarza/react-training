import React from 'react';
import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loaderRadar} />
      <h2 className='base-text'>Loading</h2>
    </div>
  );
}

export default Loading;
