import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllCharacters,
  //getCharactersBySpecies,
  //getCharactersByStatus,
  //getCharactersByGender,
  //getCharactersById,
  //pagination,
  getFilteredCharacters
} from '../../services/rick-and-morty-api';

class Characters extends Component {
  state = {
    characters: [],
    filterSpecies: '',
    filterStatus: '',
    filterGender: '',
    nextPage: '',
    prevPage: '',
    alert: false,
    alertText: '',
  }

  componentDidMount() {
    getAllCharacters()
      .then(res => this.setState({
        characters: res.results,
        nextPage: res.info.next,
        prevPage: res.info.prev
      })
      );
  }

  changeSpeciesFilter = e => {
    this.setState({ filterSpecies: e.currentTarget.value });
  };
  changeStatusFilter = e => {
    this.setState({ filterStatus: e.currentTarget.value });
  };
  changeGenderFilter = e => {
    this.setState({ filterGender: e.currentTarget.value });
  };
    
  componentDidUpdate(prevState) {
    const { filterSpecies, filterStatus, filterGender } = this.state;
    if (prevState.filterSpecies !== filterSpecies &&
      prevState.filterStatus !== filterStatus &&
      prevState.filterGender !== filterGender) {
      getFilteredCharacters(filterSpecies, filterStatus, filterGender)
        .then(res => {console.log(res.results);
          if (res.results.lenth > null) {
            if (res.results !== prevState.characters) {
              
              this.setState({
                characters: res.results,
                nextPage: res.info.next,
                prevPage: res.info.prev
              })
            } else { }
            toast.error('Nothing found');
          }
        });
    }
  }
  /*getVisibleCharacters = () => {
    const { characters, filterSpecies, filterStatus, filterGender } = this.state;
    
    const normalizedSpeciesFilter = filterSpecies.toLowerCase().trim();
    return characters.filter(character =>
      character.species.toLowerCase().includes(normalizedSpeciesFilter)
    );
  };*/

  render() {
    const { characters, filterSpecies, filterStatus, filterGender, prevPage, nextPage } = this.state;
    //const visibleCharacters = this.getVisibleCharacters();
    console.log(filterSpecies, filterStatus, filterGender);
    console.log(characters);
    return (
      <Layout >
        <Logo text='Characters'/>
        <Filter
          value={filterSpecies}
          placeholder='Set species'
          onChange={this.changeSpeciesFilter} />
        <Filter
          value={filterStatus}
          placeholder='Set status'
          onChange={this.changeStatusFilter} />
        <Filter
          value={filterGender}
          placeholder='Set gender'
          onChange={this.changeGenderFilter} />
        {characters.length > 0 &&
          <CharactersList characters={characters} />
        }
        <PaginationGroup prevPage={prevPage} nextPage={nextPage} onClickPrev={() => console.log(prevPage)} onClickNext={() => console.log(nextPage)}/> 
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}

export default Characters;
