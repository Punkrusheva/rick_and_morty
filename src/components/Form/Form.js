import {
    useState
} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/phoneBook";
//import { contactsOperations, contactsSelectors } from "../../redux/phoneBook";
import shortid from 'shortid';
import styles from './Form.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*
const mapStateToProps = state => ({ contacts: contactsSelectors.getVisibleContacts(state)});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => { dispatch(contactsOperations.addContact(name, number)) },
});*/

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const nameInputId = shortid.generate();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  //const onSubmit = () => { dispatch(contactsOperations.addContact())};
  
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return toast.error('');;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {toast.error('Contact details empty')
    }
    if (contacts.find(contact => name === contact.name)) {
        toast.error('Contact is already exist');
    } 
    else {
      
      dispatch(contactsOperations.addContact({name, number}));
      };
      reset();
  };
    
  const reset = () => {
    setName('');
    setNumber('');
    };
    
    return (<>
        <CSSTransition
            in={true} appear={true}
            classNames='logo'
            timeout={500}
          unmountOnExit>
        <h1 className={styles.logo}>My watch list</h1>
            </CSSTransition>
          
       
      <form className={styles.box}
        onSubmit={handleSubmit}
        autoComplete="off">
        
       <label htmlFor={nameInputId} className={styles.name}>
          <input
            type='text'
            name='name'
            id={nameInputId}
            value={name}
            onChange={handleChange}
            className={styles.input}
            placeholder='Enter your message' />
        </label> 
          <button type='submit' className={styles.button}>
            Add todo
            </button>
        </form>
        </>)
};