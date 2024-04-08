import { create } from 'zustand';
import { UserType } from '../Types/types';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface UserState {
  user: UserType | null;
  addUser: (payload: UserType) => void;
  resetUser: () => void;
}

const userState = persist<UserState>(
  (set) => ({
    user: null,
    addUser: (payload) => set(() => ({ user: payload })),
    resetUser: () => set(() => ({ user: null }))
  }),
  {
    name: 'user-storage',
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => state
  }
);

export const useUserStore = create(devtools(userState));
