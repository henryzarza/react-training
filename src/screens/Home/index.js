import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useQuery } from '@apollo/client';

import Loading from '@components/Loading';
import Header from './components/Header';
import Card from './components/Card';
import Map from './components/Map';
import Searcher from './components/Searcher';
import styles from './styles.module.scss';
import { VIEW_CONTENT_TYPE, COUNTRIES_QUERY } from './constants';

function Home() {
  const { loading, data } = useQuery(COUNTRIES_QUERY);
  const [viewType, setViewType] = useState(VIEW_CONTENT_TYPE[0].id);
  const [mapData, setMapData] = useState();
  const [cardData, setCardData] = useState();

  useEffect(() => {
    if (data) {
      const { Country } = data;
      const filteredData = Country.map((el) => ({
        id: el.alpha2Code,
        name: el.name,
        nativeName: el.nativeName,
        externalId: el._id,
        emoji: el.flag.emoji,
      }));
      setMapData(filteredData);
      setCardData(Country.slice(0, 50)); // TODO implement pagination
    }
  }, [data]);

  return loading ? (
    <Loading isSmall />
  ) : (
    <section className={styles.container}>
      <Header value={viewType} onChange={setViewType} />
      <div
        className={clsx({
          [styles.hide]: viewType === VIEW_CONTENT_TYPE[1].id,
        })}
      >
        <Searcher />
        <ul className={styles.cardContent}>
          {cardData && cardData.map((el) => <Card key={el._id} data={el} />)}
        </ul>
      </div>
      {mapData && (
        <Map
          data={mapData}
          className={viewType === VIEW_CONTENT_TYPE[0].id && styles.hide}
        />
      )}
    </section>
  );
}

export default Home;
