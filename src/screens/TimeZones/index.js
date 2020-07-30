import React, { useState, useContext } from 'react';
import { color } from '@amcharts/amcharts4/core';
import { useQuery } from '@apollo/client';

import SideModal from '@components/SideModal';
import Loading from '@components/Loading';
import { THEME_COLORS } from '@constants/colors';
import { generateRandom } from '@constants/utils';
import { ThemeContext } from '@components/ThemeCheckbox';
import SideContent from './components/SideContent';
import Map from './components/Map';
import { QUERY } from './constants';

function TimeZones() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState();
  const [idSelected, setIdSelected] = useState();
  const { loading } = useQuery(QUERY, {
    onCompleted: (data) => {
      const dataParsed = data.Timezone.map((el) => ({
        id: el.name,
        externalId: el._id,
        fill: color(
          THEME_COLORS[theme].TIME_ZONE[
            generateRandom(THEME_COLORS[theme].TIME_ZONE.length - 1)
          ]
        ),
      }));
      setData(dataParsed);
    },
  });

  return loading || !data ? (
    <Loading isSmall />
  ) : (
    <>
      <Map data={data} onSelected={setIdSelected} theme={theme} />
      {idSelected && (
        <SideModal onClose={setIdSelected} isVisible>
          <SideContent id={idSelected} />
        </SideModal>
      )}
    </>
  );
}

export default TimeZones;
