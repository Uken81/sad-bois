import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '../Store/Categories/Categories';
import { Outlet, useOutletContext } from 'react-router';
import { CartContextType } from './RootWrapper';
import { CategoriesCollapse } from '../Store/Categories/CategoriesCollapse';
import { CheckoutBreadcrumbs } from '../Store/Checkout/BreadCrumbs/CheckoutBreadcrumbs';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<ProductCategories | null>>;
}

export const StoreWrapper: React.FC = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');

  return (
    <>
      <div className="hidden md:block">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesCollapse selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="divider" />
      <CheckoutBreadcrumbs />
      <Outlet context={{ selectedCategory, cart, setCart }} />
    </>
  );
};
