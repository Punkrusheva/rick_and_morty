import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { locationsActions } from ".";

const items = createReducer([], {
    [locationsActions.fetchLocationSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
    [locationsActions.changeFilterByName]: (_, { payload }) => payload,
    [locationsActions.changeFilterByType]: (_, { payload }) => payload,
    [locationsActions.changeFilterByDimension]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [locationsActions.fetchLocationRequest]: () => true,
    [locationsActions.fetchLocationSuccess]: () => false,
    [locationsActions.fetchLocationError]: () => false,
});

const error = createReducer('', {
    [locationsActions.fetchLocationError]: () => 'Ошибка доcтупа к данным!',
    [locationsActions.clearLocationError]: () => '',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});