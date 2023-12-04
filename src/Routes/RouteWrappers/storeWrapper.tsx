import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '../Merchandise/Categories';
import { Outlet } from 'react-router';
import { ProductOrder } from '../Merchandise/ProductOrders/AddToCart';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<StoreCategoryContextType | null>>;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export interface CartContextType {
  cart: CartType | null;
  setCart: Dispatch<SetStateAction<CartType | null>>;
}

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');
  const [cart, setCart] = useState<CartType | null>(null);

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      <Outlet context={{ selectedCategory, setSelectedCategory, cart, setCart }} />
    </>
  );
};
