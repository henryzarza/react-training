import React, { useCallback, useContext } from 'react';
// import i18next from 'i18next';

// import { AuthContext } from '../ProtectedRoute';
import styles from './styles.module.scss';

function ThemeCheckbox() {
  const handleChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <>
      <input
        className={styles.input}
        type='checkbox'
        name='theme'
        id='theme'
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor='theme' />
    </>
  );
}

export default ThemeCheckbox;
