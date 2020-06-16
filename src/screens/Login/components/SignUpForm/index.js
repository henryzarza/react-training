import React, { useCallback, useContext } from 'react';
import { string, func } from 'prop-types';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import Input from '@components/Input';
import { AuthContext } from '@components/ProtectedRoute';
import { ERROR_MESSAGES } from '@constants/errorMessages';
import { VALIDATION_SCHEMA, FIELD_NAMES } from '../../constants';
import styles from './styles.module.scss';

const SignUpForm = ({ className, onChangeView }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    clearError,
    setError,
  } = useForm();
  const { dirtyFields } = formState;
  const context = useContext(AuthContext);

  const onSubmit = (data) => {
    console.table(data);
    context.handleSetIsAuth(true);
  };

  const handleChangePasswordRepeat = useCallback(
    (e) => {
      const { password } = getValues();
      const value = e.target.value;
      if (value === password) return clearError('passwordRepeat');
      setError('passwordRepeat', 'notMatch', ERROR_MESSAGES.passwordRepeat);
    },
    [clearError, getValues, setError]
  );

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <h2 className='title m-bottom-4'>{i18next.t('LOGIN:TITLE')}</h2>
      <p className='base-text m-bottom-4'>{i18next.t('LOGIN:SUBTITLE')}</p>
      <Input
        id={FIELD_NAMES.NAME}
        label={i18next.t('LOGIN:NAME')}
        register={register}
        validationSchema={VALIDATION_SCHEMA.NAME}
        errors={errors.name}
        isDirty={dirtyFields.has(FIELD_NAMES.NAME)}
      />
      <Input
        id={FIELD_NAMES.USER_NAME}
        label={i18next.t('LOGIN:USER_NAME')}
        register={register}
        validationSchema={VALIDATION_SCHEMA.USER_NAME}
        errors={errors.username}
        isDirty={dirtyFields.has(FIELD_NAMES.USER_NAME)}
      />
      <Input
        id={FIELD_NAMES.EMAIL}
        label={i18next.t('LOGIN:EMAIL')}
        register={register}
        validationSchema={VALIDATION_SCHEMA.EMAIL}
        errors={errors.email}
        isDirty={dirtyFields.has(FIELD_NAMES.EMAIL)}
      />
      <Input
        id={FIELD_NAMES.PASSWORD}
        label={i18next.t('LOGIN:PASSWORD')}
        type='password'
        register={register}
        validationSchema={VALIDATION_SCHEMA.PASSWORD}
        errors={errors.password}
        isDirty={dirtyFields.has(FIELD_NAMES.PASSWORD)}
      />
      <Input
        id={FIELD_NAMES.PASSWORD_REPEAT}
        label={i18next.t('LOGIN:PASSWORD_REPEAT')}
        type='password'
        register={register}
        validationSchema={VALIDATION_SCHEMA.PASSWORD_REPEAT}
        errors={errors.passwordRepeat}
        isDirty={dirtyFields.has(FIELD_NAMES.PASSWORD_REPEAT)}
        onChange={handleChangePasswordRepeat}
      />
      <button
        type='submit'
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
