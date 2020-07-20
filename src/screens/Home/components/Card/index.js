import React, { useCallback } from 'react';
import { func } from 'prop-types';

import { currencyFormat } from '@constants/utils';
import { countryPropType } from '../../propTypes';
import styles from './styles.module.scss';

function Card({ data, onSelected }) {
  const handleClick = useCallback(() => onSelected(data._id), [
    data._id,
    onSelected,
  ]);

  return (
    <li className={styles.container} onClick={handleClick}>
      <div className={`m-bottom-3 ${styles.imgContainer}`}>
        <img className={styles.img} src={data.flag.svgFile} alt={data.name} />
      </div>
      <h3 className='big-text fw-bold m-bottom-3'>
        {data.name}
        <span className='big-text fw-thin m-left-1'>({data.nativeName})</span>
      </h3>
      <div className={`m-bottom-3 ${styles.content}`}>
        <h6 className='base-text'>
          <span className='base-text' role='img' aria-label={data.name}>
            {data.flag.emoji}
          </span>
          {data.alpha3Code}
        </h6>
        <h6 className='base-text'>
          <i className='icofont-phone m-right-1' />
          {data.numericCode}
        </h6>
        {data.currencies.map((el) => (
          <h6 className='base-text' key={el.symbol}>
            <span
              className='base-text m-right-1'
              role='img'
              aria-label={el.name}
            >
              ({el.symbol})
            </span>
            {el.name}
          </h6>
        ))}
      </div>
      <div className={styles.content}>
        <h6 className='base-text'>
          <i className='icofont-pin m-right-1' />
          {data.capital}
        </h6>
        <h6 className='base-text'>
          <i className='icofont-users-social  m-right-1' />
          {currencyFormat(data.population)}
        </h6>
      </div>
    </li>
  );
}

Card.propTypes = {
  data: countryPropType.isRequired,
  onSelected: func.isRequired,
};

export default Card;
