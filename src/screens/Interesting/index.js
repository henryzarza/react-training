import React, { useState } from 'react';
import clsx from 'clsx';

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
      <RenderContent
        target='Currency'
        query={QUERY_CURRENCY}
        registersPerPage={CURRENCY_REGISTERS_PER_PAGE}
        component={Coin}
        containerClassName={clsx(styles.currencyContainer, {
          [styles.hide]: viewType === TABS_CONFIG[1].id,
        })}
      />
      <RenderContent
        target='Language'
        query={LNG_QUERY}
        registersPerPage={LNG_REGISTERS_PER_PAGE}
        component={Language}
        containerClassName={clsx(styles.languageContainer, {
          [styles.hide]: viewType === TABS_CONFIG[0].id,
        })}
      />
    </section>
  );
}

export default Interesting;
