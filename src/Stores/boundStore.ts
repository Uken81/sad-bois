import { create } from 'zustand';
import { UserSliceType, createUserSlice } from './userSlice';
import { createCartSlice } from './cartSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CartSliceType } from './cartSlice';

type CombinedSlicesType = UserSliceType & CartSliceType;
export const boundState = persist<CombinedSlicesType>(
  (...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a)
  }),
  { name: 'bound-store', storage: createJSONStorage(() => sessionStorage), partialize: (state) => state }
);

export const useBoundStore = create(devtools(boundState));
