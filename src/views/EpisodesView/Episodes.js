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
  pagination
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
    )
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
    
  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.state;

    if (prevState.filter !== filter) {
      getEpisodesByName(filter)
        .then(res => {
          if (res.results) {
              this.setState({
              episodes: res.results,
              nextPage: res.info.next,
              prevPage: res.info.prev
            })
          } else { toast.error('Nothing found') }
        })
    }
  };
      
  onPaginationClick = link => {
    pagination(link)
     .then(res => {
        if (res.results) {
          this.setState({
            episodes: res.results,
            nextPage: res.info.next,
            prevPage: res.info.prev
          });
          window.scrollTo(0, 0)
        } else {toast.error('Nothing found')}
      }
    );
  }

  render() {
    const { episodes, filter, prevPage, nextPage } = this.state;
    
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
          onClickPrev={() => this.onPaginationClick(prevPage)}
          onClickNext={() => this.onPaginationClick(nextPage)} />
      </Layout>
    );
  };
};

export default Episodes;