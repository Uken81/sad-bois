import { getSessionData } from '../Utils/getSessionData';

/**
 * A custom hook that gets the customer details from session storage if it exists and sets the customer context with the results.
 */

export const useGetSessionCustomer = () => {
  return () => {
    const sessionCustomer = getSessionData('customer');
    if (sessionCustomer) {
      const parsedCustomer = JSON.parse(sessionCustomer);
      return parsedCustomer;
    }
  };
};
