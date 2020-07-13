import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Language({ data }) {
  return (
    <div className={styles.card}>
      <h3 className={`big-text fw-bold m-bottom-3 ${styles.header}`}>
        {data.name} ({data.nativeName}) - {data.iso639_2}
      </h3>
      <div className={styles.content}>
        <h5 className='base-text m-bottom-2'>
          {i18next.t('INTERESTING:LANGUAGES_COUNTRIES')}
        </h5>
        <ul className={styles.countries}>
          {data.countries.map((el) => (
            <li key={el.name} className='small-text m-bottom-1'>
              <span role='img' aria-label={el.name}>
                {el.flag.emoji}
              </span>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Language.propTypes = {
  data: shape({
    _id: string,
    iso639_2: string,
    name: string,
    nativeName: string,
    countries: arrayOf(
      shape({
        name: string,
        flag: shape({
          emoji: string,
        }),
      })
    ),
  }).isRequired,
};

export default Language;
