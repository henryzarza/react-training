import React, { useCallback } from 'react';
import i18next from 'i18next';
import { func } from 'prop-types';

import { ENTER_KEY_CODE } from '../../constants';
import styles from './styles.module.scss';

function Searcher({ onChange }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === ENTER_KEY_CODE) onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={`m-bottom-8 m-top-3 ${styles.container}`}>
      <input
        type='text'
        className={`big-text ${styles.input}`}
        placeholder={i18next.t('HOME:SEARCHER')}
        onKeyDown={handleKeyDown}
      />
      <i className={`big-text icofont-search ${styles.icon}`} />
    </div>
  );
}

Searcher.propTypes = {
  onChange: func.isRequired,
};

export default Searcher;
