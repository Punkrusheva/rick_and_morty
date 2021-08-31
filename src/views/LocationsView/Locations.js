import React from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
//import CharactersList from '../../components/CharactersList/CharactersList'
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

function Locations () {
  /*componentDidMount() {
    this.props.fetchCharacters();
  }*/
 const value = useSelector(charactersSelectors.getFilter);
 
    return (
      <Layout >
        <Filter value={value} placeholder='Set name' onChange='' />
        <Filter value={value} placeholder='Set type' onChange='' />
        <Filter value={value} placeholder='Set dimension' onChange=''/>
        
        <ToastContainer autoClose={2500} />    
      </Layout>
    );
  };

const mapDispatchToProps = dispatch => ({
fetchCharacters: () => dispatch(charactersOperations.fetchCharacters())
})

export default connect(null, mapDispatchToProps)(Locations);

/** 
        <CharactersList /> */