import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyWatchListItem.module.css';
import { AiOutlineClose } from 'react-icons/ai';

function MyWatchListItem({ toDoText, id, onClick }) {
 
  return (
    <li key={id} className={styles.item}> 
      <p className={styles.name}><b>{toDoText}</b></p>
      <button
              type='button'
              onClick={onClick}
              className={styles.button}>
              <AiOutlineClose fill="white" />
        </button>
    </li>
  );
};    

MyWatchListItem.defaultProps = {
  name: '',
};

MyWatchListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default MyWatchListItem;