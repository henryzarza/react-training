import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Header from './components/Header';
import Card from './components/Card';
import Map from './components/Map';
import Searcher from './components/Searcher';
import styles from './styles.module.scss';
import { VIEW_CONTENT_TYPE, MOCK_DATA } from './constants';

function Home() {
  const [viewType, setViewType] = useState(VIEW_CONTENT_TYPE[0].id);
  const [data] = useState(MOCK_DATA);
  const [mapData, setMapData] = useState();

  useEffect(() => {
    const filteredData = MOCK_DATA.map((el) => ({
      id: el.alpha2Code,
      name: el.name,
      nativeName: el.nativeName,
      externalId: el._id,
      emoji: el.flag.emoji,
    }));
    setMapData(filteredData);
  }, []);

  return (
    <section className={styles.container}>
      <Header value={viewType} onChange={setViewType} />
      <div
        className={clsx({
          [styles.hide]: viewType === VIEW_CONTENT_TYPE[1].id,
        })}
      >
        <Searcher />
        <ul className={styles.cardContent}>
          {data.map((el) => (
            <Card key={el._id} data={el} />
          ))}
        </ul>
      </div>
      {mapData && (
        <div
          className={clsx({
            [styles.hide]: viewType === VIEW_CONTENT_TYPE[0].id,
          })}
        >
          <Map data={mapData} />
        </div>
      )}
    </section>
  );
}

export default Home;
