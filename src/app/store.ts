import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import topicsSlice from '../features/topics/topicsSlice';
import quizzesSlice from '../features/quizzes/quizzesSlice';
import cardsSlice from '../features/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
    cards: cardsSlice
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
