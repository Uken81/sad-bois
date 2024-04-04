import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '../Store/Categories/Categories';
import { Outlet, useOutletContext } from 'react-router';
import { CartContextType } from './RootWrapper';
import { CategoriesCollapse } from '../Store/Categories/CategoriesCollapse';
import { CheckoutBreadcrumbs } from '../Store/Checkout/BreadCrumbs/CheckoutBreadcrumbs';
import { useUpdateCheckoutProgression } from '../../Hooks/useUpdateCheckoutProgression';

export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export interface StoreCategoryContextType {
  selectedCategory: ProductCategories | null;
  setSelectedCategories: Dispatch<SetStateAction<ProductCategories | null>>;
}

export interface CheckoutStageContext {
  checkoutProgression: number;
  setCheckoutProgression: Dispatch<SetStateAction<number>>;
}

export const StoreWrapper: React.FC = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');
  const [checkoutProgression, setCheckoutProgression] = useState(1);
  const updateCheckoutProgression = useUpdateCheckoutProgression();

  updateCheckoutProgression();

  return (
    <>
      <div className="hidden md:block">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesCollapse selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="divider" />
      <CheckoutBreadcrumbs checkoutProgression={checkoutProgression} />
      <Outlet context={{ selectedCategory, cart, setCart, checkoutProgression, setCheckoutProgression }} />
    </>
  );
};
