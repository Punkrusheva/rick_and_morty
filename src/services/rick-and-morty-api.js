export default class RickAndMorty {
  _baseURL = 'https://rickandmortyapi.com/api';
 
  async getAllCharacters(url) {
    const res = await fetch(`${this._baseURL}/character${url}`);
    
    if (!res.ok) {
      throw new Error(`Could not fetch all characters` +
        `, received ${res.status}`);
    }
    return await res.json();
  }
  async getCharactersBySpecies(species) {
     return await this.getAllCharacters(`/?species=${species}`)
  }
  async getCharactersByStatus(status) {
     return await this.getAllCharacters(`/?status=${status}`)
  }
  async getCharactersByGender(gender) {
     return await this.getAllCharacters(`/?gender=${gender}`)
  }
  async getCharactersById(id) {
    return await this.getAllCharacters(`/${id}`)
  }
  /*showCharactersBySpecies = (species) => {
    return Axios.get(`${baseURL}/character/?species=${species}`)
  };
  
  showCharactersByStatus = (status) => {
    return Axios.get(`${baseURL}/character/?status=${status}`)
  };
  showCharactersByGender = (gender) => {
    return Axios.get(`${baseURL}/character/?gender=${gender}`)
  };
*/
};