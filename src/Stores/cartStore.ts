import { create } from 'zustand';
import { CartType } from '../Types/types';

interface CartState {
  cart: CartType | null;
  createCart: (payload: CartType) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: null,
  createCart: (payload) => set(() => ({ cart: payload }))
}));
