import { Dispatch, SetStateAction, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router';
import { CartContextType } from './RootWrapper';
import { CheckoutBreadcrumbs } from '../Store/Checkout/BreadCrumbs/CheckoutBreadcrumbs';
import { CategorySelector, ProductCategory } from '../Store/Categories/CategorySelector';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategory | null;
  setSelectedCategories: Dispatch<SetStateAction<ProductCategory | null>>;
}

export const StoreWrapper: React.FC = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  return (
    <>
      <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="divider" />
      <CheckoutBreadcrumbs />
      <Outlet context={{ selectedCategory, cart, setCart }} />
    </>
  );
};
