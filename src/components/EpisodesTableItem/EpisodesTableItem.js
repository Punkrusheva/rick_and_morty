import PropTypes from 'prop-types';
import styles from './EpisodesTableItem.module.css';

function EpisodesTableItem({ name, id, air_date, episode}) {
  return (<>
    <li key={id} className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.episode}>{episode}</p>
      <p className={styles.air_date}>{air_date}</p>
    </li>   
    </>
  );
};    

EpisodesTableItem.defaultProps = {
  name: '',
  air_date: '',
  episode: ''
};

EpisodesTableItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  air_date: PropTypes.string,
  episode: PropTypes.string,
};

export default EpisodesTableItem;