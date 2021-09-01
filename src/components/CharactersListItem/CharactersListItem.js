import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersListItem.module.css';

function CharactersListItem({ name, id, status, species, gender, onClick, image }) {
 
  return (<>
    <li key={id} className={styles.item} onClick={onClick}> 
      <img className={styles.image} src={image} alt={name}/>
      <p className={styles.name}><b><i>{name}</i></b></p>
      <p className={styles.gender}><b>Gender:</b> {gender}</p>
      <p className={styles.status}><b>Status:</b> {status}</p>
      <p className={styles.species}><b>Species:</b> {species}</p>
    </li>
    </>
  );
};    

CharactersListItem.defaultProps = {
  status: '',
  name: '',
  species: '',
  gender: '',
  image: '',
};

CharactersListItem.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  species: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
};

export default CharactersListItem;