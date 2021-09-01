import { createAction } from '@reduxjs/toolkit'

const fetchEpisodeRequest = createAction('episodes/fetchEpisodeRequest');
const fetchEpisodeSuccess = createAction('episodes/fetchEpisodeSuccess');
const fetchEpisodeError = createAction('episodes/fetchEpisodeError');

const changeFilterByName = createAction('episodes/changeFilterByName');

export default {
    fetchEpisodeRequest,
    fetchEpisodeSuccess,
    fetchEpisodeError,
    changeFilterByName,
};