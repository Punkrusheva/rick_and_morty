import React, { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { connect } from "react-redux";
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import { charactersOperations } from "../../redux/characters";

class Characters extends Component {
  /*componentDidMount() {
    this.props.fetchCharacter();
  }*/

  render() {
    return (
      <Layout >
        <Filter value='' placeholder='123' onChange=''/>
        <Filter value='' placeholder='123' onChange=''/>
        <Filter value='' placeholder='123' onChange=''/>
        
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };
};

const mapDispatchToProps = dispatch => ({
fetchCharacter: () => dispatch(charactersOperations.fetchCharacter())
})

export default connect( null, mapDispatchToProps )(Characters);