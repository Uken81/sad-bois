import { create } from 'zustand';
import { UserState, userState } from './userState';
import { lens, withLenses } from '@dhmk/zustand-lens';
import { CartState, cartState } from './cartState';
import { CategoryState, categoryState } from './categoryState';
import { CustomerState, customerState } from './customerState';

export type Store = {
  userState: UserState;
  cartState: CartState;
  categoryState: CategoryState;
  customerState: CustomerState;
};

export const useStore = create<Store>()(
  withLenses({
    userState: lens<UserState, Store>(userState),
    cartState: lens<CartState, Store>(cartState),
    categoryState: lens<CategoryState, Store>(categoryState),
    customerState: lens<CustomerState, Store>(customerState)
  })
);
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
