import React, { useCallback } from 'react';
import i18next from 'i18next';
import { string, func } from 'prop-types';
import clsx from 'clsx';

import { TABS_CONFIG } from '../../constants';
import styles from './styles.module.scss';

function Tabs({ value, onSelected }) {
  const handleClick = useCallback((e) => onSelected(e.target.value), [
    onSelected,
  ]);

  return (
    <ul className={`m-bottom-8 ${styles.container}`}>
      {TABS_CONFIG.map((el) => (
        <li key={el.id} className={styles.item}>
          <button
            type='button'
            className={clsx(`button big-text ${styles.button}`, {
              [styles.active]: value === el.id,
            })}
            value={el.id}
            onClick={handleClick}
          >
            <i className={`m-right-1 ${el.iconClass}`} />
            {i18next.t(el.text)}
          </button>
        </li>
      ))}
    </ul>
  );
}

Tabs.propTypes = {
  value: string.isRequired,
  onSelected: func.isRequired,
};

export default Tabs;
