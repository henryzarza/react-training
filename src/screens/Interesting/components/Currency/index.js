import React from 'react';
import { string, shape } from 'prop-types';

import styles from './styles.module.scss';

function Currency({ data }) {
  console.log(data);
  return (
    <div className={styles.currency}>
      <h5 className={`big-text fw-bold ${styles.code}`}>{data.code}</h5>
      <h3 className={`title ${styles.symbol}`}>{data.symbol}</h3>
      <h6 className={`small-text fw-bold ${styles.name}`}>{data.name}</h6>
    </div>
  );
}

Map.propTypes = {
  data: shape({
    _id: string,
    name: string,
    code: string,
    symbol: string,
  }).isRequired,
};

export default Currency;
