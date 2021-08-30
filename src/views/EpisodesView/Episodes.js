import React, { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import { charactersOperations } from "../../redux/characters";

class Episodes extends Component {
  /*componentDidMount() {
    this.props.fetchCharacter();
  }*/

  render() {
    return (
      <Layout >
        <Filter />
        
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };
};

const mapDispatchToProps = dispatch => ({
fetchCharacter: () => dispatch(charactersOperations.fetchCharacter())
})

export default connect( null, mapDispatchToProps )(Episodes);