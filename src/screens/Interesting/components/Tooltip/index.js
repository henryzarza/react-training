import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Tooltip({ coordinates }) {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (coordinates) {
      setIsVisible(true);
      contentRef.current.style.transform = `translate(${coordinates.x}, ${coordinates.y})`;
    }
  }, [coordinates]);

  const handleClick = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div
      ref={contentRef}
      className={clsx(styles.content, { [styles.visible]: isVisible })}
      onClick={handleClick}
    >
      <div className={styles.innerContent}>
        <h3 className='big-text m-bottom-2 fw-bold'>Euro (€)</h3>
        <h6 className='base-text m-bottom-2'>
          {i18next.t('INTERESTING:CURRENCY_COUNTRIES')}
        </h6>
        <ul className={styles.countries}>
          <li className={`small-text m-bottom-1 ${styles.item}`}>
            <span role='img' aria-label='Zimbabwe'>
              🇿🇼
            </span>
            Zimbabwe (Zimbabwe)
          </li>
          <li className={`small-text m-bottom-1 ${styles.item}`}>
            <span role='img' aria-label='Zimbabwe'>
              🇿🇼
            </span>
            Zimbabwe(Zimbabwe)
          </li>
          <li className={`small-text m-bottom-1 ${styles.item}`}>
            <span role='img' aria-label='Zimbabwe'>
              🇿🇼
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima nobis iure necessitatibus quae iusto molestiae non, eum nulla
            sapiente. Laudantium tenetur enim eum nisi repudiandae ex porro
            ipsum aut!
          </li>
          <li className={`small-text m-bottom-1 ${styles.item}`}>
            <span role='img' aria-label='Zimbabwe'>
              🇿🇼
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima nobis iure necessitatibus quae iusto molestiae non, eum nulla
            sapiente. Laudantium tenetur enim eum nisi repudiandae ex porro
            ipsum aut!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;
