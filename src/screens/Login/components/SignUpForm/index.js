import React from 'react';
import { string, func } from 'prop-types';
import i18next from 'i18next';
import Input from '@components/Input';
import styles from './styles.module.scss';

const SignUpForm = ({ className, onChangeView }) => {
  return (
    <form className={className}>
      <h2 className='title m-bottom-4'>{i18next.t('LOGIN:TITLE')}</h2>
      <p className='base-text m-bottom-4'>{i18next.t('LOGIN:SUBTITLE')}</p>
      <Input id='name' label={i18next.t('LOGIN:NAME')} />
      <Input id='username' label={i18next.t('LOGIN:USER_NAME')} />
      <Input id='email' label={i18next.t('LOGIN:EMAIL')} />
      <Input
        id='password'
        label={i18next.t('LOGIN:PASSWORD')}
        type='password'
      />
      <Input
        id='passwordRepeat'
        label={i18next.t('LOGIN:PASSWORD_REPEAT')}
        type='password'
      />
      <button
        type='button'
        className='button primary base-text fw-bold m-bottom-4'
      >
        {i18next.t('LOGIN:BTN_SIGN_IN')}
      </button>
      <button
        type='button'
        className={`small-text fw-bold link ${styles.link}`}
        onClick={onChangeView}
      >
        {i18next.t('LOGIN:LINK_LOGIN')}
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  className: string.isRequired,
  onChangeView: func.isRequired,
};

export default SignUpForm;
