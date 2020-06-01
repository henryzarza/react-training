import React from 'react';
import i18next from 'i18next';

const Login = () => {
  return (
    <section>
      <h2 className='title'>{i18next.t('LOGIN:TITLE')}</h2>
      <p className='base-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis
        dolore neque optio excepturi non, sequi numquam, maxime quidem
        aspernatur voluptate architecto? Molestias, officiis magni cumque facere
        aut animi quidem.
      </p>
    </section>
  );
};

export default Login;
