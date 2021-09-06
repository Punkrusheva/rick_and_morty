import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable'
import Filter from '../../components/Filter/Filter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllEpisodes,
  getEpisodesByName,
  //pagination
} from '../../services/rick-and-morty-api';

class Episodes extends Component {
  state = {
    episodes: [],
    filter: '',
    nextPage: '',
    prevPage: '',
  }

  componentDidMount() {
    getAllEpisodes()
      .then(res => {
        if (res.results) {
          this.setState({
            episodes: res.results,
            nextPage: res.info.next,
            prevPage: res.info.prev
          })
        } else { toast.error('Nothing found') }
      }
    );
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
    
  componentDidUpdate(prevState) {
    const { filter,
      //nextPage, prevPage
    } = this.state;
    if (prevState.filter !== filter) {
      getEpisodesByName(filter)
        .then(res => {
          if (res.results !== prevState.episodes) {
            this.setState({
              episodes: res.results,
              nextPage: res.info.next,
              prevPage: res.info.prev
            })
          } else { toast.error('Nothing found') }
        })
    }
   /* if (nextPage !== prevState.nextPage || prevPage !== prevState.prevPage) {
      pagination(link)
        .then(res => {
          if (res.info.next !== prevState.nextPage) {
            console.log(res.info.next);
            this.setState({
              episodes: res.results,
              nextPage: res.info.next,
              prevPage: res.info.prev
            })
          };
        })*/
    };
  
  
  render() {
    const {episodes, filter, prevPage, nextPage } = this.state;
    console.log(episodes);
    return (
      <Layout >
        <Logo text='Episodes'/>
        <Filter
          value={filter}
          placeholder='Set name'
          onChange={this.changeFilter} />
        <EpisodesTable episodes={episodes} />
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={prevPage}
          onClickNext={nextPage} />
      </Layout>
    );
  };
}

export default Episodes;