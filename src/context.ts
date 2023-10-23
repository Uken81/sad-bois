import React, { Dispatch, SetStateAction, createContext } from 'react';
import { ProductOrder } from './Pages/Merchandise/ProductOrders/AddToCart';

//UserContext
export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface UserContextType {
  user: User | null;
  setUser: Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

//CategoryContext
export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface CategoryContextType {
  selectedCategory: ProductCategories;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}

export const CategoryContext = createContext<CategoryContextType | null>(null);

//CartContext
export interface CartContextType {
  cart: CartType | undefined;
  setCart: React.Dispatch<React.SetStateAction<CartType | undefined>>;
}
export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
