import { getSessionData } from '../Utils/getSessionData';

/**
 * A custom hook that gets the data from session storage if it exists and sets the cart context with the results.
 */

export const useGetCart = () => {
  return () => {
    const sessionCart = getSessionData('cart');
    if (sessionCart) {
      const parsedCart = JSON.parse(sessionCart);
      return parsedCart;
    }

    console.log('Session cart is undefined.');
  };
};
