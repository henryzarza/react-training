import React, { useState } from 'react';

import Tabs from './components/Tabs';
import CurrencyScreen from './components/CurrencyScreen';
import Language from './components/Language';
import styles from './styles.module.scss';
import { TABS_CONFIG, MOCK_LANGUAGES_DATA } from './constants';

function Interesting() {
  const [viewType, setViewType] = useState(TABS_CONFIG[0].id);
  const [languages] = useState(MOCK_LANGUAGES_DATA);

  return (
    <section className={styles.container}>
      <Tabs value={viewType} onSelected={setViewType} />
      {viewType === TABS_CONFIG[0].id && <CurrencyScreen />}
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
