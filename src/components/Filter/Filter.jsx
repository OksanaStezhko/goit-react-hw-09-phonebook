import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={style.label} htmlFor="">
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
