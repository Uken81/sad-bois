import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Categories } from '../Merchandise/Categories/Categories';
import { Outlet, useNavigate, useOutletContext } from 'react-router';
import { CartContextType } from './rootWrapper';
import { CategoriesDropdown } from '../Merchandise/Categories/CategoriesDropdown';

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
      <div className="hidden md:block">
        <Categories setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesDropdown setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="divider" />
      <Outlet context={{ selectedCategory, setSelectedCategory, cart, setCart }} />
    </>
  );
};
