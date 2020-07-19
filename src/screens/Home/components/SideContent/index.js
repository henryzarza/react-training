import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { string } from 'prop-types';
import i18next from 'i18next';

import Loading from '@components/Loading';
import { currencyFormat } from '@constants/utils';
import { COUNTRY_QUERY } from '../../constants';
import styles from './styles.module.scss';

function SideContent({ id }) {
  const { loading } = useQuery(COUNTRY_QUERY, {
    variables: { id },
    onCompleted: (data) => setCountry(data.Country[0]),
  });
  const [country, setCountry] = useState();

  return loading || !country ? (
    <Loading isSmall />
  ) : (
    <div className={styles.content}>
      <img
        className={`m-bottom-3 ${styles.img}`}
        src={country.flag.svgFile}
        alt={country.name}
      />
      <h2 id='dialog-title' className='small-title m-bottom-1'>
        {country.name}
      </h2>
      <h3 className='big-text fw-thin m-bottom-3'>
        <span
          className='base-text m-right-1'
          role='img'
          aria-label={country.name}
        >
          {country.flag.emoji}
        </span>
        {country.nativeName} ({country.alpha3Code})
      </h3>
      <div className={`m-bottom-1 ${styles.innerContent}`}>
        <div className={`m-bottom-2 m-right-1 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_AREA')}
          </span>
          <span className='base-text'>{country.area}</span>
        </div>
        <div className={`m-bottom-2 m-right-1 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_POPULATION')}
          </span>
          <span className='base-text'>
            {currencyFormat(country.population)}
          </span>
        </div>
        <div className={`m-bottom-2 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_CAPITAL')}
          </span>
          <span className='base-text'>{country.capital}</span>
        </div>
      </div>
      <div className={`m-bottom-1 ${styles.innerContent}`}>
        <div className={`m-bottom-2 m-right-1 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_DEMONYM')}
          </span>
          <span className='base-text'>{country.demonym}</span>
        </div>
        <div className={`m-bottom-2 m-right-1 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_NUMERIC_CODE')}
          </span>
          <span className='base-text'>{country.numericCode}</span>
        </div>
        <div className={`m-bottom-2 ${styles.group}`}>
          <span className='small-text m-bottom-1'>
            {i18next.t('HOME:COUNTRY_CALLING_CODES')}
          </span>
          <ul className={`base-text ${styles.list}`}>
            {country.callingCodes.map((el) => (
              <li key={el._id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`m-bottom-3 ${styles.group}`}>
        <span className='small-text m-bottom-1'>
          {i18next.t('HOME:COUNTRY_SUBREGION')}
        </span>
        <span className='base-text'>
          {country.subregion.name} - {country.subregion.region.name}
        </span>
      </div>
      <div className={`m-bottom-3 ${styles.group}`}>
        <span className='small-text m-bottom-1'>
          {i18next.t('HOME:COUNTRY_OFFICIAL_LANGUAGES')}
        </span>
        <ul className={`base-text ${styles.list}`}>
          {country.officialLanguages.map((el) => (
            <li key={el.iso639_2}>
              {el.name} ({el.nativeName})
            </li>
          ))}
        </ul>
      </div>
      <div className={`m-bottom-3 ${styles.group}`}>
        <span className='small-text m-bottom-1'>
          {i18next.t('HOME:COUNTRY_CURRENCIES')}
        </span>
        <ul className={`base-text ${styles.list}`}>
          {country.currencies.map((el) => (
            <li key={el.symbol}>
              {el.name}
              <span
                className='base-text m-right-1'
                role='img'
                aria-label={el.name}
              >
                ({el.symbol})
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`m-bottom-3 ${styles.group}`}>
        <span className='small-text m-bottom-1'>
          {i18next.t('HOME:COUNTRY_REGIONAL_BLOCS')}
        </span>
        <ul className={`base-text ${styles.list}`}>
          {country.regionalBlocs.map((el) => (
            <li key={el._id}>
              {el.name} ({el.acronym})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SideContent.propTypes = {
  id: string.isRequired,
};

export default SideContent;
