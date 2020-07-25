import React, { useState } from 'react';
import { string } from 'prop-types';
import { useQuery } from '@apollo/client';
import i18next from 'i18next';

import Loading from '@components/Loading';
import { QUERY_SINGLE } from '../../constants';
import styles from './styles.module.scss';

function SideContent({ id }) {
  const [data, setData] = useState();
  const { loading } = useQuery(QUERY_SINGLE, {
    variables: { id },
    onCompleted: (response) => setData(response.Timezone[0]),
  });

  return loading || !data ? (
    <Loading isSmall />
  ) : (
    <div className={styles.content}>
      <h2 id='dialog-title' className='small-title m-bottom-4'>
        {data.name}
      </h2>
      <h6 className='big-text m-bottom-2'>{i18next.t('TIME_ZONES:COUNTRY')}</h6>
      <ul className='base-text'>
        {data.countries.map((el) => (
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
