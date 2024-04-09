import { create } from 'zustand';
import { UserSliceType, createUserSlice } from './userSlice';
import { createCartSlice } from './cartSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CartSliceType } from './cartSlice';

type CombinedSlicesType = UserSliceType & CartSliceType;
export const useBoundStore = create<CombinedSlicesType>()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a)
      }),
      { name: 'user', storage: createJSONStorage(() => sessionStorage), partialize: (state) => ({ user: state.user, cart: state.cart }) }
    )
  )
);
