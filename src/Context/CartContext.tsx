import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { ProductOrder } from '../Pages/Merchandise/ProductOrders/AddToCart';

export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export interface CartContextType {
  cart: CartType | undefined;
  setCart: Dispatch<SetStateAction<CartType | undefined>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartType | undefined>(undefined);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
