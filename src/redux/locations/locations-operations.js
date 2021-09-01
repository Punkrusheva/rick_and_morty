//import axios from "axios";
import locationsActions from "./locations-actions";

const fetchLocations = () => async dispatch => {
    dispatch(locationsActions.fetchLocationRequest());
    
    try {
        const { data } = await fetch.get('/location');
        dispatch(locationsActions.fetchLocationSuccess(data));
    } catch (error) {
        dispatch(locationsActions.fetchLocationError(error.massage));
    }
};

export default fetchLocations;
/**import axios from 'axios';

export const FETCH_SOMETHING= 'FETCH_SOMETHING;
const ROOT_URL = 'http://api.youapi.com';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${aParamYouMayNeed}`;
    const request = axios.get(url);

    return {
        type: FETCH_SOMETHING,
        payload: request
    };
} */