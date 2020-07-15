import React, { useCallback, useState } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import clsx from 'clsx';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Coin({ data }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleCloseContent = useCallback(() => setIsContentVisible(false), []);

  const handleOpenContent = useCallback(() => setIsContentVisible(true), []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.coin} onClick={handleOpenContent}>
        <h5 className={`big-text fw-bold ${styles.code}`}>{data.code}</h5>
        <h3 className={`title ${styles.symbol}`}>{data.symbol}</h3>
        <h6 className={`small-text fw-bold ${styles.name}`}>{data.name}</h6>
      </div>
      <div
        className={clsx(styles.content, { [styles.visible]: isContentVisible })}
      >
        <div className={styles.header}>
          <h3 className='big-text fw-bold m-right-1'>
            {data.name} ({data.symbol})
          </h3>
          <button
            type='button'
            className={`base-text ${styles.closeBtn}`}
            onClick={handleCloseContent}
          >
            <i className='icofont-close-line' />
          </button>
        </div>
        <div className={styles.innerContent}>
          <h6 className='base-text m-bottom-2'>
            {i18next.t('INTERESTING:CURRENCY_COUNTRIES')}
          </h6>
          <ul className={styles.countries}>
            {data.countries.map((el) => (
              <li
                key={el.name}
                className={`small-text m-bottom-1 ${styles.item}`}
              >
                <span role='img' aria-label={el.name}>
                  {el.flag.emoji}
                </span>
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Coin.propTypes = {
  data: shape({
    _id: string,
    name: string,
    code: string,
    symbol: string,
    countries: arrayOf(
      shape({
        name: string,
        flag: shape({
          emoji: string,
        }),
      })
    ),
  }).isRequired,
};

export default Coin;
