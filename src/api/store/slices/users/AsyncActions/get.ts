import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userClient from '../../../../fetchClient/users';
import { User } from '../../../../types/User';

export type GetUsersResponse = {
  users: User[],
  count: number,
  current_page: number
  total_pages: number,
  replace: boolean
};

export const getUsers = createAsyncThunk(
  'users/getAll',
  async ({ page, count, replace = false }: { page: number, count: number, replace?: boolean }): Promise<GetUsersResponse> => {
    const response = await userClient.get({ page, count });

    return {
      ...response,
      replace,
      current_page: response.page
    };
  },
);
