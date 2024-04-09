import { StateCreator } from 'zustand';
import { CustomerType, ShippingOptionsType } from '../Types/types';
import { shippingOptions } from '../Routes/Store/Checkout/Shipping/shippingOptions';

export interface CustomerSliceType {
  customer: CustomerType | null;
  updateCustomer: (customer: CustomerType) => void;
  resetCustomer: () => void;
  selectedShipping: ShippingOptionsType;
  updateShipping: (shippingOption: ShippingOptionsType) => void;
}

export const createCustomerSlice: StateCreator<CustomerSliceType> = (set) => ({
  customer: null,
  updateCustomer: (customer) => set({ customer: customer }),
  resetCustomer: () => set({ customer: null }),
  selectedShipping: shippingOptions[0],
  updateShipping: (shippingOption) => set({ selectedShipping: shippingOption })
});
