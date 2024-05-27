import { CartType } from '../Types/types';
import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';
import { Store } from './useStore';
import { Lens, persistOptions } from '@dhmk/zustand-lens';

export type CartState = {
  cart: CartType | null;
  addItem: (itemOrder: ProductOrder) => void;
  removeItem: (itemOrder: ProductOrder) => void;
  resetCart: () => void;
};

export const cartState: Lens<CartState, Store> = (set) => ({
  cart: null,
  addItem: (itemOrder: ProductOrder) =>
    set((state) => {
      const { cart } = state;
      const { quantity, price } = itemOrder;

      const subtotal = cart?.subtotal ? cart.subtotal + quantity * price : quantity * price;

      return {
        cart: {
          ...cart,
          items: cart ? [...cart.items, itemOrder] : [itemOrder],
          subtotal: subtotal
        }
      };
    }),
  removeItem: (itemOrder: ProductOrder) =>
    set((state) => {
      const { cart } = state;
      const { orderId, cost } = itemOrder;
      const filteredArr = cart?.items.filter((item) => item.orderId !== orderId) ?? [];

      return {
        cart: {
          ...cart,
          items: filteredArr,
          subtotal: cart?.subtotal ? cart.subtotal - cost : 0
        }
      };
    }),
  resetCart: () => set({ cart: null }),
  ...persistOptions({
    save: (state) => state,
    load: (persistedState) => persistedState
  })
});
