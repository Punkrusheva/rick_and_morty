import React from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
//import CharactersList from '../../components/CharactersList/CharactersList'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  charactersSelectors,
  //charactersActions,
  charactersOperations } from "../../redux/characters";

import { //useDispatch,
  useSelector
} from "react-redux";


function Episodes () {
  /*componentDidMount() {
    this.props.fetchCharacter();
  }*/
  
  const value = useSelector(charactersSelectors.getFilter);

    return (
      <Layout >
        <Filter value={value} placeholder='Set name' onChange=''/>
        
        <ToastContainer autoClose={2500} />     
      </Layout>
    );
  };

const mapDispatchToProps = dispatch => ({
fetchCharacter: () => dispatch(charactersOperations.fetchCharacter())
})

export default connect(null, mapDispatchToProps)(Episodes);

/**
        <CharactersList /> */