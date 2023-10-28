import { configureStore } from '@reduxjs/toolkit';
import { studentApi } from './feature/studentSlice';

export const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
})
