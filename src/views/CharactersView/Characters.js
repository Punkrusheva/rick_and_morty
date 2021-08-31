import React from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  //useDispatch,
  useSelector
} from "react-redux";
import {
  charactersSelectors,
  //charactersActions,
  charactersOperations
} from "../../redux/characters";

function Characters () {
  /*componentDidMount() {
    this.props.fetchCharacter();
  }*/

  const value = useSelector(charactersSelectors.getFilter);
 
    return (
      <Layout >
        <Filter value={value} placeholder='Set species' onChange=''/>
        <Filter value={value} placeholder='Set status' onChange=''/>
        <Filter value={value} placeholder='Set gender' onChange=''/>
        <CharactersList /> 
        <ToastContainer autoClose={2500} />     
      </Layout>
    );
  };

const mapDispatchToProps = dispatch => ({
fetchCharacters: () => dispatch(charactersOperations.fetchCharacters())
})

export default connect(null, mapDispatchToProps)(Characters);
