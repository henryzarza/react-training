import { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { request } from 'graphql-request';

const BASE_URL = 'https://countries-274616.ew.r.appspot.com';

export const currencyFormat = (num) =>
  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const renderText = (value) => (value === 'null' ? 'N/A' : value);

export const generateRandom = (end, start = 0) =>
  Math.floor(Math.random() * end + start);

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addListener(onChange);

    return () => {
      matcher.addListener(onChange);
    };
  }, [setIsDark]);

  return [isDark, setIsDark];
};

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

export const useRequest = (key, query, config, variables) => {
  return useQuery(key, async () => await request(BASE_URL, query, variables), config);
}
