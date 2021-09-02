import PropTypes from 'prop-types';
import styles from './LocationsTable.module.css';
import LocationsTableItem from "../LocationsTableItem/LocationsTableItem";
import "../../stylesheets/animation.css";

function LocationsTable({locations}) {
  console.log(locations);
  return (<>
    <ul className={styles.locationsTable}>
    {locations.map(({ name, id, dimension, type }) => (
      <LocationsTableItem
        name={name}
        key={id}
        id={id}
        dimension={dimension}
        type={type}>
      </LocationsTableItem>
      ))
    }
    </ul>
  </>
  );
}
  
LocationsTable.defaultProps = {
  locations: [],
};

LocationsTable.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    dimension: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
  }
  ))
};

export default LocationsTable;