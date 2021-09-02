import PropTypes from 'prop-types';
import styles from './CharactersList.module.css';
import CharactersListItem from "../CharactersListItem/CharactersListItem";

function CharactersList({ characters }) {

  return (<>
      <ul className={styles.characterList}>
      {characters.map(({ name, id, status, species, gender, image }) => (
        <CharactersListItem
          name={name}
          id={id}
          key={id}
          status={status}
          species={species}
          gender={gender}
          image={image}
          onClick={() => console.log('Клик!')}>
        </CharactersListItem>
        ))
      }
      </ul>
    </>
    );
  }

CharactersList.defaultProps = {
  characters: [],
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string
  }
  ))
};

export default CharactersList;