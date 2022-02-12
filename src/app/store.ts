import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import topicsSlice from '../features/topics/topicsSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
