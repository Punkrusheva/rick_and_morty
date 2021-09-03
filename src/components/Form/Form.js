import { Component } from 'react';
import shortid from 'shortid';
import styles from './Form.module.css';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
  state = {
    toDoText: '',
  }

  toDoTextId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value})
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.toDoText === '') {
      //toast.error('ToDo empty')
    }
    else {
      this.props.onSubmit(this.state);
    };
    this.reset();
  };
    
  reset = () => {
    this.setState({ toDoText: '' });
  };
    
  render() {
    return (<>  
      <form className={styles.box}
        onSubmit={this.handleSubmit}
        autoComplete="off">
        <label htmlFor={this.toDoTextId} className={styles.toDo}>
          <input
            type='text'
            name='toDoText'
            id={this.toDoTextId}
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

export default Form;