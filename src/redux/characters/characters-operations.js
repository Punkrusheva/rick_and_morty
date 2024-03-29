//import axios from "axios";
import charactersActions from "./characters-actions";

const fetchCharacters = () => async dispatch => {
    dispatch(charactersActions.fetchCharacterRequest());
    
    try {
        const { data } = await fetch.get('/character');
        dispatch(charactersActions.fetchCharacterSuccess(data));
    } catch (error) {
        dispatch(charactersActions.fetchCharacterError(error.massage));
    }
};

export default fetchCharacters;
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