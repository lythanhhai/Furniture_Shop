import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'
import getIndexReducer from '../Reducer/getIndexReducer'
import showModalAddressReducer from '../Reducer/showModalAddressReducer'
import showModalProductReducer from '../Reducer/showModalProductReducer'
import getIdProductReducer from '../Reducer/getIdProductReducer'
import SignInReducer from '../Reducer/SignInReducer'

import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['SignInReducer']
};

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer,
        getIndexReducer: getIndexReducer,
        showModalAddressReducer: showModalAddressReducer,
        showModalProductReducer: showModalProductReducer,
        getIdProductReducer: getIdProductReducer,
        SignInReducer: SignInReducer,
    }
)

const persistedReducer = persistReducer(persistConfig, CombineReducers);

const ConfigureStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
})
export { CombineReducers, ConfigureStore }