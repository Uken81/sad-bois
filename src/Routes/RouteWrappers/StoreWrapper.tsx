import { Dispatch, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router';
import { CheckoutBreadcrumbs } from '../Store/Checkout/BreadCrumbs/CheckoutBreadcrumbs';
import { CategorySelector, ProductCategory } from '../Store/Categories/CategorySelector';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategory | null;
  setSelectedCategories: Dispatch<SetStateAction<ProductCategory | null>>;
}

export const StoreWrapper: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  return (
    <>
      <CategorySelector />
      <div className="divider" />
      <CheckoutBreadcrumbs />
      <Outlet context={{ selectedCategory }} />
    </>
  );
};
