import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  //useDispatch,
  //useSelector
} from "react-redux";
import {
  //charactersSelectors,
  //charactersActions,
  //charactersOperations
} from "../../redux/characters";
import {
  getAllCharacters,
  /*getCharactersBySpecies,
  getCharactersByStatus,
  getCharactersByGender,
  getCharactersById,
  getAllEpisodes,
  getEpisodesByName,
  getAllLocation,
  getLocationsByDimension,
  getLocationsByName,
  getLocationsByType*/
} from '../../services/rick-and-morty-api';

class Characters extends Component {
  state = {
    characters: [],
    value: ''
  }
  componentDidMount() {
    //const {characters}  = this.state;
    getAllCharacters()
      .then(res => this.setState({ characters: res.results })
      );
  }

  //const value = useSelector(charactersSelectors.getFilter);
  // console.log(value);
  render() {
    return (
      <Layout >
        <Filter value={this.state.value} placeholder='Set species' onChange={() => console.log('species')} />
        <Filter value={this.state.value} placeholder='Set status' onChange={() => console.log('status')} />
        <Filter value={this.state.value} placeholder='Set gender' onChange={() => console.log('gender')} />
        <CharactersList characters={this.state.characters}/>
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    characters: state.characters.items
  }
}
/*const mapDispatchToProps = dispatch => ({
fetchCharacters: () => dispatch(charactersOperations.fetchCharacters())
})*/

/**onClick={() => dispatch(charactersOperations.deleteContact(id))} */
export default connect(mapStateToProps)(Characters);
