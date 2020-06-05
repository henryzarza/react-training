import React from 'react';
import { string } from 'prop-types';
import styles from './styles.module.scss';

function Input({ id, label, type }) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        id={id}
        name={id}
        autoComplete='off'
        className={`base-text ${styles.input}`}
      />
      <label className='base-text' htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
