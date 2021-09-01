//import { useState } from 'react';
//import { useDispatch, useSelector } from "react-redux";
import { toDosOperations, toDosSelectors } from "../../redux/toDoList";
import shortid from 'shortid';
import styles from './Form.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { connect } from "react-redux";
/*
const mapStateToProps = state => ({ contacts: contactsSelectors.getVisibleContacts(state)});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => { dispatch(contactsOperations.addContact(name, number)) },
});*/
class Form extends Component {
  state = {
    toDoText: '',
  }
  //const dispatch = useDispatch();
  //const [toDoText, setToDoText] = useState('');
  
  toDoInputId = shortid.generate();

  //toDos = useSelector(toDosSelectors.getVisibleToDos);
  //const onSubmit = () => { dispatch(toDoOperations.addToDo())};
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value})
    /*switch (name) {
      case 'toDo':
        setToDoText(value);
        break;
            
      default:
        return toast.error('AAA!!');;
    }*/
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.toDoText === '') {
      toast.error('ToDo empty')
    }
    if (this.props.toDos.items.find(({ toDo }) => this.state.toDoText === toDo.text)) {
      toast.error('ToDo is already exist');
    }
    else {
      //dispatch(toDosOperations.addToDo({ toDoText }));
      this.props.onSubmit(this.state);
    };
    this.reset();
  };
    
  reset = () => {
    this.setState({ toDoText: '' });
  };
    
  render() {
    return (<>
      <CSSTransition
        in={true} appear={true}
        classNames='logo'
        timeout={500}
        unmountOnExit>
        <h1 className={styles.logo}>My watch list</h1>
      </CSSTransition>
          
      <form className={styles.box}
        onSubmit={this.handleSubmit}
        autoComplete="off">
        
        <label htmlFor={this.toDoInputId} className={styles.toDo}>
          <input
            type='text'
            name='toDoText'
            id={this.toDoInputId}
            value={this.state.toDoText}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter your message' />
        </label>
        <button type='submit' className={styles.button}>
          Add todo
        </button>
      </form>
    </>)
  };
};

const mapStateToProps = state => ({ toDos: state.toDos });

const mapDispatchToProps = dispatch => ({
  onSubmit: (toDoText) => { dispatch(toDosOperations.addToDo(toDoText)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);