import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { toDosActions } from ".";

const items = createReducer([], {
    [toDosActions.fetchToDoSuccess]: (_, { payload }) => payload,
    [toDosActions.addToDoSuccess]: (state, { payload }) => [payload, ...state],

    [toDosActions.deleteToDoSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [toDosActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [toDosActions.fetchToDoRequest]: () => true,
    [toDosActions.fetchToDoSuccess]: () => false,
    [toDosActions.fetchToDoError]: () => false,

    [toDosActions.addToDoRequest]: () => true,
    [toDosActions.addToDoSuccess]: () => false,
    [toDosActions.addToDoError]: () => false,
    
    [toDosActions.deleteToDoRequest]: () => true,
    [toDosActions.deleteToDoSuccess]: () => false,
    [toDosActions.deleteToDoError]: () => false,
});

const error = createReducer('', {
    [toDosActions.fetchToDoError]: () => 'Ошибка доcтупа к данным!',
    [toDosActions.addToDoError]: () => 'Ошибка добавления!',
    [toDosActions.deleteToDoError]: () => 'Ошибка удаления!',
    [toDosActions.clearToDoError]: () => '???',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});