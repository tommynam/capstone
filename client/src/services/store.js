import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { getDefaultNormalizer } from '@testing-library/dom';
import { usersApi } from './users';

export const store = configureStore({
    reducer: {
        reducer: {
            [usersApi.reducerPath]: usersApi.reducer,
        }
    },
});

setupListeners(store.dispatch());