import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { ProductOrder } from '../Routes/Merchandise/ProductOrders/AddToCart';

export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export interface CartContextType {
  cart: CartType | null;
  setCart: Dispatch<SetStateAction<CartType | null>>;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartType | null>(null);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
