import React from 'react';
import i18next from 'i18next';

import logo from '@assets/logo.svg';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h2 className='title'>{i18next.t('HOME:HOME_TITLE')}</h2>
        <p className='base-text'>{i18next.t('HOME:HOME_DESCRIPTION')}</p>
      </header>
      <p className='base-text m-bottom-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        doloremque maxime nisi dolor iste, earum provident blanditiis alias
        voluptatibus, ipsum non quis est corporis ipsa magni quod ullam atque
        doloribus! Minus necessitatibus eaque, aspernatur rem excepturi
        voluptatem ex repellendus earum eos inventore soluta illo nihil totam
        nemo ipsa nisi ducimus! Optio ratione iure nemo incidunt facilis saepe
        iste voluptatibus nostrum. Ex architecto minus laborum! Inventore
        doloremque architecto suscipit esse, ipsum incidunt error eos? Soluta
        eius facere eum optio neque consequatur nisi, quaerat doloribus, quam
        earum itaque officiis dolorem rem? Inventore. Autem, sint error nostrum
        rem ducimus illum magnam qui nobis unde quo ut corrupti saepe ea,
        reiciendis libero sit pariatur maiores iste nesciunt voluptatum aliquam?
        Deserunt totam iste quaerat esse. Mollitia, autem ea? Distinctio ipsam
        molestiae neque ad cum nemo dignissimos accusantium atque eos, ea odio
        veritatis et fugit commodi vitae? Dolore molestias veniam dolor dicta.
        Ipsum quaerat quis pariatur!
      </p>
    </div>
  );
}

export default Home;
