/*import React, {useCallback} from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/phoneBook";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  
  const onChange = useCallback( e => dispatch(contactsActions.changeFilter(e.target.value)), [dispatch]);

  return(
   <label className={styles.label}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        name='filter'
        className={styles.input}
        placeholder='Enter contact name'
      />
    </label>
  )
};*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


function Filter({ value, placeholder, onChange }) {
  return (
    <label className={styles.label}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        name='filter'
        className={styles.input}
        placeholder={placeholder}
      />
    </label>
  )
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};


export default Filter; 