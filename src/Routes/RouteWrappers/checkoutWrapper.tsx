import { Dispatch, SetStateAction, useState } from 'react';
import { ShippingOptionsType, shippingOptions } from '../Merchandise/Checkout/shippingOptions';
import { Outlet } from 'react-router';
import { OrderSummary } from '../Merchandise/Checkout/OrderSummary';

export interface CustomerType {
  id: string;
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
  const [customer, setCustomer] = useState<CustomerType | null>(null);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOptionsType>(shippingOptions[0]);

  console.log('selectedShipping', selectedShipping);
  return (
    <div className="checkout">
      <Outlet context={{ selectedShipping, setSelectedShipping, customer, setCustomer }} />
      <OrderSummary selectedShipping={selectedShipping} />
    </div>
  );
};
