import { CustomerType, ShippingOptionsType } from '../Types/types';
import { shippingOptions } from '../Routes/Store/Checkout/Shipping/shippingOptions';
import { Lens, persistOptions } from '@dhmk/zustand-lens';
import { Store } from './useStore';

export type CustomerState = {
  customer: CustomerType | null;
  updateCustomer: (customer: CustomerType) => void;
  resetCustomer: () => void;
  selectedShipping: ShippingOptionsType;
  updateShipping: (shippingOption: ShippingOptionsType) => void;
  resetShipping: () => void;
};

export const customerState: Lens<CustomerState, Store> = (set) => ({
  customer: null,
  updateCustomer: (customer) => set({ customer: customer }),
  resetCustomer: () => set({ customer: null }),
  selectedShipping: shippingOptions[0],
  updateShipping: (shippingOption) => set({ selectedShipping: shippingOption }),
  resetShipping: () => set({ selectedShipping: shippingOptions[0] }),
  ...persistOptions({
    save: (state) => state,
    load: (persistedState) => persistedState
  })
});
