import { UserType } from '../Types/types';
import { Lens } from '@dhmk/zustand-lens';
import { Store } from './useStore';

export type UserState = {
  user: UserType | null;
  addUser: (user: UserType) => void;
  resetUser: () => void;
};

export const userState: Lens<UserState, Store> = (set) => ({
  user: null,
  addUser: (user) => set(() => ({ user: user })),
  resetUser: () => set(() => ({ user: null }))
});
