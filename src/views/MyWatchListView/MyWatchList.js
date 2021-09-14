import { Component } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import Form from '../../components/Form/Form';
import '../../stylesheets/animation.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import WatchList from '../../components/WatchList/WatchList';
import shortid from 'shortid';

export default class MyWatchList extends Component {
  state = {
    toDos: [],
  };

  componentDidMount() {
    const toDos = localStorage.getItem('toDos');
    const parsedToDos = JSON.parse(toDos);
    if (parsedToDos) {
      this.setState({ toDos: parsedToDos });
    }
  };
  
  componentDidUpdate(prevState) {
    if (this.state.toDos !== prevState.toDos) {
      localStorage.setItem('toDos', JSON.stringify(this.state.toDos));
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { toDoText, value } = e.currentTarget;
    this.setState({ [toDoText]: value });
    this.props.onChange(this.state);
  };
  
  formSubmitHandler = ({ toDoText }) => {
    localStorage.getItem('toDos');
    this.toDoId = shortid.generate();
    const toDo = {
      id: this.toDoId,
      toDoText,
    };
    if (toDo.name !== '') {
      if (this.state.toDos.find(toDo => toDo.toDoText === toDoText)) {
        toast.error('ToDo is already exist');
      }
      else {
        this.setState(prevState => {
          return {
            toDos: [toDo, ...prevState.toDos],
          }
        });
      };
    } else {
      toast.error('ToDo details empty');
    };
  };

  removeToDo = toDoId => {
    this.setState(prevState => {
      return {
        toDos: prevState.toDos.filter(({ id }) => id !== toDoId),
      };
    });
  };
  
  render() {
    const { toDos } = this.state;
    
    return (
      <Layout >
        <Logo text='My watch list' />
        <Form onSubmit={this.formSubmitHandler} />
        {toDos.length > 0 &&
          <WatchList
            onRemoveToDo={this.removeToDo}
            toDos={toDos} />
        }
      </Layout>
    );
  };
};