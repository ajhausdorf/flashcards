import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import topicsSlice from '../features/topics/topicsSlice';
import quizzesSlice from '../features/quizzes/quizzesSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice
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
