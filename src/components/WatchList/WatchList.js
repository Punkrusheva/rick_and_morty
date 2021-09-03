import PropTypes from 'prop-types';
import styles from './WatchList.module.css';
import MyWatchListItem from "../MyWatchListItem/MyWatchListItem";

function WatchList({ toDos, onRemoveToDo }) {

  return (<>
      <ul className={styles.toDosList}>
      {toDos.map(({ toDoText, id }) => (
        <MyWatchListItem
          toDoText={toDoText}
          id={id}
          key={id}
          onClick={() => onRemoveToDo(id)}>
        </MyWatchListItem>
        ))
      }
      </ul>
    </>
    );
  }

WatchList.defaultProps = {
  toDos: [],
};

WatchList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
  }
  ))
};

export default WatchList;