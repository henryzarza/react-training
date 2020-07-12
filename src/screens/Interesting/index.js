import React, { useState } from 'react';
import clsx from 'clsx';

import Tabs from './components/Tabs';
import Currency from './components/Currency';
import Tooltip from './components/Tooltip';
import styles from './styles.module.scss';
import { TABS_CONFIG, MOCK_CURRENCY_DATA } from './constants';

function Interesting() {
  const [viewType, setViewType] = useState(TABS_CONFIG[0].id);
  const [currencies] = useState(MOCK_CURRENCY_DATA);
  const [tooltipCoordinates, setTooltipCoordinates] = useState();

  return (
    <section className={styles.container}>
      <Tabs value={viewType} onSelected={setViewType} />
      <Tooltip coordinates={tooltipCoordinates} />
      <div
        className={clsx(styles.currencyContainer, {
          [styles.hide]: viewType === TABS_CONFIG[1].id,
        })}
      >
        {currencies.map((el) => (
          <Currency key={el._id} data={el} onClick={setTooltipCoordinates} />
        ))}
      </div>
    </section>
  );
}

export default Interesting;
