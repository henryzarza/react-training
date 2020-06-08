import React from 'react';
import i18next from 'i18next';
import { string, func } from 'prop-types';
import Input from '@components/Input';
import styles from './styles.module.scss';

const LoginForm = ({ className, onChangeView }) => {
  return (
    <form className={className}>
      <h2 className='title m-bottom-4'>{i18next.t('LOGIN:TITLE')}</h2>
      <p className='base-text m-bottom-4'>{i18next.t('LOGIN:SUBTITLE')}</p>
      <Input id='email' label={i18next.t('LOGIN:EMAIL')} />
      <Input
        id='password'
        label={i18next.t('LOGIN:PASSWORD')}
        type='password'
      />
      <button
        type='button'
        className='button primary base-text fw-bold m-bottom-4'
      >
        {i18next.t('LOGIN:BTN_LOGIN')}
      </button>
      <button
        type='button'
        className={`small-text fw-bold link ${styles.link}`}
        onClick={onChangeView}
      >
        {i18next.t('LOGIN:CREATE_ACCOUNT')}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  className: string.isRequired,
  onChangeView: func.isRequired,
};

export default LoginForm;
