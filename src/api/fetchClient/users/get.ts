import instance from '../index';
import { User } from '../../types/User';

type getUsersResponse = {
  success: boolean,
  total_pages: number,
  total_users: number,
  count: number,
  page: number
  links: {
    next_url: string,
    prev_url: string
  },
  users: User[]
};

export const get = async ({ page = 1, count = 6 }: { page?: number, count?: number }) => {
  const urlParams = new URLSearchParams();

  urlParams.set('page', page.toString());
  urlParams.set('count', count.toString());

  const response = await instance.get(`users?${urlParams.toString()}`);
  const dataFromServer: getUsersResponse = response.data;

  return {
    users: dataFromServer.users,
    count: dataFromServer.count,
    page: dataFromServer.page,
    total_pages: dataFromServer.total_pages,
  };
};
