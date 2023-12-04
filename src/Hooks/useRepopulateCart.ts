import { CartContextType } from '../Routes/RouteWrappers/storeWrapper';
import { getSessionData } from '../Utils/getSessionData';
import { useOutletContext } from 'react-router';

/**
 * A custom hook that gets the data from session storage if it exists and sets the cart context with the results.
 */

export const useRepopulateCart = () => {
  const { setCart } = useOutletContext() as CartContextType;

  return () => {
    const sessionCart = getSessionData('cart');
    if (sessionCart) {
      setCart(JSON.parse(sessionCart));
      return;
    }

    console.log('Session cart is undefined.');
  };
};
