import { createAction } from '@reduxjs/toolkit'

const fetchCharacterRequest = createAction('characters/fetchCharacterRequest');
const fetchCharacterSuccess = createAction('characters/fetchCharacterSuccess');
const fetchCharacterError = createAction('characters/fetchCharacterError');

const changeFilterBySpecies = createAction('characters/changeFilterBySpecies');
const changeFilterByStatus = createAction('characters/changeFilterByStatus');
const changeFilterByGender = createAction('characters/changeFilterByGender');

export default {
    fetchCharacterRequest,
    fetchCharacterSuccess,
    fetchCharacterError,
    changeFilterBySpecies,
    changeFilterByStatus,
    changeFilterByGender
};