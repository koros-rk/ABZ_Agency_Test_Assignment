import { User } from '../../../types/User';
import { ActionState } from '../../types/ActionState';

export type UserState = {
  users: User[]
  on_page: number
  current_page: number
  next_page: number
  total_pages: number
  statuses: { getStatus: ActionState, postStatus: ActionState }
  startPosition: { page: number, count: number }
  error: boolean
};

export const InitialUserState: UserState = {
  users: [],
  on_page: 6,
  current_page: 1,
  next_page: 2,
  total_pages: 0,
  statuses: { getStatus: ActionState.Idle, postStatus: ActionState.Idle },
  startPosition: { page: 1, count: 6 },
  error: false,
};
