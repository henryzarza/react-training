import React, { useCallback, Fragment } from 'react';
import i18next from 'i18next';
import { string, func } from 'prop-types';

import { VIEW_CONTENT_TYPE } from '../../constants';
import styles from './styles.module.scss';

function Header({ value, onChange }) {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <header className={`m-bottom-6 ${styles.header}`}>
      <h2 className='small-title'>{i18next.t('HOME:HOME_TITLE')}</h2>
      <div className={styles.checkboxContainer}>
        {VIEW_CONTENT_TYPE.map((el) => (
          <Fragment key={el.id}>
            <input
              className={styles.input}
              type='radio'
              name='content'
              id={el.id}
              value={el.id}
              checked={value === el.id}
              onChange={handleChange}
            />
            <label className='big-text' htmlFor={el.id}>
              <i className={el.iconClass} />
            </label>
          </Fragment>
        ))}
      </div>
    </header>
  );
}

Header.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Header;
