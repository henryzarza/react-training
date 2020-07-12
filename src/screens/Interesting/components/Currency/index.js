import React, { useCallback } from 'react';
import { string, shape, func } from 'prop-types';

import { CURRENCY_SELECTED_DIFFERENCE } from '../../constants';
import styles from './styles.module.scss';

function Currency({ data, onClick }) {
  const handleClick = useCallback(
    (e) => {
      const { x, y } = e.target.getBoundingClientRect();
      if (x && y) {
        onClick({
          x: `${(x - CURRENCY_SELECTED_DIFFERENCE).toFixed(2)}px`,
          y: `${y.toFixed(2)}px`,
        });
      }
    },
    [onClick]
  );

  return (
    <div className={styles.currency} onClick={handleClick}>
      <h5 className={`big-text fw-bold ${styles.code}`}>{data.code}</h5>
      <h3 className={`title ${styles.symbol}`}>{data.symbol}</h3>
      <h6 className={`small-text fw-bold ${styles.name}`}>{data.name}</h6>
    </div>
  );
}

Currency.propTypes = {
  data: shape({
    _id: string,
    name: string,
    code: string,
    symbol: string,
  }).isRequired,
  onClick: func.isRequired,
};

export default Currency;
