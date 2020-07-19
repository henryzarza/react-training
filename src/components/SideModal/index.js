import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { func } from 'prop-types';

import styles from './styles.module.scss';

function SideModal({ onClose, children }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.which === 27) onClose(null);
    },
    [onClose]
  );

  useEffect(() => {
    const bodyRef = document.querySelector('body');
    bodyRef.addEventListener('keydown', handleKeyDown);

    return () => bodyRef.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className={styles.backdrop}>
      <div
        className={styles.content}
        tabIndex='0'
        role='dialog'
        aria-labelledby='dialog-title'
        aria-modal='true'
      >
        <button
          type='button'
          className={`big-text ${styles.closeBtn}`}
          onClick={() => onClose(null)}
          aria-label='close'
        >
          <i className='icofont-close-line' />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

SideModal.propTypes = {
  onClose: func.isRequired,
};

export default SideModal;
