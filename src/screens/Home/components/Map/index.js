import React, { useEffect } from 'react';
import { string, shape, number, arrayOf } from 'prop-types';
import { create, color } from '@amcharts/amcharts4/core';
import {
  MapChart,
  projections,
  MapPolygonSeries,
} from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

import { THEME_COLORS } from '@constants/colors';
import styles from './styles.module.scss';

function Map({ data }) {
  useEffect(() => {
    let map = create('mapRef', MapChart);

    map.geodata = am4geodata_worldLow;
    map.projection = new projections.Miller();
    let polygonSeries = map.series.push(new MapPolygonSeries());
    polygonSeries.useGeodata = true;
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{emoji} {name} ({nativeName})';
    polygonTemplate.fill = color(THEME_COLORS.DEFAULT.primary);
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = color(THEME_COLORS.DEFAULT.secondary);

    polygonSeries.exclude = ['AQ'];
    polygonSeries.data = data;

    polygonTemplate.events.on('hit', function (e) {
      e.target.series.chart.zoomToMapObject(e.target);
      console.table(e.target.dataItem.dataContext);
    });

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [data]);

  return <div className={styles.container} id='mapRef' />;
}

Map.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      name: string,
      nativeName: string,
      externalId: number,
      emoji: string,
    }).isRequired
  ).isRequired,
};

export default Map;
