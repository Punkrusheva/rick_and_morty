import React, { useEffect } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import { useDispatch } from "react-redux";
import ContactList from '../../components/ContactList/ContactList';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import { contactsOperations } from "../../redux/phoneBook";

/* componentDidMount() {
    this.props.fetchContacts();
  }

const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})*/

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
}, [dispatch]);
   
    return (
      <Layout >
        <Form/>
        <Filter />
        
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };