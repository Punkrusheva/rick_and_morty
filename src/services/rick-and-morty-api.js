const baseURL = 'https://rickandmortyapi.com/api';
 
export const getAllCharacters = async () => {
  const res = await fetch(`${baseURL}/character`);
    
  if (!res.ok) {
    throw new Error(`Could not fetch all characters` +
      `, received ${res.status}`);
  }
  return await res.json();
};

export const getFilteredCharacters = async (filterSpecies, filterStatus, filterGender
) => {
  const res = await fetch(`${baseURL}/character/?species=${filterSpecies}&status=${filterStatus}&gender=${filterGender}`);
  if (!res.ok) {
    throw new Error(`Could not fetch characters by filter` +
      `, received ${res.status}`);
  }
  /*if (res.results=== 0) {throw new Error(`There is nothing here` +
      `, received ${res.status}`)}*/
  return await res.json()
};

export const getCharactersById = async (id) => {
  const res = await fetch(`${baseURL}/character/${id}`);
  if (!res.ok) {
    throw new Error(`Could not fetch characters by id` +
      `, received ${res.status}`);
  }
  return await res.json()
};


export const getAllEpisodes = async () => {
  const res = await fetch(`${baseURL}/episode`);
    
  if (!res.ok) {
    throw new Error(`Could not fetch all episodes` +
      `, received ${res.status}`);
  }
  return await res.json();
};
export const getEpisodesByName = async (name) => {
 const res = await fetch(`${baseURL}/episode/?name=${name}`);
  if (!res.ok) {
    throw new Error(`Could not fetch episode by name` +
      `, received ${res.status}`);
  }
  return await res.json()
}


export const getAllLocations = async () => {
  const res = await fetch(`${baseURL}/location`);
    
  if (!res.ok) {
    throw new Error(`Could not fetch all locations` +
      `, received ${res.status}`);
  }
  return await res.json();
};

export const getFilteredLocations = async (filterName, filterType, filterDimension
) => {
  const res = await fetch(`${baseURL}/location/?name=${filterName}&type=${filterType}&dimension=${filterDimension}`);
  if (!res.ok) {
    throw new Error(`Could not fetch location by filter` +
      `, received ${res.status}`);
  }
  /*if (res.results=== 0) {throw new Error(`There is nothing here` +
      `, received ${res.status}`)}*/
  return await res.json()
};

export const pagination = async(link) => {
  const res = await fetch(link)
  if (!res.ok) {
    throw new Error(`Could not fetch` +
      `, received ${res.status}`);
  }
  return await res.json();
}