import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  getAllCharacters,
  //getCharactersBySpecies,
  //getCharactersByStatus,
  //getCharactersByGender,
  //getCharactersById,
  //pagination
} from '../../services/rick-and-morty-api';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

class Characters extends Component {
  state = {
    characters: [],
    species: '',
    status: '',
    gender: '',
    nextPage: '',
    prevPage: '',
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
/*
  onClick() {
    pagination(this.state.nextPage)
      .then(res => console.log(res)
        //this.setState({ episodes: res.results, nextPage: res.info.next, prevPage: res.info.prev })
        )
  }*/
  render() {
    const { characters, species, status, gender, prevPage, nextPage } = this.state;
    
    return (
      <Layout >
        <Filter
          value={species}
          placeholder='Set species'
          onChange={() => console.log('species')} />
        <Filter
          value={status}
          placeholder='Set status'
          onChange={() => console.log('status')} />
        <Filter
          value={gender}
          placeholder='Set gender'
          onChange={() => console.log('gender')} />
        <CharactersList characters={characters} />
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center', boxShadow: 'none', margin: '10px'  }} variant="contained" color="primary" aria-label="contained primary button group">
          {prevPage && <Button src={prevPage} onClick={() => console.log(prevPage)}>Prev</Button>}
          {nextPage && <Button src={nextPage} onClick={() => console.log(nextPage)}>Next</Button>}
        </ButtonGroup> 
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}

export default Characters;
