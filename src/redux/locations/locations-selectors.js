import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.locations.loading;
const getFilter = state => state.locations.filter;
const getAllLocations = state => state.locations.items;
 
const getVisibleLocations = createSelector([getAllLocations, getFilter,], (locations, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return locations.filter(location =>
      location.name.toLowerCase().includes(normalizedFilter),
    );
 });

const getError = state => state.locations.error;

export default {
  getLoading,
  getFilter,
  getVisibleLocations,
  getError
};