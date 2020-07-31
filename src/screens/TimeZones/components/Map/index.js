import React, { useEffect } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import i18next from 'i18next';
import { create, color } from '@amcharts/amcharts4/core';
import {
  MapChart,
  projections,
  MapPolygonSeries,
} from '@amcharts/amcharts4/maps';
import worldTimeZoneAreasHigh from '@amcharts/amcharts4-geodata/worldTimeZoneAreasHigh';

import { THEME_COLORS } from '@constants/colors';
import styles from './styles.module.scss';

function Map({ data, onSelected }) {
  useEffect(() => {
    let map = create('mapRef', MapChart);
    map.geodata = worldTimeZoneAreasHigh;
    map.projection = new projections.Miller();
    let polygonSeries = map.series.push(new MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{TIMEZONE}';
    polygonTemplate.strokeWidth = 1;
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = color(THEME_COLORS.DEFAULT.secondary);
    polygonTemplate.fill = color(THEME_COLORS.DEFAULT.primary);
    polygonSeries.data = data;
    polygonTemplate.propertyFields.fill = 'fill';

    polygonTemplate.events.on('hit', function (e) {
      onSelected(e.target.dataItem.dataContext.externalId);
    });

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [data, onSelected]);

  return (
    <section className={styles.container}>
      <h2 className='small-title m-bottom-6'>
        {i18next.t('TIME_ZONES:TITLE')}
      </h2>
      <div className={styles.mapContainer} id='mapRef' />
    </section>
  );
}

Map.propTypes = {
  data: arrayOf(
    shape({
      _id: string,
      name: string,
    })
  ).isRequired,
  onSelected: func.isRequired,
};

export default Map;
