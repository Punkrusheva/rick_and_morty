import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.toDos.loading;
const getFilter = state => state.toDos.filter;
const getAllToDos = state => state.toDos.items;
 
const getVisibleToDos = createSelector([getAllToDos, getFilter,], (toDos, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return toDos.filter(toDo =>
      toDo.toLowerCase().includes(normalizedFilter),
    );
 });

const getError = state => state.toDos.error;

export default {
  getLoading,
  getFilter,
  getVisibleToDos,
  getError
};