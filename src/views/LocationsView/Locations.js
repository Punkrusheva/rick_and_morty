import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import LocationsTable from '../../components/LocationsTable/LocationsTable'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllLocations,
  getFilteredLocations,
  //pagination
} from '../../services/rick-and-morty-api';

class Locations extends Component {
  state = {
    locations: [],
    filterName: '',
    filterType: '',
    filterDimension: '',
    nextPage: '',
    prevPage: '',
  }

  componentDidMount() {
    getAllLocations()
      .then(res => {this.setState({
          locations: res.results,
          nextPage: res.info.next,
          prevPage: res.info.prev
        })
      }
      );
  }
changeNameFilter = e => {
    this.setState({ filterName: e.currentTarget.value });
  };
  changeTypeFilter = e => {
    this.setState({ filterType: e.currentTarget.value });
  };
  changeDimensionFilter = e => {
    this.setState({ filterDimension: e.currentTarget.value });
  };
    
  componentDidUpdate(prevState) {
    const { filterName, 
      filterType, filterDimension
    } = this.state;
    if (prevState.filterName !== filterName
     || prevState.filterType !== filterType
     || prevState.filterDimension !== filterDimension
    ) {
      getFilteredLocations(filterName, 
        filterType,
        filterDimension
      )
        .then(res => {console.log(res.results);
            if (res.results !== prevState.locations) {
              this.setState({
                locations: res.results,
                nextPage: res.info.next,
                prevPage: res.info.prev
              })
            } else {toast.error('Nothing found')}
          });
    }
  }
  pagination = e => {
    console.log(e);
  };
  render() {
    const { locations, filterName, filterType, filterDimension, prevPage, nextPage } = this.state;
    console.log(filterName, filterType, filterDimension);
    
    return (
      <Layout >
        <Logo text='Locations'/>
        <Filter
          value={filterName}
          placeholder='Set name'
          onChange={this.changeNameFilter} />
        <Filter
          value={filterType}
          placeholder='Set type'
          onChange={this.changeTypeFilter} />
        <Filter
          value={filterDimension}
          placeholder='Set dimension'
          onChange={this.changeDimensionFilter} />
        <LocationsTable locations={locations} />
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={console.log(prevPage)}
          onClickNext={console.log(nextPage)} />
      </Layout>
    );
  };
}

export default Locations;
