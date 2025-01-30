import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import cartSlice from './cartSlice/slice';

export const store = configureStore({
    reducer: { cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispach = typeof store.dispatch;

export const useAppDispach = () => useDispatch<AppDispach>();
