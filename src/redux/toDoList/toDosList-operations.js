import axios from "axios";
import toDosActions from "./toDosList-actions";

const fetchToDos = () => async dispatch => {
    dispatch(toDosActions.fetchToDoRequest());
    
    try {
        const { data } = await axios.get('/contacts');
        dispatch(toDosActions.fetchToDoSuccess(data));
    } catch (error) {
        dispatch(toDosActions.fetchToDoError(error.massage));
    }
};

const addToDo = ({ toDoText }) => async dispatch => {
    dispatch(toDosActions.addToDoRequest());

    try {
        const toDos = {toDoText};
        const { data } = await axios.post('/contacts', toDos);
        dispatch(toDosActions.addToDoSuccess(data));
    } catch (error) {
        dispatch(toDosActions.addToDoError(error.massage));
    }
};

const deleteToDo = toDoId => async dispatch => {
    dispatch(toDosActions.deletetoDoRequest());

    try {
       await axios.delete(`/contacts/${toDoId}`);
        dispatch(toDosActions.deletetoDoSuccess(toDoId))
    }  catch (error) {
        dispatch(toDosActions.deletetoDoError(error.massage));
    }
};

export default { fetchToDos, addToDo, deleteToDo};