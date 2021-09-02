import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  getAllEpisodes,
  //getEpisodesByName,
  //pagination
} from '../../services/rick-and-morty-api';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

class Episodes extends Component {
  state = {
    episodes: [],
    nextPage: '',
    prevPage: '',
    name: ''
  }
  componentDidMount() {
    getAllEpisodes()
      .then(res => this.setState({
        episodes: res.results,
        nextPage: res.info.next,
        prevPage: res.info.prev
      }))
      
  }
  /*
  onClick() {
    pagination(this.state.nextPage)
      .then(res => console.log(res)
        //this.setState({ episodes: res.results, nextPage: res.info.next, prevPage: res.info.prev })
        )
  }*/
  render() {
    const { episodes, name, prevPage, nextPage } = this.state;
    console.log()
    return (
      <Layout >
        <Filter
          value={name}
          placeholder='Set name'
          onChange={() => console.log('name')} />
        <EpisodesTable  episodes={episodes}/>
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center', boxShadow: 'none', margin: '10px'  }} variant="contained" color="primary" aria-label="contained primary button group">
          {prevPage && <Button src={prevPage} onClick={() => console.log(prevPage)}>Prev</Button>}
          {nextPage && <Button src={nextPage} onClick={() => console.log(nextPage)}>Next</Button>}
        </ButtonGroup>
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}

export default Episodes;
