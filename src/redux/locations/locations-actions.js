import { createAction } from '@reduxjs/toolkit'

const fetchLocationRequest = createAction('locations/fetchLocationRequest');
const fetchLocationSuccess = createAction('locations/fetchLocationSuccess');
const fetchLocationError = createAction('locations/fetchLocationError');

const changeFilterByName = createAction('locations/changeFilterByName');
const changeFilterByType = createAction('locations/changeFilterByType');
const changeFilterByDimension = createAction('locations/changeFilterByDimension');

export default {
    fetchLocationRequest,
    fetchLocationSuccess,
    fetchLocationError,
    changeFilterByName,
    changeFilterByType,
    changeFilterByDimension
};