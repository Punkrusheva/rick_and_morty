import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { phoneBookReducer } from "./index";
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
    logger,
];

const store = configureStore({
    reducer: { contacts:  phoneBookReducer },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});


export default  store ;