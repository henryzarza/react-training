import React from 'react';
import { string, number, oneOfType } from 'prop-types';

function ItemGroup({ className, label, textContent, children }) {
  return (
    <div className={`m-bottom-2 ${className}`}>
      <span className='small-text m-bottom-1'>{label}</span>
      {textContent && <span className='base-text'>{textContent}</span>}
      {children}
    </div>
  );
}

ItemGroup.propTypes = {
  label: string.isRequired,
  textContent: oneOfType([string, number]),
  className: string.isRequired,
};

export default ItemGroup;
