import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersList.module.css';
import CharactersListItem from "../CharactersListItem/CharactersListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../stylesheets/animation.css";

function CharactersList({ characters }) {

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

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string
  }
  ))
};

export default CharactersList;