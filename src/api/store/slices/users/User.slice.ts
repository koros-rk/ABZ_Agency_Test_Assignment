/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../index';
import { InitialUserState } from './User.state';
import { getUsers, GetUsersResponse } from './AsyncActions/get';
import { ActionState } from '../../types/ActionState';

export const UserSlice = createSlice({
  name: 'users',
  initialState: InitialUserState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.statuses.getStatus = ActionState.Loading;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.statuses.getStatus = ActionState.Failed;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<GetUsersResponse>) => {
      const {
        users, current_page, total_pages, replace
      } = action.payload;

      if (replace) {
        state.users = users;
      }
      else {
        state.users = state.users.concat(users);
      }

      state.statuses.getStatus = ActionState.Idle;
      state.current_page = current_page;
      state.next_page = current_page + 1;
      state.total_pages = total_pages;
    });
  },
});

export const UserSelector = (state: RootState) => state.user;
export const { clearUsers } = UserSlice.actions;
export default UserSlice.reducer;
