import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Loading from '@components/Loading';
import SideModal from '@components/SideModal';
import Header from './components/Header';
import Map from './components/Map';
import CardScreen from './components/CardScreen';
import SideContent from './components/SideContent';
import styles from './styles.module.scss';
import { VIEW_CONTENT_TYPE, COUNTRIES_QUERY } from './constants';

function Home() {
  const { loading, data } = useQuery(COUNTRIES_QUERY);
  const [viewType, setViewType] = useState(VIEW_CONTENT_TYPE[0].id);
  const [mapData, setMapData] = useState();
  const [idSelected, setIdSelected] = useState();

  useEffect(() => {
    if (data) {
      const filteredData = data.Country.map((el) => ({
        id: el.alpha2Code,
        name: el.name,
        nativeName: el.nativeName,
        externalId: el._id,
        emoji: el.flag.emoji,
      }));
      setMapData(filteredData);
    }
  }, [data]);

  return loading ? (
    <Loading isSmall />
  ) : (
    <section className={styles.container}>
      <Header value={viewType} onChange={setViewType} />
      {data && (
        <CardScreen
          className={viewType === VIEW_CONTENT_TYPE[1].id && styles.hide}
          data={data.Country}
          onSelected={setIdSelected}
        />
      )}
      {mapData && (
        <Map
          data={mapData}
          className={viewType === VIEW_CONTENT_TYPE[0].id && styles.hide}
          onSelected={setIdSelected}
        />
      )}
      {idSelected && (
        <SideModal onClose={setIdSelected} isVisible>
          <SideContent id={idSelected} />
        </SideModal>
      )}
    </section>
  );
}

export default Home;
