import { create } from 'zustand';
import { UserSliceType, createUserSlice } from './userSlice';
import { createCartSlice } from './cartSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CartSliceType } from './cartSlice';
import { CategorySliceType, createCategorySlice } from './categorySlice';

type CombinedSlicesType = UserSliceType & CartSliceType & CategorySliceType;
export const useBoundStore = create<CombinedSlicesType>()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
        ...createCategorySlice(...a)
      }),
      { name: 'state-storage', storage: createJSONStorage(() => sessionStorage), partialize: (state) => ({ user: state.user, cart: state.cart }) }
    )
  )
);
