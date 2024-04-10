import { Outlet } from 'react-router';
import { OrderSummary } from '../Store/Checkout/OrderSummary/OrderSummary';
import { OrderSummaryCollapse } from '../Store/Checkout/OrderSummary/OrderSummaryCollapse';

export const CheckoutWrapper = () => {
  return (
    <div className="flex w-screen flex-col md:flex-row">
      <div className="mx-4 md:hidden ">
        <OrderSummaryCollapse />
      </div>
      <div className="mt-5 md:w-1/2">
        <Outlet />
      </div>
      <div className="hidden w-1/2 md:flex md:justify-center ">
        <OrderSummary />
      </div>
    </div>
  );
};
