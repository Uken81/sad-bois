import { create } from 'zustand';
import { CartType } from '../Types/types';
import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface CartState {
  cart: CartType | null;
  addItem: (items: ProductOrder) => void;
}

const cartState = persist<CartState>(
  (set) => ({
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
      })
  }),
  {
    name: 'cart-storage',
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => state
  }
);

export const useCartStore = create(devtools(cartState));
