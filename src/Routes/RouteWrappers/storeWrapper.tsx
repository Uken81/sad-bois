import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '../Merchandise/Categories';
import { Outlet } from 'react-router';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<StoreCategoryContextType | null>>;
}

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      <Outlet context={{ selectedCategory, setSelectedCategory }} />
    </>
  );
};
