import React, { useEffect, useContext } from 'react';
import { string, shape, arrayOf, oneOfType, bool, func } from 'prop-types';
import { create, color } from '@amcharts/amcharts4/core';
import {
  MapChart,
  projections,
  MapPolygonSeries,
} from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import clsx from 'clsx';

import { ThemeContext } from '@components/ThemeCheckbox';
import { THEME_COLORS } from '@constants/colors';
import styles from './styles.module.scss';

function Map({ data, className, onSelected }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let map = create('mapRef', MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new projections.Miller();
    let polygonSeries = map.series.push(new MapPolygonSeries());
    polygonSeries.useGeodata = true;
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{emoji} {name} ({nativeName})';
    polygonTemplate.fill = color(THEME_COLORS[theme].primary);
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = color(THEME_COLORS[theme].secondary);
    polygonSeries.data = data;
    polygonTemplate.events.on('hit', function (e) {
      e.target.series.chart.zoomToMapObject(e.target);
      onSelected(e.target.dataItem.dataContext.externalId);
    });

    return () => {
      if (map) {
        map.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, onSelected]);

  return <div className={clsx(styles.container, className)} id='mapRef' />;
}

Map.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      name: string,
      nativeName: string,
      externalId: string,
      emoji: string,
    }).isRequired
  ).isRequired,
  className: oneOfType([string, bool]),
  onSelected: func.isRequired,
};

export default Map;
