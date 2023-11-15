import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

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

export const CustomerContext = createContext<CustomerContextType | null>(null);

interface CustomerContextProviderProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}: CustomerContextProviderProps) => {
  const [customer, setCustomer] = useState<CustomerType | null>(null);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
