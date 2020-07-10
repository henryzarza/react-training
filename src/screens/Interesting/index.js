import React, { useState } from 'react';
import clsx from 'clsx';

import Tabs from './components/Tabs';
import Currency from './components/Currency';
import styles from './styles.module.scss';
import { TABS_CONFIG, MOCK_CURRENCY_DATA } from './constants';

function Interesting() {
  const [viewType, setViewType] = useState(TABS_CONFIG[0].id);
  const [currencies] = useState(MOCK_CURRENCY_DATA);

  return (
    <section className={styles.container}>
      <Tabs value={viewType} onSelected={setViewType} />
      <div
        className={clsx(styles.currencyContainer, {
          [styles.hide]: viewType === TABS_CONFIG[1].id,
        })}
      >
        {currencies.map((el) => (
          <Currency key={el._id} data={el} />
        ))}
      </div>
    </section>
  );
}

export default Interesting;
