import React, { useState } from 'react';

import Header from './components/Header';
import Card from './components/Card';
import Map from './components/Map';
import Searcher from './components/Searcher';
import styles from './styles.module.scss';
import { VIEW_CONTENT_TYPE, MOCK_DATA } from './constants';

function Home() {
  const [viewType, setViewType] = useState(VIEW_CONTENT_TYPE[0].id);

  return (
    <section className={styles.container}>
      <Header value={viewType} onChange={setViewType} />
      {viewType === VIEW_CONTENT_TYPE[0].id ? (
        <>
          <Searcher />
          <ul className={styles.content}>
            {MOCK_DATA.map((el) => (
              <Card key={el._id} data={el} />
            ))}
          </ul>
        </>
      ) : (
        <Map />
      )}
    </section>
  );
}

export default Home;
