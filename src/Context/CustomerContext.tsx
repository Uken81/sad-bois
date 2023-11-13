import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { ShippingOptionsType } from '../Pages/Merchandise/Checkout/Shipping';

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
  selectedShipping?: ShippingOptionsType;
}

export interface CustomerContextType {
  customer: CustomerType | undefined;
  setCustomer: Dispatch<SetStateAction<CustomerType | undefined>>;
}

export const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

interface CustomerContextProviderProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}: CustomerContextProviderProps) => {
  const [customer, setCustomer] = useState<CustomerType | undefined>(undefined);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
