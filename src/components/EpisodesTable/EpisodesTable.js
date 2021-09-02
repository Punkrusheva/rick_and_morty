import PropTypes from 'prop-types';
import styles from './EpisodesTable.module.css';
import EpisodesTableItem from '../EpisodesTableItem/EpisodesTableItem'
import "../../stylesheets/animation.css";

function EpisodesTable({ episodes }) {

  return (<>
      <ul className={styles.episodesTable}>
      {episodes.map(({ name, id, air_date, episode }) => (
        <EpisodesTableItem
          name={name}
          key={id}
          id={id}
          episode={episode}
          air_date={air_date}
          onClick={() => console.log('Клик!')}>
              </EpisodesTableItem>
          ))
          }
      </ul>
    </>
    );
  }

EpisodesTable.defaultProps = {
  episodes: [],
};

EpisodesTable.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    name: PropTypes.string,
    air_date: PropTypes.string,
  }
  ))
};

export default EpisodesTable;