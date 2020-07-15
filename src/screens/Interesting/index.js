import React, { useState } from 'react';

import Tabs from './components/Tabs';
import Coin from './components/Coin';
import Language from './components/Language';
import styles from './styles.module.scss';
import {
  TABS_CONFIG,
  MOCK_CURRENCY_DATA,
  MOCK_LANGUAGES_DATA,
} from './constants';

function Interesting() {
  const [viewType, setViewType] = useState(TABS_CONFIG[0].id);
  const [currencies] = useState(MOCK_CURRENCY_DATA);
  const [languages] = useState(MOCK_LANGUAGES_DATA);

  return (
    <section className={styles.container}>
      <Tabs value={viewType} onSelected={setViewType} />
      {viewType === TABS_CONFIG[0].id && (
        <div className={styles.currencyContainer}>
          {currencies.map((el) => (
            <Coin key={el._id} data={el} />
          ))}
        </div>
      )}
      {viewType === TABS_CONFIG[1].id && (
        <div className={styles.languageContainer}>
          {languages.map((el) => (
            <Language key={el._id} data={el} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Interesting;
