import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/users/User.slice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
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
