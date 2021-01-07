import React from 'react';
import { string } from 'prop-types';
import i18next from 'i18next';

import { useRequest } from '@constants/utils';
import Loading from '@components/Loading';
import { QUERY_SINGLE } from '../../constants';
import styles from './styles.module.scss';

function SideContent({ id }) {
  const { data, loading } = useRequest(['timezone', id], QUERY_SINGLE, null, { id });
  const response = data?.Timezone[0];

  return loading || !response ? (
    <Loading isSmall />
  ) : (
    <div className={styles.content}>
      <h2 id='dialog-title' className='small-title m-bottom-4'>
        {response.name}
      </h2>
      <h6 className='big-text m-bottom-2'>{i18next.t('TIME_ZONES:COUNTRY')}</h6>
      <ul className='base-text'>
        {response.countries.map((el) => (
          <li className={`m-bottom-1 ${styles.item}`} key={el._id}>
            <span className='subtitle m-right-1'>{el.flag.emoji}</span>
            {el.name} ({el.nativeName}) - {el.alpha3Code}
          </li>
        ))}
      </ul>
    </div>
  );
}

SideContent.propTypes = {
  id: string.isRequired,
};

export default SideContent;
