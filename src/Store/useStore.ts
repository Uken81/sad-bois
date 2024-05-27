import { create } from 'zustand';
import { UserState, userState } from './userState';
import { lens, withLenses, persistOptions } from '@dhmk/zustand-lens';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { CartState, cartState } from './cartState';
import { CategoryState, categoryState } from './categoryState';
import { CustomerState, customerState } from './customerState';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Store = {
  userState: UserState;
  cartState: CartState;
  categoryState: CategoryState;
  customerState: CustomerState;
};

export const useStore = create<Store>()(
  persist(
    withLenses({
      userState: lens<UserState, Store>(userState),
      cartState: lens<CartState, Store>(cartState),
      categoryState: lens<CategoryState, Store>(categoryState),
      customerState: lens<CustomerState, Store>(customerState)
    }),
    {
      name: 'state-storage',
      storage: createJSONStorage(() => sessionStorage),
      ...persistOptions
    }
  )
);

mountStoreDevtool('Store', useStore);
