import { create } from 'zustand';
import { UserType } from '../Types/types';
import { devtools } from 'zustand/middleware';

interface UserState {
  user: UserType | null;
  addUser: (payload: UserType) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    addUser: (payload) => set(() => ({ user: payload })),
    resetUser: () => set(() => ({ user: null }))
  }))
);
