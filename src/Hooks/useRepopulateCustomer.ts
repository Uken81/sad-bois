import { useContext } from 'react';
import { CustomerContext, CustomerContextType } from '../Context/CustomerContext';
import { getSessionData } from '../Utils/getSessionData';

/**
 * A custom hook that gets the customer details from session storage if it exists and sets the customer context with the results.
 */

export const useRepopulateCustomer = () => {
  const { setCustomer } = useContext(CustomerContext) as CustomerContextType;

  return () => {
    const sessionCustomer = getSessionData('customer');
    if (sessionCustomer) {
      setCustomer(JSON.parse(sessionCustomer));
      return;
    }

    console.log('Session customer is undefined.');
  };
};
