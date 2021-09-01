import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { episodesActions } from "../episodes";

const items = createReducer([], {
    [episodesActions.fetchEpisodeSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
    [episodesActions.changeFilterByName]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [episodesActions.fetchEpisodeRequest]: () => true,
    [episodesActions.fetchEpisodeSuccess]: () => false,
    [episodesActions.fetchEpisodeError]: () => false,
});

const error = createReducer('', {
    [episodesActions.fetchEpisodeError]: () => 'Ошибка доcтупа к данным!',
    [episodesActions.clearEpisodeError]: () => '',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});