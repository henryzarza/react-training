import { useEffect, useState, useRef } from 'react';

export const currencyFormat = (num) =>
  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

/* Adapted from https://wattenberger.com/blog/react-hooks */
export const useIsInView = (margin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    if (current) observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [margin]);

  return [ref, isIntersecting];
};
