import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.episodes.loading;
const getFilter = state => state.episodes.filter;
const getAllEpisodes = state => state.episodes.items;
 
const getVisibleEpisodes = createSelector([getAllEpisodes, getFilter,], (episodes, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return episodes.filter(episode =>
      episode.name.toLowerCase().includes(normalizedFilter),
    );
 });

const getError = state => state.episodes.error;

export default {
  getLoading,
  getFilter,
  getVisibleEpisodes,
  getError
};