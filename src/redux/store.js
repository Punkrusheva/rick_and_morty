import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { charactersReducer } from "./characters";
import { episodesReducer } from "./episodes";
import { locationsReducer } from "./locations";
import { toDosReducer } from "./toDoList";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig ,authReducer),
        characters: charactersReducer,
        episodes: episodesReducer,
        locations: locationsReducer,
        toDos: toDosReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

/*import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";
import {
    persistStore,
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
        characters: charactersReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };*/

/*import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
//import { phoneBookReducer } from "./phoneBook";
import { charactersReducer } from "./characters";
import {
  persistStore,
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
    logger,
];

const store = configureStore({
    reducer: {
        //contacts: phoneBookReducer, 
        characters: charactersReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };*/