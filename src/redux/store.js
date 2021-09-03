import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";
import { episodesReducer } from "./episodes";
import { locationsReducer } from "./locations";
import { toDosReducer } from "./toDoList";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
];

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        episodes: episodesReducer,
        locations: locationsReducer,
        toDos: toDosReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
