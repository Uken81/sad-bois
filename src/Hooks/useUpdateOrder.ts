import { useContext } from 'react';
import { OrderContext, OrderContextType, OrderType } from '../Context/OrderContext';

export const useUpdateOrder = () => {
  const { order, setOrder } = useContext(OrderContext) as OrderContextType;
};
