import { createAction } from '@reduxjs/toolkit'

const getToDoRequest = createAction('toDos/fetchToDoRequest');
const getToDoSuccess = createAction('toDos/fetchToDoSuccess');
const getToDoError = createAction('toDos/fetchToDoError');

const addToDoRequest = createAction('toDos/addToDoRequest');
const addToDoSuccess = createAction('toDos/addToDoSuccess');
const addToDoError = createAction('toDos/addToDoError');

const deleteToDoRequest = createAction('toDos/deleteToDoRequest');
const deleteToDoSuccess = createAction('toDos/deleteToDoSuccess');
const deleteToDoError = createAction('toDos/deleteToDoError');

const changeFilter = createAction('toDos/changeFilter')

const clearToDoError = createAction('toDos/clearError');

export default {
    getToDoRequest,
    getToDoSuccess,
    getToDoError,
    addToDoRequest,
    addToDoSuccess,
    addToDoError,
    deleteToDoRequest,
    deleteToDoSuccess,
    deleteToDoError,
    changeFilter,
    clearToDoError,
};