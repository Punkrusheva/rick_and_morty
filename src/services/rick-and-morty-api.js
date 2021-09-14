import { toast } from 'react-toastify';
const baseURL = 'https://rickandmortyapi.com/api';
 
export const getAllCharacters = async () => {
  const res = await fetch(`${baseURL}/character`);
    
  if (!res.ok) {toast.error(`Could not fetch all characters` + `, received ${res.status}`)}
  return await res.json();
};

export const getFilteredCharacters = async (filterSpecies, filterStatus, filterGender
) => {
  const res = await fetch(`${baseURL}/character/?species=${filterSpecies}&status=${filterStatus}&gender=${filterGender}`);
  
  return await res.json()
};

export const getCharactersById = async (id) => {
  const res = await fetch(`${baseURL}/character/${id}`);
  
  if (!res.ok) {
    toast.error(`Could not fetch characters by id` + `, received ${res.status}`)}
  return await res.json()
};


export const getAllEpisodes = async () => {
  const res = await fetch(`${baseURL}/episode`);
    
  if (!res.ok) {toast.error(`Could not fetch all episodes` + `, received ${res.status}`)}
  return await res.json();
};

export const getEpisodesByName = async (name) => {
 const res = await fetch(`${baseURL}/episode/?name=${name}`);
  
  return await res.json()
}


export const getAllLocations = async () => {
  const res = await fetch(`${baseURL}/location`);
    
  if (!res.ok) {toast.error(`Could not fetch all locations` + `, received ${res.status}`)}
  return await res.json();
};

export const getFilteredLocations = async (filterName, filterType, filterDimension
) => {
  const res = await fetch(`${baseURL}/location/?name=${filterName}&type=${filterType}&dimension=${filterDimension}`);

  return await res.json()
};

export const pagination = async(link) => {
  const res = await fetch(link)
  
  if (!res.ok) {toast.error(`Could not fetch` + `, received ${res.status}`)}
  return await res.json();
}