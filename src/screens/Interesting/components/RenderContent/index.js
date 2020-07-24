import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { string, number, func, shape } from 'prop-types';

import { useIsInView } from '@constants/utils';
import Loading from '@components/Loading';

function RenderContent({
  query,
  registersPerPage,
  target,
  component: Cmp,
  containerClassName,
}) {
  const [refCard, isIntersecting] = useIsInView('300px');
  const { loading, fetchMore, data } = useQuery(query, {
    variables: {
      offset: 0,
      first: registersPerPage,
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (isIntersecting && !!data) {
      fetchMore({
        query: query,
        variables: {
          offset: (data[target] && data[target].length) || 0,
          first: registersPerPage,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            [target]: [...prev[target], ...fetchMoreResult[target]],
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
        <div className={containerClassName}>
          {data[target].map((el) => (
            <Cmp key={el._id} data={el} />
          ))}
        </div>
      )}
      <div ref={refCard} />
    </>
  );
}

RenderContent.propTypes = {
  containerClassName: string.isRequired,
  component: func.isRequired,
  registersPerPage: number.isRequired,
  target: string.isRequired,
  query: shape().isRequired,
};

export default RenderContent;
