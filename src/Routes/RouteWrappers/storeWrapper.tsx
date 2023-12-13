import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Categories } from '../Merchandise/Categories';
import { Outlet, useNavigate, useOutletContext } from 'react-router';
import { CartContextType } from './rootWrapper';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<StoreCategoryContextType | null>>;
}

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');
  const { cart, setCart } = useOutletContext() as CartContextType;
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/store');
  }, [navigate, selectedCategory]);

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      <Outlet context={{ selectedCategory, setSelectedCategory, cart, setCart }} />
    </>
  );
};
