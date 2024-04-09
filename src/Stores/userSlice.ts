import { StateCreator } from 'zustand';
import { UserType } from '../Types/types';

export interface UserSliceType {
  user: UserType | null;
  addUser: (user: UserType) => void;
  resetUser: () => void;
}

export const createUserSlice: StateCreator<UserSliceType> = (set) => ({
  user: null,
  addUser: (user) => set(() => ({ user: user })),
  resetUser: () => set(() => ({ user: null }))
});
