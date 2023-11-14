/**
 * A custom hook that gets the customer details from local storage if it exists and sets the customer context with the results.
 */

import { useContext } from 'react';
import { CustomerContext, CustomerContextType } from '../Context/CustomerContext';

export const useRefreshCustomer = () => {
  const { setCustomer } = useContext(CustomerContext) as CustomerContextType;

  return () => {
    const localCustomer = localStorage.getItem('customer');
    if (localCustomer) {
      setCustomer(JSON.parse(localCustomer));
      return;
    }

    console.log('Local customer is undefined.');
  };
};
