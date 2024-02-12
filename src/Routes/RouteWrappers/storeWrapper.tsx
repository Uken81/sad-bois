import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '../Merchandise/Categories/Categories';
import { Outlet, useOutletContext } from 'react-router';
import { CartContextType } from './rootWrapper';
import { CategoriesCollapse } from '../Merchandise/Categories/CategoriesCollapse';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<ProductCategories | null>>;
}

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');
  const { cart, setCart } = useOutletContext() as CartContextType;

  return (
    <>
      <div className="hidden md:block">
        <Categories setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesCollapse setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="divider" />
      <Outlet context={{ selectedCategory, cart, setCart }} />
    </>
  );
};
