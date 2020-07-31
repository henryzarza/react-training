import React, { useState } from 'react';

import Tabs from './components/Tabs';
import RenderContent from './components/RenderContent';
import Coin from './components/Coin';
import Language from './components/Language';
import styles from './styles.module.scss';
import {
  TABS_CONFIG,
  CURRENCY_REGISTERS_PER_PAGE,
  QUERY_CURRENCY,
  LNG_REGISTERS_PER_PAGE,
  LNG_QUERY,
} from './constants';

function Interesting() {
  const [viewType, setViewType] = useState(TABS_CONFIG[0].id);

  return (
    <section className={styles.container}>
      <Tabs value={viewType} onSelected={setViewType} />
      {viewType === TABS_CONFIG[0].id && (
        <RenderContent
          target='Currency'
          query={QUERY_CURRENCY}
          registersPerPage={CURRENCY_REGISTERS_PER_PAGE}
          component={Coin}
          containerClassName={styles.currencyContainer}
        />
      )}
      {viewType === TABS_CONFIG[1].id && (
        <RenderContent
          target='Language'
          query={LNG_QUERY}
          registersPerPage={LNG_REGISTERS_PER_PAGE}
          component={Language}
          containerClassName={styles.languageContainer}
        />
      )}
    </section>
  );
}

export default Interesting;
