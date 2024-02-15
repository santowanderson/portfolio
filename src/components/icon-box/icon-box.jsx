import React from 'react';
import propTypes from 'prop-types';

import './icon-box.css';

function IconBox({ icon }) {
  return (
    <span className='icon-box'>
      { icon }
    </span>
  );
}

export default IconBox;

IconBox.propTypes = {
  icon: propTypes.element.isRequired
};