import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { toDoActions } from "../toDoList";

const items = createReducer([], {
    [toDoActions.fetchToDoSuccess]: (_, { payload }) => payload,
    [toDoActions.addToDoSuccess]: (state, { payload }) => [payload, ...state],

    [toDoActions.deleteToDoSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [toDoActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [toDoActions.fetchToDoRequest]: () => true,
    [toDoActions.fetchToDoSuccess]: () => false,
    [toDoActions.fetchToDoError]: () => false,

    [toDoActions.addToDoRequest]: () => true,
    [toDoActions.addToDoSuccess]: () => false,
    [toDoActions.addToDoError]: () => false,
    
    [toDoActions.deleteToDoRequest]: () => true,
    [toDoActions.deleteToDoSuccess]: () => false,
    [toDoActions.deleteToDoError]: () => false,
});

const error = createReducer('', {
    [toDoActions.fetchToDoError]: () => 'Ошибка доcтупа к данным!',
    [toDoActions.addToDoError]: () => 'Ошибка добавления!',
    [toDoActions.deleteToDoError]: () => 'Ошибка удаления!',
    [toDoActions.clearToDoError]: () => '???',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});