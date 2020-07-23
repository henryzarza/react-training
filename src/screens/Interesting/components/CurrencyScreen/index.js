import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { useIsInView } from '@constants/utils';
import Loading from '@components/Loading';
import Coin from '../Coin';
import { QUERY_CURRENCY, REGISTERS_PER_PAGE } from './constants';
import styles from './styles.module.scss';

function CurrencyScreen() {
  const [refCard, isIntersecting] = useIsInView('150px');
  const { loading, fetchMore, data } = useQuery(QUERY_CURRENCY, {
    variables: {
      offset: 0,
      first: REGISTERS_PER_PAGE,
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (isIntersecting && !!data) {
      fetchMore({
        query: QUERY_CURRENCY,
        variables: {
          offset: data?.Currency?.length || 0,
          first: REGISTERS_PER_PAGE,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            Currency: [...prev.Currency, ...fetchMoreResult.Currency],
          });
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting, fetchMore]);

  return (
    <>
      {loading || !data ? (
        <Loading isSmall />
      ) : (
        <div className={styles.container}>
          {data.Currency.map((el) => (
            <Coin key={el._id} data={el} />
          ))}
        </div>
      )}
      <div ref={refCard} />
    </>
  );
}

export default CurrencyScreen;
