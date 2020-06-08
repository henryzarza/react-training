import React, { useCallback, useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import styles from './styles.module.scss';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeView = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin, setIsLogin]);

  const Screen = isLogin ? LoginForm : SignUpForm;

  return (
    <section className={styles.container}>
      <section className={styles.leftContainer}>
        <Screen
          className={styles.leftContent}
          onChangeView={handleChangeView}
        />
      </section>
      <section className={styles.rightContainer} />
    </section>
  );
};

export default Login;
