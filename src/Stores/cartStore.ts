import { create } from 'zustand';
import { CartType } from '../Types/types';
import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';

interface CartState {
  cart: CartType | null;
  addItem: (items: ProductOrder) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  items: [],
  createCart: (payload) => set(() => ({ cart: payload })),
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
}));
