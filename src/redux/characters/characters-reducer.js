import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { charactersActions } from "../characters";

const items = createReducer([], {
    [charactersActions.fetchCharacterSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
    [charactersActions.changeFilterBySpecies]: (_, { payload }) => payload,
    [charactersActions.changeFilterByStatus]: (_, { payload }) => payload,
    [charactersActions.changeFilterByGender]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [charactersActions.fetchCharacterRequest]: () => true,
    [charactersActions.fetchCharacterSuccess]: () => false,
    [charactersActions.fetchCharacterError]: () => false,
});

const error = createReducer('', {
    [charactersActions.fetchCharacterError]: () => 'Ошибка доcтупа к данным!',
    [charactersActions.clearCharacterError]: () => '',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});