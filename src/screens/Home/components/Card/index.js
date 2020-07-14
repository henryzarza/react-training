import React from 'react';

import styles from './styles.module.scss';

function Card() {
  return (
    <div className={styles.container}>
      <h5 className='big-text'>Colombia</h5>
      <p className='base-text'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        veniam illo sequi, amet quisquam accusamus doloribus accusantium
        suscipit, maiores iure ipsa quidem animi! Facere, quas corporis. Dicta
        temporibus saepe ex.
      </p>
    </div>
  );
}

export default Card;
