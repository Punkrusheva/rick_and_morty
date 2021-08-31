import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toDoOperations, toDoSelectors } from "../../redux/toDoList";
//import { contactsOperations, contactsSelectors } from "../../redux/phoneBook";
import shortid from 'shortid';
import styles from './Form.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState('');
  
  const toDoInputId = shortid.generate();

  const toDos = useSelector(toDoSelectors.getVisibleToDos);
  //const onSubmit = () => { dispatch(toDoOperations.addToDo())};
  
  const handleChange = e => {
    const { toDo, value } = e.target;

    switch (toDo) {
      case 'toDo':
        setToDo(value);
        break;
            
      default:
        return toast.error('');;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (toDo === '') {toast.error('ToDo empty')
    }
    if (toDos.find(toDo => toDo === toDo.name)) {
        toast.error('ToDo is already exist');
    } 
    else {
      //onSubmit();
      dispatch(toDoOperations.addContact({toDo}));
      };
      reset();
  };
    
  const reset = () => {
    setToDo('');
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
        
       <label htmlFor={toDoInputId} className={styles.toDo}>
          <input
            type='text'
            name='toDo'
            id={toDoInputId}
            value={toDo}
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