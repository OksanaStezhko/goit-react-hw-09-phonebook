import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { changeFilter } from '../../redux/contacts/contactActions';
import { getFilter } from '../../redux/contacts/contactSelectors';

import style from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = useCallback(
    ({ currentTarget }) => {
      return dispatch(changeFilter(currentTarget.value));
    },
    [dispatch],
  );
  return (
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
};

export default Filter;
