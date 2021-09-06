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
  //getCharactersById,
  pagination,
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
  }

  componentDidMount() {
    getAllCharacters()
      .then(res => {
        if (res.results) {
          this.setState({
            characters: res.results,
            nextPage: res.info.next,
            prevPage: res.info.prev
          })
        } else {toast.error('Nothing found')}
      }
    );
  }

  changeSpeciesFilter = e => {console.log(e.currentTarget.value);
    this.setState({ filterSpecies: e.currentTarget.value });
  };
  changeStatusFilter = e => {
    this.setState({ filterStatus: e.currentTarget.value });
  };
  changeGenderFilter = e => {
    this.setState({ filterGender: e.currentTarget.value });
  };
    
  componentDidUpdate(prevProps, prevState) {
    const { filterSpecies,
      filterStatus, filterGender
    } = this.state;
    if (prevProps.filterSpecies !== filterSpecies
      && prevProps.filterStatus !== filterStatus
      && prevProps.filterGender !== filterGender
    ) {
      getFilteredCharacters(filterSpecies, filterStatus, filterGender
      )
        .then(res => {
          if (res.results) {
            if (res.results !== prevState.characters) {
              this.setState({
                characters: res.results,
                nextPage: res.info.next,
                prevPage: res.info.prev
              })
            } else {toast.error('Nothing found')}
          }
      })
    }
  };

  render() {
    const { characters, filterSpecies, filterStatus, filterGender, prevPage, nextPage } = this.state;

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
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={console.log(prevPage)}
          onClickNext={console.log(nextPage)} />
      </Layout>
    );
  };
}

export default Characters;
