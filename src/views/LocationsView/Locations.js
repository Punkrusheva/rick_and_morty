import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import CharactersList from '../../components/CharactersList/CharactersList'
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
  getAllLocations,
  /*getCharactersBySpecies,
  getCharactersByStatus,
  getCharactersByGender,
  getCharactersById,
  getEpisodesByName,
  getLocationsByDimension,
  getLocationsByName,
  getLocationsByType*/
} from '../../services/rick-and-morty-api';

class Locations extends Component {
  state = {
    locations: [],
    value: ''
  }
  componentDidMount() {
    //const {characters}  = this.state;
    getAllLocations()
      .then(res => this.setState({ locations: res.results })
      );
  }

  render() {
    //const value = useSelector(charactersSelectors.getFilter);
 
    return (
      <Layout >
        <Filter value={this.state.value} placeholder='Set name' onChange={() => console.log('name')} />
        <Filter value={this.state.value} placeholder='Set type' onChange={() => console.log('type')} />
        <Filter value={this.state.value} placeholder='Set dimension' onChange={() => console.log('dimension')} />
        <CharactersList  characters={this.state.locations}/>
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    locations: state.locations.items
  }
}
/*const mapDispatchToProps = dispatch => ({
fetchCharacters: () => dispatch(charactersOperations.fetchCharacters())
})*/

export default connect(mapStateToProps)(Locations);
