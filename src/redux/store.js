import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook";
import { authReducer } from "./auth";
import { charactersReducer } from "./characters";
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
        contacts: phoneBookReducer,
        characters: charactersReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
/*import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { phoneBookReducer } from "./phoneBook/index";
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
    reducer: { contacts:  phoneBookReducer },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storeList = { store, persistor };
export default storeList;*/