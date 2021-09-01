import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import CharactersList from '../../components/CharactersList/CharactersList'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  //charactersSelectors,
  //charactersActions,
  //charactersOperations 
} from "../../redux/characters";
import { //useDispatch,
  //useSelector
} from "react-redux";
import {
  getAllEpisodes,
  /*getCharactersBySpecies,
  getCharactersByStatus,
  getCharactersByGender,
  getCharactersById,
  
  getEpisodesByName,
  getAllLocation,
  getLocationsByDimension,
  getLocationsByName,
  getLocationsByType*/
} from '../../services/rick-and-morty-api';

class Episodes extends Component {
  state = {
    episodes: [],
    value: ''
  }
  componentDidMount() {
    //const {characters}  = this.state;
    getAllEpisodes()
      .then(res => this.setState({ episodes: res.results })
      );
  }

  render() {
    //const value = useSelector(charactersSelectors.getFilter);

    return (
      <Layout >
        <Filter
          value={this.state.value}
          placeholder='Set name'
          onChange={() => console.log('name')} />
        <CharactersList  characters={this.state.episodes}/>
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.items
  }
}
/*const mapDispatchToProps = dispatch => ({
fetchCharacter: () => dispatch(charactersOperations.fetchCharacter())
})*/

export default connect(mapStateToProps)(Episodes);
