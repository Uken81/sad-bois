import { Outlet } from 'react-router';
import { CheckoutBreadcrumbs } from '../Store/Checkout/BreadCrumbs/CheckoutBreadcrumbs';
import { CategorySelector } from '../Store/Categories/CategorySelector';

export const StoreWrapper: React.FC = () => {
  return (
    <>
      <CategorySelector />
      <div className="divider" />
      <CheckoutBreadcrumbs />
      <Outlet />
    </>
  );
};
