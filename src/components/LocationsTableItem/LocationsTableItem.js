import PropTypes from 'prop-types';
import styles from './LocationsTableItem.module.css';

function LocationsTableItem({ name, id, dimension, type }) {
  return (<>
          <li key={id} className={styles.item}>
            <p className={styles.name}>{name}</p>
            <p className={styles.dimension}>{dimension}</p>
            <p className={styles.type}>{type}</p>
            
          </li>
        
    </>
  );
};    

LocationsTableItem.defaultProps = {
  type: '',
  name: '',
  dimension: ''
};

LocationsTableItem.propTypes = {
  type: PropTypes.string,
  dimension: PropTypes.string,
  name: PropTypes.string,
    id: PropTypes.number.isRequired
};

export default LocationsTableItem;