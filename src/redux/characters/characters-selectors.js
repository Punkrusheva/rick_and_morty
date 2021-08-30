import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.characters.loading;
const getFilter = state => state.characters.filter;
const getAllCharacters = state => state.characters.items;
 
const getVisibleCharacters = createSelector([getAllCharacters, getFilter,], (characters, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return characters.filter(character =>
      character.name.toLowerCase().includes(normalizedFilter),
    );
 });

const getError = state => state.characters.error;

export default {
  getLoading,
  getFilter,
  getVisibleCharacters,
  getError
};