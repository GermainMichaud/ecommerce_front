import { configureStore } from '@reduxjs/toolkit';

export const createStore = () =>
  configureStore({
    reducer: {},
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore();
