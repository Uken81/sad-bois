import { getSessionData } from '../Utils/getSessionData';
import { useOutletContext } from 'react-router';
import { CustomerContextType } from '../Routes/RouteWrappers/checkoutWrapper';

/**
 * A custom hook that gets the customer details from session storage if it exists and sets the customer context with the results.
 */

export const useRepopulateCustomer = () => {
  const { setCustomer } = useOutletContext() as CustomerContextType;

  return () => {
    const sessionCustomer = getSessionData('customer');
    if (sessionCustomer) {
      setCustomer(JSON.parse(sessionCustomer));
      return;
    }

    console.log('Session customer is undefined.');
  };
};
