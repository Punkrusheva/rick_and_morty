import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import LocationsTable from '../../components/LocationsTable/LocationsTable'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import {
  getAllLocations,
  //getLocationsByDimension,
  //getLocationsByName,
  //getLocationsByType,
  //pagination
} from '../../services/rick-and-morty-api';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

class Locations extends Component {
  state = {
    locations: [],
    name: '',
    type: '',
    dimension: '',
    nextPage: '',
    prevPage: '',
  }
  componentDidMount() {
    getAllLocations()
      .then(res => this.setState({
        locations: res.results,
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
    const { locations, name, type, dimension, prevPage, nextPage } = this.state;
 
    return (
      <Layout >
        <Filter
          value={name}
          placeholder='Set name'
          onChange={() => console.log('name')} />
        <Filter
          value={type}
          placeholder='Set type'
          onChange={() => console.log('type')} />
        <Filter
          value={dimension}
          placeholder='Set dimension'
          onChange={() => console.log('dimension')} />
        <LocationsTable locations={locations} />
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center', boxShadow: 'none', margin: '10px' }} variant="contained" color="primary" aria-label="contained primary button group">
          {prevPage && <Button src={prevPage} onClick={() => console.log(prevPage)}>Prev</Button>}
          {nextPage && <Button src={nextPage} onClick={() => console.log(nextPage)}>Next</Button>}
        </ButtonGroup>
        <ToastContainer autoClose={2500} />
      </Layout>
    );
  };
}

export default Locations;
