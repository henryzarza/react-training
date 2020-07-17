import React, { useState, useEffect, useCallback } from 'react';
import { string, arrayOf, bool, oneOfType, func } from 'prop-types';
import clsx from 'clsx';

import { useIsInView } from '@constants/utils';
import Searcher from '../Searcher';
import Card from '../Card';
import { countryPropType } from '../../propTypes';
import { REGISTERS_PER_PAGE } from './constants';
import styles from './styles.module.scss';

function CardScreen({ data, className, onSelected }) {
  const [refCard, isIntersecting] = useIsInView('300px');
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    const qtyPage = Math.ceil(data.length / REGISTERS_PER_PAGE);
    if (isIntersecting && startIndex <= qtyPage && !filterData) {
      const currentIndex = startIndex + 1;
      const currentEndIndex = currentIndex * REGISTERS_PER_PAGE;
      setStartIndex(currentIndex);
      setEndIndex(
        currentEndIndex > data.length ? data.length : currentEndIndex
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length, isIntersecting]);

  const handleSearch = useCallback(
    (value) => {
      if (value) {
        const filter = data.filter((el) =>
          el.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilterData(filter);
      } else {
        setFilterData(null);
        setStartIndex(1);
        setEndIndex(
          REGISTERS_PER_PAGE > data.length ? data.length : REGISTERS_PER_PAGE
        );
      }
    },
    [data]
  );

  return (
    <div className={clsx(className)}>
      <Searcher onChange={handleSearch} />
      <ul className={styles.cardContent}>
        {(filterData || data).slice(0, endIndex).map((el) => (
          <Card key={el._id} data={el} onSelected={onSelected} />
        ))}
      </ul>
      <div ref={refCard} />
    </div>
  );
}

CardScreen.propTypes = {
  data: arrayOf(countryPropType).isRequired,
  onSelected: func.isRequired,
  className: oneOfType([string, bool]),
};

export default CardScreen;
