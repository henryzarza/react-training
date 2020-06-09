import React from 'react';
import { string, func, shape, bool, number, instanceOf } from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Input({
  id,
  label,
  type,
  register,
  validationSchema,
  errors,
  isDirty,
}) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        id={id}
        name={id}
        autoComplete='off'
        className={clsx(`base-text ${styles.input}`, {
          [styles.filled]: isDirty,
        })}
        ref={register(validationSchema)}
      />
      <label className='base-text' htmlFor={id}>
        {label}
      </label>
      {errors && (
        <small className={`small-text fw-bold ${styles.error}`}>
          {errors.message}
        </small>
      )}
    </div>
  );
}

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  register: func.isRequired,
  type: string,
  validationSchema: shape({
    required: string,
    maxLength: shape({
      value: number,
      message: string,
    }),
    minLength: shape({
      value: number,
      message: string,
    }),
    pattern: shape({
      value: instanceOf(RegExp),
      message: string,
    }),
  }),
  errors: shape({
    message: string,
  }),
  isDirty: bool,
};

Input.defaultProps = {
  type: 'text',
  validationSchema: {},
};

export default Input;
