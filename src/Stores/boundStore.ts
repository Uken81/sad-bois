import { create } from 'zustand';
import { UserSlice } from './userSlice';
import { createUserSlice } from './userSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

// export const useBoundStore = create<UserSlice>()(
//   persist(
//     (...a) => ({
//       ...createUserSlice(...a)
//     }),
//     { name: 'bound-store', storage: createJSONStorage(() => sessionStorage), partialize: (state) => state }
//   )
// );
export const boundState = persist<UserSlice>(
  (...a) => ({
    ...createUserSlice(...a)
  }),
  { name: 'bound-store', storage: createJSONStorage(() => sessionStorage), partialize: (state) => state }
);

export const useBoundStore = create(devtools(boundState));
