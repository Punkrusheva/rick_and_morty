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

export default  fetchCharacters;