import React from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import charactersOperations from "../../redux/characters/characters-operations";
import PropTypes from 'prop-types';
import styles from './CharactersList.module.css';
import CharactersListItem from "../CharactersListItem/CharactersListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../stylesheets/animation.css";
//import charactersSelectors from "../../redux/characters/characters-selectors";
import { connect } from 'react-redux';
import { Component } from 'react';
import RickAndMorty from '../../services/rick-and-morty-api';
console.log(RickAndMorty);
/**
const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state)
}
);

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});
*/
class CharactersList extends Component {
  componentDidMount() {
   // const {}
    /*RickAndMorty.getAllCharacters()
      .then(res => console.log(res));*/
  }
  //const dispatch = useDispatch();
  //const characters = useSelector(charactersSelectors.getVisibleCharacters);
  render() {
    const { characters } = this.props;

    return (<>
      {characters.length > 0 &&
        <TransitionGroup component="ul" className={styles.characterList}>
          {characters.map(({ name, id, status, species, gender, image }) => (
            <CSSTransition key={id} timeout={250} classNames="item">
              <CharactersListItem name={name} id={id} status={status} species={species} gender={gender} image={image} onClick={() => console.log('Клик!')}>
              </CharactersListItem>
            </CSSTransition>
          ))
          }
        </TransitionGroup>
      }
    </>
    );
  }
}

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

const mapStateToProps = (state) => {
  return {
    characters: state.characters.items
  }
}
export default connect(mapStateToProps)(CharactersList);
/**onClick={() => dispatch(charactersOperations.deleteContact(id))} */