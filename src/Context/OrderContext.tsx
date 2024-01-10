import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { ShippingOptionsType } from '../Routes/Merchandise/Checkout/Shipping/shippingOptions';

interface OrderType {
  customerId: number;
  items: any[];
  shippingMethod: ShippingOptionsType;
  //should below be a string?
  totalPrice: number;
  estimatedDelieveryDate: string;
}

interface OrderContextType {
  order: OrderType | undefined;
  setOrder: Dispatch<SetStateAction<OrderType | undefined>>;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}: OrderContextProviderProps) => {
  const [order, setOrder] = useState<OrderType | undefined>(undefined);

  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};
