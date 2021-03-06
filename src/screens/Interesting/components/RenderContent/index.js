import React, { useEffect, useState } from 'react';
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
  const { loading, data } = useQuery(query);
  const [refCard, isIntersecting] = useIsInView('300px');
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (data && data[target]) {
      const qtyPage = Math.ceil(data[target].length / registersPerPage);
      if (isIntersecting && startIndex <= qtyPage) {
        const currentIndex = startIndex + 1;
        const currentEndIndex = currentIndex * registersPerPage;
        setStartIndex(currentIndex);
        setEndIndex(
          currentEndIndex > data[target].length
            ? data[target].length
            : currentEndIndex
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isIntersecting]);

  return (
    <>
      {loading || !data ? (
        <Loading isSmall />
      ) : (
        <div className={containerClassName}>
          {data[target].slice(0, endIndex).map((el) => (
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
