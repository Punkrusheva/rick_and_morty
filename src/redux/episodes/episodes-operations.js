//import axios from "axios";
import episodesActions from "./episodes-actions";

const fetchEpisodes = () => async dispatch => {
    dispatch(episodesActions.fetchEpisodeRequest());
    
    try {
        const { data } = await fetch.get('/episode');
        dispatch(episodesActions.fetchEpisodeSuccess(data));
    } catch (error) {
        dispatch(episodesActions.fetchEpisodeError(error.massage));
    }
};

export default fetchEpisodes;
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