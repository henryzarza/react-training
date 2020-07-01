import React from 'react';
import { shape, string, number, arrayOf } from 'prop-types';

import { currencyFormat } from '@constants/utils';
import styles from './styles.module.scss';

function Card({ data }) {
  return (
    <li className={styles.container}>
      <img
        className={`m-bottom-3 ${styles.img}`}
        src={data.flag.svgFile}
        alt={data.name}
      />
      <h3 className='big-text fw-bold m-bottom-3'>
        {data.name}
        <span className='big-text fw-thin m-left-1'>({data.nativeName})</span>
      </h3>
      <div className={`m-bottom-3 ${styles.content}`}>
        <h6 className='base-text'>
          <span className='base-text' role='img' aria-label='Afghanistan'>
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
  data: shape({
    _id: number,
    name: string,
    nativeName: string,
    alpha3Code: string,
    capital: string,
    population: number,
    numericCode: string,
    currencies: arrayOf(
      shape({
        name: string,
        symbol: string,
      })
    ),
    flag: shape({
      svgFile: string,
      emoji: string,
    }),
  }).isRequired,
};

export default Card;
