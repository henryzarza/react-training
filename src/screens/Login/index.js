import React from 'react';
import i18next from 'i18next';
import Input from '@components/Input';
import styles from './styles.module.scss';

const Login = () => {
  return (
    <section className={styles.container}>
      <section className={styles.leftContainer}>
        <form className={styles.leftContent}>
          <h2 className={`title ${styles.mb1}`}>{i18next.t('LOGIN:TITLE')}</h2>
          <p className={`base-text ${styles.mb1}`}>
            {i18next.t('LOGIN:SUBTITLE')}
          </p>
          <Input id='email' label={i18next.t('LOGIN:EMAIL')} />
          <Input
            id='password'
            label={i18next.t('LOGIN:PASSWORD')}
            type='password'
          />
          <button
            type='button'
            className={`button primary base-text fw-bold ${styles.mb1}`}
          >
            {i18next.t('LOGIN:BTN_LOGIN')}
          </button>
          <button
            type='button'
            className={`small-text fw-bold link ${styles.link}`}
          >
            {i18next.t('LOGIN:CREATE_ACCOUNT')}
          </button>
        </form>
      </section>
      <section className={styles.rightContainer} />
    </section>
  );
};

export default Login;
