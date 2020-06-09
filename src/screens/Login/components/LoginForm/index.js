import React from 'react';
import i18next from 'i18next';
import { string, func } from 'prop-types';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import { VALIDATION_SCHEMA } from '../../constants';
import styles from './styles.module.scss';

const LoginForm = ({ className, onChangeView }) => {
  const { register, handleSubmit, errors, formState } = useForm();
  const { dirtyFields } = formState;

  const onSubmit = (data) => console.table(data);

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <h2 className='title m-bottom-4'>{i18next.t('LOGIN:TITLE')}</h2>
      <p className='base-text m-bottom-4'>{i18next.t('LOGIN:SUBTITLE')}</p>
      <Input
        id='email'
        label={i18next.t('LOGIN:EMAIL')}
        register={register}
        validationSchema={VALIDATION_SCHEMA.EMAIL}
        errors={errors.email}
        isDirty={dirtyFields.has('email')}
      />
      <Input
        id='password'
        label={i18next.t('LOGIN:PASSWORD')}
        type='password'
        register={register}
        validationSchema={VALIDATION_SCHEMA.PASSWORD}
        errors={errors.password}
        isDirty={dirtyFields.has('password')}
      />
      <button
        type='submit'
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
