import { Dispatch, SetStateAction, useState } from 'react';
import { ShippingOptionsType, shippingOptions } from '../Store/Checkout/Shipping/shippingOptions';
import { Outlet, useOutletContext } from 'react-router';
import { OrderSummary } from '../Store/Checkout/OrderSummary/OrderSummary';
import { CartContextType } from './RootWrapper';
import { OrderSummaryCollapse } from '../Store/Checkout/OrderSummary/OrderSummaryCollapse';
import { CheckoutStageContext } from './StoreWrapper';
import { useUpdateCheckoutProgression } from '../../Hooks/useUpdateCheckoutProgression';

export interface CustomerType {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  apartment: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface CustomerContextType {
  customer: CustomerType | null;
  setCustomer: Dispatch<SetStateAction<CustomerType | null>>;
}

export interface SelectedShippingContextType {
  selectedShipping: ShippingOptionsType;
  setSelectedShipping: Dispatch<SetStateAction<ShippingOptionsType | null>>;
}

export const CheckoutWrapper = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const { checkoutProgression, setCheckoutProgression } = useOutletContext() as CheckoutStageContext;
  const [customer, setCustomer] = useState<CustomerType | null>(null);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOptionsType>(shippingOptions[0]);
  const updateCheckoutProgression = useUpdateCheckoutProgression();

  updateCheckoutProgression();

  const outletContextState = {
    selectedShipping,
    setSelectedShipping,
    customer,
    setCustomer,
    cart,
    setCart,
    checkoutProgression,
    setCheckoutProgression
  };

  return (
    <div className="flex w-screen flex-col md:flex-row">
      <div className="mx-4 md:hidden md:w-1/2">
        <OrderSummaryCollapse selectedShipping={selectedShipping} subtotal={cart?.subtotal ?? null} />
      </div>
      <div className="mt-5 md:w-1/2">
        <Outlet context={outletContextState} />
      </div>
      <div className="mx-4 hidden w-1/2 md:block">
        <OrderSummary selectedShipping={selectedShipping} />
      </div>
    </div>
  );
};
