import React from 'react';
import { string } from 'prop-types';
import i18next from 'i18next';

import Loading from '@components/Loading';
import { currencyFormat, useRequest } from '@constants/utils';
import { COUNTRY_QUERY } from '../../constants';
import ItemGroup from './components/ItemGroup';
import styles from './styles.module.scss';

function SideContent({ id }) {
  const { isLoading, data } = useRequest(['country', id], COUNTRY_QUERY, null, { id });
  const country = data?.Country[0];

  return isLoading || !country ? (
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
        <ItemGroup
          className={`m-right-1 ${styles.group}`}
          label={i18next.t('HOME:COUNTRY_AREA')}
          textContent={country.area}
        />
        <ItemGroup
          className={`m-right-1 ${styles.group}`}
          label={i18next.t('HOME:COUNTRY_POPULATION')}
          textContent={currencyFormat(country.population)}
        />
        <ItemGroup
          className={styles.group}
          label={i18next.t('HOME:COUNTRY_CAPITAL')}
          textContent={country.capital}
        />
      </div>
      <div className={`m-bottom-1 ${styles.innerContent}`}>
        <ItemGroup
          className={`m-right-1 ${styles.group}`}
          label={i18next.t('HOME:COUNTRY_DEMONYM')}
          textContent={country.demonym}
        />
        <ItemGroup
          className={`m-right-1 ${styles.group}`}
          label={i18next.t('HOME:COUNTRY_NUMERIC_CODE')}
          textContent={country.numericCode}
        />
        <ItemGroup
          className={styles.group}
          label={i18next.t('HOME:COUNTRY_CALLING_CODES')}
          textContent={country.callingCodes.map((el) => el.name).join(' - ')}
        />
      </div>
      <ItemGroup
        className={`m-bottom-3 ${styles.group}`}
        label={i18next.t('HOME:COUNTRY_SUBREGION')}
        textContent={`${country.subregion.name} - ${country.subregion.region.name}`}
      />
      <ItemGroup
        className={`m-bottom-3 ${styles.group}`}
        label={i18next.t('HOME:COUNTRY_OFFICIAL_LANGUAGES')}
      >
        <ul className={`base-text ${styles.list}`}>
          {country.officialLanguages.map((el) => (
            <li key={el.iso639_2}>
              {el.name} ({el.nativeName})
            </li>
          ))}
        </ul>
      </ItemGroup>
      <ItemGroup
        className={`m-bottom-3 ${styles.group}`}
        label={i18next.t('HOME:COUNTRY_CURRENCIES')}
      >
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
      </ItemGroup>
      <ItemGroup
        className={`m-bottom-3 ${styles.group}`}
        label={i18next.t('HOME:COUNTRY_REGIONAL_BLOCS')}
      >
        <ul className={`base-text ${styles.list}`}>
          {country.regionalBlocs.map((el) => (
            <li key={el._id}>
              {el.name} ({el.acronym})
            </li>
          ))}
        </ul>
      </ItemGroup>
    </div>
  );
}

SideContent.propTypes = {
  id: string.isRequired,
};

export default SideContent;
