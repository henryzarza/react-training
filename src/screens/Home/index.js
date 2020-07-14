import React, { useState } from 'react';

import Header from './components/Header';
import Card from './components/Card';
import Map from './components/Map';
import styles from './styles.module.scss';
import { VIEW_CONTENT_TYPE } from './constants';

function Home() {
  const [viewType, setViewType] = useState(VIEW_CONTENT_TYPE[0].id);

  return (
    <section className={styles.container}>
      <Header value={viewType} onChange={setViewType} />
      {viewType === VIEW_CONTENT_TYPE[0].id ? (
        <div className={styles.content}>
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <Map />
      )}
    </section>
  );
}

export default Home;
