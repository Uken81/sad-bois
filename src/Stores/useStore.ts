import { create } from 'zustand';
import { UserSliceType, createUserSlice } from './userSlice';
import { createCartSlice } from './cartSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CartSliceType } from './cartSlice';
import { CategorySliceType, createCategorySlice } from './categorySlice';
import { CustomerSliceType, createCustomerSlice } from './customerSlice';
import { withLenses } from '@dhmk/zustand-lens';

export type Store = {};

export const useStore = create<Store>()(withLenses({}));
// type CombinedSlicesType = UserSliceType & CartSliceType & CategorySliceType & CustomerSliceType;
// export const useBoundStore = create<CombinedSlicesType>()(
//   devtools(
//     persist(
//       (...a) => ({
//         ...createUserSlice(...a),
//         ...createCartSlice(...a),
//         ...createCategorySlice(...a),
//         ...createCustomerSlice(...a)
//       }),
//       {
//         name: 'state-storage',
//         storage: createJSONStorage(() => sessionStorage),
//         partialize: (state) => ({ user: state.user, cart: state.cart, customer: state.customer })
//       }
//     )
//   )
// );
