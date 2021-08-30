import React, { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import ContactList from '../../components/ContactList/ContactList';
import Form from '../../components/Form/Form';
//import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import { charactersOperations } from "../../redux/characters";

class MyWatchList extends Component {
  /*componentDidMount() {
    this.props.fetchCharacters();
  }*/

  render() {
    return (
      <Layout >
        <Form/>
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };
};

const mapDispatchToProps = dispatch => ({
fetchCharacters: () => dispatch(charactersOperations.fetchCharacters())
})

export default connect( null, mapDispatchToProps )(MyWatchList);