const baseURL = 'https://rickandmortyapi.com/api';
 
export const getAllCharacters = async () => {
  const res = await fetch(`${baseURL}/character`);
    
  if (!res.ok) {
    throw new Error(`Could not fetch all characters` +
      `, received ${res.status}`);
  }
  return await res.json();
};

export const getCharactersBySpecies = async (species) => {
  const res = await fetch(`${baseURL}/character/?species=${species}`);
  if (!res.ok) {
    throw new Error(`Could not fetch characters by species` +
      `, received ${res.status}`);
  }
  return await res.json()
};
export const getCharactersByStatus = async (status) => {
 const res = await fetch(`${baseURL}/character/?status=${status}`);
  if (!res.ok) {
    throw new Error(`Could not fetch characters by status` +
      `, received ${res.status}`);
  }
  return await res.json()
};
export const getCharactersByGender = async (gender) => {
  const res = await fetch(`${baseURL}/character/?gender=${gender}`);
  if (!res.ok) {
    throw new Error(`Could not fetch characters by gender` +
      `, received ${res.status}`);
  }
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
export const getLocationsByName = async (name) => {
  const res = await fetch(`${baseURL}/location/?name=${name}`);
  if (!res.ok) {
    throw new Error(`Could not fetch location by name` +
      `, received ${res.status}`);
  }
  return await res.json()
}
export const getLocationsByType = async (type) => {
  const res = await fetch(`${baseURL}/location/?type=${type}`);
  if (!res.ok) {
    throw new Error(`Could not fetch location by type` +
      `, received ${res.status}`);
  }
  return await res.json()
}
export const getLocationsByDimension = async (dimension) => {
  const res = await fetch(`${baseURL}/location/?dimension=${dimension}`);
  if (!res.ok) {
    throw new Error(`Could not fetch location by dimension` +
      `, received ${res.status}`);
  }
  return await res.json()
}

export const pagination = async(link) => {
  const res = await fetch(link)
  if (!res.ok) {
    throw new Error(`Could not fetch all characters` +
      `, received ${res.status}`);
  }
  return await res.json();
}