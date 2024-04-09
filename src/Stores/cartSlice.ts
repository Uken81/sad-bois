import { StateCreator } from 'zustand';
import { CartType } from '../Types/types';
import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';

export interface CartSliceType {
  cart: CartType | null;
  addItem: (items: ProductOrder) => void;
}

export const createCartSlice: StateCreator<CartSliceType> = (set) => ({
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
});
