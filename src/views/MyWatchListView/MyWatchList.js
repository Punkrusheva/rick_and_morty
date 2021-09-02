import React, { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
//import LocationsTable from '../../components/LocationsTable/LocationsTable';
import Form from '../../components/Form/Form';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";

class MyWatchList extends Component {
  /*componentDidMount() {
    this.props.fetchCharacters();
  }*/

  render() {
    return (
      <Layout >
        <Form/>
        <ToastContainer autoClose={2500} />    
      </Layout>
    );
  };
};

export default MyWatchList;
/**
        <LocationsTable /> */