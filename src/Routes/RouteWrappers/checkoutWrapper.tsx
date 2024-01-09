import { Dispatch, SetStateAction, useState } from 'react';
import { ShippingOptionsType, shippingOptions } from '../Merchandise/Checkout/shippingOptions';
import { Outlet, useOutletContext } from 'react-router';
import { OrderSummary } from '../Merchandise/Checkout/OrderSummary';
import { CartContextType } from './rootWrapper';
import { OrderSummaryCollapse } from '../Merchandise/Checkout/OrderSummaryCollapse';

export interface CustomerType {
  email: string;
  emailoffers: boolean;
  firstname: string;
  lastname: string;
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

export const Checkout = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [customer, setCustomer] = useState<CustomerType | null>(null);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOptionsType>(shippingOptions[0]);

  console.log('selectedShipping', selectedShipping);
  return (
    <div className="flex w-screen flex-col md:flex-row">
      <div className="md:hidden md:w-1/2">
        <OrderSummaryCollapse
          selectedShipping={selectedShipping}
          subtotal={cart?.subtotal ?? null}
        />
      </div>
      <div className="mt-5 md:w-1/2">
        <Outlet
          context={{ selectedShipping, setSelectedShipping, customer, setCustomer, cart, setCart }}
        />
      </div>
      <div className="hidden w-1/2 md:block">
        <OrderSummary selectedShipping={selectedShipping} />
      </div>
    </div>
  );
};
