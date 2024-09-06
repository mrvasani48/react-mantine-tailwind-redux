// src/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../service/api';
import authReducer from './reducers/auth.reducer';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // Default to localStorage for web
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { REACT_APP_ENCRYPTION_KEY } from '../utils/constant';
import { encryptTransform } from 'redux-persist-transform-encrypt';

// Encryption config
const encryptor = encryptTransform({
  secretKey: REACT_APP_ENCRYPTION_KEY,
  onError: (error) => {
    console.error('Encryption error:', error);
  },
});


// Combine your reducers into a rootReducer
const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Specify which reducers you want to persist
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware)
});

export const persistor = persistStore(store);

export default store;

