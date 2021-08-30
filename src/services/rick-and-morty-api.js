import Axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';
 
const showCharacters = () => {
    return Axios.get(`${baseURL}/character`)
};
const showCharactersBySpecies = (species) => {
    return Axios.get(`${baseURL}/character/?species=${species}`)
};
const showCharactersByStatus = (status) => {
    return Axios.get(`${baseURL}/character/?status=${status}`)
};
const showCharactersByGender = (gender) => {
    return Axios.get(`${baseURL}/character/?gender=${gender}`)
};


/*const showMovieDetails = (movieId) => {
   return Axios.get(`${baseURL}/movie/${movieId}?api_key=${KEY}`);
}

const showCast = (movieId) => {
  return Axios.get(`${baseURL}/movie/${movieId}/credits?api_key=${KEY}`);
}

const showReviews = (movieId) => {
  return Axios.get(`${baseURL}/movie/${movieId}/reviews?api_key=${KEY}`);
}
const showWithQuery = (query) => {
  return Axios.get(`${baseURL}/search/movie?api_key=${KEY}&query=${query}`);
};*/

export default { showCharacters, showCharactersBySpecies, showCharactersByStatus, showCharactersByGender};